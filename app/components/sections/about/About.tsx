import Title from "../../title/Title";

export const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Sobre Mí" />

          <p className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg">
            Mi principal interés es construir aplicaciones web que no solo
            funcionen correctamente, sino que puedan mantenerse, evolucionar y
            adaptarse al crecimiento del producto con el paso del tiempo. Aunque
            mi especialización está en el desarrollo Frontend utilizando{" "}
            <strong className="italic">
              React, Next.js y TypeScript
            </strong>
            , a lo largo de proyectos personales y freelance asumí también el
            desarrollo completo de las aplicaciones, desde la arquitectura hasta
            la implementación del backend.
            <br />
            <br />
            Disfruto especialmente analizar problemas antes de escribir código,
            estructurar proyectos desde cero y tomar decisiones técnicas pensando
            no solo en resolver una necesidad inmediata, sino en construir una
            base sólida que facilite la evolución del software a largo plazo.
            <br />
            <br />
            Esa experiencia me permitió trabajar con diseño de APIs, modelado de
            dominio, persistencia de datos, autenticación, integraciones con
            servicios externos y reglas de negocio, siempre priorizando
            soluciones desacopladas, mantenibles y fáciles de extender.
            <br />
            <br />
            En cada proyecto intento encontrar el equilibrio entre una buena
            experiencia de usuario y una arquitectura que permita incorporar
            nuevas funcionalidades sin aumentar innecesariamente la complejidad
            del sistema. Me interesa escribir código claro, reutilizable y
            sencillo de mantener, entendiendo que las decisiones técnicas tienen
            impacto tanto en el producto como en quienes lo desarrollan.
            <br />
            <br />
            Mi formación como{" "}
            <strong className="italic">
              Analista de Sistemas de Computación
            </strong>{" "}
            (Institución Cervantes), complementada con un aprendizaje autodidacta
            constante, me permitió desarrollar una forma de trabajo orientada
            tanto a la calidad técnica como a la comprensión del problema de
            negocio que cada proyecto busca resolver.
          </p>
        </div>
      </div>
    </section>
  );
};
