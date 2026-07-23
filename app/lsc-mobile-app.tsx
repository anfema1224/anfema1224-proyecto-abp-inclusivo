"use client";

import { useMemo, useState } from "react";
import { lscEntries, type LscEntry } from "./lsc-dictionary";

const clean = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const sortByWord = (first: LscEntry, second: LscEntry) =>
  clean(first.word).localeCompare(clean(second.word), "es");

const featuredEntries: LscEntry[] = [
  {
    word: "Adiós",
    description:
      "Mano en '5' con la palma hacia adelante y la punta de los dedos hacia arriba se mueve hacia los lados.",
    page: 0,
    image: "/lsc-featured/adios.png",
  },
  {
    word: "Hola",
    description:
      "Mano en '5' con la palma hacia adentro. Dirige la mano hacia el interlocutor y eleva ligeramente las cejas.",
    page: 0,
    image: "/lsc-featured/hola.png",
  },
  {
    word: "Gracias",
    description:
      "La mano en '5' toca el mentón y se dirige hacia la palma de la otra mano. Inclina ligeramente la cabeza.",
    page: 0,
    image: "/lsc-featured/gracias.png",
  },
  {
    word: "Por favor",
    description:
      "La mano cerrada, con la palma hacia atrás, describe círculos sobre el pecho.",
    page: 0,
    image: "/lsc-featured/por-favor.png",
  },
  {
    word: "Perdón",
    description:
      "La mano en '5' se desliza hacia adelante sobre la palma de la otra mano. Repite el movimiento.",
    page: 0,
    image: "/lsc-featured/perdon.png",
  },
  {
    word: "Sí",
    description:
      "La mano cerrada, con la palma hacia adelante, se flexiona hacia abajo varias veces.",
    page: 0,
    image: "/lsc-featured/si.png",
  },
  {
    word: "No",
    description: "La mano en '1' se mueve repetidamente de un lado a otro.",
    page: 0,
    image: "/lsc-featured/no.png",
  },
  {
    word: "Ayuda",
    description:
      "La mano cerrada se coloca sobre la palma de la otra mano y luego ambas se mueven hacia adelante.",
    page: 0,
    image: "/lsc-featured/ayuda.png",
  },
  {
    word: "Agua",
    description:
      "La mano en 'A', con la palma hacia adentro, toca el mentón con la punta del pulgar.",
    page: 0,
    image: "/lsc-featured/agua.png",
  },
  {
    word: "Comer",
    description:
      "La mano en 'Q', con la palma hacia atrás, realiza movimientos cortos cerca de la boca.",
    page: 0,
    image: "/lsc-featured/comer.png",
  },
  {
    word: "Comprar",
    description:
      "La mano en 'V' con el borde externo hacia adelante apoya la punta del índice sobre el mentón y luego gira de abajo hacia arriba varias veces.",
    page: 0,
    image: "/lsc-featured/comprar.png",
  },
  {
    word: "Cuánto",
    description:
      "La mano cerrada o en 'Q' con la palma hacia arriba se abre. Puede realizarse con las dos manos.",
    page: 0,
    image: "/lsc-featured/cuanto.png",
  },
  {
    word: "Baño",
    description:
      "La mano en 'B', frente a la cara, gira hacia los lados varias veces.",
    page: 0,
    image: "/lsc-featured/bano.png",
  },
  {
    word: "Buenas noches",
    description:
      "La mano en '5' toca el mentón y se mueve hacia la palma de la mano contraria. Luego las manos se cruzan al tiempo que se cierran.",
    page: 0,
    image: "/lsc-featured/buenas-noches.png",
  },
  {
    word: "Buenas tardes",
    description:
      "La mano en '5' toca el mentón y se mueve hacia la palma de la mano contraria. Luego las manos se colocan una sobre la otra.",
    page: 0,
    image: "/lsc-featured/buenas-tardes.png",
  },
  {
    word: "Buenos días",
    description:
      "La mano en '5' toca el mentón y se mueve hacia la palma de la mano contraria; después los brazos se cruzan y finalmente las manos se abren.",
    page: 0,
    image: "/lsc-featured/buenos-dias.png",
  },
  {
    word: "Cómo está",
    description:
      "Manos en '5', con palmas hacia atrás y puntas de los dedos hacia abajo, giran hasta quedar con las palmas hacia arriba.",
    page: 0,
    image: "/lsc-featured/como-esta.png",
  },
  {
    word: "Cuándo",
    description:
      "Mano en '5' con los dedos juntos golpea suavemente la mejilla varias veces con la yema de los dedos.",
    page: 0,
    image: "/lsc-featured/cuando.png",
  },
  {
    word: "De nada",
    description:
      "La mano en '5' con la palma sobre el pecho se mueve hacia adelante hasta quedar con la palma hacia arriba.",
    page: 0,
    image: "/lsc-featured/de-nada.png",
  },
  {
    word: "Dónde",
    description:
      "Ambas manos en '5' con las palmas hacia arriba realizan movimientos cortos simultáneamente de adentro hacia afuera.",
    page: 0,
    image: "/lsc-featured/donde.png",
  },
  {
    word: "Entender",
    description:
      "La mano cerrada con la palma hacia atrás se ubica al lado de la sien. Luego el índice se desliza sobre la yema del pulgar y la mano avanza en configuración '1'.",
    page: 0,
    image: "/lsc-featured/entender.png",
  },
  {
    word: "Hablar",
    description:
      "La mano ligeramente cóncava, con la palma hacia adentro y a la altura de la boca, une y separa repetidamente la yema del pulgar con la de los demás dedos.",
    page: 0,
    image: "/lsc-featured/hablar.png",
  },
  {
    word: "Hoy",
    description:
      "La mano en '1' con la palma hacia abajo realiza movimientos cortos de arriba hacia abajo.",
    page: 0,
    image: "/lsc-featured/hoy.png",
  },
  {
    word: "Necesitar",
    description:
      "La mano en 'U' con la palma hacia atrás toca con las yemas del índice y del meñique la parte inferior de los ojos, luego se mueve hacia adelante.",
    page: 0,
    image: "/lsc-featured/necesitar.png",
  },
  {
    word: "Poder",
    description:
      "Las manos cerradas con las palmas hacia adelante y a la altura de los hombros se flexionan, al tiempo que los brazos bajan enérgicamente.",
    page: 0,
    image: "/lsc-featured/poder.png",
  },
  {
    word: "Por qué",
    description:
      "La mano en '5' toca con el dedo medio la frente y luego se mueve hacia adelante. Se frunce el ceño y se elevan los hombros.",
    page: 0,
    image: "/lsc-featured/por-que.png",
  },
  {
    word: "Querer",
    description:
      "Las manos en '5', con las palmas hacia atrás y a la altura de los hombros, bajan al tiempo que los dedos se flexionan ligeramente.",
    page: 0,
    image: "/lsc-featured/querer.png",
  },
  {
    word: "Qué",
    description:
      "La mano en '1' desliza la punta del índice sobre la palma de la mano abierta en '5', desde el borde interno hacia el externo.",
    page: 0,
    image: "/lsc-featured/que.png",
  },
  {
    word: "Quién",
    description:
      "Mano en 'B' con el borde externo hacia adelante golpea varias veces el mentón con el borde interno.",
    page: 0,
    image: "/lsc-featured/quien.png",
  },
  {
    word: "Saber",
    description:
      "La mano en '5' con los dedos juntos, excepto el pulgar, y la palma hacia atrás golpea suavemente la frente con los dedos.",
    page: 0,
    image: "/lsc-featured/saber.png",
  },
];

const entries = [
  ...featuredEntries,
  ...lscEntries.filter(
    (entry) =>
      !featuredEntries.some((featured) => clean(featured.word) === clean(entry.word)),
  ),
].sort(sortByWord);

const letters = Array.from(
  new Set(entries.map((entry) => clean(entry.word)[0]?.toUpperCase()).filter(Boolean)),
).sort();

const isFeaturedEntry = (entry: LscEntry) => entry.image.startsWith("/lsc-featured/");

export function LscMobileApp() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("Todos");
  const [activeEntry, setActiveEntry] = useState<LscEntry | null>(null);

  const filteredEntries = useMemo(() => {
    const normalizedQuery = clean(query.trim());
    return entries
      .filter((entry) => {
        const matchesLetter =
          letter === "Todos" || clean(entry.word).startsWith(letter.toLowerCase());
        const matchesQuery =
          !normalizedQuery ||
          clean(entry.word).includes(normalizedQuery) ||
          clean(entry.description).includes(normalizedQuery);
        return matchesLetter && matchesQuery;
      })
      .sort(sortByWord);
  }, [letter, query]);

  function selectLetter(nextLetter: string) {
    setLetter(nextLetter);
    setQuery("");
    setActiveEntry(null);
  }

  return (
    <div className="dictionary-app" id="diccionario">
      <div className="dictionary-shell">
        <div className="dictionary-copy">
          <p className="eyebrow">App móvil</p>
          <h2>Diccionario de Lengua de Señas Colombiana</h2>
          <p>
            Prototipo interactivo para consultar señas por palabra, revisar su
            imagen de referencia y leer la descripción tomada del diccionario
            base.
          </p>
          <div className="dictionary-stats" aria-label="Resumen del diccionario">
            <span>{entries.length} entradas</span>
            <span>{letters.length} letras</span>
            <span>LSC</span>
          </div>
        </div>

        <div className="phone-frame" aria-label="Vista móvil del diccionario">
          <div className="phone-bar">
            <span />
          </div>
          <div className="mobile-toolbar">
            <label htmlFor="lsc-search">Buscar seña</label>
            <input
              id="lsc-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setLetter("Todos");
                setActiveEntry(null);
              }}
              placeholder="Hola, agua, ayuda..."
            />
          </div>
          <div className="letter-strip" aria-label="Filtro por letra">
            {["Todos", ...letters].map((item) => (
              <button
                className={item === letter ? "active" : ""}
                key={item}
                type="button"
                onClick={() => selectLetter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {activeEntry ? (
            isFeaturedEntry(activeEntry) ? (
              <article className="sign-card featured-sign-card">
                <img
                  src={activeEntry.image}
                  alt={`Tarjeta visual en color de la seña ${activeEntry.word}`}
                />
              </article>
            ) : (
              <article className="sign-card rendered-sign-card">
                <header>
                  <h3>{activeEntry.word.toUpperCase()}</h3>
                  <p>Lengua de Señas Colombiana</p>
                  <span />
                </header>
                <div className="sign-photo-wrap">
                  <img
                    src={activeEntry.image}
                    alt={`Referencia visual de la seña ${activeEntry.word}`}
                  />
                </div>
                <div className="sign-description">
                  <span aria-hidden="true">LSC</span>
                  <p>
                    {activeEntry.description ||
                      "Descripción disponible en la fuente original."}
                  </p>
                </div>
              </article>
            )
          ) : null}

          <div className="entry-panel">
            <div className="entry-panel-heading">
              <strong>
                {letter === "Todos" ? "Todas las palabras" : `Letra ${letter}`}
              </strong>
              <span>{filteredEntries.length} resultados</span>
            </div>
            <div className="entry-list" aria-label="Entradas encontradas">
              {filteredEntries.slice(0, 60).map((entry) => (
                <button
                  className={entry === activeEntry ? "selected" : ""}
                  key={`${entry.word}-${entry.page}-${entry.image}`}
                  type="button"
                  onClick={() => setActiveEntry(entry)}
                >
                  <span>
                    <strong>{entry.word}</strong>
                    <small>{entry.page ? `Página ${entry.page}` : "Imagen destacada"}</small>
                  </span>
                </button>
              ))}
              {filteredEntries.length === 0 ? (
                <p className="empty-results">No hay palabras con ese filtro.</p>
              ) : null}
            </div>
          </div>

          {!activeEntry ? (
            <div className="sign-placeholder">
              <strong>Selecciona una palabra</strong>
              <p>Elige una letra y toca una palabra para ver su imagen.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
