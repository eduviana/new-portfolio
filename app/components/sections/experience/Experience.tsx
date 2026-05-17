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
      'MVP funcional desarrollado a partir de requerimientos reales para un consultorio médico privado, orientado a la gestión integral de turnos y operación administrativa. Implementa autenticación con <span class="text-white font-bold">NextAuth</span> (credenciales, Google OAuth y recuperación de contraseña), pagos mediante <span class="text-white font-bold">MercadoPago Checkout Pro</span> con validación vía webhook y lógica de expiración automática de reservas para liberar disponibilidad horaria. Incluye un sistema multi-rol para pacientes, secretarias y profesionales con dashboards diferenciados, calendario de citas y seguimiento del estado de atención. La sincronización de datos se resolvió mediante <span class="text-white font-bold">TanStack Query</span> y polling adaptativo según actividad del usuario. Arquitectura feature-first desacoplada, con separación clara entre routing, lógica de negocio y persistencia de datos.',
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
      'Sistema web interno desarrollado para la operación de una obra social, diseñado para centralizar la gestión de turnos, atención de afiliados y monitoreo administrativo. Implementa un sistema multi-rol (operator, supervisor y admin) con permisos diferenciados, turnero digital, visor de llamados en tiempo real distribuido en salas de espera y dashboards operativos por área médica. La sincronización de eventos se resolvió mediante <span class="text-white font-bold">Pusher</span>, permitiendo actualizar turnos, estados y actividad de usuarios entre distintas interfaces del sistema. Incluye control de acceso basado en roles mediante <span class="text-white font-bold">proxy</span>, monitoreo de actividad para detección de usuarios activos/inactivos, módulo de órdenes, estadísticas operativas y un sistema de auditorías para garantizar trazabilidad sobre acciones críticas y accesos no autorizados.',
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
      'Sistema web interno desarrollado para optimizar la carga y seguimiento de incidencias dentro de un entorno de call center, reemplazando procesos manuales con baja validación de datos. Implementa autenticación mediante <span class="text-white font-bold">Google OAuth</span>, formularios complejos validados con <span class="text-white font-bold">React Hook Form</span> y <span class="text-white font-bold">Zod</span>, garantizando integridad en el registro de información operativa. Incluye módulos diferenciados para operadores y supervisores, visualización tabular de reportes persistidos en <span class="text-white font-bold">MongoDB</span> y dashboards analíticos construidos con <span class="text-white font-bold">Recharts</span> para monitoreo de incidencias por servicio, ubicación, nodo y métricas operativas.',
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
      'Plataforma web desarrollada para un emprendimiento de jardinería y mantenimiento de espacios verdes, orientada a la gestión autónoma de catálogo y presencia digital. Implementa un panel administrativo protegido mediante <span class="text-white font-bold">NextAuth</span>, permitiendo crear, editar y eliminar productos sin conocimientos técnicos. El catálogo se organiza mediante categorías jerárquicas multinivel, generando navegación dinámica basada en datos. Incluye gestión optimizada de imágenes con <span class="text-white font-bold">Cloudinary</span> y una integración desacoplada con <span class="text-white font-bold">MercadoPago</span>, temporalmente deshabilitada debido a un cambio en el modelo comercial, manteniendo intacta la arquitectura principal del sistema.',
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
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_0_30px_-15px_rgba(194,65,12,0.3)] md:p-8"
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-3">
                  <h2
                    className="text-xl font-bold text-white leading-tight break-words md:text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: exp.company,
                    }}
                  />

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                      {exp.engagement}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-300">
                      {exp.role}
                    </span>
                  </div>
                </div>

                <div className="self-start rounded-full border border-zinc-800 bg-brand-background/50 px-4 py-2 text-sm font-medium text-text-muted md:self-auto">
                  {exp.period}
                </div>
              </div>

              <div className="mb-8">
                <p
                  className="text-base text-text-muted !leading-[1.9] md:text-lg"
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
