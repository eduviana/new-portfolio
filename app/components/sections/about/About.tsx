import Title from "../../title/Title";

export const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Sobre Mí" />

          <div className="flex flex-col gap-6">
            <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
              Me especializo en el desarrollo de aplicaciones web, con foco en
              Frontend y capacidad para abordar proyectos Full-Stack. Trabajo
              principalmente con{" "}
              <strong className="italic">React, Next.js y TypeScript</strong>, y
              también desarrollo el backend, la persistencia de datos y la
              lógica de negocio de las aplicaciones.
            </p>
            <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
              Me gusta analizar los problemas antes de empezar a programar,
              comprender las necesidades del producto y tomar decisiones
              técnicas con criterio. Busco que cada solución no solo resuelva el
              requerimiento actual, sino que también tenga una estructura clara
              y pueda evolucionar sin sumar complejidad innecesaria.
            </p>
            <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
              He trabajado con diseño de APIs, modelado de dominio, persistencia
              de datos, autenticación e integración con servicios externos. En
              cada proyecto procuro mantener una separación clara de
              responsabilidades y un código legible, reutilizable y fácil de
              mantener.
            </p>
            <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
              Mi formación como{" "}
              <strong className="italic">
                Analista de Sistemas de Computación
              </strong>
              , graduado en Institución Cervantes, complementada con aprendizaje
              autodidacta continuo, me permite abordar cada proyecto tanto desde
              la implementación técnica como desde la comprensión del problema
              de negocio que el software busca resolver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
