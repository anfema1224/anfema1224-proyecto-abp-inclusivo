const phases = [
  {
    title: "Sensibilización y reto",
    text: "Reconocer barreras comunicativas y comprender la función social del diccionario digital de LSC.",
  },
  {
    title: "Investigación y delimitación",
    text: "Identificar usuarios, seleccionar categorías, consultar fuentes confiables y definir vocabulario.",
  },
  {
    title: "Diseño y planificación",
    text: "Construir la plantilla de entradas, el mapa del sitio, los roles y el cronograma de producción.",
  },
  {
    title: "Producción e integración",
    text: "Elaborar definiciones, recursos audiovisuales y fichas para integrarlas en la plataforma.",
  },
  {
    title: "Prueba, revisión e iteración",
    text: "Comprobar navegación, accesibilidad, claridad, fuentes y consistencia para registrar mejoras.",
  },
  {
    title: "Socialización y reflexión",
    text: "Presentar el diccionario, justificar decisiones, evaluar el proceso y proyectar actualizaciones.",
  },
];

import { LscMobileApp } from "./lsc-mobile-app";

const sessions = [
  ["1", "Comprender el reto de comunicación", "Mapa inicial de barreras y banco preliminar de vocabulario"],
  ["2", "Reconocer la LSC y una entrada clara", "Criterios de calidad y estructura preliminar"],
  ["3", "Investigar usuarios y situaciones de uso", "Perfil de usuario y necesidades verificables"],
  ["4", "Definir alcance, categorías y requisitos", "Documento de alcance y primer punto de autoevaluación"],
  ["5", "Buscar y registrar fuentes confiables", "Repositorio inicial de fuentes y fichas"],
  ["6", "Seleccionar el vocabulario definitivo", "Listado de 30 a 40 entradas codificadas"],
  ["7", "Diseñar la plantilla de las entradas", "Plantilla definitiva y guía de estilo"],
  ["8", "Planificar roles, archivos y cronograma", "Plan de trabajo y segundo punto de autoevaluación"],
  ["9", "Preparar la producción audiovisual", "Protocolo audiovisual, guion técnico y video de prueba"],
  ["10", "Producir el primer lote de entradas", "Primer lote y 50 % del contenido de la categoría"],
  ["11", "Completar y corregir las entradas", "Totalidad de entradas preliminares y registro de cambios"],
  ["12", "Integrar el diccionario en la plataforma", "Primera versión navegable y tercer punto de autoevaluación"],
  ["13", "Realizar pruebas de usabilidad y accesibilidad", "Informe de usabilidad y lista priorizada de mejoras"],
  ["14", "Revisar la calidad de las señas y fuentes", "Registro de revisión y entradas corregidas o marcadas"],
  ["15", "Mejorar el producto y preparar socialización", "Versión final candidata, guion y portafolio organizado"],
  ["16", "Socializar, evaluar y reflexionar", "Diccionario final, presentación pública y reflexión metacognitiva"],
];

const evaluation = [
  "Evaluación diagnóstica al activar saberes previos en cada sesión",
  "Seguimiento formativo con bitácora, portafolio y listas de verificación",
  "Pruebas entre pares de navegación, claridad, fuentes y accesibilidad",
  "Autoevaluación reflexiva en las sesiones 4, 8, 12 y 16",
  "Coevaluación, heteroevaluación y valoración del producto final",
  "Reflexión metacognitiva con evidencias y acciones de mejora",
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
  ["Pertinencia del vocabulario", "Proceso", "Banco de palabras, matriz de selección y categorías"],
  ["Calidad documental de entradas", "Proceso", "Fichas, fuentes, definiciones y estado de revisión"],
  ["Funcionamiento técnico", "Producto", "Prueba de enlaces, buscador, navegación e integración"],
  ["Accesibilidad y usabilidad", "Producto", "Lista de verificación y pruebas entre pares"],
  ["Colaboración y documentación", "Proceso", "Bitácora, roles, portafolio y registro de cambios"],
  ["Presentación y reflexión individual", "Cierre", "Socialización, coevaluación y registro metacognitivo"],
];

const controlPoints = [
  ["Sesión 4", "Comprensión del reto y alcance del diccionario"],
  ["Sesión 8", "Investigación, roles y planificación de producción"],
  ["Sesión 12", "Producción, integración y primera versión navegable"],
  ["Sesión 16", "Progreso final, aprendizajes transferibles y mejora futura"],
];

const accessibilityChecks = [
  "Presentar instrucciones en formatos oral, escrito, visual y demostrativo.",
  "Subtitular materiales audiovisuales y anticipar vocabulario técnico clave.",
  "Usar pictogramas, diagramas, ejemplos terminados o parcialmente resueltos.",
  "Permitir entregas escritas, visuales, audiovisuales, prácticas, orales o signadas.",
  "Organizar roles rotativos y canales de comunicación visibles en cada equipo.",
  "Comprobar contraste, tamaño, legibilidad y alternativas a la información sonora.",
  "Coordinar ajustes razonables con el personal de apoyo y el estudiante.",
];

const accessibilityModes = [
  "Textos claros",
  "Apoyos visuales",
  "Subtítulos",
  "Demostraciones",
  "Tiempos flexibles",
  "Comunicación preferida",
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
            La secuencia articula ABP, aprendizaje significativo, trabajo
            colaborativo y ciclos breves de diseño para construir el
            diccionario digital de LSC como prototipo común.
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
            <h3>Del vocabulario a una plataforma navegable</h3>
            <p>
              Cada equipo aporta categorías y entradas específicas: investiga
              fuentes, produce recursos, valida la claridad de las señas y
              registra mejoras.
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
            institucional y a la disponibilidad tecnológica.
          </p>
        </div>
        <div className="session-list" aria-label="Sesiones del proyecto">
          {sessions.map(([sessionNumber, title, product]) => (
            <div className="session" key={sessionNumber}>
              <span>Sesión {sessionNumber}</span>
              <strong>{title}</strong>
              <p>{product}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band" id="evaluacion">
        <div className="section-heading">
          <p className="eyebrow">Evaluación</p>
          <h2>Evaluación diagnóstica, formativa y sumativa</h2>
          <p>
            Cada sesión activa saberes previos y cierra con una evidencia que
            alimenta el producto. La bitácora, el portafolio, las pruebas entre
            pares y la retroalimentación regulan el aprendizaje.
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
                <th>Foco</th>
                <th>Momento</th>
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
        <div className="control-points" aria-label="Puntos de control de autoevaluación">
          {controlPoints.map(([point, description]) => (
            <article key={point}>
              <strong>{point}</strong>
              <p>{description}</p>
            </article>
          ))}
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
          <h2>DUA desde el diseño</h2>
          <p>
            Las medidas de accesibilidad no se agregan al final: se incorporan
            desde la planeación para que ninguna tarea dependa exclusivamente de
            escuchar o hablar.
          </p>
        </div>
        <div className="accessibility-modes" aria-label="Formas de acceso y participación">
          {accessibilityModes.map((mode) => (
            <span key={mode}>{mode}</span>
          ))}
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

