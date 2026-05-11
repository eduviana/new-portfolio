import Title from "../../title/Title";

export const About = () => {
  return (
    <div className="flex flex-col gap-12" id="about">
      <Title title="Sobre Mí" description="" />

      <p className="text-text-muted text-lg">
        Desarrollador web fullstack enfocado en el ecosistema{" "}
        <strong>React/Next.js</strong> con <strong>TypeScript</strong> como base
        transversal. La mayoría de mis proyectos —tanto personales como
        freelance— los construí con <strong>Next.js</strong>, lo que me permitió
        dominar tanto la parte de frontend como la de backend dentro del mismo
        framework.
        <br />
        <br />
        En la capa del servidor, trabajo con{" "}
        <strong>MySQL, MongoDB y PostgreSQL</strong> según las necesidades de
        cada proyecto. Me encargo del modelado de dominio, el diseño de APIs y
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
  );
};
