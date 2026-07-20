import Title from "../../title/Title";
import { TechBadge } from "../../tech-badge/TechBadge";

const experiences = [
  {
    role: "Full-Stack",
    engagement: "Freelance",
    company:
      'Plataforma de Gestión de Turnos Médicos — <span class="text-brand-primary">Mediflow</span>',
    period: "2025-2026",
    location: "Remoto",
    description:
      "Desarrollé de forma integral una plataforma de gestión médica para un consultorio privado, participando desde el relevamiento de requerimientos hasta la definición de la arquitectura y la implementación de todas las funcionalidades principales. La aplicación centraliza la gestión de pacientes, secretarias y profesionales mediante un sistema multirol con calendario de turnos, historias clínicas e integración con Mercado Pago para el procesamiento de pagos y la liberación automática de reservas expiradas. Implementé una arquitectura Feature First inspirada en Clean Architecture, autenticación con NextAuth, sincronización de datos mediante TanStack Query e integración de servicios externos utilizando Webhooks, priorizando mantenibilidad, escalabilidad y reutilización de la lógica de negocio.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "MercadoPago",
      "TanStack Query",
    ],
  },
  {
    role: "Full-Stack",
    engagement: "Freelance",
    company:
      'Plataforma Operativa para Obra Social — <span class="text-brand-primary">Medical Health</span>',
    period: "2025",
    location: "Remoto",
    description:
      "Construí una plataforma interna para optimizar la operación de una obra social, centralizando la gestión de turnos, la atención de afiliados y el monitoreo administrativo en un único sistema. La aplicación incorpora un esquema multirol con módulos específicos para operadores, supervisores y administradores, además de un turnero digital y un visor de llamados en tiempo real para salas de espera. Implementé sincronización de eventos mediante Pusher, autenticación y control de acceso por roles, auditoría de acciones críticas y monitoreo de actividad de usuarios, priorizando trazabilidad, comunicación en tiempo real y una operación más eficiente del personal.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "PostgreSQL",
      "Pusher",
      "Clerk",
    ],
  },
  {
    role: "Full-Stack",
    engagement: "Freelance",
    company:
      'Plataforma de Reportes Operativos — <span class="text-brand-primary">APEX / TELECOM Personal</span>',
    period: "2025",
    location: "Remoto",
    description:
      "Implementé una plataforma interna para registrar, gestionar y analizar incidencias operativas dentro de un entorno de call center, reemplazando procesos manuales y mejorando la calidad de la información registrada. El sistema incorpora autenticación con Google, formularios validados, dashboards analíticos y módulos diferenciados para operadores y supervisores. Implementé validación de datos con React Hook Form y Zod, persistencia en MongoDB y visualizaciones mediante Recharts, priorizando consistencia de la información, mantenibilidad y facilidad de uso para los equipos operativos.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Jest",
    ],
  },
  {
    role: "Full-Stack",
    engagement: "Freelance",
    company:
      'Plataforma de Gestión de Catálogo — <span class="text-brand-primary">Vivarium</span>',
    period: "2025",
    location: "Remoto",
    description:
      "Desarrollé una plataforma de gestión de catálogo para un emprendimiento de jardinería, orientada a que el propio cliente pudiera administrar productos y contenido sin depender de conocimientos técnicos ni asistencia externa. La aplicación incorpora un panel administrativo protegido, organización mediante categorías jerárquicas y gestión optimizada de imágenes para facilitar el mantenimiento del catálogo. Además, diseñé la arquitectura contemplando la integración con Mercado Pago, que posteriormente fue deshabilitada debido a un cambio en el modelo comercial del negocio, preservando la flexibilidad del sistema para futuras necesidades.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "NextAuth",
      "MercadoPago",
      "Cloudinary",
    ],
  },
  {
    role: "Frontend",
    engagement: "Proyecto Personal",
    company:
      'Ecommerce Tecnológico — <span class="text-brand-primary">Hard360</span>',
    period: "2026",
    location: "Remoto",
    description:
      'Proyecto personal desarrollado como entorno de aprendizaje y evolución técnica en <span class="text-white font-bold">TypeScript</span>, arquitectura frontend y modelado de datos escalable. Simula una tienda real de hardware con navegación dinámica por categorías y subcategorías, filtros contextuales, páginas de detalle especializadas y carrito global implementado mediante <span class="text-white font-bold">Context API</span>. La arquitectura fue diseñada para desacoplar datos, lógica y presentación, permitiendo reemplazar la fuente de datos actual por un backend real sin necesidad de reescribir la interfaz. Implementa tipado estricto, renderizado SSR con App Router y una estructura modular refinada a través de múltiples iteraciones del proyecto.',
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Full-Stack",
    engagement: "Freelance",
    company:
      'Ecommerce de Accesorios — <span class="text-brand-primary">Kass</span>',
    period: "2024",
    location: "Remoto",
    description:
      'Ecommerce desarrollado para un emprendimiento de accesorios y productos tecnológicos, diseñado para permitir la autogestión del catálogo sin requerir conocimientos técnicos. A partir del relevamiento con el cliente, se optó por integrar <span class="text-white font-bold">Google Sheets API</span> como fuente de datos, permitiendo administrar productos, precios y categorías desde una planilla familiar para el usuario final, sin necesidad de un panel administrativo tradicional. Implementa pagos online mediante <span class="text-white font-bold">Stripe</span> con procesamiento seguro del lado del servidor y una arquitectura orientada a priorizar simplicidad operativa, facilidad de adopción y mantenimiento autónomo por parte del cliente.',
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Google Sheets API",
      "Stripe",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 bg-black/20 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <Title title="Experiencia Profesional" />

          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_0_30px_-15px_rgba(194,65,12,0.3)] sm:p-6 md:p-8"
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start">
                {/* Corregido el espacio en "md: w-full" */}
                <div className="flex flex-col gap-3 md:w-full">
                  <h2
                    className="text-xl font-bold text-white leading-tight break-words md:text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: exp.company,
                    }}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                        {exp.engagement}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-300">
                        {exp.role}
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-brand-background/50 px-4 py-2 text-sm font-medium text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p
                  className="text-base text-text-muted break-words [hyphens:auto] leading-[1.8] md:!leading-[1.9] lg:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: exp.description,
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

