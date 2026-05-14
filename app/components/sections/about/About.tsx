import Title from "../../title/Title";

export const About = () => {
  return (
    <section id="about" className="w-full py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Sobre Mí" />

          <p className="text-text-muted text-lg leading-relaxed">
            Desarrollador web fullstack enfocado en el ecosistema{" "}
            <strong className="text-brand-primary">React/Next.js</strong> con{" "}
            <strong className="text-brand-primary">TypeScript</strong> como base
            transversal. La mayoría de mis proyectos —tanto personales como
            freelance— los construí con <strong className="text-brand-primary">Next.js</strong>, lo que me permitió
            dominar tanto la parte de frontend como la de backend dentro del mismo
            framework.
            <br />
            <br />
            En la capa del servidor, trabajo con{" "}
            <strong className="text-brand-primary">MySQL, MongoDB y PostgreSQL</strong> según las necesidades de
            cada proyecto. Me incar del modelado de dominio, el diseño de APIs y
            la integración entre cliente y base de datos, aplicando una visión
            integral del ciclo de desarrollo.
            <br />
            <br />
            Me importa escribir código limpio y mantenible, documentar decisiones
            importantes y colaborar de forma activa con el equipo. Valoro los
            entornos donde se comparte conocimiento y se priorizan las soluciones
            sólidas por sobre los atajos.
            <br />
            <br />
            Busco sumarme a equipos que combinen rigor técnico, colaboración genuina
            y una cultura de mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
};
