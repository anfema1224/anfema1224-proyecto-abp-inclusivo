const phases = [
  {
    title: "Sensibilización",
    text: "Reconocer la diversidad auditiva y analizar barreras del entorno escolar y técnico.",
  },
  {
    title: "Investigación",
    text: "Priorizar una necesidad, consultar referentes y formular requisitos accesibles.",
  },
  {
    title: "Ideación",
    text: "Comparar alternativas, elegir una solución viable y justificar decisiones.",
  },
  {
    title: "Construcción",
    text: "Desarrollar prototipos físicos o digitales con recursos disponibles.",
  },
  {
    title: "Prueba e iteración",
    text: "Comprobar funcionalidad, accesibilidad y usabilidad para mejorar el diseño.",
  },
  {
    title: "Socialización",
    text: "Presentar el producto, comunicar evidencias y reflexionar sobre el impacto social.",
  },
];

const sessions = [
  ["1-2", "Comprender el reto", "Mapa inicial de barreras"],
  ["3-4", "Investigar usuarios y necesidades", "Perfil de usuario y requisitos"],
  ["5-6", "Idear y seleccionar", "Boceto y matriz de decisión"],
  ["7-8", "Planificar la construcción", "Diagrama, materiales y plan de trabajo"],
  ["9-10", "Construir la primera versión", "Prototipo de baja fidelidad"],
  ["11-12", "Integrar accesibilidad", "Versión funcional"],
  ["13-14", "Probar e iterar", "Registro de pruebas y mejoras"],
  ["15-16", "Socializar y evaluar", "Presentación, portafolio y reflexión"],
];

const evaluation = [
  "Rúbrica analítica del prototipo inclusivo",
  "Listas de chequeo de accesibilidad",
  "Bitácora de diseño y portafolio de evidencias",
  "Autoevaluación y coevaluación",
  "Validación por juicio experto con escala Likert",
  "Análisis DAFO de observaciones cualitativas",
];

const artifacts = [
  "Infografía accesible sobre barreras comunicativas",
  "Plantilla de bitácora de diseño",
  "Ficha visual de usuario",
  "Tablero de seguimiento del prototipo",
  "Demostración digital del funcionamiento esperado",
];

const signImages = [
  ["/sign-lengua.png", "Referencia visual de lengua de señas colombiana"],
  ["/sign-oir.png", "Referencia visual para la seña de oír"],
  ["/sign-tener.png", "Referencia visual de comunicación en lengua de señas"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Inicio">
            <span className="brand-mark">ABP</span>
            <span>Inclusión auditiva</span>
          </a>
          <div className="navlinks">
            <a href="#proyecto">Proyecto</a>
            <a href="#metodologia">Metodología</a>
            <a href="#evaluacion">Evaluación</a>
            <a href="#evidencias">Evidencias</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Proyecto de innovación educativa</p>
            <h1>
              Diseño de prototipos tecnológicos para favorecer la inclusión
              educativa de alumnado con discapacidad auditiva
            </h1>
            <p className="lead">
              Portal digital para alojar la propuesta ABP, sus fases,
              instrumentos de evaluación, evidencias y recursos de apoyo para
              estudiantes de media técnica articulada con el SENA.
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
          <div className="cover-visual" aria-label="Portada visual del proyecto">
            <div className="sign-stack">
              <img
                className="sign-main"
                src="/sign-lengua.png"
                alt="Persona realizando una seña de lengua de señas colombiana"
              />
              <img
                className="sign-small sign-small-a"
                src="/sign-oir.png"
                alt="Persona realizando una seña relacionada con oír"
              />
              <img
                className="sign-small sign-small-b"
                src="/sign-tener.png"
                alt="Persona realizando una seña en lengua de señas"
              />
            </div>
            <div className="cover-note">
              <span>Portada para evidencia digital</span>
              <strong>ABP + TIC + DUA</strong>
              <p>
                Imágenes de apoyo tomadas del Diccionario básico de la lengua
                de señas colombiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="proyecto">
        <div className="section-heading">
          <p className="eyebrow">Contexto</p>
          <h2>Una propuesta técnica con sentido social</h2>
          <p>
            El proyecto se diseña para un contexto colombiano de educación
            media técnica articulada con el SENA. Su necesidad surge de
            barreras comunicativas y tecnológicas que pueden limitar la
            participación de estudiantes con discapacidad auditiva en aulas,
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
            <h3>Acceso desde el diseño</h3>
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
          <p className="eyebrow">Metodología</p>
          <h2>Fases del proyecto</h2>
          <p>
            La secuencia mantiene opciones de acceso y expresión coherentes con
            el DUA, mientras organiza el trabajo en ciclos breves de diseño.
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
            La duración prevista es de ocho semanas, con dos sesiones semanales
            de 90 minutos. La distribución puede ajustarse al calendario
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

      <section className="band" id="evaluación">
        <div className="section-heading">
          <p className="eyebrow">Evaluación</p>
          <h2>Aprendizaje, prototipo y validación</h2>
          <p>
            La evaluación combina seguimiento formativo, producto final y juicio
            experto. El análisis cuantitativo se complementa con una lectura
            cualitativa mediante matriz DAFO.
          </p>
        </div>
        <div className="evaluation-grid">
          {evaluation.map((item) => (
            <div className="check-item" key={item}>
              <span aria-hidden="true">{"✓"}</span>
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
            Este espacio aloja la secuencia, rúbricas, fichas y orientaciones
            del proyecto. También funciona como enlace principal para incluir
            en el TFM como evidencia digital de la propuesta de innovación.
          </p>
          <div className="artifact-list">
            {artifacts.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="resource-card text-resource">
          <p className="eyebrow">Referentes visuales</p>
          <h3>Lengua de señas como mediación accesible</h3>
          <p>
            Las imágenes sirven como apoyo para comprender que la accesibilidad
            no se limita a subtítulos o texto escrito: también implica reconocer
            sistemas de comunicación visual y corporal.
          </p>
          <div className="sign-gallery">
            {signImages.map(([src, alt]) => (
              <img key={src} src={src} alt={alt} />
            ))}
          </div>
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
          Usa esta página como evidencia digital del proyecto de innovación:
          contiene el reto, la metodología, el cronograma, la evaluación y los
          recursos que se presentarán al alumnado.
        </p>
      </section>
    </main>
  );
}

