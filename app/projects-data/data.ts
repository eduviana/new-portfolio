import { Project } from "./data.interface";

export const projects: Project[] = [
  //mediflow
  {
    id: 28,
    title: "Mediflow",
    slug: "mediflow",
    githubUrl: "https://github.com/eduviana/mediflow",
    desc: "Sistema web de gestión de turnos médicos con integración de pagos online",
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

    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Problema -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Problema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La gestión de turnos médicos suele involucrar múltiples actores, procesos manuales y una fuerte dependencia de llamadas telefónicas, agendas fragmentadas y coordinación constante entre pacientes, secretarias y profesionales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          En este contexto aparecen situaciones habituales que complejizan la operación diaria: pacientes que todavía no poseen cuenta, turnos gestionados por teléfono, horarios bloqueados por pagos incompletos o información dispersa entre distintos usuarios del sistema.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          <span class="font-semibold text-white">Mediflow</span>
          fue desarrollado tomando como referencia conversaciones mantenidas con un centro médico privado real, buscando modelar procesos cotidianos de atención, organización de agenda y coordinación operativa dentro de una propuesta funcional de gestión médica.
        </p>
      </div>

    </div>
  </section>

  <!-- Solución -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Solución
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema propone una experiencia centralizada donde los pacientes pueden
          <span class="font-semibold text-white">
            registrarse, iniciar sesión y gestionar turnos de forma online
          </span>,
          seleccionando especialidad, profesional, fecha y horario disponible desde una interfaz guiada.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          A su vez, contempla escenarios reales que suelen quedar fuera de una implementación idealizada. Por ejemplo, las secretarias pueden crear turnos para pacientes que llaman por teléfono, incluso cuando todavía no poseen una cuenta registrada, compartiendo posteriormente enlaces de pago externos para completar la reserva.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los desafíos más interesantes del proyecto fue resolver la continuidad de información: si un paciente creado manualmente decide registrarse más adelante, el sistema puede
          <span class="font-semibold text-white">
            vincular automáticamente la nueva cuenta con el historial existente
          </span>,
          evitando duplicados y preservando la consistencia de turnos, pagos e información previa.
        </p>
      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Más allá de la demo técnica, Mediflow fue concebido como una
          <span class="font-semibold text-white">
            propuesta funcional de validación
          </span>
          para explorar reglas del dominio médico, evaluar distintos flujos de atención y analizar cómo interactúan pacientes, secretarias y profesionales dentro de un mismo ecosistema operativo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto fue pensado para acompañar conversaciones con un centro médico privado real, permitiendo iterar sobre procesos, detectar necesidades operativas y evolucionar progresivamente hacia una eventual implementación productiva.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Pacientes -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Pacientes
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los pacientes pueden
          <span class="font-semibold text-white">
            registrarse mediante credenciales tradicionales o autenticación con Google
          </span>,
          iniciar sesión y recuperar su contraseña en caso de ser necesario.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Una vez autenticados, acceden a un dashboard donde pueden consultar sus próximos turnos, visualizar estados de pago, fechas, horarios, especialidades y profesionales asignados, además de acceder al historial completo desde una sección dedicada.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El flujo de reserva permite seleccionar
          <span class="font-semibold text-white">
            especialidad, profesional, fecha y horario disponible
          </span>,
          para luego completar el pago mediante MercadoPago. Si el pago no se realiza dentro del tiempo establecido, el turno expira automáticamente y el horario vuelve a quedar disponible para otros pacientes.
        </p>
      </div>

    </div>
  </section>

  <!-- Secretaría -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Secretaría y operación diaria
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los objetivos principales del sistema fue contemplar escenarios reales de operación médica. Por esta razón, el rol de
          <span class="font-semibold text-white">
            secretaria
          </span>
          no depende exclusivamente de pacientes registrados en la plataforma.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Las secretarias pueden crear turnos manualmente para personas que llaman por teléfono o prefieren no utilizar la web, generando reservas incluso cuando el paciente todavía no posee una cuenta registrada. Posteriormente, el sistema permite compartir enlaces de pago externos para completar el proceso.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además, disponen de una vista global del consultorio mediante dos formatos de trabajo:
          <span class="font-semibold text-white">
            próximas citas y calendario
          </span>.
          Desde allí pueden monitorear todos los turnos de todos los profesionales, facilitando la organización diaria y el seguimiento general de la agenda médica.
        </p>
      </div>

    </div>
  </section>

  <!-- Profesionales -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Profesionales médicos
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El rol <span class="font-semibold text-white">profesional</span> comparte parte de la experiencia de secretaría, pero adaptada únicamente a los turnos que le corresponden. Tanto en la vista de próximas citas como en el calendario, cada profesional visualiza exclusivamente su propia agenda.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Desde el panel de próximas citas, el profesional puede
          <span class="font-semibold text-white">
            iniciar una atención médica
          </span>,
          accediendo a una pantalla donde se muestra la información del paciente, observaciones relacionadas a la consulta y controles para cancelar o finalizar la atención.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esto permite modelar un flujo de trabajo más cercano a un escenario real, donde el estado del turno evoluciona durante el proceso de atención y queda reflejado dentro del sistema.
        </p>
      </div>

    </div>
  </section>

  <!-- Estado compartido -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Estado compartido del sistema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          A medida que los turnos cambian de estado —por ejemplo, cuando un profesional inicia o finaliza una atención— la información se actualiza automáticamente entre usuarios conectados.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esto permite que secretarias y profesionales trabajen sobre una visión sincronizada del estado actual del consultorio, manteniendo coherencia operativa sin necesidad de refrescar manualmente la aplicación.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Arquitectura del proyecto -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Arquitectura del proyecto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto fue desarrollado utilizando
          <span class="font-semibold text-white">
            Next.js App Router, TypeScript y Tailwind CSS
          </span>,
          siguiendo un enfoque modular orientado a separación de responsabilidades.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La carpeta
          <span class="font-semibold text-white"> app/ </span>
          se utiliza únicamente para definir páginas y routing, mientras que toda la lógica de negocio se encuentra desacoplada dentro de una estructura
          <span class="font-semibold text-white">
            feature-first
          </span>,
          organizada por dominios funcionales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cada módulo encapsula sus propios componentes, hooks, schemas, helpers, tipos y servicios, permitiendo una estructura más mantenible, escalable y fácil de extender conforme el dominio evoluciona.
        </p>
      </div>

    </div>
  </section>

  <!-- Autenticación y permisos -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Autenticación y permisos
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La autenticación fue implementada mediante
          <span class="font-semibold text-white">
            NextAuth
          </span>,
          soportando credenciales tradicionales, login con Google y recuperación de contraseña.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema utiliza una estrategia multi-rol para diferenciar el comportamiento entre
          <span class="font-semibold text-white">
            pacientes, secretarias y profesionales médicos
          </span>,
          controlando tanto la navegación como las acciones disponibles para cada perfil.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Para reforzar seguridad y consistencia, las solicitudes son interceptadas mediante middleware, validando permisos antes de acceder a páginas protegidas y evitando accesos no autorizados según el rol autenticado.
        </p>
      </div>

    </div>
  </section>

  <!-- Gestión de disponibilidad -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Gestión de disponibilidad
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          En lugar de persistir horarios disponibles directamente en base de datos, el sistema almacena únicamente la
          <span class="font-semibold text-white">
            disponibilidad laboral del profesional
          </span>
          y los turnos existentes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La disponibilidad final se calcula dinámicamente combinando horarios configurados, reservas activas, estados de pago y expiración de turnos pendientes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este enfoque evita inconsistencias de sincronización, reduce datos redundantes y permite recalcular slots disponibles de forma flexible frente a cambios operativos.
        </p>
      </div>

    </div>
  </section>

  <!-- Sincronización multi-cliente -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Sincronización multi-cliente
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los principales desafíos técnicos del proyecto fue mantener consistencia entre múltiples usuarios conectados simultáneamente, especialmente entre secretarias y profesionales visualizando agendas distintas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Para resolverlo, se adoptó
          <span class="font-semibold text-white">
            TanStack Query
          </span>
          como capa de sincronización de datos, incorporando cache inteligente, invalidación automática luego de mutaciones y actualización periódica de información relevante.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Aunque se evaluó una arquitectura basada en WebSockets, se decidió implementar
          <span class="font-semibold text-white">
            polling inteligente
          </span>
          como estrategia inicial, priorizando simplicidad operativa y menor complejidad de mantenimiento para el volumen actual del sistema.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El calendario y los horarios disponibles se sincronizan automáticamente cada
          <span class="font-semibold text-white">
            30 segundos con la pestaña activa y 60 segundos en segundo plano
          </span>,
          permitiendo mantener información consistente entre usuarios sin necesidad de recargar manualmente la aplicación.
        </p>
      </div>

    </div>
  </section>

  <!-- Persistencia -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Persistencia y entorno
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La persistencia del sistema se implementó utilizando
          <span class="font-semibold text-white">
            PostgreSQL + Prisma ORM
          </span>,
          modelando entidades relacionadas con usuarios, pacientes, profesionales, especialidades, disponibilidad y turnos médicos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El entorno de desarrollo fue containerizado mediante
          <span class="font-semibold text-white">
            Docker
          </span>,
          acompañado de scripts de seed para poblar datos iniciales y facilitar escenarios de prueba reproducibles durante el desarrollo de nuevas funcionalidades.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },
      ],
    },
  },

  // medical-healt
  {
    id: 27,
    title: "Medical Health",
    slug: "medical-healt",
    githubUrl: "https://github.com/eduviana/hard360",
    desc: "Sistema web de gestión de turnos para obra social",
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
      "/projects/fullstack/medicalHealt/medicalHealt-1.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-2.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-3.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-4.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-5.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-6.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-7.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-8.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-9.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-10.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-11.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-12.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-13.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-14.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-15.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-16.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-17.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-18.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-19.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-20.webp",
      "/projects/fullstack/medicalHealt/medicalHealt-21.webp",
    ],

    content: {
      type: "tabs",
      tabs: [
        {
          key: "summary",
          label: "Resumen",
          body: `

<div class="flex flex-col gap-[6rem]">

  <!-- Problema -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Problema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Muchas obras sociales todavía dependen de procesos fragmentados para la gestión de atención: generación manual de turnos, ausencia de trazabilidad operativa y poca visibilidad sobre tiempos de espera, rendimiento del personal o carga de trabajo entre áreas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          A medida que el sistema crece en cantidad de servicios, usuarios y reglas de negocio, también aumenta la complejidad: permisos diferenciados, sincronización entre múltiples operadores y necesidad de métricas confiables para la toma de decisiones.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este proyecto surge con el objetivo de modelar un entorno interno de atención para una obra social, contemplando escenarios reales de operación y buscando una arquitectura capaz de evolucionar junto al dominio del negocio.
        </p>
      </div>

    </div>
  </section>

  <!-- Solución -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Solución
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Se desarrolló un sistema interno de gestión de turnos para múltiples áreas de una obra social, con una arquitectura basada en roles
          <span class="font-semibold text-white">
            ADMIN, SUPERVISOR y OPERATOR
          </span>,
          cada uno con permisos y responsabilidades claramente diferenciadas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema permite a los afiliados generar turnos para distintas áreas, mientras que los operadores trabajan sobre paneles operativos en tiempo real para llamar turnos, iniciar atención, gestionar ausencias y finalizar operaciones registrando métricas precisas del proceso.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además de la operatoria diaria, la plataforma incorpora estadísticas, auditorías, sincronización en tiempo real y un sistema de permisos jerárquico orientado a entornos internos con múltiples actores simultáneos.
        </p>
      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este proyecto tuvo dos objetivos principales:
          <span class="font-semibold text-white">
            construir un sistema significativamente más complejo
          </span>
          que los desarrollados anteriormente y, al mismo tiempo, incorporar tecnologías de sincronización en tiempo real dentro de un entorno de negocio con reglas operativas reales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También funcionó como un ejercicio de evolución arquitectónica, obligándome a enfrentar problemas de escalabilidad, organización del código y separación de responsabilidades, identificando limitaciones tempranas y refactorizando progresivamente hacia una estructura más mantenible.
        </p>
      </div>

    </div>
  </section>

</div>

`,
        },

        {
          key: "functionality",
          label: "Funcionamiento",
          body: `

<div class="flex flex-col gap-[6rem]">

  <!-- Roles -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Roles del sistema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema utiliza una estructura de permisos basada en tres roles:
          <span class="font-semibold text-white">
            ADMIN, SUPERVISOR y OPERATOR
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los usuarios ADMIN pueden administrar completamente el sistema: habilitar servicios, editar cuentas, visualizar estadísticas y configurar la operación. Los SUPERVISOR comparten prácticamente la misma interfaz, pero operan bajo un esquema de solo lectura.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El rol OPERATOR representa al personal operativo de la obra social y accede únicamente a las áreas asignadas por un administrador, permitiendo que una misma cuenta pueda trabajar en uno o múltiples servicios.
        </p>
      </div>

    </div>
  </section>

  <!-- Flujo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Flujo operativo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El flujo de atención fue modelado explícitamente:
          <span class="font-semibold text-white">
            generación de turno → llamado → inicio de atención → finalización
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esta separación permite registrar tiempos independientes para cada etapa, evitando distorsiones estadísticas. Por ejemplo, el tiempo que un afiliado tarda en presentarse luego de ser llamado no penaliza artificialmente el tiempo real de atención del operador.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Durante la atención, el operador dispone de un panel visual que muestra el tiempo transcurrido mediante una barra progresiva que cambia de color según el tiempo ideal estimado, funcionando como referencia operativa sin aplicar penalizaciones automáticas.
        </p>
      </div>

    </div>
  </section>

  <!-- Realtime -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Sincronización en tiempo real
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema implementa sincronización en tiempo real utilizando
          <span class="font-semibold text-white">
            Pusher
          </span>,
          permitiendo que los paneles operativos y las pantallas de sala de espera se actualicen instantáneamente sin necesidad de refrescar la página.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cuando un operador llama un turno, el evento impacta simultáneamente en el panel de trabajo y en el visor de turnos distribuido en las salas de espera, mostrando el ticket llamado y el historial reciente de atención.
        </p>
      </div>

    </div>
  </section>

</div>

`,
        },

        {
          key: "architecture",
          label: "Arquitectura",
          body: `

<div class="flex flex-col gap-[6rem]">

  <!-- Arquitectura -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Organización del proyecto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js 16, TypeScript, Prisma, PostgreSQL, Clerk, Pusher, Tailwind y shadcn/ui
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          A nivel organizacional se implementó una
          <span class="font-semibold text-white">
            Modular Feature Architecture
          </span>,
          donde la carpeta <span class="font-semibold text-white">app/</span> contiene únicamente el routing y cada dominio del negocio encapsula su propia lógica, tipos, componentes y servicios dentro de <span class="font-semibold text-white">features/</span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esta decisión permitió mantener alta cohesión, reducir acoplamiento entre dominios y facilitar la evolución independiente de cada área del sistema.
        </p>
      </div>

    </div>
  </section>

  <!-- Seguridad -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Seguridad y RBAC
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La autenticación fue implementada con
          <span class="font-semibold text-white">
            Clerk
          </span>,
          mientras que la autorización se resolvió mediante un sistema RBAC propio basado en jerarquías de permisos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El middleware centraliza autenticación, redirección dinámica de dashboards y control de acceso por rutas. Además, las APIs críticas aplican validaciones adicionales según rol para evitar confiar únicamente en el cliente o en el routing.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema también registra eventos sensibles de seguridad mediante auditorías persistentes, incluyendo intentos de acceso indebido, dispositivo, IP y rol del usuario.
        </p>
      </div>

    </div>
  </section>

  <!-- Decisiones -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Decisiones técnicas
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Se priorizó el uso de
          <span class="font-semibold text-white">
            Server Components
          </span>
          siempre que fue posible, delegando únicamente la interacción al cliente mediante <span class="font-semibold text-white">use client</span> y endpoints específicos cuando un Client Component necesitaba datos persistidos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También se implementó una arquitectura basada en
          <span class="font-semibold text-white">
            adapters
          </span>
          para desacoplar reglas específicas de áreas similares, evitando dependencias cruzadas entre módulos que podrían evolucionar de forma distinta en el futuro.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Muchas decisiones arquitectónicas surgieron de problemas encontrados durante el desarrollo y posteriores refactorizaciones, convirtiendo al proyecto en un proceso de aprendizaje práctico sobre mantenibilidad, escalabilidad y diseño de software.
        </p>
      </div>

    </div>
  </section>

</div>

`,
        },
      ],
    },
  },

  // hard360
  {
    id: 26,
    title: "Hard360",
    slug: "hard360",
    liveSiteUrl: "https://hard360.vercel.app",
    githubUrl: "https://github.com/eduviana/hard360",
    desc: "Sitio web para una tienda de informática",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Nextjs"],
    thumbnail: "/projects/personales/hard360/hard360-1.webp",
    images: [
      "/projects/personales/hard360/hard360-1.webp",
      "/projects/personales/hard360/hard360-2.webp",
      "/projects/personales/hard360/hard360-3.webp",
      "/projects/personales/hard360/hard360-4.webp",
      "/projects/personales/hard360/hard360-5.webp",
      "/projects/personales/hard360/hard360-6.webp",
      "/projects/personales/hard360/hard360-7.webp",
    ],
    content: {
      type: "tabs",
      tabs: [
        {
          key: "summary",
          label: "Resumen",
          body: `

<div class="flex flex-col gap-[6rem]">

  <!-- Problema -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Problema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los ecommerce tecnológicos suelen enfrentarse a un desafío importante: ofrecer grandes catálogos de productos con múltiples variantes técnicas sin comprometer la experiencia de navegación ni volver inmantenible la estructura de datos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          A medida que aumentan las categorías y subcategorías, aparecen problemas comunes como filtros difíciles de escalar, especificaciones inconsistentes entre productos y lógica repetida para renderizar vistas dinámicas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          <span class="font-semibold text-white">Hard360</span> surge como un proyecto orientado a resolver estos desafíos, priorizando escalabilidad estructural, modelado tipado de datos y una experiencia de usuario fluida dentro de un ecommerce tecnológico moderno.
        </p>
      </div>

    </div>
  </section>

  <!-- Solución -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Solución
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Se desarrolló un ecommerce fullstack enfocado en productos tecnológicos utilizando
          <span class="font-semibold text-white">
            Next.js, TypeScript y SSR
          </span>,
          buscando una navegación rápida, mejor posicionamiento SEO y una arquitectura capaz de crecer sin degradar mantenibilidad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema permite navegar categorías, subcategorías y productos mediante rutas dinámicas, aplicar filtros contextuales y consultar especificaciones técnicas adaptadas al tipo de producto, evitando estructuras genéricas poco representativas del dominio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además, incorpora un carrito global, renderizado optimizado y una estructura de datos fuertemente tipada para garantizar consistencia entre productos con características técnicas muy diferentes.
        </p>
      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este proyecto tuvo como objetivo profundizar el uso de
          <span class="font-semibold text-white">
            TypeScript estricto, renderizado SSR y organización modular
          </span>,
          incorporando decisiones arquitectónicas más sólidas respecto a proyectos anteriores.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También funcionó como un espacio para mejorar el desacoplamiento entre lógica y presentación, explorando patrones de organización más mantenibles y modelando un dominio técnico complejo sin depender de APIs externas.
        </p>
      </div>

    </div>
  </section>

</div>

`,
        },

        {
          key: "functionality",
          label: "Funcionamiento",
          body: `

<div class="flex flex-col gap-[6rem]">

  <!-- Navegación -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Navegación dinámica
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La navegación del ecommerce se construyó mediante una ruta dinámica utilizando
          <span class="font-semibold text-white">
            app/[...slug]/page.tsx
          </span>,
          permitiendo interpretar distintos segmentos de URL para renderizar categorías, subcategorías o páginas de producto individuales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este enfoque evita duplicación de páginas, reduce complejidad de routing y permite escalar el catálogo sin necesidad de crear nuevas estructuras manuales por cada categoría agregada.
        </p>
      </div>

    </div>
  </section>

  <!-- Filtros -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Sistema de filtros
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Toda la lógica de filtrado fue desacoplada y centralizada dentro de un
          <span class="font-semibold text-white">
            custom hook
          </span>,
          permitiendo reutilizar comportamiento entre distintas categorías sin contaminar componentes de UI con lógica de negocio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los filtros se adaptan dinámicamente según la categoría activa, permitiendo trabajar con distintas combinaciones de atributos sin generar estructuras rígidas o difíciles de mantener.
        </p>
      </div>

    </div>
  </section>

  <!-- Productos y carrito -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Productos y carrito
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cada producto cuenta con un sistema de especificaciones adaptado a su categoría. Por ejemplo, un SSD posee propiedades distintas a un HDD o una notebook, evitando estructuras genéricas poco representativas del dominio técnico.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El carrito de compras utiliza
          <span class="font-semibold text-white">
            Context API
          </span>
          como estado global, permitiendo persistir selección de productos y sincronizar la experiencia de compra entre distintas vistas del ecommerce.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los precios se almacenan internamente en centavos como <span class="font-semibold text-white">string</span> y se formatean dinámicamente en el frontend, evitando problemas de precisión numérica y errores de redondeo monetario.
        </p>
      </div>

    </div>
  </section>

</div>

`,
        },

        {
          key: "architecture",
          label: "Arquitectura",
          body: `

<div class="flex flex-col gap-[6rem]">

  <!-- Organización -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Organización del proyecto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js, TypeScript, Tailwind CSS y SSR
          </span>,
          priorizando performance, SEO y mantenibilidad del código.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La estructura del proyecto se organizó de forma modular mediante carpetas especializadas:
          <span class="font-semibold text-white">
            app, components, hooks, contexts, lib y data
          </span>,
          separando claramente responsabilidades entre routing, UI, lógica de negocio y utilidades compartidas.
        </p>
      </div>

    </div>
  </section>

  <!-- Modelado -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Modelado de datos
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los focos principales del proyecto fue el
          <span class="font-semibold text-white">
            tipado estricto del dominio
          </span>.
          Cada categoría de producto posee entidades y especificaciones técnicas propias, como <span class="font-semibold text-white">NotebookSpecs</span>, <span class="font-semibold text-white">TvSpecs</span> o <span class="font-semibold text-white">RamSpecs</span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esto permitió modelar información mucho más precisa y escalable, evitando objetos excesivamente genéricos que terminan degradando consistencia y mantenibilidad con el crecimiento del catálogo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Para este proyecto de portfolio se priorizó una fuente de datos local tipada mediante archivos <span class="font-semibold text-white">.ts</span>, permitiendo un mayor control sobre el modelado, la consistencia de datos y la estabilidad del entorno de desarrollo.
        </p>
      </div>

    </div>
  </section>

  <!-- Aprendizajes -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Aprendizajes
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este proyecto consolidó el uso de buenas prácticas de frontend moderno, especialmente en
          <span class="font-semibold text-white">
            desacoplamiento de lógica, renderizado SSR, modelado tipado y reutilización de componentes
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También permitió mejorar el criterio arquitectónico respecto a organización del código, entendiendo cuándo abstraer lógica y cómo construir estructuras preparadas para crecer sin perder claridad.
        </p>
      </div>

    </div>
  </section>

</div>

`,
        },
      ],
    },
  },

  // vivarium
  {
    id: 25,
    title: "Vivarium",
    slug: "vivarium",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Sitio web para un vivero con panel administrativo y Mercadopago integrado.",
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Problema -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Problema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          <span class="font-semibold text-white">Vivarium</span>
          fue desarrollado para un vivero real que necesitaba una presencia digital profesional capaz de exhibir su catálogo de productos sin depender constantemente de soporte técnico para realizar cambios o actualizaciones.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El negocio manejaba una gran variedad de plantas, insumos y productos organizados en múltiples categorías, lo que requería una forma clara y escalable de estructurar el catálogo y mantener la navegación simple para el usuario final.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además, la operatoria comercial no seguía un modelo de ecommerce tradicional: muchos productos se trabajaban bajo demanda o con disponibilidad variable, lo que hacía necesario un sistema flexible capaz de adaptarse a cambios del negocio.
        </p>
      </div>

    </div>
  </section>

  <!-- Solución -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Solución
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema propone una plataforma administrable donde el cliente puede
          <span class="font-semibold text-white">
            gestionar productos, categorías y contenido destacado de forma autónoma
          </span>,
          sin conocimientos técnicos y sin depender del desarrollador para actualizar el sitio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Se implementó un panel privado con autenticación segura desde donde es posible crear, editar y eliminar productos, además de organizar el catálogo utilizando categorías jerárquicas que impactan automáticamente sobre la navegación del sitio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Inicialmente el proyecto incorporó compra online integrada con MercadoPago. Sin embargo, al evolucionar el modelo comercial del vivero hacia ventas bajo demanda, el flujo de checkout fue deshabilitado y reemplazado por contacto directo vía WhatsApp, manteniendo una experiencia alineada con la operación real del negocio.
        </p>
      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El objetivo del proyecto fue construir una plataforma que brindara
          <span class="font-semibold text-white">
            autonomía operativa y presencia digital profesional
          </span>
          al emprendimiento, permitiendo administrar el catálogo de forma simple y sostenible en el tiempo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Al mismo tiempo, el sistema fue diseñado como una base flexible capaz de adaptarse a cambios comerciales, permitiendo reactivar funcionalidades de ecommerce en el futuro sin necesidad de rediseñar completamente la plataforma.
        </p>
      </div>

    </div>
  </section>

</div>
      `,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Catálogo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Catálogo y navegación
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El catálogo se organiza mediante un sistema de
          <span class="font-semibold text-white">
            categorías jerárquicas
          </span>,
          permitiendo estructurar productos en distintos niveles y facilitar la navegación del usuario.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La navegación se genera dinámicamente a partir de la información persistida en base de datos, por lo que nuevas categorías o cambios estructurales se reflejan automáticamente sin necesidad de modificar código.
        </p>
      </div>

    </div>
  </section>

  <!-- Administración -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Panel administrativo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El cliente dispone de un panel privado con autenticación segura para administrar el contenido del sitio de forma independiente.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Desde este panel es posible
          <span class="font-semibold text-white">
            crear, editar y eliminar productos
          </span>,
          gestionar categorías y definir productos destacados que aparecen en la página principal.
        </p>
      </div>

    </div>
  </section>

  <!-- Flujo comercial -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Flujo comercial
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema fue concebido inicialmente con soporte para ecommerce y pagos online mediante MercadoPago.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Tras un cambio en la operatoria del vivero, el checkout fue deshabilitado y reemplazado por
          <span class="font-semibold text-white">
            contacto directo vía WhatsApp
          </span>,
          manteniendo el descubrimiento de productos y simplificando la gestión comercial del cliente.
        </p>
      </div>

    </div>
  </section>

</div>
      `,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Arquitectura general -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Arquitectura general
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js, TypeScript, autenticación con NextAuth y base de datos relacional
          </span>,
          manteniendo una separación clara entre autenticación, persistencia y lógica del negocio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La estructura del proyecto fue pensada para facilitar el mantenimiento y permitir incorporar nuevas funcionalidades sin afectar el resto del sistema.
        </p>
      </div>

    </div>
  </section>

  <!-- Categorías -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Categorías jerárquicas
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema implementa una estructura multinivel basada en relaciones
          <span class="font-semibold text-white">
            padre-hijo (<code>parentId</code>)
          </span>,
          permitiendo construir un árbol dinámico de categorías desde base de datos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esto permite que cualquier nueva categoría agregada desde el panel administrativo impacte automáticamente sobre la navegación, evitando hardcode y favoreciendo escalabilidad.
        </p>
      </div>

    </div>
  </section>

  <!-- Assets y pagos -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Assets y pagos
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Las imágenes del catálogo se gestionan mediante
          <span class="font-semibold text-white">
            Cloudinary
          </span>,
          permitiendo carga de assets desde el panel administrativo y optimización automática de contenido multimedia.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La integración con MercadoPago fue diseñada utilizando
          <span class="font-semibold text-white">
            Checkout + Webhooks
          </span>,
          desacoplando el flujo de pagos del resto del sistema y permitiendo deshabilitar temporalmente la compra online sin afectar el catálogo ni el panel administrativo.
        </p>
      </div>

    </div>
  </section>

</div>
      `,
        },
      ],
    },
  },

  // apex-soporte
  {
    id: 24,
    title: "Apex Soporte",
    slug: "apex-soporte",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Sitio web que permite gestionar reclamos de los usuarios y visualizar la información en tablas y gráficos.",
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Problema -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Problema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          
          Aplicación desarrollado para una empresa tercerizada encargada del soporte de atención al cliente de  <span class="font-semibold text-white">
            Telecom - Personal
          </span>, con el objetivo de reemplazar un flujo operativo basado en Google Forms y Google Sheets.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proceso existente permitía registrar incidencias reportadas por clientes y consolidarlas automáticamente en planillas utilizadas por supervisores, pero presentaba limitaciones importantes en visualización, trazabilidad y análisis de datos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El desafío principal consistía en construir una solución más robusta y profesional, manteniendo una experiencia visual suficientemente familiar para minimizar fricción en la adopción por parte de los operadores.
        </p>
      </div>

    </div>
  </section>

  <!-- Solución -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Solución
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema reemplaza formularios y planillas dispersas por una
          <span class="font-semibold text-white">
            aplicación web centralizada
          </span>,
          permitiendo registrar incidencias, consultar reportes y analizar información desde una interfaz más estructurada.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los operadores pueden cargar incidencias mediante formularios validados, mientras que supervisores acceden a reportes con tablas y visualizaciones gráficas para interpretar métricas operativas y detectar patrones con mayor facilidad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También se incorporó un módulo específico para la gestión de adelantos, manteniendo un flujo consistente dentro del sistema y evitando depender de múltiples herramientas externas para tareas relacionadas.
        </p>
      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto tuvo como objetivo modernizar una operación interna existente sin romper hábitos de trabajo ya establecidos, priorizando una transición progresiva hacia una herramienta más controlada y escalable.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además del desarrollo técnico, el trabajo implicó interacción directa con gerencia para entender restricciones operativas, validar decisiones de producto y adaptar la implementación a necesidades reales del negocio.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Operadores -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Operadores
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los operadores cuentan con formularios para registrar incidencias reportadas por clientes, reemplazando el flujo previo basado en Google Forms.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La información es validada antes de persistirse, reduciendo inconsistencias y mejorando la calidad de los datos utilizados posteriormente por supervisión.
        </p>
      </div>

    </div>
  </section>

  <!-- Supervisión -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Supervisión y Reportes
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los supervisores pueden consultar reportes estructurados mediante tablas y gráficos, permitiendo analizar tendencias e interpretar la información operativa con mayor claridad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema también incorpora un flujo independiente para la gestión de adelantos, manteniendo la información centralizada y accesible desde un mismo entorno.
        </p>
      </div>

    </div>
  </section>

  <!-- Experiencia -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Experiencia de Usuario
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Una decisión importante fue mantener una experiencia visual cercana a la herramienta anterior para facilitar la adopción del sistema y reducir la curva de aprendizaje del equipo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El objetivo no era solamente mejorar la tecnología, sino también construir una transición operativa realista para usuarios acostumbrados a otro flujo de trabajo.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Stack -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Stack Tecnológico
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js con renderizado SSR
          </span>,
          buscando mejorar tiempos de carga, seguridad y experiencia general.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Se utilizó MongoDB como base de datos, autenticación con Google, React Hook Form + Zod para validaciones, Recharts para visualización de métricas y Tailwind CSS para estilos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además, se incorporaron pruebas automatizadas mediante
          <span class="font-semibold text-white">
            Jest y React Testing Library
          </span>
          para validar partes críticas del sistema.
        </p>
      </div>

    </div>
  </section>

  <!-- Decisiones técnicas -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Decisiones Técnicas
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Durante el desarrollo se identificó una degradación en tiempos de respuesta causada por el estado standby del plan gratuito de despliegue utilizado en ese momento.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Para reducir el impacto sobre métricas como LCP y mejorar percepción de velocidad, determinadas operaciones inicialmente renderizadas del lado del servidor fueron migradas al cliente.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esta decisión permitió mantener una experiencia más fluida sin comprometer el funcionamiento general del sistema.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },
      ],
    },
  },

  //kass-tienda
  {
    id: 22,
    title: "Kass Tienda",
    slug: "kass-tienda",
    liveSiteUrl: "https://kass-tienda.vercel.app/",
    githubUrl: "https://github.com/eduviana/kassTienda",
    desc: "Sitio web para una tienda de accesorios y productos tecnológicos con pasarela de pagos.",
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Problema -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Problema
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          <span class="font-semibold text-white">Kass Tienda</span>
          fue desarrollado para una tienda de accesorios y productos tecnológicos cuyo principal requerimiento era poder administrar el catálogo de productos sin depender de herramientas complejas ni conocimientos técnicos avanzados.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Durante el relevamiento inicial surgió una limitación importante: el cliente no se sentía cómodo utilizando paneles administrativos tradicionales, pero sí trabajaba habitualmente con hojas de cálculo similares a Excel.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El desafío no era solamente construir un ecommerce funcional, sino encontrar una solución que el cliente realmente pudiera administrar de forma autónoma en el día a día.
        </p>
      </div>

    </div>
  </section>

  <!-- Solución -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Solución
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          En lugar de imponer una arquitectura tradicional con panel administrativo y base de datos propia, se optó por una solución más alineada al contexto operativo del negocio:
          <span class="font-semibold text-white">
            utilizar Google Sheets como fuente de datos
          </span>
          mediante su API oficial.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cada hoja representa una categoría de productos, permitiendo al cliente agregar, editar o eliminar información utilizando una herramienta que ya conocía, sin necesidad de capacitación adicional.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El resultado fue un ecommerce funcional con un flujo de administración extremadamente simple, priorizando adopción y mantenibilidad por encima de complejidad innecesaria.
        </p>
      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El objetivo del proyecto fue construir una solución técnicamente sólida pero adaptada a las capacidades reales del usuario final, reduciendo fricción operativa y favoreciendo la autonomía del negocio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además, este proyecto representó mi primera experiencia freelance completa, participando del análisis de requerimientos, evaluación de alternativas tecnológicas y toma de decisiones orientadas a negocio.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Catálogo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Gestión de Catálogo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El catálogo de productos se administra completamente desde
          <span class="font-semibold text-white">
            Google Sheets
          </span>,
          eliminando la necesidad de un panel administrativo tradicional.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cada hoja del documento representa una categoría distinta, permitiendo organizar productos de manera intuitiva y mantener el catálogo actualizado sin conocimientos técnicos.
        </p>
      </div>

    </div>
  </section>

  <!-- Ecommerce -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Experiencia Ecommerce
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La tienda permite navegar categorías, visualizar productos y agregarlos al carrito mediante un flujo simple orientado a conversión.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Para el procesamiento de pagos se integró
          <span class="font-semibold text-white">
            Stripe
          </span>,
          permitiendo un checkout seguro y desacoplado del frontend.
        </p>
      </div>

    </div>
  </section>

  <!-- Enfoque -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Enfoque de Producto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Una de las decisiones más importantes fue
          <span class="font-semibold text-white">
            adaptar la tecnología al usuario
          </span>
          y no al revés.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Aunque técnicamente era posible construir un panel más sofisticado, se priorizó una herramienta familiar que el cliente pudiera utilizar con confianza desde el primer día.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Stack -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Stack Tecnológico
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto fue desarrollado utilizando
          <span class="font-semibold text-white">
            Next.js como framework fullstack
          </span>,
          integrando Google Sheets API como fuente de datos principal y Stripe como pasarela de pagos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El carrito se implementó utilizando
          <span class="font-semibold text-white">
            use-shopping-cart
          </span>,
          simplificando el manejo de estado relacionado al checkout y al flujo de compra.
        </p>

      </div>

    </div>
  </section>

  <!-- Decisiones -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Decisiones Técnicas
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La integración con Stripe podía resolverse desde cliente o servidor. Se optó por un enfoque
          <span class="font-semibold text-white">
            server-side
          </span>,
          alineado con el modelo de Server Components de Next.js para reducir exposición de lógica sensible y mejorar seguridad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También se evitó introducir una base de datos tradicional de forma innecesaria. La arquitectura fue diseñada alrededor del contexto real del cliente, priorizando simplicidad operativa, bajo mantenimiento y facilidad de adopción.
        </p>
      </div>

    </div>
  </section>

</div>
`,
        },
      ],
    },
  },

  //movix
  {
    id: 21,
    title: "Movix",
    slug: "movix",
    liveSiteUrl: "https://movix-nu-six.vercel.app/",
    githubUrl: "https://github.com/eduviana/movix",
    desc: "Página web de películas y series que utiliza la API gratuita 'The Movie Database'. ",
    technologies: ["React", "Sass", "Redux"],
    categories: ["React"],
    thumbnail: "/projects/fullstack/movix/movix-1.webp",
    images: [
      "/projects/fullstack/movix/movix-1.webp",
      "/projects/fullstack/movix/movix-3.webp",
      "/projects/fullstack/movix/movix-4.webp",
    ],
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Proyecto -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Proyecto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          <span class="font-semibold text-white">Movix</span> es una aplicación web desarrollada para profundizar conocimientos en arquitectura frontend, manejo de estado global y consumo de APIs externas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto consume datos desde la API pública de
          <span class="font-semibold text-white">The Movie Database (TMDB)</span>,
          permitiendo explorar películas y series mediante una interfaz orientada al descubrimiento de contenido.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Más allá del resultado visual, el principal objetivo fue fortalecer habilidades relacionadas con reutilización de componentes, organización del estado de la aplicación y toma de decisiones arquitectónicas dentro de un entorno React.
        </p>

      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este proyecto tuvo como propósito principal mejorar el entendimiento práctico de
          <span class="font-semibold text-white">
            React, Redux y la separación de responsabilidades
          </span>
          dentro de aplicaciones frontend de mediana complejidad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          También sirvió como espacio de experimentación para trabajar patrones de UI reutilizable, manejo eficiente de requests y optimización de experiencia de usuario mediante lazy loading, reproducción multimedia y navegación responsive.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Exploración -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Exploración de contenido
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación permite explorar
          <span class="font-semibold text-white">
            películas y series
          </span>
          consumiendo información en tiempo real desde TMDB.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Los usuarios pueden navegar diferentes categorías, filtrar contenido por género y realizar búsquedas dinámicas por título, facilitando el descubrimiento de nuevo contenido desde una única interfaz.
        </p>

      </div>

    </div>
  </section>

  <!-- Detalle -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Visualización detallada
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cada película o serie cuenta con una página de detalle que centraliza información relevante como descripción, géneros, fecha de lanzamiento, puntuación y contenido multimedia asociado.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Además, se integró reproducción de trailers embebidos, permitiendo consumir contenido audiovisual sin abandonar la aplicación.
        </p>

      </div>

    </div>
  </section>

  <!-- UX -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Experiencia de usuario
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Se priorizó una experiencia fluida tanto en desktop como en dispositivos móviles, incorporando optimizaciones como
          <span class="font-semibold text-white">
            carga perezosa de imágenes, filtros interactivos y visualización dinámica de puntuaciones
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto fue diseñado con enfoque responsive, buscando mantener consistencia visual y rendimiento durante la navegación.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Stack -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Stack tecnológico
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            React, Redux y SASS
          </span>,
          integrando además librerías específicas para visualización de métricas, reproducción multimedia y optimización de carga.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El consumo de datos se realiza mediante la API pública de TMDB, desacoplando completamente la lógica de presentación del origen de información.
        </p>

      </div>

    </div>
  </section>

  <!-- Redux -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Gestión de estado
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los aprendizajes más importantes del proyecto fue comprender que
          <span class="font-semibold text-white">
            no todo estado debe residir en Redux
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El store global se utilizó únicamente para información compartida entre múltiples secciones de la aplicación, mientras que los estados locales permanecieron encapsulados dentro de sus respectivos componentes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esta decisión permitió reducir complejidad innecesaria, evitar sobrecarga en el store y mantener una arquitectura más mantenible.
        </p>

      </div>

    </div>
  </section>

  <!-- Componentes -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Reutilización y separación de responsabilidades
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto fue estructurado priorizando
          <span class="font-semibold text-white">
            componentes reutilizables y responsabilidades bien delimitadas
          </span>,
          evitando lógica acoplada entre UI, fetch de datos y estado compartido.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este enfoque permitió convertir Movix en un proyecto de aprendizaje particularmente valioso para comprender patrones de escalabilidad en aplicaciones React.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },
      ],
    },
  },

  //gamehub
  {
    id: 20,
    title: "Gamehub",
    slug: "gamehub",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Plataforma que permite visualizar y realizar transmisiones en vivo.",
    technologies: ["Next.js", "Shadcn UI"],
    categories: ["Nextjs"],
    thumbnail: "/projects/fullstack/gamehub/gamehub-1.webp",
    images: [],
    video: "https://www.youtube.com/embed/U6XBxhTLSuU",
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Proyecto -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Proyecto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          <span class="font-semibold text-white">GameHub</span>
          es una plataforma de streaming en vivo inspirada en Twitch, desarrollada con el objetivo de comprender e implementar una arquitectura capaz de soportar
          <span class="font-semibold text-white">
            transmisión en tiempo real, autenticación, chat y gestión de usuarios
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El proyecto fue concebido como un desafío técnico orientado a explorar tecnologías de realtime, eventos asincrónicos y servicios externos, replicando funcionalidades esenciales presentes en plataformas de streaming modernas.
        </p>

      </div>

    </div>
  </section>

  <!-- Objetivo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Objetivo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los principales objetivos del proyecto fue aprender a trabajar con sistemas distribuidos y comunicación en tiempo real, enfrentando problemas relacionados con sincronización de estado, gestión de eventos y arquitectura desacoplada.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          A diferencia de otros proyectos del portfolio, aquí la complejidad estuvo menos centrada en reglas de negocio y más en la
          <span class="font-semibold text-white">
            integración coordinada de múltiples servicios externos
          </span>
          dentro de una misma experiencia de usuario.
        </p>

      </div>

    </div>
  </section>

  <!-- Estado -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Estado del proyecto
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Debido a que el proyecto depende de servicios pagos para funcionar correctamente, actualmente no se encuentra desplegado en producción.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          En su lugar, el portfolio incluye un
          <span class="font-semibold text-white">
            video demostrativo del flujo completo
          </span>,
          mostrando autenticación, creación de canal, transmisión y configuración de chat.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Streamer -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Experiencia del streamer
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Cada usuario autenticado puede crear y administrar su propio canal de streaming, personalizando información del perfil y configuraciones relacionadas con la transmisión.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          El sistema genera credenciales específicas para conectar software externo como
          <span class="font-semibold text-white">
            OBS Studio
          </span>,
          permitiendo transmitir video en vivo desde herramientas profesionales.
        </p>

      </div>

    </div>
  </section>

  <!-- Chat -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Interacción en tiempo real
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La plataforma incorpora un sistema de chat en vivo configurable por el streamer, incluyendo opciones como
          <span class="font-semibold text-white">
            slow mode, solo suscriptores o chat deshabilitado
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Tanto la transmisión como la interacción entre espectadores se sincronizan en tiempo real dentro de salas específicas, replicando la experiencia básica de una plataforma moderna de streaming.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `
<div class="flex flex-col gap-[6rem]">

  <!-- Stack -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Stack tecnológico
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js, Clerk, LiveKit y shadcn/ui
          </span>,
          integrando autenticación, streaming en tiempo real y sincronización de usuarios dentro de una arquitectura fullstack.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Clerk se utiliza para autenticación mediante Google, mientras que un webhook sincroniza automáticamente la información del usuario autenticado con la base de datos interna.
        </p>

      </div>

    </div>
  </section>

  <!-- Realtime -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Streaming y realtime
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          La infraestructura de streaming se construyó sobre
          <span class="font-semibold text-white">
            LiveKit
          </span>,
          permitiendo gestionar conexiones en tiempo real, video, audio y mensajería dentro de salas independientes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Esto implicó trabajar con eventos asincrónicos, flujos distribuidos y sincronización entre múltiples usuarios concurrentes, elevando considerablemente la complejidad técnica respecto de aplicaciones CRUD tradicionales.
        </p>

      </div>

    </div>
  </section>

  <!-- Aprendizaje -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Aprendizajes técnicos
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Uno de los mayores desafíos del proyecto fue dividir un problema técnicamente complejo en módulos manejables, manteniendo separación clara entre autenticación, realtime, persistencia y experiencia de usuario.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] md:text-lg">
          Este proyecto resultó especialmente valioso para fortalecer habilidades relacionadas con
          <span class="font-semibold text-white">
            arquitectura de sistemas complejos, eventos asincrónicos e integración de servicios externos
          </span>.
        </p>

      </div>

    </div>
  </section>

</div>
`,
        },
      ],
    },
  },

  //flair-store
  {
    id: 19,
    title: "Flair Store",
    slug: "flair-store",
    liveSiteUrl: "https://sanity-ecommerce-orcin.vercel.app/",
    githubUrl: "https://github.com/eduviana/Sanity-Ecommerce",
    desc: "Tienda online de venta de indumentaria realizado con Sanity y Next 13.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity"],
    categories: ["Nextjs"],
    thumbnail: "/projects/fullstack/flair/flair-1.webp",
    images: [
      "/projects/fullstack/flair/flair-1.webp",
      "/projects/fullstack/flair/flair-2.webp",
      "/projects/fullstack/flair/flair-3.webp",
      "/projects/fullstack/flair/flair-4.webp",
      "/projects/fullstack/flair/flair-5.webp",
    ],
    content: {
      type: "single",
      body: `
    <p>
      Ecommerce desarrollado con Next.js 13 y Sanity como headless CMS,
      orientado a la venta de indumentaria con sistema de filtros dinámicos,
      carrito de compras y pasarela de pagos integrada.
    </p>

    <h3>Arquitectura y Stack</h3>

    <ul>
      <li>Next.js 13 con App Router y TypeScript.</li>
      <li>Sanity como backend y gestor de contenido.</li>
      <li>Stripe para procesamiento de pagos.</li>
      <li>use-shopping-cart para gestión del carrito.</li>
      <li>Tailwind CSS con tema personalizado (dark mode).</li>
      <li>Radix UI y Sanity UI para componentes accesibles.</li>
    </ul>

    <p>
      Sanity se utilizó como CMS headless para modelar productos,
      categorías y variantes (talle, color, precio),
      permitiendo administración dinámica sin modificar el código.
      Su esquema flexible facilita escalabilidad y mantenimiento.
    </p>

    <h3>Sistema de Filtros y Ordenamiento</h3>

    <p>
      El catálogo implementa dos tipos de filtros:
      filtros por atributos del producto (categoría, talle, color)
      y ordenamiento (precio ascendente, descendente y más recientes).
    </p>

    <p>
      En lugar de manejar la comunicación entre componentes hijos y padre
      mediante múltiples estados y efectos,
      la sincronización se resolvió utilizando parámetros en la URL.
      Los componentes de filtro actualizan las query params,
      y el componente contenedor reacciona a esos cambios,
      disparando la re-renderización correspondiente.
    </p>

    <p>
      Este enfoque desacopla la lógica de filtrado,
      evita sobrecarga de estado compartido
      y mantiene el comportamiento predecible y escalable.
    </p>

    <h3>Experiencia de Usuario</h3>

    <ul>
      <li>Modo oscuro implementado mediante tema personalizado en Tailwind.</li>
      <li>Diseño completamente responsive.</li>
      <li>Gestión segura del checkout mediante Stripe.</li>
    </ul>

    <p>
      El proyecto permitió profundizar en arquitectura de ecommerce,
      modelado de datos en CMS headless
      y manejo avanzado de estado derivado desde la URL,
      una práctica clave para aplicaciones escalables.
    </p>
  `,
    },
  },

  // prueba técnica libros
  {
    id: 18,
    title: "Prueba Técnica Libros",
    slug: "prueba-tecnica-libros",
    liveSiteUrl: "https://challenge-books-midudev.vercel.app/",
    githubUrl: "https://github.com/eduviana/Challenge-Books-Midudev",
    desc: "Challenge extraído del creador de contenido Midudev que consiste en una página web de una editorial de libros.",
    technologies: ["React", "Sass"],
    categories: ["Prueba Técnica"],
    thumbnail: "/projects/personales/libros/libros-1.webp", // Adaptado de 'image' a 'thumbnail'
    images: [
      "/projects/personales/libros/libros-1.webp",
      "/projects/personales/libros/libros-2.webp",
      "/projects/personales/libros/libros-3.webp",
    ],
    content: {
      type: "single",
      body: `
    <p>
      Este proyecto nace como un desafío técnico propuesto por Midudev, enfocado en crear una plataforma para una editorial multinacional donde los usuarios pueden explorar un catálogo y gestionar su propia lista de lectura.
    </p>

    <h3>El Desafío</h3>
    <p>
      El objetivo principal era construir una interfaz intuitiva y agradable utilizando un archivo JSON local. El reto incluía la necesidad de crear un código altamente reutilizable y modular, previendo posibles cambios de framework en el futuro.
    </p>

    <h3>Aprendizajes y Refactorización</h3>
    <p>
      Aunque a simple vista parecía un ejercicio sencillo, este challenge fue fundamental para mejorar mi capacidad de <strong>debugueo y optimización</strong> en React. 
    </p>
    <ul>
      <li><strong>Arquitectura de carpetas:</strong> Implementación de una estructura más limpia y profesional.</li>
      <li><strong>Optimización de Renders:</strong> Identificación y solución de re-renderizados infinitos causados por variables externas al estado de React dentro de useEffects.</li>
      <li><strong>Persistencia de datos:</strong> Manejo de sincronización entre el estado global de la aplicación y el LocalStorage.</li>
    </ul>

    <h3>Características Principales</h3>
    <ul>
      <li>Filtrado dinámico de libros por género y rango de páginas.</li>
      <li>Sistema de "Lista de lectura" con persistencia de datos.</li>
      <li>Diseño responsive con enfoque prioritario en Desktop.</li>
      <li>Interfaz construida con Sass para un manejo eficiente de estilos.</li>
    </ul>

    <p>
      La lección más importante de este proyecto fue entender profundamente cómo el motor de React maneja las dependencias en los hooks. Comprender que cualquier variable no manejada por el estado puede romper el ciclo de vida del componente fue el punto más importante de este challenge.
    </p>
    `,
    },
  },

  // admin-ui recharts
  {
    id: 17,
    title: "Admin UI Recharts",
    slug: "admin-ui-recharts",
    liveSiteUrl: "https://react-dashboard-recharts-nff7.vercel.app/",
    githubUrl: "https://github.com/eduviana/React-Dashboard-Recharts",
    desc: "Panel de administración para visualización de datos mediante gráficos interactivos y tablas dinámicas.",
    technologies: ["React", "Material UI", "Sass"],
    categories: ["React"],
    thumbnail: "/projects/fullstack/adminRecharts/adminUI-1.webp",
    images: [
      "/projects/fullstack/adminRecharts/adminUI-1.webp",
      "/projects/fullstack/adminRecharts/adminUI-2.webp",
      "/projects/fullstack/adminRecharts/adminUI-3.webp",
      "/projects/fullstack/adminRecharts/adminUI-4.webp",
    ],
    content: {
      type: "single",
      body: `
    <p>
      Este proyecto consiste en un Dashboard de administración robusto desarrollado con Vite. El objetivo principal fue integrar diversas librerías del ecosistema React para resolver problemas comunes en interfaces de gestión de datos, como la visualización gráfica y el manejo de tablas complejas.
    </p>

    <h3>Stack Tecnológico</h3>
    <ul>
      <li><strong>React & Vite:</strong> Para un entorno de desarrollo ultra rápido.</li>
      <li><strong>React Router DOM v6:</strong> Implementación de rutas avanzadas y protegidas.</li>
      <li><strong>Material UI:</strong> Uso intensivo de componentes predefinidos, especialmente Data-Grid.</li>
      <li><strong>Recharts:</strong> Generación de gráficos estadísticos dinámicos.</li>
      <li><strong>Sass:</strong> Arquitectura de estilos modular y avanzada.</li>
    </ul>

    <h3>Innovación en el Flujo de Estilos</h3>
    <p>
      Durante el desarrollo, implementé una metodología avanzada de responsividad en <strong>Sass</strong>. En lugar de acumular media queries al final del archivo, utilicé un sistema de archivos separados con mixins personalizados.
    </p>
    <p>
      Este enfoque permite importar y aplicar breakpoints directamente dentro de cada clase CSS. Aunque incrementa ligeramente la longitud del código, mejora drásticamente la <strong>mantenibilidad y legibilidad</strong>, permitiendo entender el comportamiento responsive de un componente de un solo vistazo sin desplazarse por el documento.
    </p>

    <h3>Componentes Dinámicos y Datos</h3>
    <p>
      Uno de los mayores retos fue la implementación del componente <strong>Data-Grid</strong> de Material UI. Lo diseñé de forma genérica y dinámica para que pudiera ser reutilizado tanto en la gestión de usuarios como en la de productos, abstrayendo la lógica de las columnas y filas.
    </p>
    <p>
      Para garantizar que el proyecto sea 100% funcional de forma permanente sin depender de servicios de base de datos externos con limitaciones, opté por una arquitectura de datos local. Esto permite que la aplicación sea una vitrina perfecta de habilidades frontend, eliminando riesgos de caídas de servicio por suscripciones o límites de tráfico.
    </p>

    <h3>Funcionalidades Clave</h3>
    <ul>
      <li>Visualización de métricas en tiempo real mediante gráficos de área, barras y circulares.</li>
      <li>Tablas de datos con soporte para ordenamiento, filtrado y paginación.</li>
      <li>Interfaz limpia y profesional siguiendo los lineamientos de Material Design.</li>
      <li>Estructura de navegación fluida gracias a las últimas funcionalidades de React Router v6.</li>
    </ul>
  `,
    },
  },

  //car showcase
];
