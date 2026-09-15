import { LscMobileApp } from "../../lsc-mobile-app";

export default function DiccionarioPage() {
  return (
    <main className="artilugio-page dictionary-artilugio-page">
      <nav className="artilugio-topbar" aria-label="Navegación del artilugio">
        <a href="/#artilugios">← Volver a Artilugios Digitales</a>
        <span>Artilugio digital · Comunicación visual</span>
      </nav>

      <section className="artilugio-hero">
        <p className="eyebrow">Diccionario Visual LSC</p>
        <h1>Consulta accesible de Lengua de Señas Colombiana</h1>
        <p>
          Prototipo digital orientado a favorecer la comunicación visual, la
          autonomía y la participación de estudiantes con discapacidad auditiva.
          Permite localizar vocabulario, consultar referencias gráficas y
          complementar la información oral o escrita con un apoyo visual.
        </p>
      </section>

      <section className="artilugio-workspace dictionary-workspace" aria-label="Diccionario LSC">
        <LscMobileApp />
      </section>
    </main>
  );
}
