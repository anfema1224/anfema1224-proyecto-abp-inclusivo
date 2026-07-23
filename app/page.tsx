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

import { LscMobileApp } from "./lsc-mobile-app";

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

const challengeCards = [
  {
    title: "Producto final",
    text: "Prototipo funcional de baja o media fidelidad, documentación del proceso y demostración pública accesible.",
  },
  {
    title: "Trabajo en equipos",
    text: "Roles rotativos de investigación, diseño, electrónica o programación, documentación y pruebas de accesibilidad.",
  },
  {
    title: "Ejemplos de solución",
    text: "Alerta luminosa, dispositivo vibratorio, tablero visual, interfaz web accesible o señalización multimodal.",
  },
];

const evaluationRows = [
  ["Pertinencia de la solución", "20 %", "Mapa de barreras y justificación"],
  ["Funcionamiento y seguridad", "25 %", "Lista de comprobación y demostración"],
  ["Accesibilidad y usabilidad", "25 %", "Prueba entre pares y rúbrica"],
  ["Colaboración y documentación", "15 %", "Bitácora, autoevaluación y coevaluación"],
  ["Comunicación y argumentación", "15 %", "Presentación y portafolio"],
];

const accessibilityChecks = [
  "La información sonora tiene una alternativa visual, escrita o vibratoria.",
  "Los textos son claros, breves y legibles.",
  "El contraste y el tamaño de los elementos permiten una lectura cómoda.",
  "Las instrucciones se presentan de manera oral, escrita, visual y demostrativa.",
  "El usuario participa en las pruebas y puede proponer mejoras.",
];

const resourceLinks = [
  {
    title: "INSOR Educativo",
    description:
      "Diccionario y repositorio virtual bilingüe de Lengua de Señas Colombiana.",
    url: "https://educativo.insor.gov.co/",
    tag: "LSC",
  },
  {
    title: "Vocabulario LSC",
    description:
      "Glosario educativo para reconocer y practicar vocabulario en Lengua de Señas Colombiana.",
    url: "https://educativo.insor.gov.co/repoclasesvivo/vocabulario-lsc/",
    tag: "Glosario",
  },
  {
    title: "Inclusión educativa",
    description:
      "Orientaciones del Ministerio de Educación Nacional sobre atención a población con discapacidad.",
    url: "https://www.mineducacion.gov.co/1621/article-141881.html",
    tag: "MEN",
  },
  {
    title: "SENA y discapacidad",
    description:
      "Información institucional sobre atención a poblaciones vulnerables y personas con discapacidad.",
    url: "https://www.sena.edu.co/es-co/trabajo/paginas/default.aspx",
    tag: "SENA",
  },
  {
    title: "Pautas DUA",
    description:
      "Guías CAST para aplicar Diseño Universal para el Aprendizaje en experiencias educativas.",
    url: "https://udlguidelines.cast.org/",
    tag: "DUA",
  },
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
            <a href="#diccionario">Diccionario</a>
            <a href="#reto">Reto</a>
            <a href="#metodologia">Metodología</a>
            <a href="#evaluacion">Evaluación</a>
            <a href="#accesibilidad">Accesibilidad</a>
            <a href="#evidencias">Evidencias</a>
            <a href="#recursos">Recursos</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Proyecto de innovación educativa</p>
            <h1>
              Diseño de prototipos tecnológicos para favorecer la inclusión
              educativa de estudiantes con discapacidad auditiva
            </h1>
            <p className="lead">
              Portal digital que reúne la ruta ABP, el cronograma, la evaluación
              y un diccionario móvil de Lengua de Señas Colombiana para apoyar
              experiencias accesibles en media técnica articulada con el SENA.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="reto">
        <div className="section-heading">
          <p className="eyebrow">Reto de aprendizaje</p>
          <h2>Una barrera puede convertirse en una solución</h2>
          <p>
            El proyecto se diseña para un contexto colombiano de educación
            media técnica articulada con el SENA. Su necesidad surge de
            barreras comunicativas y tecnológicas que pueden limitar la
            participación de estudiantes con discapacidad auditiva en aulas,
            talleres y laboratorios.
          </p>
        </div>
        <div className="challenge-notice">
          <strong>
            ¿Cómo diseñar un prototipo tecnológico viable que transforme una
            barrera comunicativa o sonora en una oportunidad de participación?
          </strong>
        </div>
        <div className="feature-grid challenge-grid">
          {challengeCards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <figure className="wide-photo">
          <img
            src="/ambiente-aula.png"
            alt="Aula técnica inclusiva con estudiantes colaborando en prototipos accesibles"
          />
          <figcaption>
            Ambiente de trabajo colaborativo para identificar barreras,
            comunicar ideas y construir soluciones tecnológicas inclusivas.
          </figcaption>
        </figure>
      </section>

      <section className="section" id="proyecto">
        <div className="section-heading">
          <p className="eyebrow">Fundamentos</p>
          <h2>Una propuesta técnica con sentido social</h2>
          <p>
            La propuesta articula metodología activa, accesibilidad e
            innovación tecnológica para que los estudiantes aprendan construyendo
            soluciones con impacto en su comunidad educativa.
          </p>
        </div>
        <div className="feature-grid">
          <article>
            <span className="metric">ABP</span>
            <h3>Aprendizaje activo</h3>
            <p>
              Los estudiantes investigan una necesidad real, toman decisiones,
              construyen un producto y comunican sus resultados.
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
        <div className="process-visual">
          <img
            src="/ambiente-prototipo.png"
            alt="Estudiantes desarrollando un prototipo con componentes electrónicos y apoyos visuales"
          />
          <div>
            <p className="eyebrow">Prototipado</p>
            <h3>De la idea al dispositivo accesible</h3>
            <p>
              La escena refuerza el enfoque práctico del ABP: observar,
              conectar, probar y mejorar con evidencias visibles para todo el
              equipo.
            </p>
          </div>
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

      <section className="band" id="evaluacion">
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
        <div className="evaluation-table-wrap">
          <table className="evaluation-table">
            <thead>
              <tr>
                <th>Criterio</th>
                <th>Peso</th>
                <th>Evidencia principal</th>
              </tr>
            </thead>
            <tbody>
              {evaluationRows.map(([criterion, weight, evidence]) => (
                <tr key={criterion}>
                  <td>{criterion}</td>
                  <td>{weight}</td>
                  <td>{evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section dictionary-section" id="prototipos">
        <div className="section-heading">
          <p className="eyebrow">Prototipos digitales</p>
          <h2>Diccionario móvil de Lengua de Señas Colombiana</h2>
          <p>
            Este prototipo permite consultar señas por palabra, filtrar por
            letra y revisar imágenes de referencia para apoyar la comunicación
            visual en el aula.
          </p>
          <div className="dictionary-quick-facts" aria-label="Resumen del diccionario móvil">
            <span>42 señas ilustradas a color</span>
            <span>Búsqueda por palabra</span>
            <span>Filtro por letra</span>
          </div>
        </div>
        <LscMobileApp />
      </section>

      <section className="band" id="accesibilidad">
        <div className="section-heading">
          <p className="eyebrow">Accesibilidad</p>
          <h2>Lista rápida de revisión</h2>
          <p>
            Antes de socializar el prototipo, cada equipo revisa si su solución
            elimina barreras reales y ofrece alternativas de acceso claras.
          </p>
        </div>
        <ul className="accessibility-list">
          {accessibilityChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section evidence" id="evidencias">
        <div className="evidence-copy">
          <p className="eyebrow">Evidencias digitales</p>
          <h2>Recursos para presentar el proyecto a estudiantes</h2>
          <p>
            Este espacio aloja la secuencia, rúbricas, fichas y orientaciones
            del proyecto. También funciona como enlace principal para incluir
            en el TFM como evidencia digital de la propuesta de innovación.
          </p>
          <a className="secondary-button inline-action" href="#prototipos">
            Ver prototipos de apoyo
          </a>
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

      <section className="band resources-section" id="recursos">
        <div className="section-heading">
          <p className="eyebrow">Recursos de interés</p>
          <h2>Enlaces para ampliar el proyecto</h2>
          <p>
            Sitios institucionales y pedagógicos para fortalecer la
            fundamentación sobre Lengua de Señas Colombiana, inclusión,
            accesibilidad y Diseño Universal para el Aprendizaje.
          </p>
        </div>
        <div className="resource-link-grid">
          {resourceLinks.map((resource) => (
            <a
              className="resource-link-card"
              href={resource.url}
              key={resource.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{resource.tag}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

