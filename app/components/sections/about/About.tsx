import Title from "../../title/Title";

export const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Sobre Mí" />

          <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
            Soy desarrollador{" "}
            <strong className="text-brand-primary">
              Frontend con experiencia Fullstack
            </strong>
            , enfocado principalmente en la construcción de aplicaciones web
            modernas utilizando{" "}
            <strong className="text-brand-primary">
              React, Next.js y TypeScript
            </strong>
            .
            <br />
            <br />
            Mi mayor fortaleza está en el frontend: diseño de interfaces
            mantenibles, arquitectura de componentes, experiencia de usuario y
            construcción de aplicaciones escalables. Al mismo tiempo, tanto en
            proyectos freelance como personales, me he encargado del desarrollo
            integral de sistemas, definiendo arquitectura, seleccionando
            tecnologías y construyendo las bases técnicas necesarias para que
            las aplicaciones sean sólidas y fáciles de evolucionar.
            <br />
            <br />
            Tengo experiencia desarrollando APIs, modelado de dominio,
            persistencia de datos y lógica de negocio utilizando tecnologías
            como <strong className="text-brand-primary">
              PostgreSQL
            </strong>, <strong className="text-brand-primary">MySQL</strong> y{" "}
            <strong className="text-brand-primary">MongoDB</strong>, siempre
            priorizando código desacoplado, mantenibilidad y capacidad de
            escalado a largo plazo.
            <br />
            <br />
            Disfruto especialmente resolver problemas complejos, estructurar
            proyectos desde cero y tomar decisiones técnicas pensando no solo en
            que una solución funcione hoy, sino en que siga siendo clara y
            sostenible a medida que crece.
            <br />
            <br />
            Mi base técnica proviene de mi formación como{" "}
            <strong className="text-brand-primary">
              Analista de Sistemas de Computación
            </strong>{" "}
            (Institución Cervantes), complementada con un fuerte camino
            autodidacta y aprendizaje constante.
          </p>
        </div>
      </div>
    </section>
  );
};
