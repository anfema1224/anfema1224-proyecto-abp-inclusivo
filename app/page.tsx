const phases = [
  {
    title: "Sensibilizacion",
    text: "Reconocer la diversidad auditiva y analizar barreras del entorno escolar y tecnico.",
  },
  {
    title: "Investigacion",
    text: "Priorizar una necesidad, consultar referentes y formular requisitos accesibles.",
  },
  {
    title: "Ideacion",
    text: "Comparar alternativas, elegir una solucion viable y justificar decisiones.",
  },
  {
    title: "Construccion",
    text: "Desarrollar prototipos fisicos o digitales con recursos disponibles.",
  },
  {
    title: "Prueba e iteracion",
    text: "Comprobar funcionalidad, accesibilidad y usabilidad para mejorar el diseno.",
  },
  {
    title: "Socializacion",
    text: "Presentar el producto, comunicar evidencias y reflexionar sobre el impacto social.",
  },
];

const sessions = [
  ["1-2", "Comprender el reto", "Mapa inicial de barreras"],
  ["3-4", "Investigar usuarios y necesidades", "Perfil de usuario y requisitos"],
  ["5-6", "Idear y seleccionar", "Boceto y matriz de decision"],
  ["7-8", "Planificar la construccion", "Diagrama, materiales y plan de trabajo"],
  ["9-10", "Construir la primera version", "Prototipo de baja fidelidad"],
  ["11-12", "Integrar accesibilidad", "Version funcional"],
  ["13-14", "Probar e iterar", "Registro de pruebas y mejoras"],
  ["15-16", "Socializar y evaluar", "Presentacion, portafolio y reflexion"],
];

const evaluation = [
  "Rubrica analitica del prototipo inclusivo",
  "Listas de chequeo de accesibilidad",
  "Bitacora de diseno y portafolio de evidencias",
  "Autoevaluacion y coevaluacion",
  "Validacion por juicio experto con escala Likert",
  "Analisis DAFO de observaciones cualitativas",
];

const artifacts = [
  "Infografia accesible sobre barreras comunicativas",
  "Plantilla de bitacora de diseno",
  "Ficha visual de usuario",
  "Tablero de seguimiento del prototipo",
  "Demostracion digital del funcionamiento esperado",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegacion principal">
          <a className="brand" href="#inicio" aria-label="Inicio">
            <span className="brand-mark">ABP</span>
            <span>Inclusion auditiva</span>
          </a>
          <div className="navlinks">
            <a href="#proyecto">Proyecto</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#evaluacion">Evaluacion</a>
            <a href="#evidencias">Evidencias</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Proyecto de innovacion educativa</p>
            <h1>
              Diseno de prototipos tecnologicos para favorecer la inclusion
              educativa de alumnado con discapacidad auditiva
            </h1>
            <p className="lead">
              Portal digital para alojar la propuesta ABP, sus fases,
              instrumentos de evaluacion, evidencias y recursos de apoyo para
              estudiantes de media tecnica articulada con el SENA.
            </p>
            <div className="actions">
              <a className="primary-button" href="#metodologia">
                Ver secuencia
              </a>
              <a
                className="secondary-button"
                href="/Proyecto_ABP_ANDRES_FELIPE_MARIN_ajustado_resaltado.docx"
                download
              >
                Descargar documento
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Resumen del proyecto">
            <img
              src="/cronograma.png"
              alt="Vista previa del cronograma del proyecto de innovacion"
            />
            <div className="panel-caption">
              <strong>8 semanas</strong>
              <span>16 sesiones para investigar, construir, probar y socializar.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="proyecto">
        <div className="section-heading">
          <p className="eyebrow">Contexto</p>
          <h2>Una propuesta tecnica con sentido social</h2>
          <p>
            El proyecto se disena para un contexto colombiano de educacion
            media tecnica articulada con el SENA. Su necesidad surge de
            barreras comunicativas y tecnologicas que pueden limitar la
            participacion de estudiantes con discapacidad auditiva en aulas,
            talleres y laboratorios.
          </p>
        </div>
        <div className="feature-grid">
          <article>
            <span className="metric">ABP</span>
            <h3>Aprendizaje activo</h3>
            <p>
              El alumnado investiga una necesidad real, toma decisiones,
              construye un producto y comunica sus resultados.
            </p>
          </article>
          <article>
            <span className="metric">DUA</span>
            <h3>Acceso desde el diseno</h3>
            <p>
              Las instrucciones, recursos y evidencias contemplan formatos
              visuales, escritos, demostrativos y audiovisuales subtitulados.
            </p>
          </article>
          <article>
            <span className="metric">TIC</span>
            <h3>Prototipos inclusivos</h3>
            <p>
              Arduino, sensores, LED, vibradores, interfaces digitales o
              herramientas web se usan para transformar barreras en soluciones.
            </p>
          </article>
        </div>
      </section>

      <section className="band" id="metodologia">
        <div className="section-heading">
          <p className="eyebrow">Metodologia</p>
          <h2>Fases del proyecto</h2>
          <p>
            La secuencia mantiene opciones de acceso y expresion coherentes con
            el DUA, mientras organiza el trabajo en ciclos breves de diseno.
          </p>
        </div>
        <div className="phase-grid">
          {phases.map((phase, index) => (
            <article className="phase" key={phase.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Cronograma</p>
          <h2>16 sesiones de trabajo</h2>
          <p>
            La duracion prevista es de ocho semanas, con dos sesiones semanales
            de 90 minutos. La distribucion puede ajustarse al calendario
            institucional y a la disponibilidad del taller.
          </p>
        </div>
        <div className="session-list" aria-label="Sesiones del proyecto">
          {sessions.map(([weeks, title, product]) => (
            <div className="session" key={weeks}>
              <span>{weeks}</span>
              <strong>{title}</strong>
              <p>{product}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band" id="evaluacion">
        <div className="section-heading">
          <p className="eyebrow">Evaluacion</p>
          <h2>Aprendizaje, prototipo y validacion</h2>
          <p>
            La evaluacion combina seguimiento formativo, producto final y juicio
            experto. El analisis cuantitativo se complementa con una lectura
            cualitativa mediante matriz DAFO.
          </p>
        </div>
        <div className="evaluation-grid">
          {evaluation.map((item) => (
            <div className="check-item" key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section evidence" id="evidencias">
        <div className="evidence-copy">
          <p className="eyebrow">Evidencias digitales</p>
          <h2>Recursos para presentar el proyecto al alumnado</h2>
          <p>
            Este espacio puede alojar la secuencia, rubricas, fichas,
            orientaciones y capturas del proceso. Tambien funciona como enlace
            principal para incluir en el TFM.
          </p>
          <div className="artifact-list">
            {artifacts.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="resource-card">
          <img
            src="/conclusiones.png"
            alt="Vista previa de conclusiones y cumplimiento de objetivos"
          />
          <a
            className="primary-button full"
            href="/Proyecto_ABP_ANDRES_FELIPE_MARIN_ajustado_resaltado.docx"
            download
          >
            Descargar TFM ajustado
          </a>
        </div>
      </section>

      <section className="cta">
        <p className="eyebrow">Enlace para el documento</p>
        <h2>Portal del proyecto ABP inclusivo</h2>
        <p>
          Usa esta pagina como evidencia digital del proyecto de innovacion:
          contiene el reto, la metodologia, el cronograma, la evaluacion y los
          recursos que se presentaran al alumnado.
        </p>
      </section>
    </main>
  );
}
