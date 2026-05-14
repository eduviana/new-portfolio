import Title from "../../title/Title";

const education = [
  {
    degree: "Analista de Sistemas de Computación",
    institution: "Institución Cervantes",
    period: "2011 - 2018",
    location: "Córdoba, Argentina",
    description:
      "Formación en análisis, diseño y desarrollo de sistemas de software. Fundamentos de programación, bases de datos y gestión de proyectos.",
  },
];

const courses = [
  { name: "React Pro", issuer: "Fernando Herrera", year: "Udemy" },
  { name: "React", issuer: "Fernando Herrera", year: "Udemy" },
  { name: "React", issuer: "Juan Pablo de la Torre Valdez", year: "Udemy" },
  { name: "Javascript Moderno", issuer: "Juan Pablo de la Torre Valdez", year: "Udemy" },
  { name: "CSS3", issuer: "Jordan Alexander", year: "Udemy" },
];

export const Education = () => {
  return (
    <section id="education" className="w-full py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Educación y Certificaciones" />

          {/* Education */}
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <article
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_0_30px_-15px_rgba(249,115,22,0.3)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h2>
                    <p className="text-lg font-medium text-text-muted mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-text-muted bg-brand-background/50 px-3 py-1 rounded-full border border-zinc-800 self-start md:self-auto">
                    {edu.period} · <span className="text-white/80">{edu.location}</span>
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed text-base md:text-lg">
                  {edu.description}
                </p>
              </article>
            ))}
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Cursos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_0_30px_-15px_rgba(249,115,22,0.3)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                    <span className="text-white text-lg font-semibold">
                      {course.name}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-text-muted text-right shrink-0">
                    <p>{course.issuer}</p>
                    <p className="text-white/80">{course.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
