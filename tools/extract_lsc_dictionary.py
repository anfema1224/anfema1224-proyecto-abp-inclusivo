import json
import re
import shutil
import unicodedata
from pathlib import Path

import fitz


PDF_PATH = "E:/Downloads/Diccionario-lengua-de-senas.pdf"
PUBLIC_DIR = Path("public")
OUT_IMG_DIR = PUBLIC_DIR / "lsc"
OUT_DATA = Path("app/lsc-dictionary.ts")

START_PAGE = 57
END_PAGE = 620
MAX_ENTRIES = 160


STOP_HEADINGS = {
    "SER HUMANO",
    "CUERPO HUMANO",
    "FISIOLOGIA",
    "ALIMENTACION",
    "FRUTAS Y VERDURAS",
    "COMIDAS, BEBIDAS Y AFINES",
    "VESTUARIO",
    "ASEO PERSONAL",
    "SALUD",
    "INTELIGENCIA",
    "ESPACIO",
    "TIEMPO",
    "CANTIDAD",
    "CARACTERISTICAS Y SENTIMIENTOS",
    "SOCIEDAD",
    "ENTORNO",
}


def normalize_ascii(text: str) -> str:
    fixed = text.replace("�", "")
    normalized = unicodedata.normalize("NFKD", fixed)
    return "".join(ch for ch in normalized if not unicodedata.combining(ch))


def slugify(text: str) -> str:
    text = normalize_ascii(text).lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text or "entrada"


def clean_line(text: str) -> str:
    text = " ".join(text.strip().split())
    return text.replace(" ,", ",").replace(" .", ".")


def is_entry_title(line: str) -> bool:
    line = clean_line(line)
    if not line or len(line) > 42:
        return False
    if any(ch.isdigit() for ch in line):
        return False
    plain = normalize_ascii(line)
    if plain in STOP_HEADINGS:
        return False
    if plain.endswith(".") or plain.startswith("("):
        return False
    letters = [ch for ch in plain if ch.isalpha()]
    if len(letters) < 2:
        return False
    return plain.upper() == plain


def extract_page_lines(page: fitz.Page) -> list[dict]:
    lines = []
    for block in page.get_text("dict")["blocks"]:
        if block.get("type") != 0:
            continue
        for raw_line in block.get("lines", []):
            spans = raw_line.get("spans", [])
            text = clean_line("".join(span["text"] for span in spans))
            if not text:
                continue
            x0, y0, x1, y1 = raw_line["bbox"]
            if y0 <= 110 or y0 >= 745:
                continue
            first = spans[0]
            lines.append(
                {
                    "text": text,
                    "x0": x0,
                    "x1": x1,
                    "y0": y0,
                    "size": first["size"],
                    "font": first["font"],
                    "flags": first["flags"],
                }
            )
    return lines


def is_title_line(line: dict) -> bool:
    return (
        "Bold" in line["font"]
        and 10.5 <= line["size"] <= 11.5
        and is_entry_title(line["text"])
    )


def extract_page_entries(page: fitz.Page, page_no: int) -> list[dict]:
    all_lines = extract_page_lines(page)
    title_lines = [line for line in all_lines if is_title_line(line)]
    title_lines.sort(key=lambda item: item["y0"])

    entries = []
    for pos, title_line in enumerate(title_lines):
        title = title_line["text"]
        title_y = title_line["y0"]
        title_x = title_line["x0"]
        next_y = title_lines[pos + 1]["y0"] if pos + 1 < len(title_lines) else 744
        side_lines = [
            line
            for line in all_lines
            if title_y < line["y0"] < next_y
            and abs(line["x0"] - title_x) < 28
            and "Bold" not in line["font"]
        ]
        side_lines.sort(key=lambda item: item["y0"])
        lines = [line["text"] for line in side_lines]
        description_lines = []
        for index, line in enumerate(lines):
            if line.startswith(("adj.", "adv.", "n.", "v.", "expr.", "pron.")):
                continue
            if re.match(r"^[A-ZÁÉÍÓÚÑÜ0-9() ]{8,}$", line):
                continue
            if index <= 2 and not line.startswith(("(", "La mano", "Las manos", "Los brazos", "El ")):
                continue
            description_lines.append(line)
        description = clean_line(" ".join(description_lines))
        if not description:
            description = clean_line(" ".join(lines[-3:]))
        if len(description) > 260:
            description = description[:257].rsplit(" ", 1)[0] + "..."

        entries.append(
            {
                "word": clean_line(title),
                "description": description,
                "page": page_no,
                "titleY": title_y,
                "titleX": title_x,
            }
        )
    return entries


def crop_entry_image(page: fitz.Page, entry: dict, output_path: Path) -> None:
    page_rect = page.rect
    image_side_left = entry["titleX"] > 180
    candidates = []
    for item in page.get_image_info(xrefs=True):
        bbox = fitz.Rect(item["bbox"])
        if item.get("width", 0) < 250 or item.get("height", 0) < 250:
            continue
        if bbox.height < 135 or bbox.width < 120:
            continue
        if image_side_left and bbox.x0 > 280:
            continue
        if not image_side_left and bbox.x0 < 280:
            continue
        center_y = (bbox.y0 + bbox.y1) / 2
        distance = abs(center_y - (entry["titleY"] + 45))
        candidates.append((distance, bbox))

    if candidates:
        clip = sorted(candidates, key=lambda item: item[0])[0][1]
        x_pad_left = 4 if clip.x0 > 280 else 0
        x_pad_right = 4 if clip.x0 > 280 else 0
        clip = fitz.Rect(
            max(0, clip.x0 - x_pad_left),
            max(0, clip.y0 - 4),
            min(page_rect.width, clip.x1 + x_pad_right),
            min(page_rect.height, clip.y1 + 4),
        )
    else:
        y0 = max(110, entry["titleY"] - 38)
        y1 = min(page_rect.height - 55, entry["titleY"] + 215)
        if image_side_left:
            clip = fitz.Rect(56, y0, 236, y1)
        else:
            clip = fitz.Rect(338, y0, page_rect.width - 54, y1)
    pix = page.get_pixmap(matrix=fitz.Matrix(2.4, 2.4), alpha=False, clip=clip)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    pix.save(output_path)


def build() -> None:
    doc = fitz.open(PDF_PATH)
    entries = []
    seen = set()
    if OUT_IMG_DIR.exists():
        shutil.rmtree(OUT_IMG_DIR)

    for page_no in range(START_PAGE, min(END_PAGE, len(doc)) + 1):
        page = doc[page_no - 1]
        page_entries = extract_page_entries(page, page_no)
        for i, entry in enumerate(page_entries):
            key = normalize_ascii(entry["word"]).lower()
            if key in seen or len(entries) >= MAX_ENTRIES:
                continue
            seen.add(key)
            slug = slugify(entry["word"])
            img_path = OUT_IMG_DIR / f"{slug}.png"
            crop_entry_image(page, entry, img_path)
            entries.append(
                {
                    "word": entry["word"].title(),
                    "description": entry["description"],
                    "page": entry["page"],
                    "image": f"/lsc/{img_path.name}",
                }
            )
        if len(entries) >= MAX_ENTRIES:
            break

    by_letter = {}
    for entry in entries:
        letter = normalize_ascii(entry["word"])[0].upper()
        by_letter[letter] = by_letter.get(letter, 0) + 1

    content = (
        "export type LscEntry = {\n"
        "  word: string;\n"
        "  description: string;\n"
        "  page: number;\n"
        "  image: string;\n"
        "};\n\n"
        "export const lscEntries: LscEntry[] = "
        + json.dumps(entries, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUT_DATA.write_text(content, encoding="utf-8")
    print(f"entries={len(entries)}")
    print("letters=", by_letter)
    print(f"data={OUT_DATA}")
    print(f"images={OUT_IMG_DIR}")


if __name__ == "__main__":
    build()
