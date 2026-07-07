import { Project } from "./data.interface";

export const projects: Project[] = [
  //mediflow
  {
    id: 28,
    title: "Mediflow",
    slug: "mediflow",
    githubUrl: "https://github.com/eduviana/mediflow",
    desc: "Plataforma de gestión médica multirol con turnos online y flujos basados en operación real.",
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
    categories: ["Fullstack"],
    thumbnail: "/projects/fullstack/mediflow/mediflow-thumbnail.png",
    images: [
      "/projects/fullstack/mediflow/1.png",
      "/projects/fullstack/mediflow/2.png",
      "/projects/fullstack/mediflow/4.png",
      "/projects/fullstack/mediflow/5.png",
      "/projects/fullstack/mediflow/6.png",
      "/projects/fullstack/mediflow/7.png",
      "/projects/fullstack/mediflow/8.png",
      "/projects/fullstack/mediflow/9.png",
      "/projects/fullstack/mediflow/secretary-1.png",
      "/projects/fullstack/mediflow/secretary-2.png",
      "/projects/fullstack/mediflow/professional-1.png",
      "/projects/fullstack/mediflow/professional-2.png",
    ],

    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Resumen ejecutivo — métricas -->
  <section>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">11</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Dominios</span>
          </div>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Módulos Funcionales</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">233</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Tests</span>
          </div>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Cobertura de Código</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Feature First</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.618.309a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 002.828 0l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.309-.618a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022l-1.16-1.16a2 2 0 00-2.828 0l-1.16 1.16a2 2 0 000 2.828l1.16 1.16z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Arquitectura</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Multi Rol</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Control de Acceso</span>
      </div>
    </div>
  </section>

  <!-- 1. Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Mediflow es una plataforma de gestión médica desarrollada para modelar la operación diaria de un centro médico privado. El proyecto nació a partir de conversaciones con profesionales del sector y busca representar de forma realista la interacción entre pacientes, secretarias, profesionales y administradores dentro de un único sistema.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto aborda uno de los problemas más habituales en la gestión médica: la fragmentación de procesos entre agendas, llamados telefónicos, pagos y coordinación entre distintos actores. Para resolverlo desarrollé una aplicación capaz de administrar el ciclo completo de un turno médico, desde la reserva hasta la atención clínica, contemplando escenarios reales que suelen quedar fuera de las demos tradicionales.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Más allá de la funcionalidad, el objetivo fue diseñar una arquitectura mantenible y escalable, poniendo el foco en reglas de negocio reutilizables, separación de responsabilidades y decisiones técnicas propias de una aplicación preparada para evolucionar.
        </p>
      </div>
    </div>
  </section>

  <!-- 2. Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión de turnos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema permite administrar el ciclo completo de un turno médico, contemplando tanto reservas realizadas por pacientes desde la plataforma como aquellas gestionadas telefónicamente por una secretaria. También integra el procesamiento de pagos y la liberación automática de horarios cuando una reserva no se confirma.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Reserva online de turnos.</li>
            <li class="m-0">Creación de turnos telefónicos para pacientes sin cuenta.</li>
            <li class="m-0">Integración con Mercado Pago.</li>
            <li class="m-0">Expiración automática de reservas pendientes de pago.</li>
            <li class="m-0">Disponibilidad calculada dinámicamente.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Operación del centro médico</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cada rol dispone de un entorno de trabajo específico con acceso únicamente a la información necesaria para su operación diaria.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Dashboards independientes para pacientes, secretarias, profesionales y administradores.</li>
            <li class="m-0">Gestión de agendas.</li>
            <li class="m-0">Configuración de disponibilidad semanal.</li>
            <li class="m-0">Bloqueos por vacaciones y feriados.</li>
            <li class="m-0">Historia clínica integrada durante la consulta.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Administración</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema incorpora herramientas para administrar usuarios, especialidades y permisos, evitando configuraciones inconsistentes mediante validaciones y restricciones específicas.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Gestión de usuarios.</li>
            <li class="m-0">Gestión de especialidades médicas.</li>
            <li class="m-0">Control de permisos por rol.</li>
            <li class="m-0">Protección de rutas y APIs.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Observabilidad</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Todas las operaciones relevantes quedan registradas para facilitar el seguimiento de eventos y la resolución de incidentes.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Auditoría completa de eventos.</li>
            <li class="m-0">Historial de cambios.</li>
            <li class="m-0">Seguimiento de pagos.</li>
            <li class="m-0">Trazabilidad completa de turnos.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- 3. Decisiones de diseño -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de diseño</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Disponibilidad calculada en tiempo real</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            En lugar de persistir horarios disponibles en la base de datos, decidí calcular la disponibilidad en tiempo real combinando la agenda laboral de cada profesional, los bloqueos configurados, las reservas existentes y el estado de los pagos.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Este enfoque elimina problemas de sincronización y evita mantener múltiples fuentes de verdad. Aunque incrementa la complejidad del cálculo, garantiza que la disponibilidad mostrada refleje siempre el estado real del sistema.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Sincronización entre múltiples clientes</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los desafíos era mantener sincronizadas las agendas entre secretarias y profesionales conectados simultáneamente.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Evalué implementar WebSockets, pero finalmente opté por una solución basada en TanStack Query con polling adaptativo: cada 30 segundos con la pestaña activa y cada 60 segundos cuando permanece en segundo plano.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Para el volumen esperado de usuarios esta estrategia ofrecía una mejor relación entre simplicidad, mantenibilidad y costo operativo, evitando incorporar infraestructura adicional sin obtener un beneficio significativo.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Reglas de negocio desacopladas</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Toda la lógica del dominio fue implementada como funciones puras, independientes de React, Prisma o cualquier otra tecnología.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esto permite reutilizar exactamente las mismas reglas tanto en el frontend como en API Routes y Webhooks, garantizando que el comportamiento del sistema sea consistente independientemente del punto donde se ejecute.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Continuidad del historial del paciente</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los escenarios reales que decidí contemplar fue la gestión telefónica de pacientes que todavía no poseen una cuenta.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cuando una secretaria crea un turno manualmente y ese paciente se registra posteriormente, el sistema detecta automáticamente la coincidencia y vincula la nueva cuenta con toda la información existente: historial de turnos, pagos e información clínica.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            De esta manera se evita la duplicación de registros y se preserva la continuidad del historial médico sin intervención manual.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La arquitectura fue diseñada priorizando mantenibilidad, desacoplamiento y escalabilidad.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Para ello organicé el proyecto siguiendo un enfoque <span class="font-semibold text-white">Feature First</span> inspirado en Clean Architecture, donde cada dominio encapsula su propia lógica de negocio, componentes, hooks, validaciones y utilidades, reduciendo el acoplamiento entre módulos y facilitando la incorporación de nuevas funcionalidades.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La carpeta <span class="font-semibold text-white">app/</span> contiene exclusivamente el routing de Next.js, mientras que toda la lógica del sistema reside dentro de <span class="font-semibold text-white">features/</span>.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Las reglas de negocio se implementan como funciones puras sin dependencias externas y son reutilizadas tanto en el frontend como en API Routes y Webhooks.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La autenticación utiliza NextAuth v4 con JWT y autorización multirol mediante middleware, mientras que la persistencia se implementa mediante PostgreSQL y Prisma ORM.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Para la sincronización de datos se utiliza TanStack Query, aprovechando cache inteligente, invalidación automática y polling adaptativo para mantener actualizadas las agendas sin necesidad de recargar la aplicación.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El entorno de desarrollo se encuentra completamente containerizado con Docker e incluye seeds que permiten levantar un entorno funcional de forma reproducible.
        </p>
      </div>
    </div>
  </section>

  <!-- 5. Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> 233 tests automatizados con Vitest y Testing Library
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura Feature First inspirada en Clean Architecture
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Reglas de negocio desacopladas y reutilizables
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Integración con Mercado Pago mediante Webhooks
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Sistema de auditoría con trazabilidad completa de eventos
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Autenticación y autorización multirol
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Entorno de desarrollo completamente containerizado con Docker
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Seeds para inicialización automática de datos de prueba
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Sincronización multiusuario mediante TanStack Query
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  // medical-healt
  {
    id: 27,
    title: "Medical Health",
    slug: "medical-healt",
    githubUrl: "https://github.com/eduviana/turnero-realtime",
    desc: "Sistema multirol para gestión de obra social con turnos, paneles operativos y sincronización en tiempo real.",
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
    categories: ["Fullstack"],
    thumbnail: "/projects/fullstack/medicalHealt/edu.webp",
    images: [
      "/projects/fullstack/medicalHealt/nuevas/1.webp",
      "/projects/fullstack/medicalHealt/nuevas/2.webp",
      "/projects/fullstack/medicalHealt/nuevas/3.webp",
      "/projects/fullstack/medicalHealt/nuevas/4.webp",
      "/projects/fullstack/medicalHealt/nuevas/5.webp",
      "/projects/fullstack/medicalHealt/nuevas/6.webp",
      "/projects/fullstack/medicalHealt/nuevas/7.webp",
      "/projects/fullstack/medicalHealt/nuevas/8.webp",
      "/projects/fullstack/medicalHealt/nuevas/9.webp",
      "/projects/fullstack/medicalHealt/nuevas/10.webp",
      "/projects/fullstack/medicalHealt/nuevas/11.webp",
      "/projects/fullstack/medicalHealt/nuevas/12.webp",
      "/projects/fullstack/medicalHealt/nuevas/13.webp",
      "/projects/fullstack/medicalHealt/nuevas/14.webp",
      "/projects/fullstack/medicalHealt/nuevas/15.webp",
      "/projects/fullstack/medicalHealt/nuevas/16.webp",
      "/projects/fullstack/medicalHealt/nuevas/17.webp",
      "/projects/fullstack/medicalHealt/nuevas/18.webp",
      "/projects/fullstack/medicalHealt/nuevas/19.webp",
      "/projects/fullstack/medicalHealt/nuevas/20.webp",
    ],

    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">3</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Roles</span>
          </div>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Control de Acceso</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">15</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Módulos</span>
          </div>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Arquitectura Modular</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">16</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Modelos</span>
          </div>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Modelo de Datos</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Pusher</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Sincronización Realtime</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Medical Health es un sistema interno de gestión de turnos desarrollado para modelar la operación diaria de una obra social. El proyecto aborda la complejidad de coordinar múltiples actores simultáneos (afiliados, operadores y supervisores) dentro de un entorno con reglas operativas estrictas y necesidad de trazabilidad completa.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El desafío principal no era simplemente registrar turnos, sino construir un sistema capaz de sincronizar paneles operativos en tiempo real, medir tiempos por etapa sin distorsiones estadísticas y mantener consistencia entre múltiples operadores trabajando concurrentemente sobre los mismos recursos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Más allá de la funcionalidad, el proyecto representa un ejercicio de evolución arquitectónica: enfrenté problemas de escalabilidad, organización del código y separación de responsabilidades, refactorizando progresivamente hacia una estructura más mantenible a medida que el dominio del negocio crecía.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión de turnos y flujo operativo</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema modela explícitamente el ciclo completo de atención, desde la generación del turno hasta su finalización, permitiendo registrar tiempos independientes para cada etapa.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Generación de turnos para múltiples áreas de atención.</li>
            <li class="m-0">Llamado de turnos desde paneles operativos.</li>
            <li class="m-0">Inicio y finalización de atención con registro de tiempos.</li>
            <li class="m-0">Gestión de ausencias y reprogramación.</li>
            <li class="m-0">Visualización de tiempo transcurrido mediante barra progresiva.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Áreas de farmacia</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema incorpora dos áreas especializadas de farmacia con lógica independiente, permitiendo gestionar tanto medicamentos como productos generales dentro del mismo flujo operativo.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Farmacia de medicamentos con control de stock.</li>
            <li class="m-0">Farmacia general para productos diversos.</li>
            <li class="m-0">Carritos de compra independientes por área.</li>
            <li class="m-0">Integración con el flujo de atención principal.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Sincronización en tiempo real</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Los paneles operativos y pantallas de sala de espera se actualizan instantáneamente sin necesidad de refrescar la página, mediante eventos distribuidos.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Actualización automática cuando un operador llama un turno.</li>
            <li class="m-0">Sincronización entre múltiples operadores concurrentes.</li>
            <li class="m-0">Visor de turnos distribuido en salas de espera.</li>
            <li class="m-0">Historial reciente de atención en tiempo real.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Administración y permisos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema incorpora un modelo de permisos jerárquico donde cada rol dispone de un entorno de trabajo específico con acceso únicamente a la información necesaria para su operación.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">ADMIN: administración completa del sistema y configuración operativa.</li>
            <li class="m-0">SUPERVISOR: misma interfaz que ADMIN pero con esquema de solo lectura.</li>
            <li class="m-0">OPERATOR: acceso únicamente a áreas asignadas por un administrador.</li>
            <li class="m-0">Una misma cuenta puede trabajar en uno o múltiples servicios.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Métricas y auditoría</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Todas las operaciones relevantes quedan registradas para facilitar el seguimiento de eventos, análisis de rendimiento y resolución de incidentes.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Estadísticas operativas por etapa del flujo.</li>
            <li class="m-0">Tiempos independientes para llamado, espera y atención.</li>
            <li class="m-0">Auditoría de eventos sensibles de seguridad.</li>
            <li class="m-0">Registro de dispositivo, IP y rol del usuario.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Sincronización en tiempo real con Pusher</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los desafíos era mantener sincronizados los paneles operativos y las pantallas de sala de espera cuando múltiples operadores trabajaban concurrentemente.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Evalué alternativas como polling adaptativo (que utilicé en Mediflow) o WebSockets nativos, pero finalmente opté por Pusher como servicio gestionado. Esta decisión permitió implementar eventos en tiempo real sin incorporar infraestructura adicional de servidores WebSocket, reduciendo complejidad operativa y costo de mantenimiento.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cuando un operador llama un turno, el evento impacta simultáneamente en el panel de trabajo y en el visor de turnos distribuido, mostrando el ticket llamado y el historial reciente de atención.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Manejo de concurrencia en operaciones críticas</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Con múltiples operadores trabajando simultáneamente sobre los mismos turnos, era crucial evitar race conditions donde dos operadores llamaran el mismo ticket al mismo tiempo.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Implementé dos mecanismos complementarios: <span class="font-semibold text-white">FOR UPDATE SKIP LOCKED</span> en SQL para bloquear filas durante la selección, y <span class="font-semibold text-white">optimistic locking</span> con updateMany que valida el estado esperado antes de actualizar. Si otro operador modificó el ticket primero, la operación falla silenciosamente y el operador debe refrescar el estado.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta combinación garantiza consistencia sin sacrificar performance, evitando bloqueos prolongados que podrían afectar la experiencia de otros operadores.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Webhooks de Clerk para sincronización automática</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La autenticación fue implementada con Clerk, pero necesitaba mantener sincronizada la información de usuarios entre Clerk y la base de datos interna del sistema.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            En lugar de hacer queries adicionales en cada request, implementé webhooks que disparan eventos cuando un usuario se registra, actualiza su perfil o es eliminado. Esto mantiene una copia local actualizada sin impactar el rendimiento de las operaciones principales.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema RBAC jerárquico se construyó sobre esta base, con middleware que centraliza autenticación, redirección dinámica de dashboards y control de acceso por rutas.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Modelado explícito del flujo operativo</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El flujo de atención fue modelado explícitamente como cuatro etapas independientes: generación de turno → llamado → inicio de atención → finalización.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta separación permite registrar tiempos independientes para cada etapa, evitando distorsiones estadísticas. Por ejemplo, el tiempo que un afiliado tarda en presentarse luego de ser llamado no penaliza artificialmente el tiempo real de atención del operador.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Durante la atención, el operador dispone de un panel visual que muestra el tiempo transcurrido mediante una barra progresiva que cambia de color según el tiempo ideal estimado, funcionando como referencia operativa sin aplicar penalizaciones automáticas.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Arquitectura modular Feature First</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            A nivel organizacional se implementó una Modular Feature Architecture, donde la carpeta <span class="font-semibold text-white">app/</span> contiene únicamente el routing y cada dominio del negocio encapsula su propia lógica, tipos, componentes y servicios dentro de <span class="font-semibold text-white">features/</span>.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            También se implementó una arquitectura basada en adapters para desacoplar reglas específicas de áreas similares, evitando dependencias cruzadas entre módulos que podrían evolucionar de forma distinta en el futuro.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Muchas decisiones arquitectónicas surgieron de problemas encontrados durante el desarrollo y posteriores refactorizaciones, convirtiendo al proyecto en un proceso de aprendizaje práctico sobre mantenibilidad, escalabilidad y diseño de software.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La arquitectura fue diseñada priorizando mantenibilidad, desacoplamiento y capacidad de evolucionar junto al dominio del negocio.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se priorizó el uso de <span class="font-semibold text-white">Server Components</span> siempre que fue posible, delegando únicamente la interacción al cliente mediante <span class="font-semibold text-white">use client</span> y endpoints específicos cuando un Client Component necesitaba datos persistidos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La persistencia se implementa mediante PostgreSQL y Prisma ORM, con el entorno de desarrollo completamente containerizado mediante Docker. La sincronización de datos en tiempo real se gestiona mediante Pusher, aprovechando eventos distribuidos para mantener actualizados los paneles operativos sin necesidad de recargar la aplicación.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La autenticación utiliza Clerk con webhooks para sincronizar automáticamente la información del usuario autenticado con la base de datos interna, mientras que la autorización se resuelve mediante un sistema RBAC propio con middleware centralizado. El proyecto incluye 6 scripts de seed reproducibles que permiten levantar un entorno funcional de forma consistente.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> TypeScript estricto en todo el proyecto
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> ESLint flat config v9
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> 26 migraciones versionadas
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> 6 scripts de seed reproducibles
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Sincronización en tiempo real con Pusher
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura modular Feature First
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Sistema RBAC con auditoría de seguridad
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Entorno de desarrollo containerizado con Docker
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  // hard360
  {
    id: 26,
    title: "Hard360",
    slug: "hard360",
    liveSiteUrl: "https://hard360.vercel.app",
    githubUrl: "https://github.com/eduviana/hard360",
    desc: "Ecommerce tecnológico con catálogo dinámico, filtros contextuales y modelado tipado de productos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Nextjs"],
    thumbnail: "/projects/personales/hard360/nuevas/1.webp",
    images: [
      "/projects/personales/hard360/nuevas/1.webp",
      "/projects/personales/hard360/nuevas/2.webp",
      "/projects/personales/hard360/nuevas/8.webp",
      "/projects/personales/hard360/nuevas/3.webp",
      "/projects/personales/hard360/nuevas/4.webp",
      "/projects/personales/hard360/nuevas/5.webp",
      "/projects/personales/hard360/nuevas/6.webp",
      "/projects/personales/hard360/nuevas/7.webp",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">10</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Categorías</span>
          </div>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Alcance del Catálogo</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Ts Estricto</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Modelado Tipado</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">192</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Productos</span>
          </div>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Volumen de Datos</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">SSR</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">SEO Ready</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Hard360 es un ecommerce tecnológico desarrollado para abordar uno de los desafíos más habituales en este tipo de plataformas: ofrecer grandes catálogos de productos con múltiples variantes técnicas sin comprometer la experiencia de navegación ni volver inmantenible la estructura de datos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          A medida que aumentan las categorías y subcategorías, aparecen problemas comunes como filtros difíciles de escalar, especificaciones inconsistentes entre productos y lógica repetida para renderizar vistas dinámicas. El proyecto busca resolver estos desafíos priorizando escalabilidad estructural, modelado tipado de datos y una experiencia de usuario fluida.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Más allá del resultado visual, el objetivo fue profundizar el uso de TypeScript estricto, renderizado SSR y organización modular, incorporando decisiones arquitectónicas más sólidas respecto a proyectos anteriores y mejorando el desacoplamiento entre lógica y presentación.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Navegación dinámica</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La navegación del ecommerce se construyó mediante una ruta dinámica utilizando <span class="font-semibold text-white">app/[...slug]/page.tsx</span>, permitiendo interpretar distintos segmentos de URL para renderizar categorías, subcategorías o páginas de producto individuales.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Rutas dinámicas para categorías y subcategorías.</li>
            <li class="m-0">Páginas de producto individuales con especificaciones técnicas.</li>
            <li class="m-0">Escalabilidad del catálogo sin duplicación de páginas.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Sistema de filtros contextuales</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Toda la lógica de filtrado fue desacoplada y centralizada dentro de un custom hook, permitiendo reutilizar comportamiento entre distintas categorías sin contaminar componentes de UI con lógica de negocio.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Filtros adaptativos según categoría activa.</li>
            <li class="m-0">Combinaciones dinámicas de atributos.</li>
            <li class="m-0">Búsquedas por título y filtrado por características técnicas.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Modelado de productos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cada producto cuenta con un sistema de especificaciones adaptado a su categoría, evitando estructuras genéricas poco representativas del dominio técnico.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Entidades tipadas como NotebookSpecs, TvSpecs, RamSpecs.</li>
            <li class="m-0">Especificaciones técnicas específicas por categoría.</li>
            <li class="m-0">Precios almacenados en centavos como string para evitar errores de precisión.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Carrito de compras</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El carrito utiliza Context API como estado global, permitiendo persistir selección de productos y sincronizar la experiencia de compra entre distintas vistas del ecommerce.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Estado global con Context API.</li>
            <li class="m-0">Sincronización entre vistas.</li>
            <li class="m-0">Formateo dinámico de precios.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Tipado estricto del dominio</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los focos principales del proyecto fue el tipado estricto del dominio. Cada categoría de producto posee entidades y especificaciones técnicas propias, como <span class="font-semibold text-white">NotebookSpecs</span>, <span class="font-semibold text-white">TvSpecs</span> o <span class="font-semibold text-white">RamSpecs</span>.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esto permitió modelar información mucho más precisa y escalable, evitando objetos excesivamente genéricos que terminan degradando consistencia y mantenibilidad con el crecimiento del catálogo. La alternativa habría sido una estructura unificada más simple, pero habría sacrificado representatividad del dominio.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Routing dinámico con catch-all</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La navegación se construyó mediante una ruta dinámica utilizando <span class="font-semibold text-white">app/[...slug]/page.tsx</span>, interpretando segmentos de URL para renderizar categorías, subcategorías o productos individuales.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Este enfoque evita duplicación de páginas, reduce complejidad de routing y permite escalar el catálogo sin necesidad de crear nuevas estructuras manuales por cada categoría agregada. La alternativa habría sido crear páginas separadas para cada nivel, pero eso habría incrementado mantenimiento y reducido flexibilidad.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Precios en centavos como string</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Los precios se almacenan internamente en centavos como <span class="font-semibold text-white">string</span> y se formatean dinámicamente en el frontend, evitando problemas de precisión numérica y errores de redondeo monetario.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión es común en sistemas financieros y ecommerce profesionales. Trabajar con números de punto flotante para dinero puede introducir errores de precisión que se acumulan en cálculos. Almacenar en centavos como string garantiza exactitud y facilita operaciones aritméticas confiables.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Fuente de datos local tipada</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Para este proyecto de portfolio se priorizó una fuente de datos local tipada mediante archivos <span class="font-semibold text-white">.ts</span>, permitiendo un mayor control sobre el modelado, la consistencia de datos y la estabilidad del entorno de desarrollo.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Aunque técnicamente era posible conectar una API externa o base de datos, la decisión de mantener datos locales permitió enfocar el proyecto en el modelado del dominio y la arquitectura frontend, sin depender de servicios externos que podrían afectar la disponibilidad del portfolio.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La arquitectura fue diseñada priorizando performance, SEO y mantenibilidad del código, aprovechando las capacidades de Next.js para renderizado del lado del servidor.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La estructura del proyecto se organizó de forma modular mediante carpetas especializadas: <span class="font-semibold text-white">app</span>, <span class="font-semibold text-white">components</span>, <span class="font-semibold text-white">hooks</span>, <span class="font-semibold text-white">contexts</span>, <span class="font-semibold text-white">lib</span> y <span class="font-semibold text-white">data</span>, separando claramente responsabilidades entre routing, UI, lógica de negocio y utilidades compartidas.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El renderizado SSR mejora tiempos de carga y posicionamiento SEO, mientras que el tipado estricto con TypeScript garantiza consistencia en todo el código base. La lógica de filtrado fue desacoplada en custom hooks, permitiendo reutilización entre distintas categorías.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Tipado estricto con TypeScript
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Renderizado SSR para SEO y performance
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura modular con separación de responsabilidades
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Custom hooks para lógica de filtrado
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Componentes reutilizables
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Routing dinámico con catch-all segments
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  // vivarium
  {
    id: 25,
    title: "Vivarium",
    slug: "vivarium",
    liveSiteUrl: "",
    githubUrl: "https://github.com/eduviana/tienda-joaquin-valdez",
    desc: "Plataforma web para vivero con catálogo administrable y panel de gestión de productos.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "NextAuth",
      "MercadoPago",
      "Cloudinary",
    ],
    categories: ["Freelance", "Nextjs", "Fullstack"],
    thumbnail: "/projects/fullstack/vivarium/vivarium-1.webp",
    images: [
      "/projects/fullstack/vivarium/vivarium-1.webp",
      "/projects/fullstack/vivarium/vivarium-2.webp",
      "/projects/fullstack/vivarium/vivarium-3.webp",
      "/projects/fullstack/vivarium/vivarium-4.webp",
      "/projects/fullstack/vivarium/vivarium-5.webp",
      "/projects/fullstack/vivarium/vivarium-6.webp",
      "/projects/fullstack/vivarium/vivarium-7.webp",
      "/projects/fullstack/vivarium/vivarium-8.webp",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">5</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Entidades</span>
          </div>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Modelos de Datos</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Ts Estricto</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Tipado Estricto</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">3</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Niveles</span>
          </div>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Categorías Jerárquicas</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Autogestionable</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Panel Administrativo</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Vivarium fue desarrollado como proyecto freelance para un vivero real que necesitaba una presencia digital profesional capaz de exhibir su catálogo de productos sin depender constantemente de soporte técnico para realizar cambios o actualizaciones.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El negocio manejaba una gran variedad de plantas, insumos y productos organizados en múltiples categorías, lo que requería una forma clara y escalable de estructurar el catálogo. Además, la operatoria comercial no seguía un modelo de ecommerce tradicional: muchos productos se trabajaban bajo demanda o con disponibilidad variable, lo que hacía necesario un sistema flexible capaz de adaptarse a cambios del negocio.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto representa un ejercicio de desarrollo orientado a negocio: construir una plataforma que brindara autonomía operativa al cliente, manteniendo flexibilidad para adaptarse a cambios comerciales sin necesidad de rediseñar completamente la solución.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Catálogo y navegación</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El catálogo se organiza mediante un sistema de categorías jerárquicas, permitiendo estructurar productos en distintos niveles y facilitar la navegación del usuario.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Categorías multinivel con relaciones padre-hijo.</li>
            <li class="m-0">Navegación generada dinámicamente desde base de datos.</li>
            <li class="m-0">Nuevas categorías se reflejan automáticamente sin modificar código.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Panel administrativo oculto</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sitio incorpora una sección privada accesible únicamente mediante autenticación (ruta <span class="font-semibold text-white">/productos</span>), donde el propietario del negocio gestiona el catálogo completo sin necesidad de conocimientos técnicos ni intervención del desarrollador.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Crear, editar y eliminar productos con formulario tipado.</li>
            <li class="m-0">Carga de imágenes directamente al panel con Cloudinary.</li>
            <li class="m-0">Definición de productos destacados para la página principal.</li>
            <li class="m-0">Visualización de órdenes de compra con filtros y ordenamiento.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión de imágenes</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Las imágenes del catálogo se gestionan mediante Cloudinary, permitiendo carga de assets desde el panel administrativo y optimización automática de contenido multimedia.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Carga directa desde el panel administrativo.</li>
            <li class="m-0">Optimización automática de imágenes.</li>
            <li class="m-0">Almacenamiento externo desacoplado.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Flujo comercial adaptable</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema fue concebido inicialmente con soporte para ecommerce y pagos online mediante MercadoPago, pero fue diseñado para permitir cambios en el modelo comercial sin afectar la estructura principal.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Integración con MercadoPago mediante Checkout + Webhooks.</li>
            <li class="m-0">Checkout deshabilitado temporalmente sin afectar el catálogo.</li>
            <li class="m-0">Reemplazo por contacto directo vía WhatsApp.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Categorías jerárquicas con parentId</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema implementa una estructura multinivel basada en relaciones padre-hijo (<span class="font-semibold text-white">parentId</span>), permitiendo construir un árbol dinámico de categorías desde base de datos.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión permite que cualquier nueva categoría agregada desde el panel administrativo impacte automáticamente sobre la navegación, evitando hardcode y favoreciendo escalabilidad. La alternativa habría sido categorías planas con etiquetas, pero eso habría limitado la capacidad de representación del catálogo real del negocio.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Adaptación a cambios del modelo de negocio</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Inicialmente el proyecto incorporó compra online integrada con MercadoPago. Sin embargo, al evolucionar el modelo comercial del vivero hacia ventas bajo demanda, el flujo de checkout fue deshabilitado y reemplazado por contacto directo vía WhatsApp.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La integración con MercadoPago fue diseñada utilizando Checkout + Webhooks, desacoplando el flujo de pagos del resto del sistema. Esto permitió deshabilitar temporalmente la compra online sin afectar el catálogo ni el panel administrativo, manteniendo la posibilidad de reactivar la funcionalidad en el futuro sin rediseñar la plataforma.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Autonomía operativa del cliente</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El objetivo no era solamente construir un sitio web, sino brindar autonomía operativa al cliente. Por ello se implementó un panel administrativo completo donde puede gestionar productos, categorías y contenido destacado sin depender del desarrollador.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La navegación se genera dinámicamente a partir de la información persistida en base de datos, por lo que nuevas categorías o cambios estructurales se reflejan automáticamente sin necesidad de modificar código. Esto reduce costos de mantenimiento y empodera al cliente en la gestión de su negocio digital.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando Next.js con App Router, TypeScript y base de datos relacional MySQL, organizando las rutas mediante <span class="font-semibold text-white">Route Groups</span> (<span class="font-semibold text-white">(public)</span> y <span class="font-semibold text-white">(private)</span>) para separar claramente la experiencia del visitante del panel administrativo del propietario.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La autenticación se gestiona con NextAuth mediante Credentials Provider, mientras que las imágenes se manejan con Cloudinary, desacoplando el almacenamiento de assets del frontend. El estado del carrito de compras se mantiene con Zustand y persistencia en localStorage.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La integración con MercadoPago se implementó mediante Checkout + Webhooks con validación de firma HMAC, permitiendo deshabilitar el flujo de pagos sin afectar el catálogo ni el panel administrativo.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto incorpora prácticas orientadas a facilitar su evolución y mantenibilidad a largo plazo, priorizando tipado estricto y desacoplamiento de responsabilidades.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Panel oculto con autenticación NextAuth
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Categorías jerárquicas con parentId
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Imágenes con Cloudinary
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Validación HMAC en webhooks
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Tipado estricto con TypeScript
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Route Groups public/private
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  // apex-soporte
  {
    id: 24,
    title: "Apex Soporte",
    slug: "apex-soporte",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Sistema interno para gestión de incidencias, reportes y métricas operativas de soporte al cliente.",
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
    categories: ["Freelance", "Nextjs", "Fullstack"],
    thumbnail: "/projects/fullstack/apex/apex-1.webp",
    images: [
      "/projects/fullstack/apex/apex-1.webp",
      "/projects/fullstack/apex/apex-2.webp",
      "/projects/fullstack/apex/apex-3.webp",
      "/projects/fullstack/apex/apex-4.webp",
      "/projects/fullstack/apex/apex-5.webp",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">2</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Roles</span>
          </div>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Operador y Supervisor</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Google Sheets</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Base de Datos</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Google Auth</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Autenticación</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Recharts</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Gráficos</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Apex Soporte es un sistema interno desarrollado para una empresa tercerizada encargada del soporte de atención al cliente de Telecom - Personal. El proyecto nació para reemplazar un flujo operativo basado en Google Forms y Google Sheets, que aunque funcional, presentaba limitaciones importantes en visualización, trazabilidad y análisis de datos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proceso existente permitía registrar incidencias reportadas por clientes y consolidarlas automáticamente en planillas utilizadas por supervisores, pero a medida que el volumen de datos crecía, también aumentaba la complejidad de extraer información útil para la toma de decisiones.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El desafío principal consistía en construir una solución más controlada y profesional, manteniendo una experiencia visual suficientemente familiar para minimizar fricción en la adopción por parte de los operadores. Además del desarrollo técnico, el trabajo implicó interacción directa con gerencia para entender restricciones operativas, validar decisiones de producto y adaptar la implementación a necesidades reales del negocio.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Registro de incidencias</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Los operadores cuentan con formularios para registrar incidencias reportadas por clientes, reemplazando el flujo previo basado en Google Forms.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Formularios validados con React Hook Form + Zod.</li>
            <li class="m-0">Validación antes de persistir datos, reduciendo inconsistencias.</li>
            <li class="m-0">Interfaz familiar para minimizar curva de aprendizaje.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Reportes y métricas</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Los supervisores pueden consultar reportes estructurados mediante tablas y gráficos, permitiendo analizar tendencias e interpretar la información operativa con mayor claridad.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Visualización de métricas con Recharts.</li>
            <li class="m-0">Tablas con datos estructurados.</li>
            <li class="m-0">Análisis de tendencias y patrones.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión de adelantos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema también incorpora un módulo específico para la gestión de adelantos, manteniendo un flujo consistente dentro del sistema y evitando depender de múltiples herramientas externas para tareas relacionadas.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Flujo independiente dentro del mismo entorno.</li>
            <li class="m-0">Información centralizada y accesible.</li>
            <li class="m-0">Trazabilidad completa de operaciones.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Autenticación y seguridad</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema utiliza autenticación con Google, simplificando el acceso para los usuarios y manteniendo seguridad en el acceso a la plataforma.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Autenticación con Google.</li>
            <li class="m-0">Control de acceso por rol.</li>
            <li class="m-0">Sesiones seguras.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Transición gradual desde Google Sheets</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Una decisión importante fue mantener una experiencia visual cercana a la herramienta anterior para facilitar la adopción del sistema y reducir la curva de aprendizaje del equipo.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El objetivo no era solamente mejorar la tecnología, sino también construir una transición operativa realista para usuarios acostumbrados a otro flujo de trabajo. Esto implicó equilibrar mejoras de UX con familiaridad, evitando cambios bruscos que pudieran generar resistencia al nuevo sistema.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Optimización de performance por limitaciones de hosting</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Durante el desarrollo se identificó una degradación en tiempos de respuesta causada por el estado standby del plan gratuito de despliegue utilizado en ese momento.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Para reducir el impacto sobre métricas como LCP y mejorar percepción de velocidad, determinadas operaciones inicialmente renderizadas del lado del servidor fueron migradas al cliente. Esta decisión permitió mantener una experiencia más fluida sin comprometer el funcionamiento general del sistema, aunque sacrificó algunas ventajas del SSR.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Este es un ejemplo de cómo las restricciones de infraestructura pueden influir en decisiones arquitectónicas, obligando a evaluar trade-offs entre ideales técnicos y realidad operativa.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Validación de formularios con Zod</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La información es validada antes de persistirse, reduciendo inconsistencias y mejorando la calidad de los datos utilizados posteriormente por supervisión.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Se utilizó React Hook Form + Zod para validaciones, garantizando que los datos ingresados por operadores cumplan con los requisitos del negocio antes de ser almacenados. Esto evita problemas de calidad de datos que podrían afectar los reportes y métricas para supervisores.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando Next.js con renderizado SSR, buscando mejorar tiempos de carga, seguridad y experiencia general. MongoDB se utiliza como base de datos, autenticación con Google, React Hook Form + Zod para validaciones, Recharts para visualización de métricas y Tailwind CSS para estilos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La estructura del proyecto sigue un enfoque modular, separando responsabilidades entre componentes de UI, lógica de negocio y servicios de datos. Aunque inicialmente se priorizó el renderizado del lado del servidor, algunas operaciones fueron migradas al cliente para mejorar métricas de performance bajo las limitaciones del hosting utilizado.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además, se incorporaron pruebas automatizadas mediante Jest y React Testing Library para validar partes críticas del sistema, garantizando estabilidad ante cambios y facilitando mantenimiento a largo plazo.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Tests automatizados con Jest y React Testing Library
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Validación de formularios con Zod
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Visualización de métricas con Recharts
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Autenticación con Google
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura modular
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Separación de responsabilidades
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  //kass-tienda
  {
    id: 22,
    title: "Kass Tienda",
    slug: "kass-tienda",
    liveSiteUrl: "https://kass-tienda.vercel.app/",
    githubUrl: "https://github.com/eduviana/kassTienda",
    desc: "Ecommerce con catálogo administrado desde Google Sheets y pasarela de pagos integrada.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Google Sheets API",
      "Stripe",
    ],
    categories: ["Freelance", "Nextjs", "Fullstack"],
    thumbnail: "/projects/fullstack/kassTienda/kass_1.png",
    images: [
      "/projects/fullstack/kassTienda/kass_1.png",
      "/projects/fullstack/kassTienda/kass_2.png",
      "/projects/fullstack/kassTienda/kass_3.png",
      "/projects/fullstack/kassTienda/kass_4.png",
      "/projects/fullstack/kassTienda/kass_5.png",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Google Sheets</span>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm3 3v3h3V6H6zm0 6v3h3v-3H6zm6-6v3h3V6h-3zm6 0v3h3V6h-3zm-6 6v3h3v-3h-3zm6 0v3h3v-3h-3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">CMS del Catálogo</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Stripe</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Pagos Online</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Autogestionable</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Catálogo</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Cliente</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Autonomía Operativa</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Kass Tienda fue desarrollado para una tienda de accesorios y productos tecnológicos cuyo principal requerimiento era poder administrar el catálogo de productos sin depender de herramientas complejas ni conocimientos técnicos avanzados.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Durante el relevamiento inicial surgió una limitación importante: el cliente no se sentía cómodo utilizando paneles administrativos tradicionales, pero sí trabajaba habitualmente con hojas de cálculo similares a Excel. El desafío no era solamente construir un ecommerce funcional, sino encontrar una solución que el cliente realmente pudiera administrar de forma autónoma en el día a día.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este proyecto representa mi primera experiencia freelance completa, participando del análisis de requerimientos, evaluación de alternativas tecnológicas y toma de decisiones orientadas a negocio. El objetivo fue construir una solución técnicamente sólida pero adaptada a las capacidades reales del usuario final, reduciendo fricción operativa y favoreciendo la autonomía del negocio.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión de catálogo desde Google Sheets</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El catálogo de productos se administra completamente desde Google Sheets, eliminando la necesidad de un panel administrativo tradicional.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Cada hoja representa una categoría de productos.</li>
            <li class="m-0">Agregar, editar o eliminar productos desde una herramienta familiar.</li>
            <li class="m-0">Sincronización automática con el sitio.</li>
            <li class="m-0">Sin necesidad de capacitación adicional.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Experiencia ecommerce</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La tienda permite navegar categorías, visualizar productos y agregarlos al carrito mediante un flujo simple orientado a conversión.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Navegación por categorías.</li>
            <li class="m-0">Carrito de compras persistente.</li>
            <li class="m-0">Checkout seguro con Stripe.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Procesamiento de pagos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Para el procesamiento de pagos se integró Stripe, permitiendo un checkout seguro y desacoplado del frontend.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Integración server-side con Stripe.</li>
            <li class="m-0">Checkout seguro y profesional.</li>
            <li class="m-0">Lógica sensible protegida del cliente.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Google Sheets como fuente de datos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            En lugar de imponer una arquitectura tradicional con panel administrativo y base de datos propia, se optó por una solución más alineada al contexto operativo del negocio: utilizar Google Sheets como fuente de datos mediante su API oficial.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cada hoja representa una categoría de productos, permitiendo al cliente agregar, editar o eliminar información utilizando una herramienta que ya conocía, sin necesidad de capacitación adicional. El resultado fue un ecommerce funcional con un flujo de administración extremadamente simple, priorizando adopción y mantenibilidad por encima de complejidad innecesaria.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión demuestra criterio de producto: adaptar la tecnología al usuario y no al revés. Aunque técnicamente era posible construir un panel más sofisticado, se priorizó una herramienta familiar que el cliente pudiera utilizar con confianza desde el primer día.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Stripe server-side</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La integración con Stripe podía resolverse desde cliente o servidor. Se optó por un enfoque server-side, alineado con el modelo de Server Components de Next.js para reducir exposición de lógica sensible y mejorar seguridad.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión protege claves API y lógica de negocio del lado del servidor, evitando exposición innecesaria en el cliente. Además, facilita el manejo de webhooks y confirmaciones de pago de forma segura.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Arquitectura sin base de datos tradicional</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            También se evitó introducir una base de datos tradicional de forma innecesaria. La arquitectura fue diseñada alrededor del contexto real del cliente, priorizando simplicidad operativa, bajo mantenimiento y facilidad de adopción.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión reduce costos de infraestructura y complejidad de mantenimiento, mientras mantiene la flexibilidad necesaria para el volumen de datos del negocio. Google Sheets actúa como CMS improvisado, demostrando que las decisiones arquitectónicas deben responder al contexto real del proyecto, no a convenciones abstractas.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto fue desarrollado utilizando Next.js como framework fullstack, integrando Google Sheets API como fuente de datos principal y Stripe como pasarela de pagos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El carrito se implementó utilizando use-shopping-cart, simplificando el manejo de estado relacionado al checkout y al flujo de compra. Esta librería proporciona una abstracción sólida sobre Stripe, reduciendo complejidad de implementación.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La arquitectura fue diseñada para mantener simplicidad operativa: Google Sheets actúa como CMS, Stripe procesa pagos de forma segura del lado del servidor, y Next.js proporciona renderizado optimizado para SEO y performance. No se introdujo base de datos tradicional innecesariamente, adaptando la solución al contexto real del negocio.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Google Sheets API como CMS
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Integración server-side con Stripe
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Carrito con use-shopping-cart
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura adaptada al contexto del cliente
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Renderizado optimizado con Next.js
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Separación de responsabilidades
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  //movix
  {
    id: 21,
    title: "Movix",
    slug: "movix",
    liveSiteUrl: "https://movix-nu-six.vercel.app/",
    githubUrl: "https://github.com/eduviana/movix",
    desc: "Aplicación web de de películas y series, enfocada en arquitectura frontend, consumo de APIs externas y gestión eficiente del estado global.",
    technologies: ["React", "Sass", "Redux"],
    categories: ["React"],
    thumbnail: "/projects/fullstack/movix/movix-1.webp",
    images: [
      "/projects/fullstack/movix/movix-1.webp",
      "/projects/fullstack/movix/movix-3.webp",
      "/projects/fullstack/movix/movix-4.webp",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">TMDB API</span>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">API Externa</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Redux</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Estado Global</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Lazy Loading</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Optimización</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Infinite Scroll</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Experiencia de Usuario</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Movix es una aplicación web desarrollada para profundizar conocimientos en arquitectura frontend, manejo de estado global y consumo de APIs externas. El proyecto consume datos desde la API pública de The Movie Database (TMDB), permitiendo explorar películas y series mediante una interfaz orientada al descubrimiento de contenido.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Más allá del resultado visual, el principal objetivo fue fortalecer habilidades relacionadas con reutilización de componentes, organización del estado de la aplicación y toma de decisiones arquitectónicas dentro de un entorno React. El proyecto sirvió como espacio de experimentación para trabajar patrones de UI reutilizable, manejo eficiente de requests y optimización de experiencia de usuario.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Exploración de contenido</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La aplicación permite explorar películas y series consumiendo información en tiempo real desde TMDB.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Navegación por diferentes categorías.</li>
            <li class="m-0">Filtrado por género.</li>
            <li class="m-0">Búsquedas dinámicas por título.</li>
            <li class="m-0">Descubrimiento de contenido desde una única interfaz.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Visualización detallada</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cada película o serie cuenta con una página de detalle que centraliza información relevante como descripción, géneros, fecha de lanzamiento, puntuación y contenido multimedia asociado.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Información completa del contenido.</li>
            <li class="m-0">Reproducción de trailers embebidos.</li>
            <li class="m-0">Contenido audiovisual sin abandonar la aplicación.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Experiencia de usuario</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Se priorizó una experiencia fluida tanto en desktop como en dispositivos móviles, incorporando optimizaciones de performance y usabilidad.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Carga perezosa de imágenes.</li>
            <li class="m-0">Filtros interactivos.</li>
            <li class="m-0">Visualización dinámica de puntuaciones.</li>
            <li class="m-0">Diseño responsive consistente.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión de estado selectiva con Redux</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los aprendizajes más importantes del proyecto fue comprender que no todo estado debe residir en Redux. El store global se utilizó únicamente para información compartida entre múltiples secciones de la aplicación, mientras que los estados locales permanecieron encapsulados dentro de sus respectivos componentes.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión permitió reducir complejidad innecesaria, evitar sobrecarga en el store y mantener una arquitectura más mantenible. Demostrar criterio para decidir qué estado globalizar y cuál mantener local es fundamental en aplicaciones React de mediana a gran escala.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Desacoplamiento entre UI y datos</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El consumo de datos se realiza mediante la API pública de TMDB, desacoplando completamente la lógica de presentación del origen de información.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta separación permite modificar la fuente de datos en el futuro sin afectar componentes de UI, facilitando mantenimiento y evolución del proyecto. Los servicios de datos actúan como capa intermedia entre la API y los componentes, centralizando lógica de fetch y transformación de datos.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Componentes reutilizables</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El proyecto fue estructurado priorizando componentes reutilizables y responsabilidades bien delimitadas, evitando lógica acoplada entre UI, fetch de datos y estado compartido.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Este enfoque permitió convertir Movix en un proyecto de aprendizaje particularmente valioso para comprender patrones de escalabilidad en aplicaciones React. La reutilización de componentes reduce duplicación de código y facilita incorporación de nuevas funcionalidades.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando React, Redux y SASS, integrando además librerías específicas para visualización de métricas, reproducción multimedia y optimización de carga.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La estructura del proyecto separa claramente responsabilidades entre componentes de UI, servicios de datos, estado global y estilos. Redux se utiliza para estado compartido, mientras que los estados locales permanecen encapsulados. Los estilos se organizan mediante SASS con mixins personalizados para responsive design.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El consumo de la API de TMDB se realiza mediante servicios desacoplados, permitiendo modificar la fuente de datos sin afectar componentes. La aplicación incorpora lazy loading de imágenes y componentes para optimizar performance y tiempo de carga inicial.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Gestión de estado selectiva con Redux
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Componentes reutilizables
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Desacoplamiento entre UI y datos
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Lazy loading de imágenes y componentes
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura responsive con SASS
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Separación de responsabilidades
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  //gamehub
  {
    id: 20,
    title: "Gamehub",
    slug: "gamehub",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Plataforma de streaming en vivo inspirada en Twitch, con autenticación, chat en tiempo real, integración con OBS Studio y gestión de canales.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "LiveKit",
      "Clerk",
      "Prisma",
      "MySQL",
    ],
    categories: ["Nextjs"],
    thumbnail: "/projects/fullstack/gamehub/gamehub-1.webp",
    images: [],
    video: "https://www.youtube.com/embed/U6XBxhTLSuU",
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">LiveKit</span>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Streaming en Vivo</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Chat</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Tiempo Real</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">OBS Studio</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Integración</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Clerk Auth</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Social + Webhook</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          GameHub es una plataforma de streaming en vivo inspirada en Twitch, desarrollada con el objetivo de comprender e implementar una arquitectura capaz de soportar transmisión en tiempo real, autenticación, chat y gestión de usuarios.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto fue concebido como un desafío técnico orientado a explorar tecnologías de realtime, eventos asincrónicos y servicios externos, replicando funcionalidades esenciales presentes en plataformas de streaming modernas. A diferencia de otros proyectos del portfolio, aquí la complejidad estuvo menos centrada en reglas de negocio y más en la integración coordinada de múltiples servicios externos dentro de una misma experiencia de usuario.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Debido a que el proyecto depende de servicios pagos para funcionar correctamente, actualmente no se encuentra desplegado en producción. En su lugar, el portfolio incluye un video demostrativo del flujo completo, mostrando autenticación, creación de canal, transmisión y configuración de chat.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Experiencia del streamer</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Cada usuario autenticado puede crear y administrar su propio canal de streaming, personalizando información del perfil y configuraciones relacionadas con la transmisión.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Creación y administración de canales.</li>
            <li class="m-0">Generación de credenciales para OBS Studio.</li>
            <li class="m-0">Transmisión en vivo desde herramientas profesionales.</li>
            <li class="m-0">Personalización de perfil del canal.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Interacción en tiempo real</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La plataforma incorpora un sistema de chat en vivo configurable por el streamer, incluyendo opciones como slow mode, solo suscriptores o chat deshabilitado.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Chat en vivo con modos configurables.</li>
            <li class="m-0">Sincronización en tiempo real entre espectadores.</li>
            <li class="m-0">Salas específicas por canal.</li>
            <li class="m-0">Moderación y control del streamer.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Autenticación y sincronización</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema utiliza Clerk para autenticación mediante Google, con un webhook que sincroniza automáticamente la información del usuario autenticado con la base de datos interna.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Autenticación con Google mediante Clerk.</li>
            <li class="m-0">Webhook para sincronización automática de usuarios.</li>
            <li class="m-0">Gestión de sesiones segura.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Streaming con LiveKit</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            La infraestructura de streaming se construyó sobre LiveKit, permitiendo gestionar conexiones en tiempo real, video, audio y mensajería dentro de salas independientes.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esto implicó trabajar con eventos asincrónicos, flujos distribuidos y sincronización entre múltiples usuarios concurrentes, elevando considerablemente la complejidad técnica respecto de aplicaciones CRUD tradicionales. LiveKit proporciona una infraestructura sólida para WebRTC, reduciendo la complejidad de implementar streaming desde cero.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Integración con OBS Studio</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema genera credenciales específicas para conectar software externo como OBS Studio, permitiendo transmitir video en vivo desde herramientas profesionales.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión permite a los streamers utilizar herramientas que ya conocen, en lugar de obligarlos a usar un software de transmisión personalizado. La integración con OBS demuestra comprensión de flujos de trabajo reales del dominio del streaming.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Sincronización de autenticación con webhook</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Clerk se utiliza para autenticación mediante Google, mientras que un webhook sincroniza automáticamente la información del usuario autenticado con la base de datos interna.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Este enfoque desacopla la gestión de autenticación del sistema principal, permitiendo que Clerk maneje seguridad de credenciales mientras la aplicación mantiene su propia representación de usuarios. El webhook garantiza que cada nuevo usuario o actualización de perfil se refleje inmediatamente en la base de datos interna.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Chat configurable por streamer</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El chat en vivo es configurable por el streamer, incluyendo opciones como slow mode, solo suscriptores o chat deshabilitado.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta flexibilidad demuestra comprensión de las necesidades reales de moderación en plataformas de streaming. Los streamers necesitan control sobre cómo interactúa su audiencia, y el sistema proporciona esas herramientas sin requerir intervención técnica.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando Next.js, Clerk, LiveKit y shadcn/ui, integrando autenticación, streaming en tiempo real y sincronización de usuarios dentro de una arquitectura fullstack.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los mayores desafíos del proyecto fue dividir un problema técnicamente complejo en módulos manejables, manteniendo separación clara entre autenticación, realtime, persistencia y experiencia de usuario. La arquitectura sigue un enfoque modular donde cada servicio externo (Clerk, LiveKit) tiene responsabilidades bien delimitadas.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este proyecto resultó especialmente valioso para fortalecer habilidades relacionadas con arquitectura de sistemas complejos, eventos asincrónicos e integración de servicios externos. La complejidad no estuvo en reglas de negocio, sino en coordinar múltiples servicios distribuidos dentro de una experiencia de usuario coherente.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Streaming en tiempo real con LiveKit
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Integración con OBS Studio
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Chat configurable en tiempo real
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Autenticación con Clerk + webhook sync
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura modular con servicios desacoplados
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Video demostrativo del flujo completo
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  // admin-ui recharts
  {
    id: 17,
    title: "Admin UI Recharts",
    slug: "admin-ui-recharts",
    liveSiteUrl: "https://react-dashboard-recharts-nff7.vercel.app/",
    githubUrl: "https://github.com/eduviana/React-Dashboard-Recharts",
    desc: "Dashboard administrativo enfocado en visualización de datos, tablas reutilizables y arquitectura de interfaces escalables.",
    technologies: ["React", "TypeScript", "Material UI", "Recharts", "React Router DOM", "Vite", "Sass"],
    categories: ["React"],
    thumbnail: "/projects/fullstack/adminRecharts/adminUI-1.webp",
    images: [
      "/projects/fullstack/adminRecharts/adminUI-1.webp",
      "/projects/fullstack/adminRecharts/adminUI-2.webp",
      "/projects/fullstack/adminRecharts/adminUI-3.webp",
      "/projects/fullstack/adminRecharts/adminUI-4.webp",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <div class="flex items-baseline gap-3">
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">6</span>
            <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Vistas</span>
          </div>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Dashboard Modular</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">DataGrid</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Tablas Reutilizables</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Recharts</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Gráficos Interactivos</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Mock Data</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Sin Dependencias Externas</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Admin UI Recharts es un dashboard administrativo desarrollado como ejercicio técnico para profundizar en la construcción de interfaces complejas de gestión de datos, visualización estadística y navegación modular.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto simula un entorno administrativo profesional, incorporando gráficos interactivos, tablas avanzadas y múltiples vistas organizadas dentro de una arquitectura frontend mantenible. El objetivo principal fue comprender cómo escalan las interfaces administrativas cuando aumenta la complejidad visual, la cantidad de información y la interacción entre componentes reutilizables.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de trabajar sobre experiencia visual y organización de layouts, el proyecto permitió profundizar en patrones comunes presentes en sistemas empresariales: dashboards analíticos, tablas configurables, métricas visuales y navegación avanzada.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Dashboard y visualización</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El sistema simula un panel administrativo moderno con múltiples vistas orientadas a visualización y análisis de datos mediante gráficos de área, barras y métricas visuales.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Gráficos interactivos con Recharts.</li>
            <li class="m-0">Métricas visuales y KPIs.</li>
            <li class="m-0">Jerarquía visual consistente.</li>
            <li class="m-0">Múltiples vistas de dashboard.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Tablas reutilizables</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los componentes más relevantes fue la implementación de tablas administrativas utilizando Material UI Data Grid, con soporte para ordenamiento, filtrado y paginación.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Data Grid con ordenamiento y filtrado.</li>
            <li class="m-0">Paginación configurable.</li>
            <li class="m-0">Estructura reutilizable entre módulos.</li>
            <li class="m-0">Desacoplamiento entre columnas, filas y comportamiento.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Navegación y experiencia de uso</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La navegación entre secciones se construyó utilizando React Router DOM v6, permitiendo mantener una experiencia fluida y organizada dentro del dashboard.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Navegación modular con React Router DOM v6.</li>
            <li class="m-0">Diseño responsive adaptable.</li>
            <li class="m-0">Consistencia visual entre secciones.</li>
            <li class="m-0">Experiencia fluida en distintos tamaños de pantalla.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Tablas abstractas y reutilizables</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            En lugar de construir componentes específicos para cada entidad, la lógica fue abstraída para crear una estructura reutilizable, desacoplando columnas, filas y comportamiento dinámico entre módulos.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión permite que nuevas tablas se implementen rápidamente configurando columnas y datos, sin necesidad de crear componentes desde cero. El patrón reduce duplicación de código y facilita mantenimiento consistente entre distintas secciones del dashboard.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Arquitectura de estilos con Sass mixins</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Uno de los focos técnicos del proyecto fue mejorar la organización del CSS responsive mediante mixins personalizados en Sass.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            En lugar de centralizar media queries al final de cada archivo, los breakpoints se integraron directamente dentro de cada módulo visual, facilitando comprensión, mantenibilidad y lectura del comportamiento responsive. Este enfoque mejora la experiencia de desarrollo y reduce errores de consistencia responsive.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Datos locales para estabilidad del portfolio</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Para garantizar estabilidad permanente del proyecto y evitar dependencia de infraestructura externa, se optó por trabajar con datos simulados localmente en lugar de APIs o bases de datos reales.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta decisión permitió mantener el proyecto siempre funcional como pieza de portfolio, eliminando riesgos asociados a límites de uso, caídas de servicio o expiración de proveedores externos. Aunque técnicamente era posible conectar APIs reales, la prioridad fue garantizar disponibilidad permanente para demostraciones.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando React, Vite, React Router DOM, Material UI, Recharts y Sass, combinando librerías orientadas a navegación, visualización de datos e interfaces administrativas.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El stack fue seleccionado para experimentar con patrones comunes de dashboards empresariales, priorizando velocidad de desarrollo, modularidad y reutilización de componentes. La estructura del proyecto separa claramente responsabilidades entre componentes de UI, lógica de visualización, navegación y estilos.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los estilos se organizan mediante Sass con mixins personalizados para responsive design, integrando breakpoints directamente en cada módulo visual. La navegación utiliza React Router DOM v6 para mantener experiencia fluida entre secciones del dashboard.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Tablas reutilizables con Material UI Data Grid
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Visualización de datos con Recharts
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura de estilos con Sass mixins
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Navegación modular con React Router DOM v6
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Datos locales para estabilidad permanente
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Diseño responsive consistente
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },

  //flair-store
  {
    id: 19,
    title: "Flair Store",
    slug: "flair-store",
    liveSiteUrl: "https://sanity-ecommerce-orcin.vercel.app/",
    githubUrl: "https://github.com/eduviana/Sanity-Ecommerce",
    desc: "Ecommerce de indumentaria construido con arquitectura Headless CMS, incorporando catálogo dinámico, filtros sincronizados por URL y Stripe como método de pago.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Stripe", "Radix UI", "use-shopping-cart"],
    categories: ["Nextjs"],
    thumbnail: "/projects/fullstack/flair/flair-1.webp",
    images: [
      "/projects/fullstack/flair/flair-1.webp",
      "/projects/fullstack/flair/flair-2.webp",
      "/projects/fullstack/flair/flair-3.webp",
      "/projects/fullstack/flair/flair-4.webp",
      "/projects/fullstack/flair/flair-5.webp",
    ],
    content: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Métricas destacadas -->
  <section>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-blue-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Sanity</span>
          <svg class="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">CMS Headless</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-green-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Filtros URL</span>
          <svg class="w-5 h-5 text-green-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Estado Derivado</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-purple-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Stripe</span>
          <svg class="w-5 h-5 text-purple-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Checkout Seguro</span>
      </div>
      <div class="flex flex-col items-start justify-between rounded-xl bg-zinc-800/50 border border-white/[0.08] p-5 border-t-2 border-t-orange-500">
        <div class="w-full flex justify-between items-start mb-3">
          <span class="text-2xl md:text-2xl font-bold text-white tracking-tighter">Radix UI</span>
          <svg class="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
        <span class="text-gray-300 font-semibold uppercase tracking-wider text-xs">Componentes Accesibles</span>
      </div>
    </div>
  </section>

  <!-- Visión general -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Visión general</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Flair Store es un ecommerce de indumentaria desarrollado para profundizar en la construcción de aplicaciones modernas utilizando Next.js 13, App Router y arquitectura basada en Headless CMS. El objetivo principal fue comprender cómo modelar un catálogo dinámico, administrar contenido desde una plataforma externa y construir una experiencia de compra completa.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación permite explorar productos de indumentaria, navegar entre categorías, aplicar filtros, gestionar un carrito de compras y completar pagos mediante una pasarela externa, replicando comportamientos comunes presentes en ecommerce reales.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los principales focos del proyecto fue comprender cómo desacoplar el contenido del frontend mediante un CMS headless, permitiendo administrar productos y variantes sin necesidad de modificar el código de la aplicación. Más allá de la implementación visual, el desafío estuvo en entender cómo escalan los sistemas ecommerce cuando intervienen contenido dinámico, filtros complejos, checkout y gestión externa de catálogo.
        </p>
      </div>
    </div>
  </section>

  <!-- Funcionalidades principales -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Funcionalidades principales</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Enfoque Headless CMS</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Se utilizó Sanity como CMS headless, permitiendo modelar productos, variantes, imágenes y atributos de forma desacoplada del frontend.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Administración de productos desde Sanity.</li>
            <li class="m-0">Contenido desacoplado del frontend.</li>
            <li class="m-0">Escalabilidad y mantenimiento simplificado.</li>
            <li class="m-0">Autonomía de contenido sin modificar código.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Experiencia de compra</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El ecommerce fue diseñado para ofrecer una experiencia de compra simple y moderna, permitiendo navegar por categorías, visualizar detalles de producto y gestionar un carrito persistente.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Navegación por categorías y productos.</li>
            <li class="m-0">Carrito de compras persistente.</li>
            <li class="m-0">Checkout seguro con Stripe.</li>
            <li class="m-0">Detalles de producto con variantes.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Sistema de filtros</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El catálogo implementa filtros dinámicos por atributos del producto como talle, color y categoría, además de ordenamiento por precio y fecha.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Filtros por talle, color y categoría.</li>
            <li class="m-0">Ordenamiento por precio y fecha.</li>
            <li class="m-0">Sincronización mediante query params en URL.</li>
            <li class="m-0">Estado de navegación compartible.</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h4 class="text-lg md:text-xl font-semibold text-white">Gestión del catálogo</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Los productos son administrados desde Sanity, permitiendo editar información como nombre, descripción, imágenes, variantes, talles, colores y precios desde una interfaz externa.
          </p>
          <ul class="list-disc list-inside flex flex-col gap-0.5 text-base text-text-muted !leading-[1.9] lg:text-lg">
            <li class="m-0">Edición completa de productos desde Sanity.</li>
            <li class="m-0">Gestión de variantes, talles y colores.</li>
            <li class="m-0">Imágenes y contenido multimedia.</li>
            <li class="m-0">Sin dependencia directa del código.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Decisiones de ingeniería -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Decisiones de ingeniería</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-6">

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Estado derivado desde URL</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Una de las decisiones arquitectónicas principales fue resolver filtros y ordenamientos utilizando estado derivado desde query params, evitando complejidad innecesaria en la sincronización entre componentes.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            En lugar de resolver la sincronización mediante múltiples estados distribuidos entre componentes, el sistema se diseñó utilizando query params en la URL, permitiendo mantener navegación, estado y filtros completamente sincronizados. Este enfoque mejora previsibilidad, simplifica mantenimiento y permite compartir enlaces con filtros activos preservando completamente el estado de navegación.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Modelado desacoplado con Headless CMS</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            El uso de un Headless CMS permitió modelar entidades dinámicas como productos y variantes sin acoplar la estructura del catálogo al frontend.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Esta aproximación facilita escalabilidad, mantenimiento y autonomía de contenido, evitando hardcodear información dentro de la aplicación principal. El principal aprendizaje del proyecto fue comprender patrones habituales en ecommerce modernos: arquitectura desacoplada, contenido administrable y estado derivado, prácticas ampliamente utilizadas en aplicaciones orientadas a catálogo y venta online.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <h4 class="text-lg md:text-xl font-semibold text-white">Componentes accesibles con Radix UI</h4>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            También se incorporó Radix UI para construir componentes accesibles y use-shopping-cart para simplificar la gestión del carrito.
          </p>
          <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
            Radix UI proporciona primitivas sin estilo con accesibilidad incorporada, permitiendo construir componentes personalizados sin sacrificar cumplimiento de WCAG. Esta decisión demuestra atención a la accesibilidad desde la arquitectura, no como agregado posterior.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando Next.js 13, TypeScript, Sanity, Stripe y Tailwind CSS, combinando renderizado moderno, contenido desacoplado y checkout seguro.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La arquitectura sigue el patrón Headless CMS donde Sanity actúa como fuente de contenido, Next.js proporciona renderizado moderno con App Router, y Stripe procesa pagos de forma segura. Los filtros se resuelven mediante estado derivado desde query params, evitando complejidad innecesaria en la sincronización entre componentes.
        </p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          También se incorporó Radix UI para construir componentes accesibles y use-shopping-cart para simplificar la gestión del carrito. Esta combinación de tecnologías permite mantener separación clara entre contenido, presentación y lógica de negocio, facilitando mantenimiento y evolución del ecommerce.
        </p>
      </div>
    </div>
  </section>

  <!-- Calidad y mantenibilidad -->
  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Calidad y mantenibilidad</h3>
        <span class="flex-1 h-[1px] bg-[rgba(255,126,0,0.3)] rounded-full"></span>
      </div>
      <div class="flex flex-col gap-5">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de cubrir los requisitos funcionales, el proyecto incorpora prácticas orientadas a facilitar su evolución, mantenibilidad y confiabilidad a largo plazo.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Arquitectura Headless CMS con Sanity
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Filtros sincronizados via URL query params
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Checkout seguro con Stripe
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Componentes accesibles con Radix UI
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Next.js 13 con App Router
          </span>
          <span class="inline-flex items-center gap-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 text-sm text-white">
            <span class="text-brand-primary">✓</span> Tipado estricto con TypeScript
          </span>
        </div>
      </div>
    </div>
  </section>

</div>`,
  },
];
