import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#inicio" className="brand">
          JARA<span>.</span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Hola, soy</p>

            <h1>
              José Armando
              <span> Ramírez Alvarado</span>
            </h1>

            <h2>
              Ingeniero en Sistemas Computacionales
              <strong> · Desarrollador Web Full Stack</strong>
            </h2>

            <p className="hero-description">
              Desarrollo aplicaciones web, APIs y soluciones orientadas
              a procesos reales, combinando frontend, backend y bases de datos.
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos
              </a>

              <a
                href="/cv/JoseArmandoRamirez_CV.pdf"
                className="btn btn-secondary"
                download
              >
                Descargar CV
              </a>

              <a
                href="https://github.com/JoseArmando9715"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                GitHub ↗
              </a>
            </div>

            <div className="tech-row">
              <span>React</span>
              <span>Laravel</span>
              <span>PHP</span>
              <span>JavaScript</span>
              <span>MySQL</span>
              <span>Git</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>developer.js</p>
              </div>

              <pre>
                <code>{`const developer = {
  name: "José Armando",
  role: "Full Stack Developer",

  frontend: [
    "React",
    "Angular",
    "JavaScript"
  ],

  backend: [
    "PHP",
    "Laravel",
    "Node.js"
  ],

  databases: [
    "MySQL",
    "MariaDB",
    "PostgreSQL"
  ],

  available: true
};`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="section-heading">
            <p className="section-number">01.</p>
            <h2>Sobre mí</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Ingeniero en Sistemas Computacionales con experiencia en
                desarrollo de aplicaciones web frontend y backend, diseño e
                implementación de APIs REST, gestión de bases de datos y
                desarrollo de interfaces responsivas.
              </p>

              <p>
                Me interesa construir soluciones funcionales, mantenibles y
                escalables aplicando buenas prácticas de desarrollo y
                tecnologías modernas.
              </p>
            </div>

            <div className="about-card">
              <div>
                <span>Ubicación</span>
                <strong>Morelos, México</strong>
              </div>

              <div>
                <span>Especialidad</span>
                <strong>Desarrollo Web</strong>
              </div>

              <div>
                <span>Perfil</span>
                <strong>Full Stack</strong>
              </div>

              <div>
                <span>Disponibilidad</span>
                <strong className="available">● Disponible</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="section-heading">
            <p className="section-number">02.</p>
            <h2>Experiencia</h2>
          </div>

          <article className="experience-card">
            <div className="experience-date">
              <span>JUL 2024</span>
              <span>MAR 2025</span>
            </div>

            <div>
              <p className="label">RESIDENCIA PROFESIONAL</p>

              <h3>Desarrollador Web</h3>

              <h4>CBTA No. 129</h4>

              <p>
                Diseño e implementación de un sistema automatizado para consulta
                de expedientes académicos.
              </p>

              <ul>
                <li>Interfaz web responsiva con HTML, CSS y JavaScript.</li>
                <li>Autenticación y control de roles con PHP y MySQL.</li>
                <li>
                  Optimización de procesos de consulta y organización de
                  información académica.
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section id="proyectos" className="section">
          <div className="section-heading">
            <p className="section-number">03.</p>
            <h2>Proyectos destacados</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card featured">
              <div className="project-top">
                <span className="project-icon">01</span>
                <span className="status">EN DESARROLLO</span>
              </div>

              <h3>JarFactory v1.0</h3>

              <p className="project-type">
                Plataforma de facturación electrónica CFDI 4.0
              </p>

              <p>
                Plataforma web multiempresa orientada a procesos de facturación
                electrónica, administración de empresas, certificados digitales
                y proveedores PAC.
              </p>

              <div className="tags">
                <span>Laravel</span>
                <span>PHP</span>
                <span>React</span>
                <span>Vite</span>
                <span>MySQL</span>
                <span>REST API</span>
              </div>

              <div className="private-repo">🔒 Repositorio privado</div>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span className="project-icon">02</span>
                <span className="status">EN DESARROLLO</span>
              </div>

              <h3>ProyectoCali</h3>

              <p className="project-type">
                Sistema web de gestión de calificaciones
              </p>

              <p>
                Plataforma para la administración de docentes, grupos,
                estudiantes, materias, criterios de evaluación y calificaciones.
              </p>

              <div className="tags">
                <span>React</span>
                <span>Vite</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>REST API</span>
              </div>

              <div className="private-repo">🔒 Repositorio privado</div>
            </article>
          </div>
        </section>

        <section id="habilidades" className="section">
          <div className="section-heading">
            <p className="section-number">04.</p>
            <h2>Tecnologías</h2>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <span>01</span>
              <h3>Frontend</h3>
              <p>
                JavaScript · HTML5 · CSS3 · React · Angular · Bootstrap · jQuery
                · AJAX · Vite
              </p>
            </article>

            <article className="skill-card">
              <span>02</span>
              <h3>Backend</h3>
              <p>PHP · Laravel · Node.js · APIs REST · MVC</p>
            </article>

            <article className="skill-card">
              <span>03</span>
              <h3>Bases de datos</h3>
              <p>MySQL · MariaDB · PostgreSQL</p>
            </article>

            <article className="skill-card">
              <span>04</span>
              <h3>Herramientas</h3>
              <p>
                Git · GitHub · Composer · npm · Visual Studio Code · Postman ·
                XAMPP
              </p>
            </article>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <p className="section-number">05.</p>

          <h2>¿Construimos algo juntos?</h2>

          <p>
            Estoy abierto a oportunidades de desarrollo web y proyectos donde
            pueda aportar soluciones frontend y backend.
          </p>

          <a
            href="https://wa.me/525634888045?text=Hola%20Jos%C3%A9%20Armando%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo."
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Contactarme por WhatsApp
          </a>

          <div className="contact-links">
            <a href="mailto:ramirez144gk@gmail.com">✉ Correo</a>

            <a
              href="https://wa.me/525634888045?text=Hola%20Jos%C3%A9%20Armando%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>

            <a
              href="https://github.com/JoseArmando9715"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} José Armando Ramírez Alvarado</p>

        <p>Diseñado y desarrollado con React + Vite</p>
      </footer>
    </>
  );
}

export default App;
