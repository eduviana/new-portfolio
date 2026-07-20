import { Project } from "./data.interface";

export const projects: Project[] = [
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
    metrics: [
      { value: "Feature First", label: "Arquitectura", color: "purple", icon: "flask" },
      { value: "11 Dominios", label: "Módulos Funcionales", color: "blue", icon: "globe" },
      { value: "Multi Rol", label: "Control de Acceso", color: "orange", icon: "users" },
      { value: "233 Tests", label: "Calidad", color: "green", icon: "check" },
    ],
    intro: [
      "Mediflow es una plataforma de gestión médica desarrollada para modelar la operación diaria de un centro médico privado. El proyecto nació a partir de conversaciones con profesionales del sector y busca representar de forma realista la interacción entre pacientes, secretarias, profesionales y administradores dentro de un único sistema.",
      "El proyecto aborda uno de los problemas más habituales en la gestión médica: la fragmentación de procesos entre agendas, llamados telefónicos, pagos y coordinación entre distintos actores. Para resolverlo desarrollé una aplicación capaz de administrar el ciclo completo de un turno médico, desde la reserva hasta la atención clínica, contemplando escenarios reales que suelen quedar fuera de las demos tradicionales.",
      "Más allá de la funcionalidad, el objetivo fue diseñar una arquitectura mantenible y escalable, poniendo el foco en reglas de negocio reutilizables, separación de responsabilidades y decisiones técnicas propias de una aplicación preparada para evolucionar.",
    ],
    features: [
      {
        title: "Gestión de turnos",
        description:
          "El sistema permite administrar el ciclo completo de un turno médico, contemplando tanto reservas realizadas por pacientes desde la plataforma como aquellas gestionadas telefónicamente por una secretaria. También integra el procesamiento de pagos y la liberación automática de horarios cuando una reserva no se confirma.",
        list: [
          "Reserva online de turnos.",
          "Creación de turnos telefónicos para pacientes sin cuenta.",
          "Integración con Mercado Pago.",
          "Expiración automática de reservas pendientes de pago.",
          "Disponibilidad calculada dinámicamente.",
        ],
      },
      {
        title: "Operación del centro médico",
        description:
          "Cada rol dispone de un entorno de trabajo específico con acceso únicamente a la información necesaria para su operación diaria.",
        list: [
          "Dashboards independientes para pacientes, secretarias, profesionales y administradores.",
          "Gestión de agendas.",
          "Configuración de disponibilidad semanal.",
          "Bloqueos por vacaciones y feriados.",
          "Historia clínica integrada durante la consulta.",
        ],
      },
      {
        title: "Administración",
        description:
          "El sistema incorpora herramientas para administrar usuarios, especialidades y permisos, evitando configuraciones inconsistentes mediante validaciones y restricciones específicas.",
        list: [
          "Gestión de usuarios.",
          "Gestión de especialidades médicas.",
          "Control de permisos por rol.",
          "Protección de rutas y APIs.",
        ],
      },
      {
        title: "Observabilidad",
        description:
          "Todas las operaciones relevantes quedan registradas para facilitar el seguimiento de eventos y la resolución de incidentes.",
        list: [
          "Auditoría completa de eventos.",
          "Historial de cambios.",
          "Seguimiento de pagos.",
          "Trazabilidad completa de turnos.",
        ],
      },
    ],
    engineering: [
      {
        title: "Disponibilidad calculada en tiempo real",
        paragraphs: [
          "En lugar de persistir horarios disponibles en la base de datos, decidí calcular la disponibilidad en tiempo real combinando la agenda laboral de cada profesional, los bloqueos configurados, las reservas existentes y el estado de los pagos.",
          "Este enfoque elimina problemas de sincronización y evita mantener múltiples fuentes de verdad. Aunque incrementa la complejidad del cálculo, garantiza que la disponibilidad mostrada refleje siempre el estado real del sistema.",
        ],
      },
      {
        title: "Sincronización entre múltiples clientes",
        paragraphs: [
          "Uno de los desafíos era mantener sincronizadas las agendas entre secretarias y profesionales conectados simultáneamente.",
          "Evalué implementar WebSockets, pero finalmente opté por una solución basada en TanStack Query con polling adaptativo: cada 30 segundos con la pestaña activa y cada 60 segundos cuando permanece en segundo plano.",
          "Para el volumen esperado de usuarios esta estrategia ofrecía una mejor relación entre simplicidad, mantenibilidad y costo operativo, evitando incorporar infraestructura adicional sin obtener un beneficio significativo.",
        ],
      },
      {
        title: "Reglas de negocio desacopladas",
        paragraphs: [
          "Toda la lógica del dominio fue implementada como funciones puras, independientes de React, Prisma o cualquier otra tecnología.",
          "Esto permite reutilizar exactamente las mismas reglas tanto en el frontend como en API Routes y Webhooks, garantizando que el comportamiento del sistema sea consistente independientemente del punto donde se ejecute.",
        ],
      },
      {
        title: "Continuidad del historial del paciente",
        paragraphs: [
          "Uno de los escenarios reales que decidí contemplar fue la gestión telefónica de pacientes que todavía no poseen una cuenta.",
          "Cuando una secretaria crea un turno manualmente y ese paciente se registra posteriormente, el sistema detecta automáticamente la coincidencia y vincula la nueva cuenta con toda la información existente: historial de turnos, pagos e información clínica.",
          "De esta manera se evita la duplicación de registros y se preserva la continuidad del historial médico sin intervención manual.",
        ],
      },
    ],
    architecture: [
      "La arquitectura fue diseñada priorizando mantenibilidad, desacoplamiento y escalabilidad.",
      "Para ello organicé el proyecto siguiendo un enfoque Feature First inspirado en Clean Architecture, donde cada dominio encapsula su propia lógica de negocio, componentes, hooks, validaciones y utilidades, reduciendo el acoplamiento entre módulos y facilitando la incorporación de nuevas funcionalidades.",
      "La carpeta app/ contiene exclusivamente el routing de Next.js, mientras que toda la lógica del sistema reside dentro de features/.",
      "Las reglas de negocio se implementan como funciones puras sin dependencias externas y son reutilizadas tanto en el frontend como en API Routes y Webhooks.",
      "La autenticación utiliza NextAuth v4 con JWT y autorización multirol mediante middleware, mientras que la persistencia se implementa mediante PostgreSQL y Prisma ORM.",
      "Para la sincronización de datos se utiliza TanStack Query, aprovechando cache inteligente, invalidación automática y polling adaptativo para mantener actualizadas las agendas sin necesidad de recargar la aplicación.",
      "El entorno de desarrollo se encuentra completamente containerizado con Docker e incluye seeds que permiten levantar un entorno funcional de forma reproducible.",
    ],
    quality: [
      "233 tests automatizados con Vitest y Testing Library",
      "Arquitectura Feature First inspirada en Clean Architecture",
      "Reglas de negocio desacopladas y reutilizables",
      "Integración con Mercado Pago mediante Webhooks",
      "Sistema de auditoría con trazabilidad completa de eventos",
      "Autenticación y autorización multirol",
      "Entorno de desarrollo completamente containerizado con Docker",
      "Seeds para inicialización automática de datos de prueba",
      "Sincronización multiusuario mediante TanStack Query",
    ],
  },

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
    metrics: [
      { value: "3", label: "Roles", color: "blue", icon: "users" },
      { value: "15", label: "Módulos", color: "green", icon: "filter" },
      { value: "16", label: "Modelos", color: "purple", icon: "settings" },
      { value: "Pusher", label: "Sincronización Realtime", color: "orange", icon: "globe" },
    ],
    intro: [
      "Medical Health es un sistema interno de gestión de turnos desarrollado para modelar la operación diaria de una obra social. El proyecto aborda la complejidad de coordinar múltiples actores simultáneos (afiliados, operadores y supervisores) dentro de un entorno con reglas operativas estrictas y necesidad de trazabilidad completa.",
      "El desafío principal no era simplemente registrar turnos, sino construir un sistema capaz de sincronizar paneles operativos en tiempo real, medir tiempos por etapa sin distorsiones estadísticas y mantener consistencia entre múltiples operadores trabajando concurrentemente sobre los mismos recursos.",
      "Más allá de la funcionalidad, el proyecto representa un ejercicio de evolución arquitectónica: enfrenté problemas de escalabilidad, organización del código y separación de responsabilidades, refactorizando progresivamente hacia una estructura más mantenible a medida que el dominio del negocio crecía.",
    ],
    features: [
      {
        title: "Gestión de turnos y flujo operativo",
        description:
          "El sistema modela explícitamente el ciclo completo de atención, desde la generación del turno hasta su finalización, permitiendo registrar tiempos independientes para cada etapa.",
        list: [
          "Generación de turnos para múltiples áreas de atención.",
          "Llamado de turnos desde paneles operativos.",
          "Inicio y finalización de atención con registro de tiempos.",
          "Gestión de ausencias y reprogramación.",
          "Visualización de tiempo transcurrido mediante barra progresiva.",
        ],
      },
      {
        title: "Áreas de farmacia",
        description:
          "El sistema incorpora dos áreas especializadas de farmacia con lógica independiente, permitiendo gestionar tanto medicamentos como productos generales dentro del mismo flujo operativo.",
        list: [
          "Farmacia de medicamentos con control de stock.",
          "Farmacia general para productos diversos.",
          "Carritos de compra independientes por área.",
          "Integración con el flujo de atención principal.",
        ],
      },
      {
        title: "Sincronización en tiempo real",
        description:
          "Los paneles operativos y pantallas de sala de espera se actualizan instantáneamente sin necesidad de refrescar la página, mediante eventos distribuidos.",
        list: [
          "Actualización automática cuando un operador llama un turno.",
          "Sincronización entre múltiples operadores concurrentes.",
          "Visor de turnos distribuido en salas de espera.",
          "Historial reciente de atención en tiempo real.",
        ],
      },
      {
        title: "Administración y permisos",
        description:
          "El sistema incorpora un modelo de permisos jerárquico donde cada rol dispone de un entorno de trabajo específico con acceso únicamente a la información necesaria para su operación.",
        list: [
          "ADMIN: administración completa del sistema y configuración operativa.",
          "SUPERVISOR: misma interfaz que ADMIN pero con esquema de solo lectura.",
          "OPERATOR: acceso únicamente a áreas asignadas por un administrador.",
          "Una misma cuenta puede trabajar en uno o múltiples servicios.",
        ],
      },
      {
        title: "Métricas y auditoría",
        description:
          "Todas las operaciones relevantes quedan registradas para facilitar el seguimiento de eventos, análisis de rendimiento y resolución de incidentes.",
        list: [
          "Estadísticas operativas por etapa del flujo.",
          "Tiempos independientes para llamado, espera y atención.",
          "Auditoría de eventos sensibles de seguridad.",
          "Registro de dispositivo, IP y rol del usuario.",
        ],
      },
    ],
    engineering: [
      {
        title: "Sincronización en tiempo real con Pusher",
        paragraphs: [
          "Uno de los desafíos era mantener sincronizados los paneles operativos y las pantallas de sala de espera cuando múltiples operadores trabajaban concurrentemente.",
          "Evalué alternativas como polling adaptativo (que utilicé en Mediflow) o WebSockets nativos, pero finalmente opté por Pusher como servicio gestionado. Esta decisión permitió implementar eventos en tiempo real sin incorporar infraestructura adicional de servidores WebSocket, reduciendo complejidad operativa y costo de mantenimiento.",
          "Cuando un operador llama un turno, el evento impacta simultáneamente en el panel de trabajo y en el visor de turnos distribuido, mostrando el ticket llamado y el historial reciente de atención.",
        ],
      },
      {
        title: "Manejo de concurrencia en operaciones críticas",
        paragraphs: [
          "Con múltiples operadores trabajando simultáneamente sobre los mismos turnos, era crucial evitar race conditions donde dos operadores llamaran el mismo ticket al mismo tiempo.",
          "Implementé dos mecanismos complementarios: FOR UPDATE SKIP LOCKED en SQL para bloquear filas durante la selección, y optimistic locking con updateMany que valida el estado esperado antes de actualizar. Si otro operador modificó el ticket primero, la operación falla silenciosamente y el operador debe refrescar el estado.",
          "Esta combinación garantiza consistencia sin sacrificar performance, evitando bloqueos prolongados que podrían afectar la experiencia de otros operadores.",
        ],
      },
      {
        title: "Webhooks de Clerk para sincronización automática",
        paragraphs: [
          "La autenticación fue implementada con Clerk, pero necesitaba mantener sincronizada la información de usuarios entre Clerk y la base de datos interna del sistema.",
          "En lugar de hacer queries adicionales en cada request, implementé webhooks que disparan eventos cuando un usuario se registra, actualiza su perfil o es eliminado. Esto mantiene una copia local actualizada sin impactar el rendimiento de las operaciones principales.",
          "El sistema RBAC jerárquico se construyó sobre esta base, con middleware que centraliza autenticación, redirección dinámica de dashboards y control de acceso por rutas.",
        ],
      },
      {
        title: "Modelado explícito del flujo operativo",
        paragraphs: [
          "El flujo de atención fue modelado explícitamente como cuatro etapas independientes: generación de turno → llamado → inicio de atención → finalización.",
          "Esta separación permite registrar tiempos independientes para cada etapa, evitando distorsiones estadísticas. Por ejemplo, el tiempo que un afiliado tarda en presentarse luego de ser llamado no penaliza artificialmente el tiempo real de atención del operador.",
          "Durante la atención, el operador dispone de un panel visual que muestra el tiempo transcurrido mediante una barra progresiva que cambia de color según el tiempo ideal estimado, funcionando como referencia operativa sin aplicar penalizaciones automáticas.",
        ],
      },
      {
        title: "Arquitectura modular Feature First",
        paragraphs: [
          "A nivel organizacional se implementó una Modular Feature Architecture, donde la carpeta app/ contiene únicamente el routing y cada dominio del negocio encapsula su propia lógica, tipos, componentes y servicios dentro de features/.",
          "También se implementó una arquitectura basada en adapters para desacoplar reglas específicas de áreas similares, evitando dependencias cruzadas entre módulos que podrían evolucionar de forma distinta en el futuro.",
          "Muchas decisiones arquitectónicas surgieron de problemas encontrados durante el desarrollo y posteriores refactorizaciones, convirtiendo al proyecto en un proceso de aprendizaje práctico sobre mantenibilidad, escalabilidad y diseño de software.",
        ],
      },
    ],
    architecture: [
      "La arquitectura fue diseñada priorizando mantenibilidad, desacoplamiento y capacidad de evolucionar junto al dominio del negocio.",
      "Se priorizó el uso de Server Components siempre que fue posible, delegando únicamente la interacción al cliente mediante use client y endpoints específicos cuando un Client Component necesitaba datos persistidos.",
      "La persistencia se implementa mediante PostgreSQL y Prisma ORM, con el entorno de desarrollo completamente containerizado mediante Docker. La sincronización de datos en tiempo real se gestiona mediante Pusher, aprovechando eventos distribuidos para mantener actualizados los paneles operativos sin necesidad de recargar la aplicación.",
      "La autenticación utiliza Clerk con webhooks para sincronizar automáticamente la información del usuario autenticado con la base de datos interna, mientras que la autorización se resuelve mediante un sistema RBAC propio con middleware centralizado. El proyecto incluye 6 scripts de seed reproducibles que permiten levantar un entorno funcional de forma consistente.",
    ],
    quality: [
      "TypeScript estricto en todo el proyecto",
      "ESLint flat config v9",
      "26 migraciones versionadas",
      "6 scripts de seed reproducibles",
      "Sincronización en tiempo real con Pusher",
      "Arquitectura modular Feature First",
      "Sistema RBAC con auditoría de seguridad",
      "Entorno de desarrollo containerizado con Docker",
    ],
  },

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
    metrics: [
      { value: "10", label: "Categorías", color: "blue", icon: "filter" },
      { value: "Ts Estricto", label: "Modelado Tipado", color: "green", icon: "check" },
      { value: "192", label: "Productos", color: "purple", icon: "settings" },
      { value: "SSR", label: "SEO Ready", color: "orange", icon: "globe" },
    ],
    intro: [
      "Hard360 es un ecommerce tecnológico desarrollado para abordar uno de los desafíos más habituales en este tipo de plataformas: ofrecer grandes catálogos de productos con múltiples variantes técnicas sin comprometer la experiencia de navegación ni volver inmantenible la estructura de datos.",
      "A medida que aumentan las categorías y subcategorías, aparecen problemas comunes como filtros difíciles de escalar, especificaciones inconsistentes entre productos y lógica repetida para renderizar vistas dinámicas. El proyecto busca resolver estos desafíos priorizando escalabilidad estructural, modelado tipado de datos y una experiencia de usuario fluida.",
      "Más allá del resultado visual, el objetivo fue profundizar el uso de TypeScript estricto, renderizado SSR y organización modular, incorporando decisiones arquitectónicas más sólidas respecto a proyectos anteriores y mejorando el desacoplamiento entre lógica y presentación.",
    ],
    features: [
      {
        title: "Navegación dinámica",
        description:
          "La navegación del ecommerce se construyó mediante una ruta dinámica utilizando app/[...slug]/page.tsx, permitiendo interpretar distintos segmentos de URL para renderizar categorías, subcategorías o páginas de producto individuales.",
        list: [
          "Rutas dinámicas para categorías y subcategorías.",
          "Páginas de producto individuales con especificaciones técnicas.",
          "Escalabilidad del catálogo sin duplicación de páginas.",
        ],
      },
      {
        title: "Sistema de filtros contextuales",
        description:
          "Toda la lógica de filtrado fue desacoplada y centralizada dentro de un custom hook, permitiendo reutilizar comportamiento entre distintas categorías sin contaminar componentes de UI con lógica de negocio.",
        list: [
          "Filtros adaptativos según categoría activa.",
          "Combinaciones dinámicas de atributos.",
          "Búsquedas por título y filtrado por características técnicas.",
        ],
      },
      {
        title: "Modelado de productos",
        description:
          "Cada producto cuenta con un sistema de especificaciones adaptado a su categoría, evitando estructuras genéricas poco representativas del dominio técnico.",
        list: [
          "Entidades tipadas como NotebookSpecs, TvSpecs, RamSpecs.",
          "Especificaciones técnicas específicas por categoría.",
          "Precios almacenados en centavos como string para evitar errores de precisión.",
        ],
      },
      {
        title: "Carrito de compras",
        description:
          "El carrito utiliza Context API como estado global, permitiendo persistir selección de productos y sincronizar la experiencia de compra entre distintas vistas del ecommerce.",
        list: [
          "Estado global con Context API.",
          "Sincronización entre vistas.",
          "Formateo dinámico de precios.",
        ],
      },
    ],
    engineering: [
      {
        title: "Tipado estricto del dominio",
        paragraphs: [
          "Uno de los focos principales del proyecto fue el tipado estricto del dominio. Cada categoría de producto posee entidades y especificaciones técnicas propias, como NotebookSpecs, TvSpecs o RamSpecs.",
          "Esto permitió modelar información mucho más precisa y escalable, evitando objetos excesivamente genéricos que terminan degradando consistencia y mantenibilidad con el crecimiento del catálogo. La alternativa habría sido una estructura unificada más simple, pero habría sacrificado representatividad del dominio.",
        ],
      },
      {
        title: "Routing dinámico con catch-all",
        paragraphs: [
          "La navegación se construyó mediante una ruta dinámica utilizando app/[...slug]/page.tsx, interpretando segmentos de URL para renderizar categorías, subcategorías o productos individuales.",
          "Este enfoque evita duplicación de páginas, reduce complejidad de routing y permite escalar el catálogo sin necesidad de crear nuevas estructuras manuales por cada categoría agregada. La alternativa habría sido crear páginas separadas para cada nivel, pero eso habría incrementado mantenimiento y reducido flexibilidad.",
        ],
      },
      {
        title: "Precios en centavos como string",
        paragraphs: [
          "Los precios se almacenan internamente en centavos como string y se formatean dinámicamente en el frontend, evitando problemas de precisión numérica y errores de redondeo monetario.",
          "Esta decisión es común en sistemas financieros y ecommerce profesionales. Trabajar con números de punto flotante para dinero puede introducir errores de precisión que se acumulan en cálculos. Almacenar en centavos como string garantiza exactitud y facilita operaciones aritméticas confiables.",
        ],
      },
      {
        title: "Fuente de datos local tipada",
        paragraphs: [
          "Para este proyecto de portfolio se priorizó una fuente de datos local tipada mediante archivos .ts, permitiendo un mayor control sobre el modelado, la consistencia de datos y la estabilidad del entorno de desarrollo.",
          "Aunque técnicamente era posible conectar una API externa o base de datos, la decisión de mantener datos locales permitió enfocar el proyecto en el modelado del dominio y la arquitectura frontend, sin depender de servicios externos que podrían afectar la disponibilidad del portfolio.",
        ],
      },
    ],
    architecture: [
      "La arquitectura fue diseñada priorizando performance, SEO y mantenibilidad del código, aprovechando las capacidades de Next.js para renderizado del lado del servidor.",
      "La estructura del proyecto se organizó de forma modular mediante carpetas especializadas: app, components, hooks, contexts, lib y data, separando claramente responsabilidades entre routing, UI, lógica de negocio y utilidades compartidas.",
      "El renderizado SSR mejora tiempos de carga y posicionamiento SEO, mientras que el tipado estricto con TypeScript garantiza consistencia en todo el código base. La lógica de filtrado fue desacoplada en custom hooks, permitiendo reutilización entre distintas categorías.",
    ],
    quality: [
      "Tipado estricto con TypeScript",
      "Renderizado SSR para SEO y performance",
      "Arquitectura modular con separación de responsabilidades",
      "Custom hooks para lógica de filtrado",
      "Componentes reutilizables",
      "Routing dinámico con catch-all segments",
    ],
  },

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
    metrics: [
      { value: "5", label: "Entidades", color: "blue", icon: "settings" },
      { value: "Ts Estricto", label: "Tipado Estricto", color: "green", icon: "accessibility" },
      { value: "3", label: "Niveles", color: "purple", icon: "filter" },
      { value: "Autogestionable", label: "Panel Administrativo", color: "orange", icon: "credit-card" },
    ],
    intro: [
      "Vivarium fue desarrollado como proyecto freelance para un vivero real que necesitaba una presencia digital profesional capaz de exhibir su catálogo de productos sin depender constantemente de soporte técnico para realizar cambios o actualizaciones.",
      "El negocio manejaba una gran variedad de plantas, insumos y productos organizados en múltiples categorías, lo que requería una forma clara y escalable de estructurar el catálogo. Además, la operatoria comercial no seguía un modelo de ecommerce tradicional: muchos productos se trabajaban bajo demanda o con disponibilidad variable, lo que hacía necesario un sistema flexible capaz de adaptarse a cambios del negocio.",
      "El proyecto representa un ejercicio de desarrollo orientado a negocio: construir una plataforma que brindara autonomía operativa al cliente, manteniendo flexibilidad para adaptarse a cambios comerciales sin necesidad de rediseñar completamente la solución.",
    ],
    features: [
      {
        title: "Catálogo y navegación",
        description:
          "El catálogo se organiza mediante un sistema de categorías jerárquicas, permitiendo estructurar productos en distintos niveles y facilitar la navegación del usuario.",
        list: [
          "Categorías multinivel con relaciones padre-hijo.",
          "Navegación generada dinámicamente desde base de datos.",
          "Nuevas categorías se reflejan automáticamente sin modificar código.",
        ],
      },
      {
        title: "Panel administrativo oculto",
        description:
          "El sitio incorpora una sección privada accesible únicamente mediante autenticación (ruta /productos), donde el propietario del negocio gestiona el catálogo completo sin necesidad de conocimientos técnicos ni intervención del desarrollador.",
        list: [
          "Crear, editar y eliminar productos con formulario tipado.",
          "Carga de imágenes directamente al panel con Cloudinary.",
          "Definición de productos destacados para la página principal.",
          "Visualización de órdenes de compra con filtros y ordenamiento.",
        ],
      },
      {
        title: "Gestión de imágenes",
        description:
          "Las imágenes del catálogo se gestionan mediante Cloudinary, permitiendo carga de assets desde el panel administrativo y optimización automática de contenido multimedia.",
        list: [
          "Carga directa desde el panel administrativo.",
          "Optimización automática de imágenes.",
          "Almacenamiento externo desacoplado.",
        ],
      },
      {
        title: "Flujo comercial adaptable",
        description:
          "El sistema fue concebido inicialmente con soporte para ecommerce y pagos online mediante MercadoPago, pero fue diseñado para permitir cambios en el modelo comercial sin afectar la estructura principal.",
        list: [
          "Integración con MercadoPago mediante Checkout + Webhooks.",
          "Checkout deshabilitado temporalmente sin afectar el catálogo.",
          "Reemplazo por contacto directo vía WhatsApp.",
        ],
      },
    ],
    engineering: [
      {
        title: "Categorías jerárquicas con parentId",
        paragraphs: [
          "El sistema implementa una estructura multinivel basada en relaciones padre-hijo (parentId), permitiendo construir un árbol dinámico de categorías desde base de datos.",
          "Esta decisión permite que cualquier nueva categoría agregada desde el panel administrativo impacte automáticamente sobre la navegación, evitando hardcode y favoreciendo escalabilidad. La alternativa habría sido categorías planas con etiquetas, pero eso habría limitado la capacidad de representación del catálogo real del negocio.",
        ],
      },
      {
        title: "Adaptación a cambios del modelo de negocio",
        paragraphs: [
          "Inicialmente el proyecto incorporó compra online integrada con MercadoPago. Sin embargo, al evolucionar el modelo comercial del vivero hacia ventas bajo demanda, el flujo de checkout fue deshabilitado y reemplazado por contacto directo vía WhatsApp.",
          "La integración con MercadoPago fue diseñada utilizando Checkout + Webhooks, desacoplando el flujo de pagos del resto del sistema. Esto permitió deshabilitar temporalmente la compra online sin afectar el catálogo ni el panel administrativo, manteniendo la posibilidad de reactivar la funcionalidad en el futuro sin rediseñar la plataforma.",
        ],
      },
      {
        title: "Autonomía operativa del cliente",
        paragraphs: [
          "El objetivo no era solamente construir un sitio web, sino brindar autonomía operativa al cliente. Por ello se implementó un panel administrativo completo donde puede gestionar productos, categorías y contenido destacado sin depender del desarrollador.",
          "La navegación se genera dinámicamente a partir de la información persistida en base de datos, por lo que nuevas categorías o cambios estructurales se reflejan automáticamente sin necesidad de modificar código. Esto reduce costos de mantenimiento y empodera al cliente en la gestión de su negocio digital.",
        ],
      },
    ],
    architecture: [
      "La aplicación fue desarrollada utilizando Next.js con App Router, TypeScript y base de datos relacional MySQL, organizando las rutas mediante Route Groups ((public) y (private)) para separar claramente la experiencia del visitante del panel administrativo del propietario.",
      "La autenticación se gestiona con NextAuth mediante Credentials Provider, mientras que las imágenes se manejan con Cloudinary, desacoplando el almacenamiento de assets del frontend. El estado del carrito de compras se mantiene con Zustand y persistencia en localStorage.",
      "La integración con MercadoPago se implementó mediante Checkout + Webhooks con validación de firma HMAC, permitiendo deshabilitar el flujo de pagos sin afectar el catálogo ni el panel administrativo.",
    ],
    quality: [
      "Panel oculto con autenticación NextAuth",
      "Categorías jerárquicas con parentId",
      "Imágenes con Cloudinary",
      "Validación HMAC en webhooks",
      "Tipado estricto con TypeScript",
      "Route Groups public/private",
    ],
  },

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
    metrics: [
      { value: "2", label: "Roles", color: "blue", icon: "users" },
      { value: "Google Sheets", label: "Base de Datos", color: "green", icon: "settings" },
      { value: "Google Auth", label: "Autenticación", color: "purple", icon: "credit-card" },
      { value: "Recharts", label: "Gráficos", color: "orange", icon: "globe" },
    ],
    intro: [
      "Apex Soporte es un sistema interno desarrollado para una empresa tercerizada encargada del soporte de atención al cliente de Telecom - Personal. El proyecto nació para reemplazar un flujo operativo basado en Google Forms y Google Sheets, que aunque funcional, presentaba limitaciones importantes en visualización, trazabilidad y análisis de datos.",
      "El proceso existente permitía registrar incidencias reportadas por clientes y consolidarlas automáticamente en planillas utilizadas por supervisores, pero a medida que el volumen de datos crecía, también aumentaba la complejidad de extraer información útil para la toma de decisiones.",
      "El desafío principal consistía en construir una solución más controlada y profesional, manteniendo una experiencia visual suficientemente familiar para minimizar fricción en la adopción por parte de los operadores. Además del desarrollo técnico, el trabajo implicó interacción directa con gerencia para entender restricciones operativas, validar decisiones de producto y adaptar la implementación a necesidades reales del negocio.",
    ],
    features: [
      {
        title: "Registro de incidencias",
        description:
          "Los operadores cuentan con formularios para registrar incidencias reportadas por clientes, reemplazando el flujo previo basado en Google Forms.",
        list: [
          "Formularios validados con React Hook Form + Zod.",
          "Validación antes de persistir datos, reduciendo inconsistencias.",
          "Interfaz familiar para minimizar curva de aprendizaje.",
        ],
      },
      {
        title: "Reportes y métricas",
        description:
          "Los supervisores pueden consultar reportes estructurados mediante tablas y gráficos, permitiendo analizar tendencias e interpretar la información operativa con mayor claridad.",
        list: [
          "Visualización de métricas con Recharts.",
          "Tablas con datos estructurados.",
          "Análisis de tendencias y patrones.",
        ],
      },
      {
        title: "Gestión de adelantos",
        description:
          "El sistema también incorpora un módulo específico para la gestión de adelantos, manteniendo un flujo consistente dentro del sistema y evitando depender de múltiples herramientas externas para tareas relacionadas.",
        list: [
          "Flujo independiente dentro del mismo entorno.",
          "Información centralizada y accesible.",
          "Trazabilidad completa de operaciones.",
        ],
      },
      {
        title: "Autenticación y seguridad",
        description:
          "El sistema utiliza autenticación con Google, simplificando el acceso para los usuarios y manteniendo seguridad en el acceso a la plataforma.",
        list: [
          "Autenticación con Google.",
          "Control de acceso por rol.",
          "Sesiones seguras.",
        ],
      },
    ],
    engineering: [
      {
        title: "Transición gradual desde Google Sheets",
        paragraphs: [
          "Una decisión importante fue mantener una experiencia visual cercana a la herramienta anterior para facilitar la adopción del sistema y reducir la curva de aprendizaje del equipo.",
          "El objetivo no era solamente mejorar la tecnología, sino también construir una transición operativa realista para usuarios acostumbrados a otro flujo de trabajo. Esto implicó equilibrar mejoras de UX con familiaridad, evitando cambios bruscos que pudieran generar resistencia al nuevo sistema.",
        ],
      },
      {
        title: "Optimización de performance por limitaciones de hosting",
        paragraphs: [
          "Durante el desarrollo se identificó una degradación en tiempos de respuesta causada por el estado standby del plan gratuito de despliegue utilizado en ese momento.",
          "Para reducir el impacto sobre métricas como LCP y mejorar percepción de velocidad, determinadas operaciones inicialmente renderizadas del lado del servidor fueron migradas al cliente. Esta decisión permitió mantener una experiencia más fluida sin comprometer el funcionamiento general del sistema, aunque sacrificó algunas ventajas del SSR.",
          "Este es un ejemplo de cómo las restricciones de infraestructura pueden influir en decisiones arquitectónicas, obligando a evaluar trade-offs entre ideales técnicos y realidad operativa.",
        ],
      },
      {
        title: "Validación de formularios con Zod",
        paragraphs: [
          "La información es validada antes de persistirse, reduciendo inconsistencias y mejorando la calidad de los datos utilizados posteriormente por supervisión.",
          "Se utilizó React Hook Form + Zod para validaciones, garantizando que los datos ingresados por operadores cumplan con los requisitos del negocio antes de ser almacenados. Esto evita problemas de calidad de datos que podrían afectar los reportes y métricas para supervisores.",
        ],
      },
    ],
    architecture: [
      "La aplicación fue desarrollada utilizando Next.js con renderizado SSR, buscando mejorar tiempos de carga, seguridad y experiencia general. MongoDB se utiliza como base de datos, autenticación con Google, React Hook Form + Zod para validaciones, Recharts para visualización de métricas y Tailwind CSS para estilos.",
      "La estructura del proyecto sigue un enfoque modular, separando responsabilidades entre componentes de UI, lógica de negocio y servicios de datos. Aunque inicialmente se priorizó el renderizado del lado del servidor, algunas operaciones fueron migradas al cliente para mejorar métricas de performance bajo las limitaciones del hosting utilizado.",
      "Además, se incorporaron pruebas automatizadas mediante Jest y React Testing Library para validar partes críticas del sistema, garantizando estabilidad ante cambios y facilitando mantenimiento a largo plazo.",
    ],
    quality: [
      "Tests automatizados con Jest y React Testing Library",
      "Validación de formularios con Zod",
      "Visualización de métricas con Recharts",
      "Autenticación con Google",
      "Arquitectura modular",
      "Separación de responsabilidades",
    ],
  },

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
    metrics: [
      { value: "Google Sheets", label: "CMS del Catálogo", color: "blue", icon: "settings" },
      { value: "Stripe", label: "Pagos Online", color: "green", icon: "credit-card" },
      { value: "Autogestionable", label: "Catálogo", color: "purple", icon: "filter" },
      { value: "Cliente", label: "Autonomía Operativa", color: "orange", icon: "users" },
    ],
    intro: [
      "Kass Tienda fue desarrollado para una tienda de accesorios y productos tecnológicos cuyo principal requerimiento era poder administrar el catálogo de productos sin depender de herramientas complejas ni conocimientos técnicos avanzados.",
      "Durante el relevamiento inicial surgió una limitación importante: el cliente no se sentía cómodo utilizando paneles administrativos tradicionales, pero sí trabajaba habitualmente con hojas de cálculo similares a Excel. El desafío no era solamente construir un ecommerce funcional, sino encontrar una solución que el cliente realmente pudiera administrar de forma autónoma en el día a día.",
      "Este proyecto representa mi primera experiencia freelance completa, participando del análisis de requerimientos, evaluación de alternativas tecnológicas y toma de decisiones orientadas a negocio. El objetivo fue construir una solución técnicamente sólida pero adaptada a las capacidades reales del usuario final, reduciendo fricción operativa y favoreciendo la autonomía del negocio.",
    ],
    features: [
      {
        title: "Gestión de catálogo desde Google Sheets",
        description:
          "El catálogo de productos se administra completamente desde Google Sheets, eliminando la necesidad de un panel administrativo tradicional.",
        list: [
          "Cada hoja representa una categoría de productos.",
          "Agregar, editar o eliminar productos desde una herramienta familiar.",
          "Sincronización automática con el sitio.",
          "Sin necesidad de capacitación adicional.",
        ],
      },
      {
        title: "Experiencia ecommerce",
        description:
          "La tienda permite navegar categorías, visualizar productos y agregarlos al carrito mediante un flujo simple orientado a conversión.",
        list: [
          "Navegación por categorías.",
          "Carrito de compras persistente.",
          "Checkout seguro con Stripe.",
        ],
      },
      {
        title: "Procesamiento de pagos",
        description:
          "Para el procesamiento de pagos se integró Stripe, permitiendo un checkout seguro y desacoplado del frontend.",
        list: [
          "Integración server-side con Stripe.",
          "Checkout seguro y profesional.",
          "Lógica sensible protegida del cliente.",
        ],
      },
    ],
    engineering: [
      {
        title: "Google Sheets como fuente de datos",
        paragraphs: [
          "En lugar de imponer una arquitectura tradicional con panel administrativo y base de datos propia, se optó por una solución más alineada al contexto operativo del negocio: utilizar Google Sheets como fuente de datos mediante su API oficial.",
          "Cada hoja representa una categoría de productos, permitiendo al cliente agregar, editar o eliminar información utilizando una herramienta que ya conocía, sin necesidad de capacitación adicional. El resultado fue un ecommerce funcional con un flujo de administración extremadamente simple, priorizando adopción y mantenibilidad por encima de complejidad innecesaria.",
          "Esta decisión demuestra criterio de producto: adaptar la tecnología al usuario y no al revés. Aunque técnicamente era posible construir un panel más sofisticado, se priorizó una herramienta familiar que el cliente pudiera utilizar con confianza desde el primer día.",
        ],
      },
      {
        title: "Stripe server-side",
        paragraphs: [
          "La integración con Stripe podía resolverse desde cliente o servidor. Se optó por un enfoque server-side, alineado con el modelo de Server Components de Next.js para reducir exposición de lógica sensible y mejorar seguridad.",
          "Esta decisión protege claves API y lógica de negocio del lado del servidor, evitando exposición innecesaria en el cliente. Además, facilita el manejo de webhooks y confirmaciones de pago de forma segura.",
        ],
      },
      {
        title: "Arquitectura sin base de datos tradicional",
        paragraphs: [
          "También se evitó introducir una base de datos tradicional de forma innecesaria. La arquitectura fue diseñada alrededor del contexto real del cliente, priorizando simplicidad operativa, bajo mantenimiento y facilidad de adopción.",
          "Esta decisión reduce costos de infraestructura y complejidad de mantenimiento, mientras mantiene la flexibilidad necesaria para el volumen de datos del negocio. Google Sheets actúa como CMS improvisado, demostrando que las decisiones arquitectónicas deben responder al contexto real del proyecto, no a convenciones abstractas.",
        ],
      },
    ],
    architecture: [
      "El proyecto fue desarrollado utilizando Next.js como framework fullstack, integrando Google Sheets API como fuente de datos principal y Stripe como pasarela de pagos.",
      "El carrito se implementó utilizando use-shopping-cart, simplificando el manejo de estado relacionado al checkout y al flujo de compra. Esta librería proporciona una abstracción sólida sobre Stripe, reduciendo complejidad de implementación.",
      "La arquitectura fue diseñada para mantener simplicidad operativa: Google Sheets actúa como CMS, Stripe procesa pagos de forma segura del lado del servidor, y Next.js proporciona renderizado optimizado para SEO y performance. No se introdujo base de datos tradicional innecesariamente, adaptando la solución al contexto real del negocio.",
    ],
    quality: [
      "Google Sheets API como CMS",
      "Integración server-side con Stripe",
      "Carrito con use-shopping-cart",
      "Arquitectura adaptada al contexto del cliente",
      "Renderizado optimizado con Next.js",
      "Separación de responsabilidades",
    ],
  },

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
    metrics: [
      { value: "TMDB API", label: "API Externa", color: "blue", icon: "globe" },
      { value: "Redux", label: "Estado Global", color: "green", icon: "check" },
      { value: "Lazy Loading", label: "Optimización", color: "purple", icon: "flask" },
      { value: "Infinite Scroll", label: "Experiencia de Usuario", color: "orange", icon: "users" },
    ],
    intro: [
      "Movix es una aplicación web desarrollada para profundizar conocimientos en arquitectura frontend, manejo de estado global y consumo de APIs externas. El proyecto consume datos desde la API pública de The Movie Database (TMDB), permitiendo explorar películas y series mediante una interfaz orientada al descubrimiento de contenido.",
      "Más allá del resultado visual, el principal objetivo fue fortalecer habilidades relacionadas con reutilización de componentes, organización del estado de la aplicación y toma de decisiones arquitectónicas dentro de un entorno React. El proyecto sirvió como espacio de experimentación para trabajar patrones de UI reutilizable, manejo eficiente de requests y optimización de experiencia de usuario.",
    ],
    features: [
      {
        title: "Exploración de contenido",
        description:
          "La aplicación permite explorar películas y series consumiendo información en tiempo real desde TMDB.",
        list: [
          "Navegación por diferentes categorías.",
          "Filtrado por género.",
          "Búsquedas dinámicas por título.",
          "Descubrimiento de contenido desde una única interfaz.",
        ],
      },
      {
        title: "Visualización detallada",
        description:
          "Cada película o serie cuenta con una página de detalle que centraliza información relevante como descripción, géneros, fecha de lanzamiento, puntuación y contenido multimedia asociado.",
        list: [
          "Información completa del contenido.",
          "Reproducción de trailers embebidos.",
          "Contenido audiovisual sin abandonar la aplicación.",
        ],
      },
      {
        title: "Experiencia de usuario",
        description:
          "Se priorizó una experiencia fluida tanto en desktop como en dispositivos móviles, incorporando optimizaciones de performance y usabilidad.",
        list: [
          "Carga perezosa de imágenes.",
          "Filtros interactivos.",
          "Visualización dinámica de puntuaciones.",
          "Diseño responsive consistente.",
        ],
      },
    ],
    engineering: [
      {
        title: "Gestión de estado selectiva con Redux",
        paragraphs: [
          "Uno de los aprendizajes más importantes del proyecto fue comprender que no todo estado debe residir en Redux. El store global se utilizó únicamente para información compartida entre múltiples secciones de la aplicación, mientras que los estados locales permanecieron encapsulados dentro de sus respectivos componentes.",
          "Esta decisión permitió reducir complejidad innecesaria, evitar sobrecarga en el store y mantener una arquitectura más mantenible. Demostrar criterio para decidir qué estado globalizar y cuál mantener local es fundamental en aplicaciones React de mediana a gran escala.",
        ],
      },
      {
        title: "Desacoplamiento entre UI y datos",
        paragraphs: [
          "El consumo de datos se realiza mediante la API pública de TMDB, desacoplando completamente la lógica de presentación del origen de información.",
          "Esta separación permite modificar la fuente de datos en el futuro sin afectar componentes de UI, facilitando mantenimiento y evolución del proyecto. Los servicios de datos actúan como capa intermedia entre la API y los componentes, centralizando lógica de fetch y transformación de datos.",
        ],
      },
      {
        title: "Componentes reutilizables",
        paragraphs: [
          "El proyecto fue estructurado priorizando componentes reutilizables y responsabilidades bien delimitadas, evitando lógica acoplada entre UI, fetch de datos y estado compartido.",
          "Este enfoque permitió convertir Movix en un proyecto de aprendizaje particularmente valioso para comprender patrones de escalabilidad en aplicaciones React. La reutilización de componentes reduce duplicación de código y facilita incorporación de nuevas funcionalidades.",
        ],
      },
    ],
    architecture: [
      "La aplicación fue desarrollada utilizando React, Redux y SASS, integrando además librerías específicas para visualización de métricas, reproducción multimedia y optimización de carga.",
      "La estructura del proyecto separa claramente responsabilidades entre componentes de UI, servicios de datos, estado global y estilos. Redux se utiliza para estado compartido, mientras que los estados locales permanecen encapsulados. Los estilos se organizan mediante SASS con mixins personalizados para responsive design.",
      "El consumo de la API de TMDB se realiza mediante servicios desacoplados, permitiendo modificar la fuente de datos sin afectar componentes. La aplicación incorpora lazy loading de imágenes y componentes para optimizar performance y tiempo de carga inicial.",
    ],
    quality: [
      "Gestión de estado selectiva con Redux",
      "Componentes reutilizables",
      "Desacoplamiento entre UI y datos",
      "Lazy loading de imágenes y componentes",
      "Arquitectura responsive con SASS",
      "Separación de responsabilidades",
    ],
  },

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
    metrics: [
      { value: "LiveKit", label: "Streaming en Vivo", color: "blue", icon: "globe" },
      { value: "Chat", label: "Tiempo Real", color: "green", icon: "check" },
      { value: "OBS Studio", label: "Integración", color: "purple", icon: "flask" },
      { value: "Clerk Auth", label: "Social + Webhook", color: "orange", icon: "accessibility" },
    ],
    intro: [
      "GameHub es una plataforma de streaming en vivo inspirada en Twitch, desarrollada con el objetivo de comprender e implementar una arquitectura capaz de soportar transmisión en tiempo real, autenticación, chat y gestión de usuarios.",
      "El proyecto fue concebido como un desafío técnico orientado a explorar tecnologías de realtime, eventos asincrónicos y servicios externos, replicando funcionalidades esenciales presentes en plataformas de streaming modernas. A diferencia de otros proyectos del portfolio, aquí la complejidad estuvo menos centrada en reglas de negocio y más en la integración coordinada de múltiples servicios externos dentro de una misma experiencia de usuario.",
      "Debido a que el proyecto depende de servicios pagos para funcionar correctamente, actualmente no se encuentra desplegado en producción. En su lugar, el portfolio incluye un video demostrativo del flujo completo, mostrando autenticación, creación de canal, transmisión y configuración de chat.",
    ],
    features: [
      {
        title: "Experiencia del streamer",
        description:
          "Cada usuario autenticado puede crear y administrar su propio canal de streaming, personalizando información del perfil y configuraciones relacionadas con la transmisión.",
        list: [
          "Creación y administración de canales.",
          "Generación de credenciales para OBS Studio.",
          "Transmisión en vivo desde herramientas profesionales.",
          "Personalización de perfil del canal.",
        ],
      },
      {
        title: "Interacción en tiempo real",
        description:
          "La plataforma incorpora un sistema de chat en vivo configurable por el streamer, incluyendo opciones como slow mode, solo suscriptores o chat deshabilitado.",
        list: [
          "Chat en vivo con modos configurables.",
          "Sincronización en tiempo real entre espectadores.",
          "Salas específicas por canal.",
          "Moderación y control del streamer.",
        ],
      },
      {
        title: "Autenticación y sincronización",
        description:
          "El sistema utiliza Clerk para autenticación mediante Google, con un webhook que sincroniza automáticamente la información del usuario autenticado con la base de datos interna.",
        list: [
          "Autenticación con Google mediante Clerk.",
          "Webhook para sincronización automática de usuarios.",
          "Gestión de sesiones segura.",
        ],
      },
    ],
    engineering: [
      {
        title: "Streaming con LiveKit",
        paragraphs: [
          "La infraestructura de streaming se construyó sobre LiveKit, permitiendo gestionar conexiones en tiempo real, video, audio y mensajería dentro de salas independientes.",
          "Esto implicó trabajar con eventos asincrónicos, flujos distribuidos y sincronización entre múltiples usuarios concurrentes, elevando considerablemente la complejidad técnica respecto de aplicaciones CRUD tradicionales. LiveKit proporciona una infraestructura sólida para WebRTC, reduciendo la complejidad de implementar streaming desde cero.",
        ],
      },
      {
        title: "Integración con OBS Studio",
        paragraphs: [
          "El sistema genera credenciales específicas para conectar software externo como OBS Studio, permitiendo transmitir video en vivo desde herramientas profesionales.",
          "Esta decisión permite a los streamers utilizar herramientas que ya conocen, en lugar de obligarlos a usar un software de transmisión personalizado. La integración con OBS demuestra comprensión de flujos de trabajo reales del dominio del streaming.",
        ],
      },
      {
        title: "Sincronización de autenticación con webhook",
        paragraphs: [
          "Clerk se utiliza para autenticación mediante Google, mientras que un webhook sincroniza automáticamente la información del usuario autenticado con la base de datos interna.",
          "Este enfoque desacopla la gestión de autenticación del sistema principal, permitiendo que Clerk maneje seguridad de credenciales mientras la aplicación mantiene su propia representación de usuarios. El webhook garantiza que cada nuevo usuario o actualización de perfil se refleje inmediatamente en la base de datos interna.",
        ],
      },
      {
        title: "Chat configurable por streamer",
        paragraphs: [
          "El chat en vivo es configurable por el streamer, incluyendo opciones como slow mode, solo suscriptores o chat deshabilitado.",
          "Esta flexibilidad demuestra comprensión de las necesidades reales de moderación en plataformas de streaming. Los streamers necesitan control sobre cómo interactúa su audiencia, y el sistema proporciona esas herramientas sin requerir intervención técnica.",
        ],
      },
    ],
    architecture: [
      "La aplicación fue desarrollada utilizando Next.js, Clerk, LiveKit y shadcn/ui, integrando autenticación, streaming en tiempo real y sincronización de usuarios dentro de una arquitectura fullstack.",
      "Uno de los mayores desafíos del proyecto fue dividir un problema técnicamente complejo en módulos manejables, manteniendo separación clara entre autenticación, realtime, persistencia y experiencia de usuario. La arquitectura sigue un enfoque modular donde cada servicio externo (Clerk, LiveKit) tiene responsabilidades bien delimitadas.",
      "Este proyecto resultó especialmente valioso para fortalecer habilidades relacionadas con arquitectura de sistemas complejos, eventos asincrónicos e integración de servicios externos. La complejidad no estuvo en reglas de negocio, sino en coordinar múltiples servicios distribuidos dentro de una experiencia de usuario coherente.",
    ],
    quality: [
      "Streaming en tiempo real con LiveKit",
      "Integración con OBS Studio",
      "Chat configurable en tiempo real",
      "Autenticación con Clerk + webhook sync",
      "Arquitectura modular con servicios desacoplados",
      "Video demostrativo del flujo completo",
    ],
  },

  {
    id: 17,
    title: "Admin UI Recharts",
    slug: "admin-ui-recharts",
    liveSiteUrl: "https://react-dashboard-recharts-nff7.vercel.app/",
    githubUrl: "https://github.com/eduviana/React-Dashboard-Recharts",
    desc: "Dashboard administrativo enfocado en visualización de datos, tablas reutilizables y arquitectura de interfaces escalables.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Recharts",
      "React Router DOM",
      "Vite",
      "Sass",
    ],
    categories: ["React"],
    thumbnail: "/projects/fullstack/adminRecharts/adminUI-1.webp",
    images: [
      "/projects/fullstack/adminRecharts/adminUI-1.webp",
      "/projects/fullstack/adminRecharts/adminUI-2.webp",
      "/projects/fullstack/adminRecharts/adminUI-3.webp",
      "/projects/fullstack/adminRecharts/adminUI-4.webp",
    ],
    metrics: [
      { value: "6", label: "Vistas", color: "blue", icon: "filter" },
      { value: "DataGrid", label: "Tablas Reutilizables", color: "green", icon: "settings" },
      { value: "Recharts", label: "Gráficos Interactivos", color: "purple", icon: "globe" },
      { value: "Mock Data", label: "Sin Dependencias Externas", color: "orange", icon: "check" },
    ],
    intro: [
      "Admin UI Recharts es un dashboard administrativo desarrollado como ejercicio técnico para profundizar en la construcción de interfaces complejas de gestión de datos, visualización estadística y navegación modular.",
      "El proyecto simula un entorno administrativo profesional, incorporando gráficos interactivos, tablas avanzadas y múltiples vistas organizadas dentro de una arquitectura frontend mantenible. El objetivo principal fue comprender cómo escalan las interfaces administrativas cuando aumenta la complejidad visual, la cantidad de información y la interacción entre componentes reutilizables.",
      "Además de trabajar sobre experiencia visual y organización de layouts, el proyecto permitió profundizar en patrones comunes presentes en sistemas empresariales: dashboards analíticos, tablas configurables, métricas visuales y navegación avanzada.",
    ],
    features: [
      {
        title: "Dashboard y visualización",
        description:
          "El sistema simula un panel administrativo moderno con múltiples vistas orientadas a visualización y análisis de datos mediante gráficos de área, barras y métricas visuales.",
        list: [
          "Gráficos interactivos con Recharts.",
          "Métricas visuales y KPIs.",
          "Jerarquía visual consistente.",
          "Múltiples vistas de dashboard.",
        ],
      },
      {
        title: "Tablas reutilizables",
        description:
          "Uno de los componentes más relevantes fue la implementación de tablas administrativas utilizando Material UI Data Grid, con soporte para ordenamiento, filtrado y paginación.",
        list: [
          "Data Grid con ordenamiento y filtrado.",
          "Paginación configurable.",
          "Estructura reutilizable entre módulos.",
          "Desacoplamiento entre columnas, filas y comportamiento.",
        ],
      },
      {
        title: "Navegación y experiencia de uso",
        description:
          "La navegación entre secciones se construyó utilizando React Router DOM v6, permitiendo mantener una experiencia fluida y organizada dentro del dashboard.",
        list: [
          "Navegación modular con React Router DOM v6.",
          "Diseño responsive adaptable.",
          "Consistencia visual entre secciones.",
          "Experiencia fluida en distintos tamaños de pantalla.",
        ],
      },
    ],
    engineering: [
      {
        title: "Tablas abstractas y reutilizables",
        paragraphs: [
          "En lugar de construir componentes específicos para cada entidad, la lógica fue abstraída para crear una estructura reutilizable, desacoplando columnas, filas y comportamiento dinámico entre módulos.",
          "Esta decisión permite que nuevas tablas se implementen rápidamente configurando columnas y datos, sin necesidad de crear componentes desde cero. El patrón reduce duplicación de código y facilita mantenimiento consistente entre distintas secciones del dashboard.",
        ],
      },
      {
        title: "Arquitectura de estilos con Sass mixins",
        paragraphs: [
          "Uno de los focos técnicos del proyecto fue mejorar la organización del CSS responsive mediante mixins personalizados en Sass.",
          "En lugar de centralizar media queries al final de cada archivo, los breakpoints se integraron directamente dentro de cada módulo visual, facilitando comprensión, mantenibilidad y lectura del comportamiento responsive. Este enfoque mejora la experiencia de desarrollo y reduce errores de consistencia responsive.",
        ],
      },
      {
        title: "Datos locales para estabilidad del portfolio",
        paragraphs: [
          "Para garantizar estabilidad permanente del proyecto y evitar dependencia de infraestructura externa, se optó por trabajar con datos simulados localmente en lugar de APIs o bases de datos reales.",
          "Esta decisión permitió mantener el proyecto siempre funcional como pieza de portfolio, eliminando riesgos asociados a límites de uso, caídas de servicio o expiración de proveedores externos. Aunque técnicamente era posible conectar APIs reales, la prioridad fue garantizar disponibilidad permanente para demostraciones.",
        ],
      },
    ],
    architecture: [
      "La aplicación fue desarrollada utilizando React, Vite, React Router DOM, Material UI, Recharts y Sass, combinando librerías orientadas a navegación, visualización de datos e interfaces administrativas.",
      "El stack fue seleccionado para experimentar con patrones comunes de dashboards empresariales, priorizando velocidad de desarrollo, modularidad y reutilización de componentes. La estructura del proyecto separa claramente responsabilidades entre componentes de UI, lógica de visualización, navegación y estilos.",
      "Los estilos se organizan mediante Sass con mixins personalizados para responsive design, integrando breakpoints directamente en cada módulo visual. La navegación utiliza React Router DOM v6 para mantener experiencia fluida entre secciones del dashboard.",
    ],
    quality: [
      "Tablas reutilizables con Material UI Data Grid",
      "Visualización de datos con Recharts",
      "Arquitectura de estilos con Sass mixins",
      "Navegación modular con React Router DOM v6",
      "Datos locales para estabilidad permanente",
      "Diseño responsive consistente",
    ],
  },

  {
    id: 19,
    title: "Flair Store",
    slug: "flair-store",
    liveSiteUrl: "https://sanity-ecommerce-orcin.vercel.app/",
    githubUrl: "https://github.com/eduviana/Sanity-Ecommerce",
    desc: "Ecommerce de indumentaria construido con arquitectura Headless CMS, incorporando catálogo dinámico, filtros sincronizados por URL y Stripe como método de pago.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity",
      "Stripe",
      "Radix UI",
      "use-shopping-cart",
    ],
    categories: ["Nextjs"],
    thumbnail: "/projects/fullstack/flair/flair-1.webp",
    images: [
      "/projects/fullstack/flair/flair-1.webp",
      "/projects/fullstack/flair/flair-2.webp",
      "/projects/fullstack/flair/flair-3.webp",
      "/projects/fullstack/flair/flair-4.webp",
      "/projects/fullstack/flair/flair-5.webp",
    ],
    metrics: [
      { value: "Sanity", label: "CMS Headless", color: "blue", icon: "settings" },
      { value: "Filtros URL", label: "Estado Derivado", color: "green", icon: "filter" },
      { value: "Stripe", label: "Checkout Seguro", color: "purple", icon: "credit-card" },
      { value: "Radix UI", label: "Componentes Accesibles", color: "orange", icon: "accessibility" },
    ],
    intro: [
      "Flair Store es un ecommerce de indumentaria desarrollado para profundizar en la construcción de aplicaciones modernas utilizando Next.js 13, App Router y arquitectura basada en Headless CMS. El objetivo principal fue comprender cómo modelar un catálogo dinámico, administrar contenido desde una plataforma externa y construir una experiencia de compra completa.",
      "La aplicación permite explorar productos de indumentaria, navegar entre categorías, aplicar filtros, gestionar un carrito de compras y completar pagos mediante una pasarela externa, replicando comportamientos comunes presentes en ecommerce reales.",
      "Uno de los principales focos del proyecto fue comprender cómo desacoplar el contenido del frontend mediante un CMS headless, permitiendo administrar productos y variantes sin necesidad de modificar el código de la aplicación. Más allá de la implementación visual, el desafío estuvo en entender cómo escalan los sistemas ecommerce cuando intervienen contenido dinámico, filtros complejos, checkout y gestión externa de catálogo.",
    ],
    features: [
      {
        title: "Enfoque Headless CMS",
        description:
          "Se utilizó Sanity como CMS headless, permitiendo modelar productos, variantes, imágenes y atributos de forma desacoplada del frontend.",
        list: [
          "Administración de productos desde Sanity.",
          "Contenido desacoplado del frontend.",
          "Escalabilidad y mantenimiento simplificado.",
          "Autonomía de contenido sin modificar código.",
        ],
      },
      {
        title: "Experiencia de compra",
        description:
          "El ecommerce fue diseñado para ofrecer una experiencia de compra simple y moderna, permitiendo navegar por categorías, visualizar detalles de producto y gestionar un carrito persistente.",
        list: [
          "Navegación por categorías y productos.",
          "Carrito de compras persistente.",
          "Checkout seguro con Stripe.",
          "Detalles de producto con variantes.",
        ],
      },
      {
        title: "Sistema de filtros",
        description:
          "El catálogo implementa filtros dinámicos por atributos del producto como talle, color y categoría, además de ordenamiento por precio y fecha.",
        list: [
          "Filtros por talle, color y categoría.",
          "Ordenamiento por precio y fecha.",
          "Sincronización mediante query params en URL.",
          "Estado de navegación compartible.",
        ],
      },
      {
        title: "Gestión del catálogo",
        description:
          "Los productos son administrados desde Sanity, permitiendo editar información como nombre, descripción, imágenes, variantes, talles, colores y precios desde una interfaz externa.",
        list: [
          "Edición completa de productos desde Sanity.",
          "Gestión de variantes, talles y colores.",
          "Imágenes y contenido multimedia.",
          "Sin dependencia directa del código.",
        ],
      },
    ],
    engineering: [
      {
        title: "Estado derivado desde URL",
        paragraphs: [
          "Una de las decisiones arquitectónicas principales fue resolver filtros y ordenamientos utilizando estado derivado desde query params, evitando complejidad innecesaria en la sincronización entre componentes.",
          "En lugar de resolver la sincronización mediante múltiples estados distribuidos entre componentes, el sistema se diseñó utilizando query params en la URL, permitiendo mantener navegación, estado y filtros completamente sincronizados. Este enfoque mejora previsibilidad, simplifica mantenimiento y permite compartir enlaces con filtros activos preservando completamente el estado de navegación.",
        ],
      },
      {
        title: "Modelado desacoplado con Headless CMS",
        paragraphs: [
          "El uso de un Headless CMS permitió modelar entidades dinámicas como productos y variantes sin acoplar la estructura del catálogo al frontend.",
          "Esta aproximación facilita escalabilidad, mantenimiento y autonomía de contenido, evitando hardcodear información dentro de la aplicación principal. El principal aprendizaje del proyecto fue comprender patrones habituales en ecommerce modernos: arquitectura desacoplada, contenido administrable y estado derivado, prácticas ampliamente utilizadas en aplicaciones orientadas a catálogo y venta online.",
        ],
      },
      {
        title: "Componentes accesibles con Radix UI",
        paragraphs: [
          "También se incorporó Radix UI para construir componentes accesibles y use-shopping-cart para simplificar la gestión del carrito.",
          "Radix UI proporciona primitivas sin estilo con accesibilidad incorporada, permitiendo construir componentes personalizados sin sacrificar cumplimiento de WCAG. Esta decisión demuestra atención a la accesibilidad desde la arquitectura, no como agregado posterior.",
        ],
      },
    ],
    architecture: [
      "La aplicación fue desarrollada utilizando Next.js 13, TypeScript, Sanity, Stripe y Tailwind CSS, combinando renderizado moderno, contenido desacoplado y checkout seguro.",
      "La arquitectura sigue el patrón Headless CMS donde Sanity actúa como fuente de contenido, Next.js proporciona renderizado moderno con App Router, y Stripe procesa pagos de forma segura. Los filtros se resuelven mediante estado derivado desde query params, evitando complejidad innecesaria en la sincronización entre componentes.",
      "También se incorporó Radix UI para construir componentes accesibles y use-shopping-cart para simplificar la gestión del carrito. Esta combinación de tecnologías permite mantener separación clara entre contenido, presentación y lógica de negocio, facilitando mantenimiento y evolución del ecommerce.",
    ],
    quality: [
      "Arquitectura Headless CMS con Sanity",
      "Filtros sincronizados via URL query params",
      "Checkout seguro con Stripe",
      "Componentes accesibles con Radix UI",
      "Next.js 13 con App Router",
      "Tipado estricto con TypeScript",
    ],
  },
];
