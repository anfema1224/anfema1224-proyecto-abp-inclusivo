import { LiveTranscriber } from "../../live-transcriber";

export default function TranscriptorPage() {
  return (
    <main className="artilugio-page">
      <nav className="artilugio-topbar" aria-label="Navegación del artilugio">
        <a href="/#artilugios">← Volver a Artilugios Digitales</a>
        <span>Artilugio digital · Accesibilidad auditiva</span>
      </nav>

      <section className="artilugio-hero">
        <p className="eyebrow">Voz Visible</p>
        <h1>Transcriptor accesible en tiempo real</h1>
        <p>
          Prototipo digital diseñado para reducir barreras de acceso a la
          información oral mediante subtítulos generados con inteligencia
          artificial. Permite adaptar la visualización a las necesidades de cada
          usuario y relaciona palabras reconocidas con referencias del
          diccionario de Lengua de Señas Colombiana.
        </p>
      </section>

      <section className="artilugio-workspace" aria-label="Transcriptor accesible">
        <LiveTranscriber />
      </section>
    </main>
  );
}
