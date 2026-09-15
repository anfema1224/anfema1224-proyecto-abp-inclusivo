"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { lscEntries } from "./lsc-dictionary";

const CHUNK_MS = 5000;

const fontOptions = [
  { label: "Arial", value: "Arial, Helvetica, sans-serif" },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
  { label: "Georgia", value: "Georgia, 'Times New Roman', serif" },
  { label: "Monoespaciada", value: "'Courier New', Courier, monospace" },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9ñ\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function LiveTranscriber() {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState("Listo para iniciar");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const [fontSize, setFontSize] = useState(36);
  const [fontFamily, setFontFamily] = useState(fontOptions[0].value);
  const [textColor, setTextColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#111815");
  const [textStyle, setTextStyle] = useState<"normal" | "bold" | "italic">("bold");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const listeningRef = useRef(false);

  useEffect(() => {
    const syncFullscreen = () => {
      setIsFullscreen(document.fullscreenElement === shellRef.current);
    };

    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  const matchedSigns = useMemo(() => {
    const cleanTranscript = ` ${normalize(transcript)} `;
    if (!cleanTranscript.trim()) return [];

    return lscEntries
      .filter((entry) => {
        const term = normalize(entry.word.replace(/-/g, " "));
        return term && cleanTranscript.includes(` ${term} `);
      })
      .slice(-8);
  }, [transcript]);

  async function sendChunk(blob: Blob) {
    if (blob.size < 1000) return;

    setStatus("Transcribiendo…");
    const formData = new FormData();
    formData.append("audio", blob, "segmento.webm");

    try {
      const response = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { text?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "No fue posible transcribir el audio.");
      }

      if (data.text) {
        setTranscript((current) =>
          current ? `${current} ${data.text}` : data.text ?? "",
        );
      }

      if (listeningRef.current) {
        setStatus("Escuchando y generando subtítulos");
      }
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "No fue posible transcribir el audio.",
      );
      setStatus("Error de transcripción");
    }
  }

  function startRecorderCycle(stream: MediaStream) {
    if (!listeningRef.current) return;

    const preferredTypes = [
      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/mp4",
    ];
    const mimeType = preferredTypes.find((type) =>
      MediaRecorder.isTypeSupported(type),
    );

    const recorder = new MediaRecorder(
      stream,
      mimeType ? { mimeType } : undefined,
    );

    recorderRef.current = recorder;
    chunksRef.current = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: recorder.mimeType || "audio/webm",
      });
      void sendChunk(blob);

      if (listeningRef.current && stream.active) {
        startRecorderCycle(stream);
      }
    };

    recorder.start();
    window.setTimeout(() => {
      if (recorder.state === "recording") recorder.stop();
    }, CHUNK_MS);
  }

  async function startListening() {
    setError("");

    if (
      typeof window === "undefined" ||
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setError("Este navegador no permite capturar audio para la transcripción.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      listeningRef.current = true;
      setIsListening(true);
      setStatus("Escuchando y generando subtítulos");
      startRecorderCycle(stream);
    } catch {
      setError(
        "No se pudo acceder al micrófono. Revisa el permiso del navegador.",
      );
      setStatus("Micrófono no disponible");
    }
  }

  function stopListening() {
    listeningRef.current = false;
    setIsListening(false);
    setStatus("Transcripción detenida");

    if (recorderRef.current?.state === "recording") {
      recorderRef.current.stop();
    }

    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }

  async function copyTranscript() {
    if (!transcript) return;
    await navigator.clipboard.writeText(transcript);
    setStatus("Texto copiado");
  }

  function clearTranscript() {
    setTranscript("");
    setError("");
    setStatus(isListening ? "Escuchando y generando subtítulos" : "Listo para iniciar");
  }

  async function toggleFullscreen() {
    if (!shellRef.current) return;

    try {
      if (document.fullscreenElement === shellRef.current) {
        await document.exitFullscreen();
      } else {
        await shellRef.current.requestFullscreen();
      }
    } catch {
      setError("El navegador no permitió ampliar la herramienta a pantalla completa.");
    }
  }

  const captionStyle: CSSProperties = {
    fontSize: `${fontSize}px`,
    fontFamily,
    color: textColor,
    backgroundColor,
    fontWeight: textStyle === "bold" ? 800 : 500,
    fontStyle: textStyle === "italic" ? "italic" : "normal",
  };

  return (
    <div className="transcriber-shell" ref={shellRef}>
      <div className="transcriber-controls">
        <div>
          <span
            className={`live-indicator ${isListening ? "is-live" : ""}`}
            aria-hidden="true"
          />
          <strong>{status}</strong>
          <p>
            El audio se procesa en fragmentos cortos para generar texto casi en
            tiempo real.
          </p>
        </div>

        <div className="transcriber-actions">
          {isListening ? (
            <button className="danger-button" type="button" onClick={stopListening}>
              Detener
            </button>
          ) : (
            <button className="primary-button" type="button" onClick={startListening}>
              Iniciar micrófono
            </button>
          )}
          <button
            className="secondary-button"
            type="button"
            onClick={copyTranscript}
            disabled={!transcript}
          >
            Copiar texto
          </button>
          <button
            className="secondary-button"
            type="button"
            onClick={clearTranscript}
            disabled={!transcript}
          >
            Limpiar
          </button>
          <button className="secondary-button" type="button" onClick={toggleFullscreen}>
            {isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          </button>
        </div>
      </div>

      <div className="caption-preferences" aria-label="Personalización de subtítulos">
        <label>
          <span>Tamaño</span>
          <input
            type="range"
            min="22"
            max="72"
            step="2"
            value={fontSize}
            onChange={(event) => setFontSize(Number(event.target.value))}
          />
          <strong>{fontSize}px</strong>
        </label>

        <label>
          <span>Tipografía</span>
          <select
            value={fontFamily}
            onChange={(event) => setFontFamily(event.target.value)}
          >
            {fontOptions.map((font) => (
              <option key={font.label} value={font.value}>
                {font.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Estilo</span>
          <select
            value={textStyle}
            onChange={(event) =>
              setTextStyle(event.target.value as "normal" | "bold" | "italic")
            }
          >
            <option value="normal">Normal</option>
            <option value="bold">Negrita</option>
            <option value="italic">Cursiva</option>
          </select>
        </label>

        <label className="color-setting">
          <span>Color del texto</span>
          <input
            type="color"
            value={textColor}
            onChange={(event) => setTextColor(event.target.value)}
            aria-label="Color del texto"
          />
        </label>

        <label className="color-setting">
          <span>Color de fondo</span>
          <input
            type="color"
            value={backgroundColor}
            onChange={(event) => setBackgroundColor(event.target.value)}
            aria-label="Color de fondo"
          />
        </label>
      </div>

      {error ? (
        <p className="transcriber-error" role="alert">
          {error}
        </p>
      ) : null}

      <div
        className="caption-screen"
        style={captionStyle}
        role="log"
        aria-live="polite"
        aria-label="Subtítulos generados"
      >
        {transcript || (
          <span style={{ color: textColor, opacity: 0.62 }}>
            Pulsa “Iniciar micrófono” y comienza a hablar. Los subtítulos
            aparecerán aquí.
          </span>
        )}
      </div>

      <div className="sign-match-panel">
        <div className="sign-match-heading">
          <div>
            <p className="eyebrow">Conexión con el diccionario</p>
            <h3>Señas detectadas en la conversación</h3>
          </div>
          <span>{matchedSigns.length} coincidencias</span>
        </div>

        {matchedSigns.length ? (
          <div className="sign-match-grid">
            {matchedSigns.map((entry) => (
              <article key={`${entry.word}-${entry.page}`}>
                <img src={entry.image} alt={`Seña LSC para ${entry.word}`} />
                <div>
                  <strong>{entry.word}</strong>
                  <p>{entry.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="sign-match-empty">
            Cuando una palabra transcrita coincida con una entrada del
            diccionario, su seña aparecerá automáticamente en este espacio.
          </p>
        )}
      </div>
    </div>
  );
}
