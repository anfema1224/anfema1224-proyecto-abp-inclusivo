"use client";

import { useMemo, useState } from "react";
import { lscEntries } from "./lsc-dictionary";

const clean = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const letters = Array.from(
  new Set(lscEntries.map((entry) => clean(entry.word)[0]?.toUpperCase()).filter(Boolean)),
).sort();

export function LscMobileApp() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("Todos");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredEntries = useMemo(() => {
    const normalizedQuery = clean(query.trim());
    return lscEntries.filter((entry) => {
      const matchesLetter =
        letter === "Todos" || clean(entry.word).startsWith(letter.toLowerCase());
      const matchesQuery =
        !normalizedQuery ||
        clean(entry.word).includes(normalizedQuery) ||
        clean(entry.description).includes(normalizedQuery);
      return matchesLetter && matchesQuery;
    });
  }, [letter, query]);

  const activeEntry = filteredEntries[activeIndex] ?? filteredEntries[0] ?? lscEntries[0];

  function selectLetter(nextLetter: string) {
    setLetter(nextLetter);
    setActiveIndex(0);
  }

  function selectEntry(index: number) {
    setActiveIndex(index);
  }

  return (
    <section className="dictionary-app" id="diccionario">
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
            <span>{lscEntries.length} entradas</span>
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
                setActiveIndex(0);
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

          <article className="sign-card">
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
              <p>{activeEntry.description || "Descripción disponible en la fuente original."}</p>
            </div>
          </article>

          <div className="entry-list" aria-label="Entradas encontradas">
            {filteredEntries.slice(0, 36).map((entry, index) => (
              <button
                className={entry === activeEntry ? "selected" : ""}
                key={`${entry.word}-${entry.page}`}
                type="button"
                onClick={() => selectEntry(index)}
              >
                <img src={entry.image} alt="" />
                <span>
                  <strong>{entry.word}</strong>
                  <small>Página {entry.page}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
