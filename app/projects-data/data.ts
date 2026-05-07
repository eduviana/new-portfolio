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
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "MercadoPago",
      "React Query",
    ],
    categories: ["Fullstack"],
    thumbnail: "/projects/fullstack/mediflow/9.png",
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
          key: "nivel-1",
          label: "Nivel 1",
          body: `
<h2>Mediflow — Sistema de gestión de turnos médicos</h2>

<p>
  <strong>Mediflow</strong> es una aplicación web desarrollada como demo funcional para un centro médico privado,
  con el objetivo de presentar una propuesta moderna de organización de turnos, atención al paciente y gestión administrativa.
</p>

<p>
  El proyecto busca simular situaciones reales que ocurren diariamente dentro de una institución médica,
  contemplando tanto la experiencia del paciente como las necesidades operativas de secretarias y profesionales.
</p>

<p>
  Los pacientes pueden registrarse, iniciar sesión —incluyendo acceso mediante Google— y gestionar turnos de forma completamente online.
  El flujo permite seleccionar <strong>especialidad</strong>, <strong>profesional</strong>, <strong>fecha</strong> y <strong>horario disponible</strong>,
  para luego realizar el pago mediante <em>MercadoPago</em>.
</p>

<p>
  Una vez finalizado el pago, el sistema informa el estado actualizado del turno,
  permitiendo confirmar, cancelar o reintentar el pago según corresponda.
  Además, las reservas poseen un tiempo límite configurable;
  si el pago no se completa dentro de ese período, el horario se libera automáticamente para otros pacientes.
</p>

<p>
  El sistema también contempla escenarios habituales en centros médicos reales.
  Por ejemplo, las secretarias pueden crear turnos para personas que llaman por teléfono,
  incluso aunque nunca se hayan registrado en la plataforma.
</p>

<p>
  En esos casos, Mediflow permite crear pacientes manualmente y compartir un link de pago mediante WhatsApp, email o copia directa del enlace.
</p>

<p>
  A su vez, si ese mismo paciente decide registrarse en el futuro,
  el sistema detecta automáticamente la información existente y vincula la nueva cuenta con el historial previo,
  evitando duplicados y manteniendo la continuidad de los datos médicos y administrativos.
</p>

<p>
  Las secretarias disponen de vistas en formato tabla y calendario para organizar la agenda diaria,
  mientras que los profesionales pueden acceder únicamente a sus propios turnos,
  iniciar consultas, registrar observaciones y finalizar atenciones.
</p>

<p>
  Todos estos cambios se reflejan automáticamente entre usuarios conectados,
  permitiendo mantener una visión sincronizada y actualizada del estado general del sistema.
</p>

<p>
  El objetivo principal de la demo es servir como punto de partida para futuras reuniones con el centro médico,
  donde se analizarán posibles mejoras, cambios funcionales y nuevas necesidades operativas antes de una eventual versión productiva.
</p>
`,
        },

        {
          key: "nivel-2",
          label: "Nivel 2",
          body: `
<h2>Mediflow — Sistema de gestión de turnos médicos</h2>

<p>
  <strong>Mediflow</strong> es una aplicación fullstack desarrollada como demo funcional para un centro médico privado,
  orientada a validar flujos reales de gestión de turnos, pagos online y administración operativa.
</p>

<p>
  El sistema fue diseñado contemplando distintos perfiles de usuario:
  <strong>pacientes, secretarias y profesionales</strong>,
  adaptando la interfaz y las funcionalidades disponibles según el rol autenticado.
</p>

<p>
  Los pacientes pueden registrarse utilizando credenciales tradicionales o autenticación con Google mediante <strong>NextAuth</strong>.
  Una vez autenticados, acceden a un flujo guiado para seleccionar especialidad,
  profesional, fecha y horario disponible antes de completar el pago mediante <em>MercadoPago</em>.
</p>

<p>
  El estado del turno no depende únicamente de la navegación del usuario.
  La confirmación del pago se procesa posteriormente y el sistema permite recuperar correctamente el estado incluso si el usuario abandona el flujo de pago o cierra la pestaña.
</p>

<p>
  Además, cada reserva posee una expiración configurable.
  Si el pago no se completa dentro del tiempo establecido,
  el sistema libera automáticamente el horario para evitar bloqueos innecesarios en la agenda.
</p>

<p>
  Uno de los escenarios más importantes contemplados en el proyecto es la creación de turnos por parte de secretarias para pacientes que no poseen cuenta en la plataforma.
</p>

<p>
  Para resolver esto, la secretaria puede:
</p>

<ul>
  <li>buscar pacientes existentes</li>
  <li>crear nuevos pacientes manualmente</li>
  <li>generar turnos sin autenticación del paciente</li>
  <li>compartir links de pago externos</li>
</ul>

<p>
  Esto introdujo otro problema de dominio:
  evitar duplicados cuando un paciente previamente creado por secretaria decide registrarse posteriormente desde la web.
</p>

<p>
  Para resolverlo, el sistema intenta asociar automáticamente la nueva cuenta con el registro de paciente existente,
  preservando historial, turnos y referencias previas.
</p>

<p>
  Las secretarias cuentan con una vista diaria de turnos tanto en formato tabla como calendario,
  mientras que los profesionales visualizan únicamente su propia agenda,
  pudiendo iniciar consultas, registrar observaciones y actualizar estados de atención.
</p>

<p>
  A nivel técnico, el proyecto utiliza <strong>PostgreSQL</strong> junto con <strong>Prisma</strong>,
  modelando entidades como usuarios, pacientes, profesionales, turnos y pagos.
</p>

<p>
  La sincronización entre múltiples usuarios conectados se resuelve mediante <strong>TanStack Query</strong> y polling automático,
  permitiendo actualizar calendarios y estados sin recargar manualmente la aplicación.
</p>

<p>
  La disponibilidad de turnos se calcula dinámicamente combinando:
</p>

<ul>
  <li>horarios del profesional</li>
  <li>turnos existentes</li>
  <li>estado de pagos</li>
</ul>

<p>
  El objetivo de esta demo es servir como base de discusión con el centro médico,
  permitiendo validar decisiones de negocio, detectar nuevas necesidades y evolucionar el sistema hacia una posible implementación real.
</p>
`,
        },

        {
          key: "nivel-3",
          label: "Nivel 3",
          body: `
<h2>Mediflow — Sistema de gestión de turnos médicos</h2>

<p>
  <strong>Mediflow</strong> es una aplicación fullstack desarrollada con <strong>Next.js App Router</strong>,
  concebida como demo funcional para un centro médico privado y diseñada bajo un enfoque modular orientado a dominio.
</p>

<p>
  La arquitectura adopta una estructura <em>feature-first</em>,
  donde cada dominio encapsula su propia lógica, componentes, hooks, servicios y tipos:
</p>

<ul>
  <li>autenticación</li>
  <li>pacientes</li>
  <li>profesionales</li>
  <li>especialidades</li>
  <li>turnos</li>
  <li>pagos</li>
  <li>calendario</li>
</ul>

<p>
  La autenticación se implementa mediante <strong>NextAuth</strong> utilizando estrategia JWT,
  soportando:
</p>

<ul>
  <li>credenciales locales</li>
  <li>OAuth con Google</li>
  <li>recuperación de contraseña</li>
</ul>

<p>
  El modelo de usuarios diferencia roles tipados:
</p>

<ul>
  <li><code>PATIENT</code></li>
  <li><code>SECRETARY</code></li>
  <li><code>PROFESSIONAL</code></li>
</ul>

<p>
  Durante la construcción del sistema apareció un escenario de negocio relevante:
  las secretarias debían poder generar turnos para pacientes sin cuenta registrada.
</p>

<p>
  Para resolverlo, se desacopló completamente:
</p>

<ul>
  <li>flujo de autenticación</li>
  <li>flujo de creación del turno</li>
  <li>flujo de pago</li>
</ul>

<p>
  Cuando una secretaria crea un turno, el sistema permite:
</p>

<ul>
  <li>buscar pacientes existentes</li>
  <li>crear pacientes inline</li>
  <li>generar links externos de pago</li>
  <li>delegar el pago fuera del contexto autenticado</li>
</ul>

<p>
  Esto introdujo otro problema de consistencia:
  evitar registros duplicados cuando un paciente previamente creado manualmente decide registrarse posteriormente desde la web.
</p>

<p>
  Para resolverlo, durante el registro se ejecuta una estrategia de reconciliación de identidad,
  intentando asociar automáticamente el nuevo usuario autenticado con un registro <code>Patient</code> existente,
  preservando:
</p>

<ul>
  <li>historial de turnos</li>
  <li>pagos</li>
  <li>referencias previas</li>
  <li>trazabilidad operativa</li>
</ul>

<p>
  El núcleo del dominio gira alrededor de la entidad <strong>Appointment</strong>,
  cuyo ciclo de vida se modela mediante estados explícitos:
</p>

<ul>
  <li><code>PENDING</code></li>
  <li><code>CONFIRMED</code></li>
  <li><code>IN_PROGRESS</code></li>
  <li><code>COMPLETED</code></li>
  <li><code>CANCELLED</code></li>
</ul>

<p>
  Las transiciones se validan mediante reglas centralizadas reutilizadas entre frontend y backend.
</p>

<p>
  La disponibilidad de slots no se persiste directamente en base de datos.
  Se calcula dinámicamente combinando:
</p>

<ul>
  <li>disponibilidad laboral del profesional</li>
  <li>turnos existentes</li>
  <li>estado de pagos</li>
  <li>expiración de reservas</li>
</ul>

<p>
  El modelo de pagos desacopla completamente la confirmación del turno.
  Cada appointment puede tener múltiples intentos de pago,
  identificados mediante <code>attemptNumber</code>,
  almacenando:
</p>

<ul>
  <li>estado</li>
  <li>timestamps</li>
  <li>referencias externas</li>
  <li>respuesta de MercadoPago</li>
</ul>

<p>
  El sistema nunca utiliza el frontend como fuente de verdad para confirmar pagos.
  La actualización final ocurre mediante <strong>webhooks</strong>,
  persistiendo el resultado validado directamente en PostgreSQL.
</p>

<p>
  Para evitar bloqueos permanentes de agenda,
  los turnos poseen expiración configurable.
  La liberación de slots se implementa mediante una estrategia híbrida:
</p>

<ul>
  <li><strong>cron jobs</strong> para limpieza periódica</li>
  <li><strong>validaciones en endpoints críticos</strong> para consistencia inmediata</li>
</ul>

<p>
  La sincronización multi-cliente se implementa mediante <strong>TanStack Query</strong> y polling inteligente:
</p>

<ul>
  <li>30 segundos con pestaña activa</li>
  <li>60 segundos en background</li>
</ul>

<p>
  Esta decisión permitió mantener consistencia entre secretarias y profesionales
  evitando la complejidad operativa de WebSockets para el tamaño actual del proyecto.
</p>

<p>
  La persistencia utiliza <strong>PostgreSQL</strong> junto con <strong>Prisma ORM</strong>,
  incluyendo seeds independientes para poblar usuarios, pacientes, profesionales,
  especialidades, disponibilidad y turnos de prueba.
</p>

<p>
  El proyecto se encuentra actualmente en etapa demo/pre-productiva,
  pensado como base para reuniones funcionales con el centro médico,
  donde se analizarán necesidades reales, ajustes de negocio y evolución futura del dominio antes de una eventual puesta en producción.
</p>
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
      "Tailwind",
      "Shadcn",
      "Prisma",
      "PostgreSQL",
      "Pusher",
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
          key: "nivel-1",
          label: "Nivel 1",
          body: `
  <p>
    Sistema web interno diseñado para organizar y supervisar la gestión de turnos dentro de una obra social.
  </p>

  <p>
    El proyecto simula un entorno real de trabajo con distintos niveles de responsabilidad y necesidades operativas,
    estructurando el funcionamiento diario en tres áreas claramente diferenciadas.
  </p>

  <h3>Panel interno de gestión</h3>

  <p>
    Los empleados deben iniciar sesión para acceder al sistema. Existen tres tipos de usuarios:
    administrador, supervisor y operador, cada uno con permisos específicos según su rol.
  </p>

  <ul>
    <li><strong>Administrador:</strong> acceso total y capacidad de configuración.</li>
    <li><strong>Supervisor:</strong> acceso completo a la información sin permisos de edición.</li>
    <li><strong>Operador:</strong> atención de turnos en áreas específicas asignadas.</li>
  </ul>

  <p>
    Desde el panel principal se puede visualizar el estado general del sistema,
    consultar métricas de rendimiento por área o por operador y mantener trazabilidad
    sobre las acciones realizadas dentro de la organización.
  </p>

  <h3>Turnero digital</h3>

  <p>
    El afiliado ingresa su DNI, selecciona el área donde desea ser atendido y obtiene
    un ticket impreso con un código identificador (por ejemplo: FM-1).
    Este proceso organiza la atención y evita filas desestructuradas.
  </p>

  <h3>Pantalla pública de llamados</h3>

  <p>
    En la sala de espera se visualiza el turno actual y el historial reciente de llamados.
    El afiliado puede seguir el avance de la atención de manera clara y transparente.
  </p>

  <p>
    En conjunto, el sistema prioriza orden, control interno y visibilidad operativa,
    simulando un entorno institucional donde la organización y la trazabilidad
    son elementos centrales.
  </p>

  <p>
    Fue desarrollado como ejercicio práctico avanzado para recrear un sistema organizacional completo,
    incorporando gestión jerárquica de permisos y sincronización en tiempo real.
  </p>
`,
        },
        {
          key: "nivel-2",
          label: "Nivel 2",
          body: `
  <p>
  El sistema está desarrollado como una aplicación fullstack utilizando Nextjs
  con App Router, integrando frontend y backend dentro del mismo proyecto.
</p>

<p>
  La estructura del código está organizada bajo un enfoque modular mediante
  una carpeta <code>features/</code>, donde cada módulo representa un dominio
  funcional claramente diferenciado del sistema (usuarios, servicios,
  afiliados, turnos, auditorías, etc.).
</p>

<p>
  Cada módulo mantiene una estructura interna consistente según sus necesidades,
  pudiendo incluir carpetas como:
</p>

<ul>
  <li><code>components</code> (UI específica del dominio)</li>
  <li><code>hooks</code> (lógica reutilizable y manejo de estado)</li>
  <li><code>services</code> (interacción con API y lógica de negocio)</li>
  <li><code>types</code> (tipado del dominio)</li>
  <li><code>lib</code> (utilidades internas)</li>
  <li><code>context</code> (cuando el módulo requiere estado compartido)</li>
</ul>

<p>
  No todos los módulos incluyen todas las carpetas; cada uno implementa
  únicamente las capas necesarias para su funcionamiento.
</p>

<p>
  En <code>app/</code> se definen las páginas (Server Components),
  las cuales importan los componentes correspondientes desde <code>features</code>.
  Esto permite una separación clara entre renderizado del servidor y componentes
  de cliente, manteniendo la lógica de dominio encapsulada y desacoplada de la
  estructura de rutas.
</p>

<p>
  Los endpoints REST se encuentran en <code>app/api</code>, consolidando
  la capa backend dentro del mismo proyecto y manteniendo una arquitectura
  monolítica modular.
</p>

  <p>
  La persistencia se gestiona con <strong>PostgreSQL</strong> utilizando <strong>Prisma</strong> como ORM tipado. La base de datos corre en un entorno Dockerizado para garantizar aislamiento y consistencia en desarrollo.
</p>

  <h4>Autenticación y Sincronización</h4>

  <p>
    La autenticación está delegada a <strong>Clerk</strong>, mientras que el sistema mantiene su propia base de datos interna de usuarios. En el primer inicio de sesión exitoso, se crea el registro interno si no existe,asignando por defecto el rol <code>OPERATOR</code>.
  </p>

  <p>
    Se utilizan dos webhooks:
  </p>
  <ul>
    <li>Webhook de sesiones para registrar actividad (login/logout).</li>
    <li>Webhook de usuarios para sincronizar cuentas externas con la base interna.</li>
  </ul>

  <p>
    Los endpoints de los webhooks validan firma conforme a la documentación oficial,
    evitando requests no autorizados.
  </p>

  <h4>Modelo de Roles y Seguridad</h4>

  <p>
    El sistema implementa una jerarquía de roles (<code>OPERATOR</code>, 
    <code>SUPERVISOR</code>, <code>ADMIN</code>) validada en backend mediante 
    una función <code>requireRole</code> que:
  </p>

  <ul>
    <li>Verifica sesión activa.</li>
    <li>Consulta el rol real desde base de datos.</li>
    <li>Compara niveles jerárquicos.</li>
    <li>Retorna 401 o 403 según corresponda.</li>
  </ul>

  <p>
    Las rutas privadas también validan sesión en el layout del servidor,
    evitando depender exclusivamente del estado del cliente.
  </p>

  <h4>Modelo de Datos</h4>

  <p>
    El esquema relacional está diseñado para reflejar la operación real del sistema:
  </p>

  <ul>
    <li>
      <strong>Usuarios</strong> con soft delete y relación many-to-many con servicios mediante <code>UserService</code>.
    </li>
    <li>
      <strong>Afiliados</strong> normalizados con provincia, ciudad y organización.
    </li>
    <li>
      <strong>Servicios</strong> con índice incremental (<code>currentIndex</code>) para generación de tickets.
    </li>
    <li>
      <strong>Tickets</strong> con estados tipados (<code>PENDING</code>, <code>CALLED</code>, 
      <code>IN_PROGRESS</code>, <code>COMPLETED</code>, etc.) y métricas temporales 
      (<code>waitingSeconds</code>, <code>durationSeconds</code>).
    </li>
    <li>
      <strong>Auditorías</strong> clasificadas por tipo (<code>FUNCTIONAL</code>, 
      <code>SECURITY</code>, <code>SYSTEM</code>) con índices optimizados para dashboards.
    </li>
  </ul>

  <p>
  Las áreas de farmacia (General y Medicamentos) están modeladas como
  entidades independientes, aun cuando actualmente comparten una estructura
  similar. Esta decisión permite que cada área evolucione de manera autónoma
  en el futuro sin afectar a la otra, evitando acoplamientos innecesarios
  en la capa de dominio.
</p>

<p>
  Son las únicas áreas del sistema que gestionan venta de productos y generan
  órdenes asociadas a un ticket, operador y afiliado, por lo que se modelaron
  con sus propias entidades y relaciones específicas.
</p>

  <h4>Sistema de Turnos y Realtime</h4>

  <p>
    El panel de turnos combina persistencia en base de datos con notificaciones en tiempo real
    mediante 
    <strong>Pusher</strong>.
  </p>

  <p>
    Cada servicio utiliza un canal independiente (<code>turn-queue-{serviceId}</code>).
    Cuando un operador ejecuta una acción (llamar siguiente, iniciar atención,
    cancelar, marcar ausente o completar), el flujo es:
  </p>

  <ol>
    <li>Se ejecuta un endpoint REST específico.</li>
    <li>Se actualiza el estado del ticket en base de datos.</li>
    <li>Se emite un evento <code>updated</code> vía Pusher.</li>
    <li>Los clientes suscriptos refrescan el estado actual.</li>
  </ol>

  <p>
    El hook <code>useTurnQueue</code> encapsula:
  </p>

  <ul>
    <li>Fetch inicial del estado.</li>
    <li>Mutaciones controladas.</li>
    <li>Manejo de loading y errores.</li>
    <li>Suscripción y limpieza automática del canal realtime.</li>
  </ul>

  <h4>Trazabilidad y Auditoría</h4>

  <p>
    El sistema registra eventos funcionales (cambios de estado),
    intentos de acceso no autorizado y eventos del sistema (login/logout),
    permitiendo análisis operativo y detección de comportamientos anómalos.
  </p>

  <p>
    Actualmente el proyecto no se encuentra desplegado en producción
    debido a la ausencia de hosting persistente para la base de datos,
    aunque la arquitectura está preparada para su despliegue en entornos cloud.
  </p>
`,
        },
        {
          key: "nivel-3",
          label: "Nivel 3",
          body: `
  <p>
    Sistema fullstack orientado a dominio para la gestión interna de turnos de una obra social.
    Diseñado para operar en entorno controlado con múltiples roles, reglas diferenciadas
    y sincronización en tiempo real.
  </p>

  <h3>Arquitectura</h3>

  <p>
    Implementa una Modular Feature Architecture (feature-first).
    El directorio <code>app/</code> se utiliza exclusivamente para routing,
    mientras que cada dominio encapsula su UI, tipos, validaciones,
    servicios y lógica de negocio dentro de <code>features/</code>.
  </p>

  <p>
    Principios aplicados:
  </p>

  <ul>
    <li>Alta cohesión interna por dominio.</li>
    <li>Bajo acoplamiento entre módulos.</li>
    <li>Backend-driven frontend.</li>
    <li>Separación estricta entre UI y lógica transaccional.</li>
  </ul>

  <p>
    Los servicios siguen una convención basada en acciones
    (<code>get/create/update/delete</code>) para expresar intención explícita.
  </p>

  <h3>Dominio de Turnos</h3>

  <p>
    El ciclo de vida está modelado como transiciones explícitas:
  </p>

  <pre>
generateTicket()
callNextTicket()
handleCurrentTicket()
  </pre>

  <p>
    Cada transición registra timestamps independientes
    (calledAt, startedAt, completedAt) para permitir:
  </p>

  <ul>
    <li>Tiempo hasta llamado.</li>
    <li>Tiempo real de atención.</li>
    <li>Métricas por operador y por área.</li>
    <li>Análisis histórico sin distorsión.</li>
  </ul>

  <p>
    Se implementa control de concurrencia:
  </p>

  <ul>
    <li><code>FOR UPDATE SKIP LOCKED</code> en selección de siguiente turno.</li>
    <li>Actualizaciones condicionales para evitar race conditions.</li>
    <li>Índice compuesto optimizado para consultas críticas.</li>
  </ul>

  <h3>Realtime</h3>

  <p>
    Sincronización mediante Pusher con canales dinámicos:
  </p>

  <pre>
turn-queue-{serviceId}
  </pre>

  <p>
    El backend emite eventos tras cada transición válida,
    desacoplando el core de negocio de la capa de transporte.
  </p>

  <h3>Seguridad</h3>

  <p>
    Implementa defensa en profundidad con tres capas diferenciadas:
  </p>

  <ul>
    <li><strong>Middleware (proxy.ts):</strong> Autenticación, RBAC jerárquico y redirección inteligente.</li>
    <li><strong>Private Layout:</strong> Garantiza sesión activa + consistencia con usuario en base de datos.</li>
    <li><strong>API / Server Actions:</strong> Autorización funcional mediante requireRole.</li>
  </ul>

  <p>
    Autenticación delegada a Clerk.
    Autorización implementada mediante RBAC propio con jerarquía formal:
  </p>

  <pre>
ADMIN > SUPERVISOR > OPERATOR
  </pre>

  <p>
    Se registran intentos indebidos con IP, userAgent y rol requerido.
  </p>

  <p>
    Las cuentas se crean exclusivamente desde el panel de Clerk.
    La aplicación sincroniza usuarios mediante webhooks
    para mantener trazabilidad y auditoría persistente.
  </p>

  <h3>Separación de Dominios Comerciales</h3>

  <p>
    Farmacia General y Farmacia Medicamentos se implementan como módulos independientes.
    Aunque actualmente comparten estructura de datos similar,
    se prioriza desacoplamiento para permitir evolución divergente
    sin dependencia cruzada.
  </p>

  <p>
    La lógica específica de cada servicio se delega mediante adapters,
    evitando que reglas particulares impacten en otros dominios.
  </p>

  <h3>Data Layer</h3>

  <ul>
    <li>PostgreSQL ejecutándose en contenedor Docker.</li>
    <li>Prisma con migraciones versionadas.</li>
    <li>Seeds independientes para reproducibilidad.</li>
    <li>Cache controlado en endpoints de bajo cambio.</li>
  </ul>

  <p>
    Todo componente que puede ser Server Component se implementa como tal.
    Los Client Components acceden a datos exclusivamente mediante
    endpoints o Server Actions.
  </p>

  <h3>Objetivos del Proyecto</h3>

  <ul>
    <li>Construir un sistema de mayor escala y complejidad arquitectónica.</li>
    <li>Implementar sincronización realtime desacoplada del core.</li>
    <li>Ejercitar refactorización iterativa ante problemas reales de diseño.</li>
  </ul>

  <p>
    El foco estuvo en mantenibilidad, trazabilidad y evolución del dominio
    por encima de velocidad inicial de implementación.
  </p>
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
    technologies: ["next", "tailwind"],
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
          key: "nivel-1",
          label: "Nivel 1",
          body: `
      <p>
      Ecommerce tecnológico desarrollado con Next.js y TypeScript
      como proyecto de portfolio enfocado en arquitectura frontend, tipado estricto
      y organización escalable del código.
    </p>

    <p>
      Simula el funcionamiento de una tienda real de hardware,
      incluyendo navegación por categorías, filtros dinámicos,
      páginas de detalle, carrito de compras y renderizado optimizado
      del lado del servidor.
    </p>

    <h3>Objetivo del Proyecto</h3>

    <p>
      El proyecto fue concebido para consolidar buenas prácticas modernas
      de desarrollo frontend:
    </p>

    <ul>
      <li>Renderizado SSR con App Router.</li>
      <li>Estructura modular y desacoplada.</li>
      <li>Modelado de datos fuertemente tipado.</li>
      <li>Separación clara entre datos, lógica y presentación.</li>
    </ul>

    <h3>Arquitectura de Datos</h3>

    <p>
      Toda la información de productos se centraliza en un archivo tipado
      que actúa como fuente de datos interna.
      Cada producto implementa un contrato común y puede extenderse
      mediante especificaciones técnicas específicas según categoría.
    </p>

    <p>
      Esta estrategia permite mantener control total sobre los datos,
      evitar dependencias externas y priorizar estabilidad en un entorno
      de demostración técnica.
    </p>

    <h3>Experiencia de Usuario</h3>

    <p>
      La navegación está diseñada para ser clara y predecible:
      categorías, subcategorías, filtros contextuales y páginas
      de detalle especializadas según el tipo de producto.
    </p>

    <p>
      El carrito global se gestiona mediante Context API,
      y los precios se almacenan en centavos para evitar
      errores de redondeo, formateándose dinámicamente
      a moneda local en el frontend.
    </p>
      `,
        },

        {
          key: "nivel-2",
          label: "Nivel 2",
          body: `
      <p>
      Hard360 fue estructurado bajo un enfoque modular orientado a escalabilidad.
      La aplicación utiliza el App Router de Next.js con renderizado del lado
      del servidor (SSR) para mejorar performance inicial y posicionamiento SEO.
    </p>

    <h3>Routing Dinámico</h3>

    <p>
      La navegación se organiza mediante rutas dinámicas basadas en categorías
      y subcategorías. Cada página de detalle de producto se genera a partir
      de parámetros tipados, garantizando coherencia entre URL, datos y renderizado.
    </p>

    <p>
      Esta estrategia permite escalar el catálogo sin necesidad de duplicar lógica
      de presentación.
    </p>

    <h3>Modelado de Datos y Tipado</h3>

    <p>
      El catálogo se modela mediante interfaces y tipos discriminados.
      Todos los productos comparten un contrato base, mientras que cada
      categoría puede extender sus especificaciones técnicas mediante
      tipos específicos.
    </p>

    <p>
      Esto permite:
    </p>

    <ul>
      <li>Autocompletado y validación estricta en desarrollo.</li>
      <li>Evitar estados inconsistentes en runtime.</li>
      <li>Renderizado condicional tipado según tipo de producto.</li>
    </ul>

    <h3>Renderizado de Especificaciones Dinámicas</h3>

    <p>
      Las especificaciones técnicas no se renderizan de forma rígida.
      Se implementa un patrón de mapeo dinámico que asocia cada tipo
      de producto con su componente de especificaciones correspondiente.
    </p>

    <p>
      Esto desacopla completamente la lógica de datos del componente
      de presentación y permite extender nuevas categorías sin modificar
      el núcleo de la aplicación.
    </p>

    <h3>Gestión de Estado</h3>

    <p>
      El carrito de compras se gestiona mediante Context API,
      permitiendo acceso global y actualizaciones reactivas
      sin necesidad de librerías externas.
    </p>

    <p>
      Los precios se almacenan internamente en centavos para evitar
      problemas de precisión numérica, aplicando formateo
      a moneda local únicamente en la capa de presentación.
    </p>

    <h3>Principios Aplicados</h3>

    <ul>
      <li>Separación clara entre datos, lógica y UI.</li>
      <li>Arquitectura preparada para backend real.</li>
      <li>Escalabilidad por extensión, no por modificación.</li>
      <li>Tipado fuerte como herramienta de diseño.</li>
    </ul>
      `,
        },

        {
          key: "nivel-3",
          label: "Nivel 3",
          body: `
      <p>
      Ecommerce diseñado con una arquitectura preparada para evolucionar
      hacia un entorno productivo real sin necesidad de reescritura.
      Aunque actualmente utiliza una fuente de datos interna,
      la estructura del proyecto permite desacoplar fácilmente
      el frontend de un backend externo.
    </p>

    <h3>Preparación para Backend Real</h3>

    <p>
      El modelado de datos tipado funciona como contrato.
      Esto facilita una futura integración con una API REST o GraphQL,
      ya que los tipos pueden reutilizarse como capa de validación
      y mapeo de respuestas.
    </p>

    <p>
      La separación entre capa de datos y componentes UI
      permite reemplazar la fuente actual por fetch requests
      sin afectar la estructura visual ni la navegación.
    </p>

    <h3>Estrategia de Renderizado</h3>

    <p>
      El uso de SSR en el App Router fue una decisión consciente
      para priorizar performance inicial y SEO.
      La arquitectura permite migrar selectivamente a
      SSG o ISR según necesidades de negocio.
    </p>

    <h3>Extensibilidad por Diseño</h3>

    <p>
      Las categorías y especificaciones técnicas se agregan
      por extensión, no por modificación.
      El sistema de mapeo dinámico evita condicionales rígidos
      y reduce el acoplamiento entre tipos y componentes.
    </p>

    <h3>Calidad y Mantenibilidad</h3>

    <ul>
      <li>Tipado estricto como herramienta de diseño preventivo.</li>
      <li>Precios almacenados en centavos para evitar errores de precisión.</li>
      <li>Estructura modular orientada a responsabilidad única.</li>
      <li>Código preparado para crecimiento del catálogo.</li>
    </ul>

    <h3>Evolución Potencial</h3>

    <p>
      El proyecto puede evolucionar hacia:
    </p>

    <ul>
      <li>Integración con base de datos y autenticación.</li>
      <li>Persistencia de carrito mediante almacenamiento seguro.</li>
      <li>Panel administrativo desacoplado.</li>
      <li>Optimización con cacheo e incremental static regeneration.</li>
    </ul>

    <p>
      Más que un ecommerce estático, Hard360 fue concebido
      como una base arquitectónica lista para escalar.
    </p>
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
    technologies: ["next", "tailwind", "mongo"],
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
          key: "nivel-1",
          label: "Nivel 1",
          body: `
      <p>
          Desarrollo de una plataforma web para un vivero que necesitaba
          exhibir y gestionar su catálogo de productos de forma autónoma.
        </p>

        <p>
          El sistema permite al cliente administrar sus productos
          desde un panel privado con login seguro, donde puede
          crear, editar o eliminar artículos sin conocimientos técnicos.
        </p>

        <h3>Qué resuelve el proyecto</h3>

        <ul>
          <li>Gestión completa de productos desde un panel administrativo.</li>
          <li>Organización del catálogo mediante categorías jerárquicas.</li>
          <li>Sección configurable de “Productos destacados” en la página principal.</li>
          <li>Venta online integrada (actualmente deshabilitada por decisión comercial).</li>
          <li>Contacto directo vía WhatsApp para consultas personalizadas.</li>
        </ul>

        <p>
          Inicialmente el sitio permitía realizar pagos online,
          pero debido a que el modelo de negocio funciona bajo demanda,
          se desactivó temporalmente la compra directa para evitar
          ventas de productos no disponibles.
        </p>

        <p>
          En su lugar, se implementó un sistema de contacto directo
          que mantiene la experiencia simple y alineada con la operativa real del vivero.
        </p>

        <p>
          El resultado es una plataforma profesional que brinda autonomía,
          visibilidad digital y una base sólida para futuras mejoras.
        </p>
      `,
        },

        {
          key: "nivel-2",
          label: "Nivel 2",
          body: `
      <p>
          Aplicación fullstack desarrollada con Next.js,
          base de datos relacional y autenticación con NextAuth.
          El sistema permite administrar productos, categorías
          y contenido destacado desde un panel protegido.
        </p>

        <h3>Arquitectura Funcional</h3>

        <p>
          El catálogo se organiza mediante un modelo de categorías
          jerárquicas de tres niveles basado en relaciones padre-hijo.
          El menú de navegación se construye dinámicamente
          a partir de la base de datos.
        </p>

        <ul>
          <li>Categorías raíz sin padres.</li>
          <li>Categorías intermedias con padre e hijos.</li>
          <li>Categorías finales sin hijos.</li>
        </ul>

        <p>
          Al agregar una nueva categoría desde el panel,
          esta se refleja automáticamente en la navegación
          sin necesidad de modificar código.
        </p>

        <h3>Integración de Pagos</h3>

        <p>
          Se implementó integración con MercadoPago mediante
          generación de preferencias de pago y un webhook
          para procesar respuestas asincrónicas del proveedor.
        </p>

        <p>
          Debido al modelo de ventas bajo demanda,
          el módulo de pagos fue desacoplado temporalmente,
          manteniendo intacta la arquitectura principal.
        </p>

        <h3>Gestión de Assets</h3>

        <p>
          Las imágenes se almacenan en Cloudinary,
          permitiendo carga directa desde el panel administrativo
          y optimización automática del contenido multimedia.
        </p>
      `,
        },

        {
          key: "nivel-3",
          label: "Nivel 3",
          body: `
      <p>
          Plataforma fullstack orientada a dominio, diseñada para
          gestionar catálogo, categorías jerárquicas y flujo de pagos
          con arquitectura desacoplada y preparada para cambios comerciales.
        </p>

        <h3>Modelo de Datos y Jerarquía</h3>

        <p>
          El sistema implementa una estructura de categorías
          multinivel utilizando relaciones autorreferenciales (parentId),
          permitiendo construir un árbol dinámico desde base de datos.
        </p>

        <p>
          La generación del menú es completamente data-driven,
          evitando hardcode y favoreciendo extensibilidad.
        </p>

        <h3>Flujo de Pagos y Webhook</h3>

        <p>
          La integración con MercadoPago se diseñó mediante:
        </p>

        <ul>
          <li>Creación de preference con información del pedido.</li>
          <li>Recepción de eventos asincrónicos vía webhook.</li>
          <li>Procesamiento desacoplado del estado de la transacción.</li>
        </ul>

        <p>
          El webhook actúa como punto de confirmación externo,
          permitiendo manejar estados de éxito o error sin bloquear
          la experiencia del usuario.
        </p>

        <h3>Decisión Arquitectónica Clave</h3>

        <p>
          Ante el cambio del modelo de negocio hacia ventas bajo demanda,
          el módulo de pagos pudo deshabilitarse sin afectar
          el dominio principal del sistema.
        </p>

        <p>
          Esta separación entre catálogo y pasarela de pago demuestra
          un diseño con bajo acoplamiento y responsabilidad clara.
        </p>

        <h3>Infraestructura y Escalabilidad</h3>

        <ul>
          <li>Autenticación segura mediante NextAuth.</li>
          <li>Persistencia en base de datos relacional.</li>
          <li>Assets desacoplados en Cloudinary.</li>
          <li>Arquitectura preparada para reactivar pagos o integrar control de stock.</li>
        </ul>

        <p>
          El sistema fue concebido no solo como un sitio informativo,
          sino como una base arquitectónica lista para evolucionar
          hacia un ecommerce completo con control transaccional y escalabilidad futura.
        </p>
      `,
        },
      ],
    },
  },

  // apex-soporte
  {
    id: 24,
    title: "Apex Sporote",
    slug: "apex-soporte",
    liveSiteUrl: "",
    githubUrl: "",
    desc: "Sitio web que permite gestionar reclamos de los usuarios y visualizar la información en tablas y gráficos.",
    technologies: ["next", "tailwind", "mongo"],
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
      type: "single",
      body: `
    <p>
      Desarrollo de una aplicación interna para APEX, empresa tercerizada
      que brinda soporte de atención al cliente para PERSONAL.
      El objetivo fúe reemplazar un flujo basado en Google Forms y
      Google Sheets por una solución web más robusta,
      manteniendo una experiencia visual familiar para los usuarios del sistema.
    </p>

    <h3>Contexto del Proyecto</h3>

    <p>
      El sistema anterior consistía en formularios de Google Docs donde
      los operadores registraban incidencias reportadas por clientes.
      Esa información se consolidaba automáticamente en una planilla
      que los supervisores utilizaban para analizar casos y tomar decisiones.
    </p>

    <p>
      La solución funcionaba, pero presentaba limitaciones en términos
      de análisis de datos, visualización, control y escalabilidad.
      La empresa necesitaba una herramienta más profesional sin generar
      fricción en la adopción por parte del equipo.
    </p>

    <h3>Solución Implementada</h3>

    <ul>
      <li>Formulario de carga de incidentes para operadores.</li>
      <li>Reporte de incidentes con tabla y gráficos analíticos.</li>
      <li>Formulario de adelantos para supervisores.</li>
      <li>Reporte de adelantos con visualización estructurada.</li>
    </ul>

    <h3>Arquitectura y Stack Tecnológico</h3>

    <ul>
      <li>Next.js con enfoque SSR para mejorar seguridad y performance.</li>
      <li>MongoDB como base de datos.</li>
      <li>Autenticación con cuenta de Google.</li>
      <li>React Hook Form + Zod para formularios y validaciones.</li>
      <li>Recharts para visualización de gráficos.</li>
      <li>Tailwind CSS para estilos.</li>
      <li>Testing con Jest y React Testing Library.</li>
    </ul>

    <h3>Decisión Técnica Relevante</h3>

    <p>
      Debido a latencias generadas por el estado standby en el plan gratuito de Vercel,
      se migraron determinadas operaciones de fetch al cliente,
      mejorando tiempos de respuesta y métricas como LCP.
    </p>

    <h3>Impacto</h3>

    <p>
      Proyecto desarrollado en interacción directa con gerencia,
      fortaleciendo comunicación técnica, toma de decisiones
      y adaptación a restricciones de infraestructura.
    </p>
  `,
    },
  },

  //linktree-clone
  {
    id: 23,
    title: "Linktree Clone",
    slug: "linktree-clone",
    liveSiteUrl: "https://linktree-clone-gray.vercel.app/",
    githubUrl: "https://github.com/eduviana/linktree-clone",
    desc: "Clon moderno y personalizable de Linktree para centralizar enlaces sociales y profesionales con diseño minimalista.",
    technologies: ["next", "tailwind", "clerk", "prisma"],
    categories: ["Nextjs", "Prueba Técnica"],
    thumbnail: "/projects/fullstack/linktreeclone/linktree-2.webp",
    images: [
      "/projects/fullstack/linktreeclone/linktree-1.webp",
      "/projects/fullstack/linktreeclone/linktree-2.webp",
      "/projects/fullstack/linktreeclone/linktree-3.webp",
      "/projects/fullstack/linktreeclone/linktree-4.webp",
    ],
    content: {
      type: "single",
      body: `
    <p>
      Aplicación full-stack desarrollada como proyecto de profundización en Next.js,
      enfocada en arquitectura escalable, buenas prácticas y organización profesional del código.
      Se trata de un clon moderno y personalizable de Linktree que permite a los usuarios
      centralizar enlaces sociales, portafolios y proyectos destacados en un perfil público optimizado para SEO.
    </p>

    <h3>Objetivo del Proyecto</h3>

    <p>
      Más allá de replicar funcionalidades, el objetivo principal fue internalizar patrones
      de arquitectura del App Router de Next.js, separación de responsabilidades y
      estructura modular orientada a mantenibilidad en entornos productivos.
    </p>

    <h3>Arquitectura y Stack Tecnológico</h3>

    <ul>
      <li>Next.js con App Router y renderizado estático para optimización SEO.</li>
      <li>Clerk para autenticación segura con manejo de sesiones y multi-factor.</li>
      <li>Prisma como ORM para interacción tipada con PostgreSQL.</li>
      <li>shadcn/ui para componentes accesibles y sistema de temas.</li>
      <li>Tailwind CSS para estilos utilitarios y diseño consistente.</li>
    </ul>

    <p>
      Los perfiles se gestionan dinámicamente mediante un panel interno (CMS propio),
      permitiendo actualizar biografía, enlaces y preferencias de tema (light/dark)
      sin necesidad de modificar código.
    </p>

    <h3>Performance y Accesibilidad</h3>

    <ul>
      <li>Optimización de imágenes con el componente <code>Image</code> de Next.js.</li>
      <li>Animaciones CSS nativas para minimizar costo de render.</li>
      <li>Componentes accesibles basados en shadcn/ui alineados con estándares WCAG.</li>
      <li>Renderizado optimizado para mejorar métricas de Lighthouse.</li>
    </ul>

    <h3>Metodología de Organización</h3>

    <p>
      Uno de los aprendizajes más relevantes fue la estructura modular basada en
      segmentación por features dentro del directorio <code>app</code>.
      Se utilizaron carpetas con la sintaxis (feature) para agrupar lógica sin
      afectar el sistema de rutas.
    </p>

    <p>
      Cada sección contiene su propia carpeta <code>components</code>, y cada componente
      se encapsula en una carpeta individual con:
    </p>

    <ul>
      <li>Archivo principal <code>.tsx</code>.</li>
      <li>Archivo <code>types.ts</code> para tipado explícito.</li>
      <li>Archivo <code>form.ts</code> cuando aplica lógica de formularios.</li>
      <li>Archivo <code>data.ts</code> para datos estáticos.</li>
      <li>Archivo <code>index.ts</code> para exportaciones limpias.</li>
    </ul>

    <p>
      Esta organización reduce el acoplamiento, acorta rutas de importación
      y mejora significativamente la mantenibilidad y escalabilidad del proyecto.
      El resultado es una base de código clara, modular y preparada para crecimiento.
    </p>
  `,
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
    technologies: ["next", "tailwind"],
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
      type: "single",
      body: `
    <p>
      Desarrollo de un ecommerce para una tienda de accesorios y productos tecnológicos,
      donde el principal requerimiento del cliente era poder administrar productos
      de forma autónoma sin depender de un panel complejo ni conocimientos técnicos avanzados.
    </p>

    <h3>Contexto y Decisión Estratégica</h3>

    <p>
      Durante el relevamiento inicial, el cliente manifestó que se sentía cómodo
      trabajando con hojas de cálculo tipo Excel.
      En lugar de imponer una base de datos tradicional,
      se optó por utilizar Google Sheets como fuente de datos,
      integrándola mediante la API oficial.
    </p>

    <p>
      Cada hoja del documento representa una categoría de productos,
      lo que facilita la organización, edición y mantenimiento
      sin necesidad de capacitación adicional.
      Esta decisión priorizó adopción y usabilidad sobre complejidad técnica.
    </p>

    <h3>Arquitectura y Stack Tecnológico</h3>

    <ul>
      <li>Next.js como framework fullstack.</li>
      <li>Integración con Google Sheets API como base de datos.</li>
      <li>Stripe como pasarela de pagos.</li>
      <li>use-shopping-cart para gestión del carrito.</li>
      <li>Tailwind CSS para estilos.</li>
    </ul>

    <h3>Implementación de Pagos</h3>

    <p>
      Para el procesamiento de pagos se integró Stripe,
      utilizando el paquete use-shopping-cart para la gestión segura del carrito.
      Existen dos enfoques posibles para esta integración:
      client-side o server-side.
    </p>

    <p>
      Se optó por la implementación del lado del servidor,
      alineada con el modelo de Server Components de Next.js,
      reduciendo exposición de lógica sensible en el cliente
      y mejorando la seguridad del flujo de pago.
    </p>

    <h3>Aprendizajes y Experiencia Profesional</h3>

    <p>
      Este fue mi primer proyecto freelance real,
      donde asumí la responsabilidad completa del ciclo:
      análisis de requerimientos, investigación de soluciones,
      selección tecnológica e implementación.
    </p>

    <p>
      La experiencia fortaleció mi capacidad de comunicación con el cliente,
      toma de decisiones técnicas pragmáticas
      y adaptación del stack a las necesidades reales del negocio.
      Más allá de la tecnología utilizada,
      el valor principal estuvo en diseñar una solución alineada
      con el perfil operativo del usuario final.
    </p>
  `,
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
    technologies: ["react", "sass", "redux"],
    categories: ["React"],
    thumbnail: "/projects/fullstack/movix/movix-1.webp",
    images: [
      "/projects/fullstack/movix/movix-1.webp",
      "/projects/fullstack/movix/movix-3.webp",
      "/projects/fullstack/movix/movix-4.webp",
    ],
    content: {
      type: "single",
      body: `
    <p>
      Aplicación web desarrollada en React para explorar películas y series
      consumiendo la API pública de The Movie Database (TMDB).
      El objetivo principal fue profundizar en el manejo de estado global,
      arquitectura de componentes reutilizables y consumo eficiente de APIs externas.
    </p>

    <h3>Funcionalidades Principales</h3>

    <ul>
      <li>Exploración de películas y series por categoría.</li>
      <li>Filtro dinámico por género.</li>
      <li>Búsqueda por título.</li>
      <li>Visualización de detalles individuales.</li>
      <li>Reproducción de trailers integrados.</li>
    </ul>

    <h3>Arquitectura y Stack</h3>

    <ul>
      <li>React como librería principal.</li>
      <li>Redux para manejo de estado global.</li>
      <li>SASS para estilos modulares y organizados.</li>
    </ul>

    <p>
      Uno de los aprendizajes más importantes fue comprender que no todo estado
      debe residir en el store global. Redux se utilizó exclusivamente
      para datos que necesitaban estar disponibles en múltiples secciones
      (por ejemplo, configuración global o resultados compartidos),
      mientras que el resto de estados permanecen encapsulados
      dentro de sus respectivos componentes.
    </p>

    <p>
      Esta decisión reduce complejidad innecesaria,
      evita sobrecarga en el store y mejora la mantenibilidad.
    </p>

    <h3>Optimización de Experiencia de Usuario</h3>

    <ul>
      <li>dayjs para formateo eficiente de fechas.</li>
      <li>react-circular-progressbar para visualización de calificaciones.</li>
      <li>react-lazy-load-image para carga perezosa de imágenes.</li>
      <li>react-player para reproducción de trailers.</li>
      <li>react-select para filtros de género interactivos.</li>
    </ul>

    <p>
      El proyecto fue desarrollado con enfoque responsive,
      priorizando una experiencia fluida tanto en dispositivos móviles
      como en escritorio.
    </p>

    <p>
      Más allá del resultado visual, el valor principal del proyecto
      radica en la correcta separación de responsabilidades,
      reutilización de componentes y comprensión práctica
      del balance entre estado global y estado local en aplicaciones React.
    </p>
  `,
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
    technologies: ["next", "shadcn"],
    categories: ["Nextjs"],
    thumbnail: "/projects/fullstack/gamehub/gamehub-1.webp",
    images: [],
    video: "https://www.youtube.com/embed/U6XBxhTLSuU",
    content: {
      type: "single",
      body: `
    <p>
      Plataforma de streaming en vivo inspirada en Twitch,
      desarrollada con Next.js y enfocada en integrar autenticación,
      transmisión en tiempo real y gestión de interacción entre usuarios.
    </p>

    <h3>Objetivo del Proyecto</h3>

    <p>
      El propósito fue comprender e implementar una arquitectura
      capaz de soportar streams en tiempo real, salas de transmisión,
      chat en vivo y gestión de usuarios con roles de streamer y espectador.
    </p>

    <h3>Arquitectura y Servicios Integrados</h3>

    <ul>
      <li>Next.js como framework fullstack.</li>
      <li>Clerk para autenticación con Google.</li>
      <li>Webhook para sincronizar usuarios autenticados con la base de datos.</li>
      <li>LiveKit para infraestructura de streaming en tiempo real.</li>
      <li>shadcn/ui para construcción de interfaz accesible y consistente.</li>
    </ul>

    <p>
      La autenticación se gestiona mediante Clerk, utilizando un webhook
      para registrar automáticamente la información del usuario
      en la base de datos cuando se crea o actualiza una cuenta.
      Este enfoque desacopla la gestión de identidad
      del modelo de datos interno.
    </p>

    <h3>Funcionalidades del Streamer</h3>

    <ul>
      <li>Creación y configuración de canal propio.</li>
      <li>Personalización de perfil e información del stream.</li>
      <li>Generación de credenciales para conexión con software externo como OBS Studio.</li>
      <li>Configuración avanzada del chat (modo lento, solo suscriptores, deshabilitar chat).</li>
    </ul>

    <p>
      La integración con LiveKit permite gestionar conexiones en tiempo real,
      transmisión de video y mensajería dentro de salas específicas,
      replicando la experiencia básica de plataformas de streaming profesionales.
    </p>

    <h3>Complejidad Técnica y Aprendizaje</h3>

    <p>
      A diferencia de otros proyectos del portafolio,
      este sistema incorpora múltiples servicios externos,
      eventos asincrónicos y lógica en tiempo real,
      lo que incrementa significativamente la complejidad arquitectónica.
    </p>

    <p>
      El desarrollo implicó trabajar con flujos distribuidos,
      dividir el problema en módulos manejables
      y mantener claridad en la separación de responsabilidades.
      Fue un ejercicio clave para fortalecer la capacidad
      de abordar sistemas grandes y técnicamente exigentes.
    </p>

    <p>
      Debido a que el proyecto utiliza servicios pagos para funcionar,
      no se encuentra desplegado en producción.
      En su lugar, se incluye un video demostrativo
      que muestra el funcionamiento completo del sistema.
    </p>
  `,
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
    technologies: ["next", "tailwind", "sanity"],
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
    technologies: ["react", "sass"],
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
    technologies: ["react", "material", "sass"],
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
