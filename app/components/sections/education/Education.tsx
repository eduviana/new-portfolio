import Title from "../../title/Title";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const education = [
  {
    degree: "Analista de Sistemas de Computación",
    institution: "Institución Cervantes",
    period: "2011 - 2018",
    location: "Córdoba, Argentina",
    description:
      "Formación en análisis, diseño y desarrollo de sistemas de software. Fundamentos de programación, bases de datos y gestión de proyectos. Especialización en metodologías ágiles y arquitectura de soluciones empresariales.",
    tags: ["Sistemas", "SQL", "Arquitectura"],
  },
];

const courses = [
  {
    name: "CSS3",
    issuer: "Jordan Alexander",
    year: "Udemy",
  },
  {
    name: "Javascript",
    issuer: "Juan Pablo de la Torre Valdez",
    year: "Udemy",
  },
  {
    name: "React",
    issuer: "Juan Pablo de la Torre Valdez",
    year: "Udemy",
  },
  {
    name: "React",
    issuer: "Fernando Herrera",
    year: "Udemy",
  },
  {
    name: "React Pro",
    issuer: "Fernando Herrera",
    year: "DevTalles",
  },
];

export const Education = () => {
  return (
    <section id="education" className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <Title title="Educación y Certificaciones" />

          {/* Education */}
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-10"
              >
                {/* Decorative icon */}
                <div className="pointer-events-none absolute top-0 right-12 flex justify-end opacity-[0.03] transition-opacity group-hover:opacity-[0.07]">
                  <FaGraduationCap className="h-[220px] w-[220px] -mr-8 -mt-8 text-white" />
                </div>

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Badge + Period */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex h-8 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 text-xs font-semibold leading-none text-slate-300">
                      Título Oficial
                    </span>

                    <span className="inline-flex h-8 items-center gap-2 text-xs font-semibold leading-none text-text-muted">
                      <FaCalendarAlt className="h-5 w-5 shrink-0 self-center" />
                      <span className="leading-none text-sm">{edu.period}</span>
                    </span>
                  </div>

                  {/* Title + Institution */}
                  <div className="flex flex-col gap-2 md:flex-row md:items-center">
                    <h2 className="text-2xl font-bold leading-tight text-white">
                      {edu.degree} -
                    </h2>

                    <h3 className="shrink-0 text-2xl font-bold text-brand-primary">
                      {edu.institution}
                    </h3>
                  </div>

                  {/* Location */}
                  <div className="inline-flex h-6 items-center gap-2 text-xs font-semibold leading-none text-text-muted">
                    <FaMapMarkerAlt className="h-5 w-5 shrink-0 self-center" />

                    <span className="leading-none text-sm">{edu.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-8 text-text-muted lg:text-lg">
                    {edu.description}
                  </p>

                  {/* Tags
                  <div className="flex flex-wrap gap-3">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </article>
            ))}
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">Cursos</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center lg:flex-row lg:items-center lg:justify-start lg:gap-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 md:p-5 lg:p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_0_30px_-15px_rgba(194,65,12,0.3)]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                    <span className="truncate text-base md:text-lg font-semibold text-white">
                      {course.name}
                    </span>
                  </div>

                  <div className="mt-1 lg:mt-0 text-sm font-medium text-text-muted lg:text-right">
                    <span className="text-white/80">{course.issuer}</span>
                    <span className="text-white/60 mx-1">·</span>
                    <span>{course.year}</span>
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
