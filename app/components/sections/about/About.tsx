import Title from "../../title/Title";

export const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Sobre Mí" />

          {/* <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
            Desarrollador{" "}
            <strong className="text-brand-primary">Full-Stack</strong> y{" "}
            <strong className="text-brand-primary">
              Analista de Sistemas de Computación
            </strong>{" "}
            (Institución Cervantes). Combino mi formación académica con un
            aprendizaje autónomo continuo, focalizándome en el ecosistema de{" "}
            <strong className="text-brand-primary">React / Next.js</strong> y{" "}
            <strong className="text-brand-primary">TypeScript</strong>.
            <br />
            <br />
            Construyo aplicaciones completas y escalables: desde el frontend con
            SSR/ISR y arquitectura modular, hasta el diseño de APIs, modelado de
            dominio y bases de datos ({" "}
            <strong className="text-brand-primary">PostgreSQL</strong>,{" "}
            <strong className="text-brand-primary">MongoDB</strong>,{" "}
            <strong className="text-brand-primary">MySQL</strong> ). Mi
            prioridad es el código claro, las decisiones documentadas y aportar
            solidez técnica dentro de un equipo enfocado en la mejora continua.
          </p> */}

          {/* <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
            Como{" "}
            <strong className="text-brand-primary">Analista de Sistemas</strong>{" "}
            y desarrollador{" "}
            <strong className="text-brand-primary">Full-Stack</strong>, aplico
            una mentalidad analítica para resolver problemas complejos mediante
            software. Me especializo en{" "}
            <strong className="text-brand-primary">React / Next.js</strong> y{" "}
            <strong className="text-brand-primary">TypeScript</strong>,
            complementando mi carrera (Institución Cervantes) con una constante
            formación autónoma.
            <br />
            <br />
            Diseño soluciones de extremo a extremo: interfaces modulares con
            SSR/ISR, APIs robustas y modelado de bases de datos ({" "}
            <strong className="text-brand-primary">PostgreSQL</strong>,{" "}
            <strong className="text-brand-primary">MongoDB</strong>,{" "}
            <strong className="text-brand-primary">MySQL</strong> ). Busco
            integrarme a un equipo donde pueda aportar este enfoque en código
            limpio, arquitectura escalable y buenas prácticas de desarrollo.
          </p> */}
          <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
            Desarrollador{" "}
            <strong className="text-brand-primary">Full-Stack</strong> con foco
            en el ecosistema de{" "}
            <strong className="text-brand-primary">React / Next.js</strong> y{" "}
            <strong className="text-brand-primary">TypeScript</strong>.
            Construyo aplicaciones completas: desde el frontend con SSR/ISR y
            arquitectura modular, hasta APIs, modelado de dominio y bases de
            datos ( <strong className="text-brand-primary">PostgreSQL</strong>,{" "}
            <strong className="text-brand-primary">MongoDB</strong>,{" "}
            <strong className="text-brand-primary">MySQL</strong> ).
            <br />
            <br />
            Mi base técnica proviene de mi formación como{" "}
            <strong className="text-brand-primary">
              Analista de Sistemas de Computación
            </strong>{" "}
            (Institución Cervantes) y un constante camino autodidacta. Bajo esta
            perspectiva, priorizo el código claro, las decisiones documentadas y
            estructuras que escalen sin complejidad, buscando sumarme a un
            equipo con metas técnicas sólidas.
          </p>
        </div>
      </div>
    </section>
  );
};
