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

    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Problema</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">La gestion de turnos medicos suele involucrar multiples actores, procesos manuales y una fuerte dependencia de llamadas telefonicas, agendas fragmentadas y coordinacion constante entre pacientes, secretarias y profesionales.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">En este contexto aparecen situaciones habituales que complejizan la operacion diaria: pacientes que todavia no poseen cuenta, turnos gestionados por telefono, horarios bloqueados por pagos incompletos o informacion dispersa entre distintos usuarios del sistema.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg"><span class="font-semibold text-white">Mediflow</span> fue desarrollado tomando como referencia conversaciones mantenidas con un centro medico privado real, buscando modelar procesos cotidianos de atencion, organizacion de agenda y coordinacion operativa dentro de una propuesta funcional de gestion medica.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Solucion</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El sistema propone una experiencia centralizada con <span class="font-semibold text-white">cuatro roles diferenciados</span>: pacientes, secretarias, profesionales medicos y administradores. Cada rol dispone de su propio dashboard, rutas protegidas y acciones especificas segun sus responsabilidades operativas.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Los pacientes pueden <span class="font-semibold text-white">registrarse, iniciar sesion y gestionar turnos de forma online</span>, seleccionando especialidad, profesional, fecha y horario disponible desde una interfaz guiada. A su vez, contempla escenarios reales como la creacion de turnos por telefono por parte de secretarias para pacientes sin cuenta, con envio posterior de enlaces de pago externos.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Uno de los desafios mas interesantes fue resolver la continuidad de informacion: si un paciente creado manualmente decide registrarse mas adelante, el sistema puede <span class="font-semibold text-white">vincular automaticamente la nueva cuenta con el historial existente</span>, evitando duplicados y preservando la consistencia de turnos, pagos e informacion previa.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-8">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Objetivo</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Mas alla de la demo tecnica, Mediflow fue concebido como una <span class="font-semibold text-white">propuesta funcional de validacion</span> para explorar reglas del dominio medico, evaluar distintos flujos de atencion y analizar como interactuan pacientes, secretarias, profesionales y administradores dentro de un mismo ecosistema operativo.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El proyecto fue pensado para acompanar conversaciones con un centro medico privado real, permitiendo iterar sobre procesos, detectar necesidades operativas y evolucionar progresivamente hacia una eventual implementacion productiva.</p>
      </div>
    </div>
  </section>

</div>`,
        },

        {
          key: "funcionalidad",
          label: "Funcionalidad",
          body: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Pacientes</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Los pacientes pueden <span class="font-semibold text-white">registrarse mediante credenciales tradicionales o autenticacion con Google</span>, iniciar sesion y recuperar su contrasena en caso de ser necesario.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Una vez autenticados, acceden a un dashboard donde pueden consultar sus proximos turnos, visualizar estados de pago, fechas, horarios, especialidades y profesionales asignados, ademas de acceder al historial completo desde una seccion dedicada.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El flujo de reserva permite seleccionar <span class="font-semibold text-white">especialidad, profesional, fecha y horario disponible</span>, para luego completar el pago mediante MercadoPago. Si el pago no se realiza dentro del tiempo establecido, el turno expira automaticamente y el horario vuelve a quedar disponible para otros pacientes.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Secretaria y operacion diaria</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El rol de <span class="font-semibold text-white">secretaria</span> no depende exclusivamente de pacientes registrados en la plataforma. Las secretarias pueden crear turnos manualmente para personas que llaman por telefono, generando reservas incluso cuando el paciente todavia no posee una cuenta registrada. Posteriormente, el sistema permite compartir enlaces de pago externos para completar el proceso.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Ademas, disponen de una vista global del consultorio mediante dos formatos de trabajo: <span class="font-semibold text-white">proximas citas y calendario</span>. Desde alli pueden monitorear todos los turnos de todos los profesionales, aplicar filtros por profesional y gestionar la agenda medica completa.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Profesionales medicos</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Cada profesional visualiza exclusivamente su propia agenda, tanto en la vista de proximas citas como en el calendario. Desde el panel puede <span class="font-semibold text-white">iniciar una atencion medica</span>, accediendo a una pantalla con la informacion del paciente, un editor de notas clinicas, diagnosticos y controles para cancelar o finalizar la atencion.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Adicionalmente, los profesionales pueden <span class="font-semibold text-white">configurar sus horarios semanales de atencion</span> por dia, duracion de turno y estado activo/inactivo, asi como gestionar bloqueos de agenda por vacaciones o feriados.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Administracion del sistema</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El rol de <span class="font-semibold text-white">administrador</span> permite gestionar los usuarios del sistema desde una interfaz de administracion con tabla paginada, busqueda por nombre o email y filtrado por rol. Desde el modal de edicion es posible modificar datos del usuario, cambiar su rol y, para usuarios con rol profesional, <span class="font-semibold text-white">asignar la especialidad medica correspondiente</span>.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Las especialidades medicas se administran desde una seccion dedicada, permitiendo crear, editar nombre, activar o desactivar mediante un toggle switch, y eliminar aquellas que no tengan profesionales asociados. Las especialidades inactivas no aparecen como opcion al momento de reservar turnos.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El sistema incluye proteccion contra auto-eliminacion y auto-modificacion de rol: un administrador no puede eliminarse a si mismo ni cambiar su propio rol, evitando bloqueos accidentales del acceso administrativo.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Auditoria y trazabilidad</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Cada evento significativo del sistema queda registrado en un <span class="font-semibold text-white">log de auditoria inmutable</span>: creacion, confirmacion, inicio, finalizacion, cancelacion y expiracion de turnos, asi como creacion, aprobacion y rechazo de pagos. Los registros incluyen el actor responsable, el origen de la accion, el tipo de entidad afectada y su identificador.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Desde el panel de auditoria, los administradores pueden explorar el historial completo con filtros por tipo de evento, origen y entidad, visualizar graficos de distribucion y acceder a un modal de detalle que muestra la transicion antes/despues de cada cambio, permitiendo reconstruir que ocurrio ante cualquier error o reclamo.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Estado compartido del sistema</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">A medida que los turnos cambian de estado la informacion se actualiza automaticamente entre usuarios conectados mediante <span class="font-semibold text-white">polling inteligente</span>, permitiendo que secretarias y profesionales trabajen sobre una vision sincronizada del estado actual del consultorio sin necesidad de refrescar manualmente la aplicacion.</p>
      </div>
    </div>
  </section>

</div>`,
        },

        {
          key: "arquitectura",
          label: "Arquitectura",
          body: `<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Arquitectura del proyecto</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Desarrollado con <span class="font-semibold text-white">Next.js App Router, TypeScript y Tailwind CSS</span>, siguiendo un enfoque de Clean Architecture con organizacion feature-first. La carpeta <span class="font-semibold text-white">app/</span> se utiliza unicamente para paginas y routing, mientras que toda la logica de negocio se encuentra desacoplada dentro de modulos por dominio funcional.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Cada feature encapsula sus propios componentes, hooks, schemas Zod, reglas de negocio puras, tipos, utilidades y logica de servidor, permitiendo una estructura mantenible y escalable. Las reglas de negocio son funciones puras sin dependencias externas, reutilizadas tanto en el frontend como en webhooks y API routes.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Autenticacion y permisos</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Autenticacion mediante <span class="font-semibold text-white">NextAuth v4</span> con estrategia JWT, soportando credenciales tradicionales, login con Google y recuperacion de contrasena con tokens seguros hasheados. El sistema utiliza una estrategia multi-rol para diferenciar comportamiento entre <span class="font-semibold text-white">pacientes, secretarias, profesionales medicos y administradores</span>.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Las rutas estan protegidas mediante middleware con patrones regex, redirigiendo automaticamente segun el rol autenticado. A nivel de servidor, cada pagina y API route valida la sesion con el rol requerido antes de ejecutar cualquier logica.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Gestion de disponibilidad</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">En lugar de persistir horarios disponibles directamente, el sistema almacena unicamente la <span class="font-semibold text-white">disponibilidad laboral del profesional</span> y los turnos existentes. La disponibilidad final se calcula dinamicamente combinando horarios configurados, reservas activas, estados de pago y expiracion de turnos pendientes, evitando inconsistencias de sincronizacion.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Sincronizacion multi-cliente</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg"><span class="font-semibold text-white">TanStack Query</span> funciona como capa de sincronizacion de datos con cache inteligente, invalidacion automatica luego de mutaciones y <span class="font-semibold text-white">polling dinamico</span> (30 segundos con pestana activa, 60 segundos en segundo plano). Aunque se evaluo WebSockets, se opto por polling como estrategia inicial priorizando simplicidad operativa.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Persistencia y entorno</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg"><span class="font-semibold text-white">PostgreSQL + Prisma ORM</span> con un modelo de datos que incluye usuarios, pacientes, profesionales, especialidades, disponibilidad semanal, bloqueos de agenda, turnos, pagos, historias clinicas y registros de auditoria. El entorno de desarrollo esta containerizado con Docker y dispone de seeds para poblar datos iniciales.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">Testing</h3>
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>
      <div class="flex flex-col gap-3">
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">El proyecto cuenta con <span class="font-semibold text-white">233 tests automatizados</span> distribuidos en 36 archivos, utilizando <span class="font-semibold text-white">Vitest + Testing Library</span>. La cobertura abarca reglas de negocio, funciones utilitarias, schemas de validacion Zod, logica de servidor, API routes, hooks de React y componentes de UI.</p>
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">Los tests siguen la misma estructura feature-based del proyecto, ubicandose en directorios <span class="font-semibold text-white">__tests__/</span> dentro de cada modulo, manteniendo la cohesion entre codigo fuente y sus pruebas.</p>
      </div>
    </div>
  </section>

</div>`,
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

    content: {
      type: "tabs",
      tabs: [
        {
          key: "summary",
          label: "Resumen",
          body: `

<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Muchas obras sociales todavía dependen de procesos fragmentados para la gestión de atención: generación manual de turnos, ausencia de trazabilidad operativa y poca visibilidad sobre tiempos de espera, rendimiento del personal o carga de trabajo entre áreas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          A medida que el sistema crece en cantidad de servicios, usuarios y reglas de negocio, también aumenta la complejidad: permisos diferenciados, sincronización entre múltiples operadores y necesidad de métricas confiables para la toma de decisiones.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se desarrolló un sistema interno de gestión de turnos para múltiples áreas de una obra social, con una arquitectura basada en roles
          <span class="font-semibold text-white">
            ADMIN, SUPERVISOR y OPERATOR
          </span>,
          cada uno con permisos y responsabilidades claramente diferenciadas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema permite a los afiliados generar turnos para distintas áreas, mientras que los operadores trabajan sobre paneles operativos en tiempo real para llamar turnos, iniciar atención, gestionar ausencias y finalizar operaciones registrando métricas precisas del proceso.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este proyecto tuvo dos objetivos principales:
          <span class="font-semibold text-white">
            construir un sistema significativamente más complejo
          </span>
          que los desarrollados anteriormente y, al mismo tiempo, incorporar tecnologías de sincronización en tiempo real dentro de un entorno de negocio con reglas operativas reales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema utiliza una estructura de permisos basada en tres roles:
          <span class="font-semibold text-white">
            ADMIN, SUPERVISOR y OPERATOR
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los usuarios ADMIN pueden administrar completamente el sistema: habilitar servicios, editar cuentas, visualizar estadísticas y configurar la operación. Los SUPERVISOR comparten prácticamente la misma interfaz, pero operan bajo un esquema de solo lectura.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El flujo de atención fue modelado explícitamente:
          <span class="font-semibold text-white">
            generación de turno → llamado → inicio de atención → finalización
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Esta separación permite registrar tiempos independientes para cada etapa, evitando distorsiones estadísticas. Por ejemplo, el tiempo que un afiliado tarda en presentarse luego de ser llamado no penaliza artificialmente el tiempo real de atención del operador.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema implementa sincronización en tiempo real utilizando
          <span class="font-semibold text-white">
            Pusher
          </span>,
          permitiendo que los paneles operativos y las pantallas de sala de espera se actualicen instantáneamente sin necesidad de refrescar la página.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js 16, TypeScript, Prisma, PostgreSQL, Clerk, Pusher, Tailwind y shadcn/ui
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          A nivel organizacional se implementó una
          <span class="font-semibold text-white">
            Modular Feature Architecture
          </span>,
          donde la carpeta <span class="font-semibold text-white">app/</span> contiene únicamente el routing y cada dominio del negocio encapsula su propia lógica, tipos, componentes y servicios dentro de <span class="font-semibold text-white">features/</span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La autenticación fue implementada con
          <span class="font-semibold text-white">
            Clerk
          </span>,
          mientras que la autorización se resolvió mediante un sistema RBAC propio basado en jerarquías de permisos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El middleware centraliza autenticación, redirección dinámica de dashboards y control de acceso por rutas. Además, las APIs críticas aplican validaciones adicionales según rol para evitar confiar únicamente en el cliente o en el routing.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se priorizó el uso de
          <span class="font-semibold text-white">
            Server Components
          </span>
          siempre que fue posible, delegando únicamente la interacción al cliente mediante <span class="font-semibold text-white">use client</span> y endpoints específicos cuando un Client Component necesitaba datos persistidos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          También se implementó una arquitectura basada en
          <span class="font-semibold text-white">
            adapters
          </span>
          para desacoplar reglas específicas de áreas similares, evitando dependencias cruzadas entre módulos que podrían evolucionar de forma distinta en el futuro.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "summary",
          label: "Resumen",
          body: `

<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los ecommerce tecnológicos suelen enfrentarse a un desafío importante: ofrecer grandes catálogos de productos con múltiples variantes técnicas sin comprometer la experiencia de navegación ni volver inmantenible la estructura de datos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          A medida que aumentan las categorías y subcategorías, aparecen problemas comunes como filtros difíciles de escalar, especificaciones inconsistentes entre productos y lógica repetida para renderizar vistas dinámicas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se desarrolló un ecommerce fullstack enfocado en productos tecnológicos utilizando
          <span class="font-semibold text-white">
            Next.js, TypeScript y SSR
          </span>,
          buscando una navegación rápida, mejor posicionamiento SEO y una arquitectura capaz de crecer sin degradar mantenibilidad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema permite navegar categorías, subcategorías y productos mediante rutas dinámicas, aplicar filtros contextuales y consultar especificaciones técnicas adaptadas al tipo de producto, evitando estructuras genéricas poco representativas del dominio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este proyecto tuvo como objetivo profundizar el uso de
          <span class="font-semibold text-white">
            TypeScript estricto, renderizado SSR y organización modular
          </span>,
          incorporando decisiones arquitectónicas más sólidas respecto a proyectos anteriores.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La navegación del ecommerce se construyó mediante una ruta dinámica utilizando
          <span class="font-semibold text-white">
            app/[...slug]/page.tsx
          </span>,
          permitiendo interpretar distintos segmentos de URL para renderizar categorías, subcategorías o páginas de producto individuales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Toda la lógica de filtrado fue desacoplada y centralizada dentro de un
          <span class="font-semibold text-white">
            custom hook
          </span>,
          permitiendo reutilizar comportamiento entre distintas categorías sin contaminar componentes de UI con lógica de negocio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Cada producto cuenta con un sistema de especificaciones adaptado a su categoría. Por ejemplo, un SSD posee propiedades distintas a un HDD o una notebook, evitando estructuras genéricas poco representativas del dominio técnico.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El carrito de compras utiliza
          <span class="font-semibold text-white">
            Context API
          </span>
          como estado global, permitiendo persistir selección de productos y sincronizar la experiencia de compra entre distintas vistas del ecommerce.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js, TypeScript, Tailwind CSS y SSR
          </span>,
          priorizando performance, SEO y mantenibilidad del código.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los focos principales del proyecto fue el
          <span class="font-semibold text-white">
            tipado estricto del dominio
          </span>.
          Cada categoría de producto posee entidades y especificaciones técnicas propias, como <span class="font-semibold text-white">NotebookSpecs</span>, <span class="font-semibold text-white">TvSpecs</span> o <span class="font-semibold text-white">RamSpecs</span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Esto permitió modelar información mucho más precisa y escalable, evitando objetos excesivamente genéricos que terminan degradando consistencia y mantenibilidad con el crecimiento del catálogo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este proyecto consolidó el uso de buenas prácticas de frontend moderno, especialmente en
          <span class="font-semibold text-white">
            desacoplamiento de lógica, renderizado SSR, modelado tipado y reutilización de componentes
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          <span class="font-semibold text-white">Vivarium</span>
          fue desarrollado para un vivero real que necesitaba una presencia digital profesional capaz de exhibir su catálogo de productos sin depender constantemente de soporte técnico para realizar cambios o actualizaciones.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El negocio manejaba una gran variedad de plantas, insumos y productos organizados en múltiples categorías, lo que requería una forma clara y escalable de estructurar el catálogo y mantener la navegación simple para el usuario final.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema propone una plataforma administrable donde el cliente puede
          <span class="font-semibold text-white">
            gestionar productos, categorías y contenido destacado de forma autónoma
          </span>,
          sin conocimientos técnicos y sin depender del desarrollador para actualizar el sitio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se implementó un panel privado con autenticación segura desde donde es posible crear, editar y eliminar productos, además de organizar el catálogo utilizando categorías jerárquicas que impactan automáticamente sobre la navegación del sitio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El objetivo del proyecto fue construir una plataforma que brindara
          <span class="font-semibold text-white">
            autonomía operativa y presencia digital profesional
          </span>
          al emprendimiento, permitiendo administrar el catálogo de forma simple y sostenible en el tiempo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El catálogo se organiza mediante un sistema de
          <span class="font-semibold text-white">
            categorías jerárquicas
          </span>,
          permitiendo estructurar productos en distintos niveles y facilitar la navegación del usuario.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El cliente dispone de un panel privado con autenticación segura para administrar el contenido del sitio de forma independiente.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema fue concebido inicialmente con soporte para ecommerce y pagos online mediante MercadoPago.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js, TypeScript, autenticación con NextAuth y base de datos relacional
          </span>,
          manteniendo una separación clara entre autenticación, persistencia y lógica del negocio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema implementa una estructura multinivel basada en relaciones
          <span class="font-semibold text-white">
            padre-hijo (<code>parentId</code>)
          </span>,
          permitiendo construir un árbol dinámico de categorías desde base de datos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Las imágenes del catálogo se gestionan mediante
          <span class="font-semibold text-white">
            Cloudinary
          </span>,
          permitiendo carga de assets desde el panel administrativo y optimización automática de contenido multimedia.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          
          Aplicación desarrollado para una empresa tercerizada encargada del soporte de atención al cliente de  <span class="font-semibold text-white">
            Telecom - Personal
          </span>, con el objetivo de reemplazar un flujo operativo basado en Google Forms y Google Sheets.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proceso existente permitía registrar incidencias reportadas por clientes y consolidarlas automáticamente en planillas utilizadas por supervisores, pero presentaba limitaciones importantes en visualización, trazabilidad y análisis de datos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema reemplaza formularios y planillas dispersas por una
          <span class="font-semibold text-white">
            aplicación web centralizada
          </span>,
          permitiendo registrar incidencias, consultar reportes y analizar información desde una interfaz más estructurada.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los operadores pueden cargar incidencias mediante formularios validados, mientras que supervisores acceden a reportes con tablas y visualizaciones gráficas para interpretar métricas operativas y detectar patrones con mayor facilidad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto tuvo como objetivo modernizar una operación interna existente sin romper hábitos de trabajo ya establecidos, priorizando una transición progresiva hacia una herramienta más controlada y escalable.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los operadores cuentan con formularios para registrar incidencias reportadas por clientes, reemplazando el flujo previo basado en Google Forms.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los supervisores pueden consultar reportes estructurados mediante tablas y gráficos, permitiendo analizar tendencias e interpretar la información operativa con mayor claridad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Una decisión importante fue mantener una experiencia visual cercana a la herramienta anterior para facilitar la adopción del sistema y reducir la curva de aprendizaje del equipo.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js con renderizado SSR
          </span>,
          buscando mejorar tiempos de carga, seguridad y experiencia general.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se utilizó MongoDB como base de datos, autenticación con Google, React Hook Form + Zod para validaciones, Recharts para visualización de métricas y Tailwind CSS para estilos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Durante el desarrollo se identificó una degradación en tiempos de respuesta causada por el estado standby del plan gratuito de despliegue utilizado en ese momento.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Para reducir el impacto sobre métricas como LCP y mejorar percepción de velocidad, determinadas operaciones inicialmente renderizadas del lado del servidor fueron migradas al cliente.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
    content: {
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          <span class="font-semibold text-white">Kass Tienda</span>
          fue desarrollado para una tienda de accesorios y productos tecnológicos cuyo principal requerimiento era poder administrar el catálogo de productos sin depender de herramientas complejas ni conocimientos técnicos avanzados.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Durante el relevamiento inicial surgió una limitación importante: el cliente no se sentía cómodo utilizando paneles administrativos tradicionales, pero sí trabajaba habitualmente con hojas de cálculo similares a Excel.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          En lugar de imponer una arquitectura tradicional con panel administrativo y base de datos propia, se optó por una solución más alineada al contexto operativo del negocio:
          <span class="font-semibold text-white">
            utilizar Google Sheets como fuente de datos
          </span>
          mediante su API oficial.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Cada hoja representa una categoría de productos, permitiendo al cliente agregar, editar o eliminar información utilizando una herramienta que ya conocía, sin necesidad de capacitación adicional.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El objetivo del proyecto fue construir una solución técnicamente sólida pero adaptada a las capacidades reales del usuario final, reduciendo fricción operativa y favoreciendo la autonomía del negocio.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El catálogo de productos se administra completamente desde
          <span class="font-semibold text-white">
            Google Sheets
          </span>,
          eliminando la necesidad de un panel administrativo tradicional.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La tienda permite navegar categorías, visualizar productos y agregarlos al carrito mediante un flujo simple orientado a conversión.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Una de las decisiones más importantes fue
          <span class="font-semibold text-white">
            adaptar la tecnología al usuario
          </span>
          y no al revés.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto fue desarrollado utilizando
          <span class="font-semibold text-white">
            Next.js como framework fullstack
          </span>,
          integrando Google Sheets API como fuente de datos principal y Stripe como pasarela de pagos.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La integración con Stripe podía resolverse desde cliente o servidor. Se optó por un enfoque
          <span class="font-semibold text-white">
            server-side
          </span>,
          alineado con el modelo de Server Components de Next.js para reducir exposición de lógica sensible y mejorar seguridad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
    desc: "Aplicación web de de películas y series, enfocada en arquitectura frontend, consumo de APIs externas y gestión eficiente del estado global.",
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          <span class="font-semibold text-white">Movix</span> es una aplicación web desarrollada para profundizar conocimientos en arquitectura frontend, manejo de estado global y consumo de APIs externas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto consume datos desde la API pública de
          <span class="font-semibold text-white">The Movie Database (TMDB)</span>,
          permitiendo explorar películas y series mediante una interfaz orientada al descubrimiento de contenido.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este proyecto tuvo como propósito principal mejorar el entendimiento práctico de
          <span class="font-semibold text-white">
            React, Redux y la separación de responsabilidades
          </span>
          dentro de aplicaciones frontend de mediana complejidad.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación permite explorar
          <span class="font-semibold text-white">
            películas y series
          </span>
          consumiendo información en tiempo real desde TMDB.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Cada película o serie cuenta con una página de detalle que centraliza información relevante como descripción, géneros, fecha de lanzamiento, puntuación y contenido multimedia asociado.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se priorizó una experiencia fluida tanto en desktop como en dispositivos móviles, incorporando optimizaciones como
          <span class="font-semibold text-white">
            carga perezosa de imágenes, filtros interactivos y visualización dinámica de puntuaciones
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            React, Redux y SASS
          </span>,
          integrando además librerías específicas para visualización de métricas, reproducción multimedia y optimización de carga.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los aprendizajes más importantes del proyecto fue comprender que
          <span class="font-semibold text-white">
            no todo estado debe residir en Redux
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El store global se utilizó únicamente para información compartida entre múltiples secciones de la aplicación, mientras que los estados locales permanecieron encapsulados dentro de sus respectivos componentes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto fue estructurado priorizando
          <span class="font-semibold text-white">
            componentes reutilizables y responsabilidades bien delimitadas
          </span>,
          evitando lógica acoplada entre UI, fetch de datos y estado compartido.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
    desc: "Plataforma de streaming en vivo inspirada en Twitch, con autenticación, chat en tiempo real, integración con OBS Studio y gestión de canales.",
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          <span class="font-semibold text-white">GameHub</span>
          es una plataforma de streaming en vivo inspirada en Twitch, desarrollada con el objetivo de comprender e implementar una arquitectura capaz de soportar
          <span class="font-semibold text-white">
            transmisión en tiempo real, autenticación, chat y gestión de usuarios
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los principales objetivos del proyecto fue aprender a trabajar con sistemas distribuidos y comunicación en tiempo real, enfrentando problemas relacionados con sincronización de estado, gestión de eventos y arquitectura desacoplada.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Debido a que el proyecto depende de servicios pagos para funcionar correctamente, actualmente no se encuentra desplegado en producción.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Cada usuario autenticado puede crear y administrar su propio canal de streaming, personalizando información del perfil y configuraciones relacionadas con la transmisión.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La plataforma incorpora un sistema de chat en vivo configurable por el streamer, incluyendo opciones como
          <span class="font-semibold text-white">
            slow mode, solo suscriptores o chat deshabilitado
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js, Clerk, LiveKit y shadcn/ui
          </span>,
          integrando autenticación, streaming en tiempo real y sincronización de usuarios dentro de una arquitectura fullstack.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La infraestructura de streaming se construyó sobre
          <span class="font-semibold text-white">
            LiveKit
          </span>,
          permitiendo gestionar conexiones en tiempo real, video, audio y mensajería dentro de salas independientes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los mayores desafíos del proyecto fue dividir un problema técnicamente complejo en módulos manejables, manteniendo separación clara entre autenticación, realtime, persistencia y experiencia de usuario.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
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

  // admin-ui recharts
  {
    id: 17,
    title: "Admin UI Recharts",
    slug: "admin-ui-recharts",
    liveSiteUrl: "https://react-dashboard-recharts-nff7.vercel.app/",
    githubUrl: "https://github.com/eduviana/React-Dashboard-Recharts",
    desc: "Dashboard administrativo enfocado en visualización de datos, tablas reutilizables y arquitectura de interfaces escalables.",
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
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          <span class="font-semibold text-white">Admin UI Recharts</span>
          es un dashboard administrativo desarrollado como ejercicio técnico para profundizar en la construcción de
          <span class="font-semibold text-white">
            interfaces complejas de gestión de datos, visualización estadística y navegación modular
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El proyecto simula un entorno administrativo profesional, incorporando gráficos interactivos, tablas avanzadas y múltiples vistas organizadas dentro de una arquitectura frontend mantenible.
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El objetivo principal fue comprender cómo escalan las interfaces administrativas cuando aumenta la complejidad visual, la cantidad de información y la interacción entre componentes reutilizables.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Además de trabajar sobre experiencia visual y organización de layouts, el proyecto permitió profundizar en patrones comunes presentes en sistemas empresariales:
          <span class="font-semibold text-white">
            dashboards analíticos, tablas configurables, métricas visuales y navegación avanzada
          </span>.
        </p>

      </div>

    </div>
  </section>

  <!-- Resultado -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Resultado
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El resultado fue una interfaz administrativa completamente responsive, visualmente consistente y preparada para representar distintos tipos de información dentro de un flujo de navegación claro.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Más allá del resultado visual, el principal valor del proyecto estuvo en comprender cómo estructurar aplicaciones de administración manteniendo
          <span class="font-semibold text-white">
            reutilización, separación de responsabilidades y consistencia de diseño
          </span>.
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Dashboard -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Dashboard y visualización
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El sistema simula un panel administrativo moderno con múltiples vistas orientadas a visualización y análisis de datos mediante
          <span class="font-semibold text-white">
            gráficos de área, barras y métricas visuales
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La interfaz fue diseñada para representar información de forma clara, manteniendo jerarquía visual y consistencia entre distintas secciones del dashboard.
        </p>

      </div>

    </div>
  </section>

  <!-- Data Grid -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Tablas reutilizables
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los componentes más relevantes fue la implementación de tablas administrativas utilizando
          <span class="font-semibold text-white">
            Material UI Data Grid
          </span>,
          con soporte para ordenamiento, filtrado y paginación.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          En lugar de construir componentes específicos para cada entidad, la lógica fue abstraída para crear una estructura reutilizable, desacoplando columnas, filas y comportamiento dinámico entre módulos.
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
          Experiencia de uso
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La navegación entre secciones se construyó utilizando
          <span class="font-semibold text-white">
            React Router DOM v6
          </span>,
          permitiendo mantener una experiencia fluida y organizada dentro del dashboard.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Todo el proyecto fue desarrollado con enfoque responsive, asegurando adaptabilidad entre distintos tamaños de pantalla sin comprometer legibilidad ni estructura visual.
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            React, Vite, React Router DOM, Material UI, Recharts y Sass
          </span>,
          combinando librerías orientadas a navegación, visualización de datos e interfaces administrativas.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El stack fue seleccionado para experimentar con patrones comunes de dashboards empresariales, priorizando velocidad de desarrollo, modularidad y reutilización de componentes.
        </p>

      </div>

    </div>
  </section>

  <!-- Sass -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Arquitectura de estilos
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los focos técnicos del proyecto fue mejorar la organización del CSS responsive mediante
          <span class="font-semibold text-white">
            mixins personalizados en Sass
          </span>.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          En lugar de centralizar media queries al final de cada archivo, los breakpoints se integraron directamente dentro de cada módulo visual, facilitando comprensión, mantenibilidad y lectura del comportamiento responsive.
        </p>

      </div>

    </div>
  </section>

  <!-- Implementación -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Decisiones de implementación
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Para garantizar estabilidad permanente del proyecto y evitar dependencia de infraestructura externa, se optó por trabajar con
          <span class="font-semibold text-white">
            datos simulados localmente
          </span>
          en lugar de APIs o bases de datos reales.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Esta decisión permitió mantener el proyecto siempre funcional como pieza de portfolio, eliminando riesgos asociados a límites de uso, caídas de servicio o expiración de proveedores externos.
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
    desc: "Ecommerce de indumentaria construido con arquitectura Headless CMS, incorporando catálogo dinámico, filtros sincronizados por URL y Stripe como método de pago.",
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
      type: "tabs",
      tabs: [
        {
          key: "resumen",
          label: "Resumen",
          body: `
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Ecommerce desarrollado para profundizar en la construcción de aplicaciones modernas utilizando
          <span class="font-semibold text-white">
            Next.js 13, App Router y arquitectura basada en Headless CMS
          </span>.
          El objetivo principal fue comprender cómo modelar un catálogo dinámico, administrar contenido desde una plataforma externa y construir una experiencia de compra completa.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación permite explorar productos de indumentaria, navegar entre categorías, aplicar filtros, gestionar un carrito de compras y completar pagos mediante una pasarela externa, replicando comportamientos comunes presentes en ecommerce reales.
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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Uno de los principales focos del proyecto fue comprender cómo desacoplar el contenido del frontend mediante un CMS headless, permitiendo administrar productos y variantes sin necesidad de modificar el código de la aplicación.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Más allá de la implementación visual, el desafío estuvo en entender cómo escalan los sistemas ecommerce cuando intervienen
          <span class="font-semibold text-white">
            contenido dinámico, filtros complejos, checkout y gestión externa de catálogo
          </span>.
        </p>

      </div>

    </div>
  </section>

  <!-- Headless CMS -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Enfoque Headless CMS
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Se utilizó
          <span class="font-semibold text-white">
            Sanity como CMS headless
          </span>,
          permitiendo modelar productos, variantes, imágenes y atributos de forma desacoplada del frontend.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Esta aproximación facilita escalabilidad, mantenimiento y autonomía de contenido, evitando hardcodear información dentro de la aplicación principal.
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

  <!-- Compra -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Experiencia de compra
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El ecommerce fue diseñado para ofrecer una experiencia de compra simple y moderna, permitiendo navegar por categorías, visualizar detalles de producto y gestionar un carrito persistente.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El checkout se integra mediante
          <span class="font-semibold text-white">
            Stripe
          </span>,
          delegando el procesamiento seguro de pagos a una plataforma especializada.
        </p>

      </div>

    </div>
  </section>

  <!-- Filtros -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Sistema de filtros
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El catálogo implementa filtros dinámicos por atributos del producto como
          <span class="font-semibold text-white">
            talle, color y categoría
          </span>,
          además de ordenamiento por precio y fecha.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          En lugar de resolver la sincronización mediante múltiples estados distribuidos entre componentes, el sistema se diseñó utilizando
          <span class="font-semibold text-white">
            query params en la URL
          </span>,
          permitiendo mantener navegación, estado y filtros completamente sincronizados.
        </p>

      </div>

    </div>
  </section>

  <!-- Catálogo -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Gestión del catálogo
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Los productos son administrados desde Sanity, permitiendo editar información como nombre, descripción, imágenes, variantes, talles, colores y precios desde una interfaz externa.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Esto elimina dependencia directa del código para cambios de contenido y acerca el funcionamiento del proyecto a flujos utilizados en ecommerce profesionales.
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
<div class="flex flex-col gap-[3rem] md:gap-[6rem]">

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

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          La aplicación fue desarrollada utilizando
          <span class="font-semibold text-white">
            Next.js 13, TypeScript, Sanity, Stripe y Tailwind CSS
          </span>,
          combinando renderizado moderno, contenido desacoplado y checkout seguro.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          También se incorporó
          <span class="font-semibold text-white">
            Radix UI
          </span>
          para construir componentes accesibles y
          <span class="font-semibold text-white">
            use-shopping-cart
          </span>
          para simplificar la gestión del carrito.
        </p>

      </div>

    </div>
  </section>

  <!-- URL State -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Estado derivado desde URL
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Una de las decisiones arquitectónicas principales fue resolver filtros y ordenamientos utilizando
          <span class="font-semibold text-white">
            estado derivado desde query params
          </span>,
          evitando complejidad innecesaria en la sincronización entre componentes.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          Este enfoque mejora previsibilidad, simplifica mantenimiento y permite compartir enlaces con filtros activos preservando completamente el estado de navegación.
        </p>

      </div>

    </div>
  </section>

  <!-- CMS -->
  <section>
    <div class="flex flex-col gap-8">

      <div class="flex items-center justify-center gap-4">
        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>

        <h3 class="text-xl md:text-2xl font-semibold leading-none text-white m-0 shrink-0">
          Modelado desacoplado
        </h3>

        <span class="w-14 md:w-20 h-[1px] bg-brand-primary/60 rounded-full"></span>
      </div>

      <div class="flex flex-col gap-3">

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El uso de un
          <span class="font-semibold text-white">
            Headless CMS
          </span>
          permitió modelar entidades dinámicas como productos y variantes sin acoplar la estructura del catálogo al frontend.
        </p>

        <p class="m-0 text-base text-text-muted !leading-[1.9] lg:text-lg">
          El principal aprendizaje del proyecto fue comprender patrones habituales en ecommerce modernos:
          <span class="font-semibold text-white">
            arquitectura desacoplada, contenido administrable y estado derivado
          </span>,
          prácticas ampliamente utilizadas en aplicaciones orientadas a catálogo y venta online.
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
];
