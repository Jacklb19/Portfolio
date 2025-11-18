import type { Dictionary } from "./types"

export const contentEs: Dictionary = {
  hero: {
    intro: "Soy Jose Burbano, y disfruto de",
    title: {
      start: "Construir",
      highlight: "Sistemas",
      end: "Escalables",
    },
    subtitle: "Ingeniero de Software",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/" },
      { label: "GitHub", href: "https://github.com/Jacklb19" },
      { label: "Correo", href: "mailto:joseluisburbano19105@gmail.com" },
      { label: "CV", href: "/docs/CV_Burbano.pdf" },
    ],
  },
  about: {
    title: "Sobre mí",
    description:
      "Hola, soy Jose Burbano, un aspirante a ingeniero de software con una gran curiosidad por el mundo de la programación. Tengo una pasión por el desarrollo backend y la construcción de sistemas escalables y completos, siempre buscando aprender de las últimas tecnologías para dar vida a las ideas de todas las formas posibles. Mi objetivo es ofrecer sistemas que puedan crecer y brindar más soluciones de las que podría imaginar.",
    hobbies: {
      title: "Pasatiempos",
      text: "Hacer fotografía, jugar ping pong, ir de campamento y disfrutar de la vida.",
    },
    interests: {
      title: "Intereses",
      text: "Backend, explorar nuevas tecnologías, IA y realidad virtual.",
    },
    stack: {
      title: "Stack",
      description: "Herramientas, recursos y software que uso a diario.",
      button: "Ver Stack",
    },
    projects: {
      title: "Proyectos",
      description: "Explora mis proyectos",
      button: "Ver Proyectos",
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen de mí",
      testimonials: [
        {
          id: 1,
          name: "Sara Ojeda",
          title: "Estudiante UCC",
          content:
            "Jose es un compañero de universidad con una verdadera pasión por la ingeniería de software. Desde que lo conocí, me impresionó su curiosidad constante y su capacidad para entender rápidamente cómo funcionan las cosas. En los proyectos que hemos trabajado juntos, se nota que realmente le importa la forma en la que los desarrolla y pensar en buenas soluciones. ",
          image: "/images/testimonal1.png",
        },
        {
          id: 2,
          name: "Steven Ortega",
          title: "Estudiante UCC",
          content:
            "Trabajar con Jose ha sido inspirador. Su pasión por la programación va más allá de solo escribir código: realmente le importa entender el problema y entregar soluciones reflexivas. Su creatividad y compromiso con cada proyecto lo convierten en un valioso miembro del equipo.",
          image: "/images/testimonal2.png",
        },
        {
          id: 3,
          name: "Jhonatan Mideros",
          title: "University Professor",
          content:
            "Jose realizó un portafolio...",
          image: "/images/testimonal3.png",
        },
                        {
          id: 4,
          name: "Santiago Arevalo",
          title: "Estudiante UCC",
          content:
            "Es el tipo de compañero en quien confías para resolver problemas difíciles sin tener que estar encima de él. Definitivamente va a ser un buen ingeniero.",
          image: "/images/testimonal4.png",
        },
      ],
    },
  },
  experience: {
    title: "Experiencia",
    intro: {
      paragraph1:
        "A lo largo de mi trayectoria profesional, he tenido la oportunidad de trabajar en proyectos diversos y desafiantes que han fortalecido mis habilidades técnicas y mi capacidad para resolver problemas complejos.",
      paragraph2:
        "Desde el desarrollo full-stack hasta la implementación de soluciones innovadoras, cada experiencia ha contribuido a mi crecimiento como desarrollador. A continuación, te presento un recorrido por los proyectos y roles que han definido mi carrera profesional.",
    },
    experiences: [
      {
        id: 1,
        category: "Automatización",
        title: "Agencia de Viajes",
        period: "Ago 2025 - Sep 2025",
        technologies: ["React", "Node.js", "Tailwind", "WhatsApp API"],
        description: [
          "Diseñé e implementé un flujo automatizado de captura de leads en WhatsApp usando n8n, integrando la API de Meta Business Cloud con Google Sheets y CRM.",
          "Construí una landing page dinámica con React, Tailwind y Node.js, mejorando la adquisición de usuarios y la visibilidad del servicio.",
          "Apliqué principios de código limpio y arquitectura escalable, asegurando mantenibilidad y adaptabilidad para futuras integraciones.",
        ],
        image: "/images/agencia.jpg",
      },
      {
        id: 2,
        category: "Trayectoria",
        title: "Ingeniería de Software - UCC",
        period: "Ago 2021 - Ene 2027",
        technologies: ["Python", "PostgreSQL", "MongoDB", "Java"],
        description: [
          "Integré fundamentos de computación y prácticas de ingeniería para diseñar, construir y operar software confiable y escalable que resolviera problemas reales.",
          "Dominé algoritmos, estructuras de datos, complejidad, matemática discreta y bases de datos para razonar sobre rendimiento y corrección en mis proyectos.",
          "Apliqué ingeniería de requisitos, modelado de dominio y documentación para alinear cada solución con las necesidades de los interesados.",
          "Diseñé con patrones y arquitecturas en capas, SOA y sistemas distribuidos, cuidando cohesión, acoplamiento y escalabilidad.",
          "Implementé pruebas de software (unitarias e integración), prácticas de código limpio y control de versiones para asegurar calidad en la entrega.",
          "Incorporé principios de DevOps y computación en la nube para automatizar integración y despliegue y mejorar la confiabilidad operativa.",
          "Fortalecí la seguridad desde el diseño siguiendo guías OWASP y realizando revisiones de código sistemáticas.",
          "Trabajé en equipo con metodologías ágiles como Scrum, comunicándome de forma efectiva y entregando de manera iterativa.",
        ],
        image: "/images/software.png",
      },
      {
        id: 3,
        category: "Sistema",
        title: "Sistema de Gestión de Reclamos",
        period: "Mar 2024 - Jun 2024",
        technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
        description: [
          "Desarrollé un sistema de gestión de reclamos full-stack con una arquitectura desacoplada, con un backend en Spring Boot y un frontend en Next.js.",
          "Implementé una API REST segura con JWT para autenticación basada en roles (Cliente y Agente).",
          "Utilicé MongoDB para la persistencia de datos y el patrón de diseño State para gestionar el ciclo de vida de los reclamos.",
          "Construí una interfaz de usuario responsiva con Tailwind CSS, permitiendo a los clientes enviar reclamos y a los agentes gestionarlos mediante un flujo controlado.",
        ],
        image: "/images/ClaimsSystem.png",
      },
    ],
  },
  footer: {
    title: "Portafolio. Todos los derechos reservados.",
    made: "Hecho con",
    by: "Por Jose Burbano",
  },
projects: {
  title: "Proyectos",
  filter: {
    name: "Filtro",
    option: "Todos los proyectos",
  },
  description: "Explora algunos de mis trabajos y experimentos destacados.",
  button: "Ver Más",
  
  projects: [
    {
      id: 1,
      name: "PharmaSync",
      description:
        "Plataforma de asistencia farmacéutica con IA: backend en Java 21+ (Spring Boot) con seguridad JWT, PostgreSQL y MongoDB; frontend en React 18+ con TypeScript, Vite y Tailwind.",
      status: "offline",
      technologies: ["SpringBoot", "Java", "React", "TypeScript", "PostgreSQL", "MongoDB", "JWT", "Tailwind"],
      image: "/images/PharmaSync.png",
      slug: "pharmasync",
    },
    {
      id: 2,
      name: "Gestión de Reclamos",
      description:
        "Un sistema completo de gestión de reclamos con arquitectura desacoplada, con un backend en Spring Boot (Java) y un frontend en Next.js (TypeScript).",
      status: "online",
      technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
      image: "/images/ClaimsSystem.png",
      slug: "claim-management",
    },
    {
      id: 3,
      name: "Mino Reproductor de Música",
      description:
        "Reproductor de música para organizar listas y reproducir audio. Permite agregar canciones desde tu dispositivo, reordenarlas por arrastrar y soltar, repetir la lista, y controlar el volumen y la reproducción.",
      status: "offline",
      technologies: ["Node.js", "React", "Tailwind", "TypeScript"],
      image: "/images/mino.png",
      slug: "mino-music-player",
    },
    {
      id: 4,
      name: "Last Stand: Outbreak",
      description:
        "Juego FPS de supervivencia contra zombis, donde debes atravesar tres niveles únicos — hospital, calle y cementerio — enfrentando oleadas de enemigos, gestionando recursos y derrotando un jefe final.",
      status: "offline",
      technologies: ["Unity"],
      image: "/images/resident.png",
      slug: "last-stand-outbreak",
    },
  ],

  projectDetails: [
    // ========== PROYECTO 1: PharmaSync ==========
    {
      id: 1,
      name: "PharmaSync",
      description:
        "Plataforma de asistencia farmacéutica con IA: backend en Java 21+ (Spring Boot) con seguridad JWT, PostgreSQL y MongoDB; frontend en React 18+ con TypeScript, Vite y Tailwind. Incluye chat asistido por IA, rutas protegidas por roles, historial de sesiones y orquestación de agentes con patrones Strategy, Facade, Decorator y Observer.",
      status: "offline",
      technologies: ["SpringBoot", "Java", "React", "TypeScript", "PostgreSQL", "MongoDB", "JWT", "Tailwind"],
      image: "/images/PharmaSync.png",
      slug: "pharmasync",
      
      date: "Dic 2024",
      category: "Web App",
      
      overview:
        "PharmaSync es una plataforma integral de asistencia farmacéutica que combina un backend robusto en Spring Boot con una interfaz moderna en React. Diseñada para facilitar la consulta de información médica y farmacéutica mediante un sistema de chat asistido por IA, con control de acceso basado en roles y persistencia de sesiones.",
      
      features: [
        "Chat asistido por IA con orquestación de agentes para consultas farmacéuticas precisas",
        "Sistema de autenticación y autorización con JWT y control de roles (admin, usuario, invitado)",
        "Persistencia dual con PostgreSQL para datos relacionales y MongoDB para sesiones de chat",
        "Historial de consultas por usuario con capacidad de retomar conversaciones previas",
        "Arquitectura desacoplada con patrones de diseño (Strategy, Facade, Decorator, Observer) para escalabilidad",
        "Frontend responsivo con Vite, Tailwind CSS y TypeScript para una experiencia de usuario fluida",
      ],
      
      outcome:
        "El resultado es una plataforma escalable y segura que permite a usuarios y profesionales de la salud acceder a información farmacéutica de forma inteligente y contextualizada. La arquitectura basada en patrones de diseño garantiza mantenibilidad y extensibilidad, mientras que la integración de IA mejora significativamente la precisión de las respuestas médicas. El sistema demuestra cómo combinar tecnologías modernas de backend y frontend para resolver problemas complejos del sector salud.",
      
      background:
        "PharmaSync nace de la necesidad de democratizar el acceso a información farmacéutica confiable y contextualizada. Utilizando Java 21+ con Spring Boot para el backend, se implementó un sistema de seguridad robusto con JWT y una base de datos híbrida (PostgreSQL + MongoDB) para manejar tanto datos estructurados como conversaciones. El frontend en React 18+ con TypeScript y Vite ofrece una interfaz intuitiva, mientras que la orquestación de agentes IA mediante patrones de diseño permite respuestas precisas y personalizadas según el perfil del usuario.",
      
      challenges: [
        "Implementar un sistema de autenticación seguro que maneje múltiples roles y persista sesiones sin comprometer la seguridad",
        "Diseñar una arquitectura de agentes IA que pueda orquestar consultas complejas y mantener contexto entre interacciones",
        "Integrar dos bases de datos (PostgreSQL y MongoDB) de forma eficiente para datos relacionales y no relacionales",
        "Garantizar que el frontend React se comunique de forma segura con el backend Spring Boot mediante tokens JWT",
        "Escalar la aplicación manteniendo patrones de diseño limpios y código mantenible",
      ],
      
      solutions: [
        {
          title: "Seguridad JWT & Control de Roles",
          description:
            "Se implementó Spring Security con JWT para autenticación stateless. Los tokens incluyen claims de roles que permiten proteger endpoints específicos. Se creó un filtro personalizado que valida tokens en cada request y carga el contexto de seguridad, permitiendo autorización granular basada en roles (ADMIN, USER, GUEST).",
        },
        {
          title: "Orquestación de Agentes IA",
          description:
            "Se aplicó el patrón Strategy para seleccionar diferentes agentes según el tipo de consulta (medicamentos, interacciones, dosificación). El patrón Facade simplifica la interacción con múltiples servicios de IA, mientras que Decorator agrega funcionalidades como logging y caché de respuestas. Observer notifica cambios en el estado de las consultas.",
        },
        {
          title: "Arquitectura Híbrida de Datos",
          description:
            "PostgreSQL almacena datos estructurados de usuarios, roles y medicamentos con relaciones normalizadas. MongoDB guarda sesiones de chat como documentos JSON, permitiendo consultas rápidas y flexibilidad en la estructura de conversaciones. Spring Data JPA y Spring Data MongoDB se integran transparentemente.",
        },
        {
          title: "Frontend Moderno & Responsivo",
          description:
            "React 18+ con TypeScript proporciona type-safety y mejor DX. Vite acelera el desarrollo con HMR instantáneo. Tailwind CSS con componentes reutilizables garantiza UI consistente. Axios intercepta requests para agregar automáticamente tokens JWT en headers. React Router implementa rutas protegidas que verifican roles antes de renderizar componentes.",
        },
        {
          title: "Patrones de Diseño para Escalabilidad",
          description:
            "La arquitectura sigue SOLID y patrones GoF: Strategy para algoritmos intercambiables de IA, Facade para simplificar subsistemas complejos, Decorator para agregar funcionalidad sin modificar código existente, y Observer para desacoplar componentes que reaccionan a eventos. Esto facilita testing, mantenimiento y extensión futura.",
        },
      ],
      
      repoUrl: "https://github.com/SantiagoArTyrs/PharmaSync",
    },

    // ========== PROYECTO 2: Gestión de Reclamos ==========
    {
      id: 2,
      name: "Gestión de Reclamos",
      description:
        "Un sistema completo de gestión de reclamos con arquitectura desacoplada, con un backend en Spring Boot (Java) y un frontend en Next.js (TypeScript). Utiliza JWT para seguridad basada en roles y el patrón State para controlar el flujo de los reclamos.",
      status: "online",
      technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
      image: "/images/ClaimsSystem.png",
      slug: "claim-management",
      
      date: "Nov 2024",
      category: "Web App",
      
      overview:
        "Sistema empresarial de gestión de reclamos que permite a usuarios registrar quejas, seguir su estado y a administradores procesarlas mediante un flujo de estados bien definido. Construido con Spring Boot (Java) para el backend REST API y Next.js (TypeScript) para una interfaz moderna y responsiva. La seguridad se maneja con JWT y los estados del reclamo se controlan mediante el patrón State.",
      
      features: [
        "Registro y autenticación de usuarios con JWT y control de acceso basado en roles (usuario/administrador)",
        "CRUD completo de reclamos con validaciones en frontend y backend",
        "Flujo de estados de reclamos (Pendiente → En Revisión → Resuelto/Rechazado) controlado por patrón State",
        "Dashboard diferenciado: usuarios ven sus reclamos, administradores gestionan todos",
        "Persistencia en MongoDB para flexibilidad en la estructura de reclamos y escalabilidad",
        "UI responsiva con Next.js, TypeScript y Tailwind CSS para experiencia fluida en cualquier dispositivo",
      ],
      
      outcome:
        "El sistema proporciona una solución completa y escalable para la gestión de reclamos empresariales, con separación clara de responsabilidades entre frontend y backend. La arquitectura desacoplada permite mantener y extender cada parte independientemente. El uso del patrón State garantiza que las transiciones de estado sean válidas y trazables, mientras que JWT asegura que solo usuarios autorizados puedan acceder a funcionalidades específicas. Desplegado en producción, demuestra cómo construir aplicaciones full-stack modernas con tecnologías enterprise-grade.",
      
      background:
        "El proyecto surge de la necesidad de digitalizar el proceso manual de gestión de reclamos en organizaciones. Usando Spring Boot se construyó una API REST robusta con validaciones de negocio y persistencia en MongoDB. Next.js proporciona Server-Side Rendering (SSR) para SEO y una experiencia de usuario rápida. El patrón State controla el ciclo de vida de cada reclamo, evitando transiciones inválidas. JWT permite autenticación stateless y autorización basada en roles, separando claramente permisos de usuarios y administradores.",
      
      challenges: [
        "Diseñar un flujo de estados de reclamos robusto que evite transiciones inválidas y sea auditable",
        "Implementar autenticación y autorización segura con JWT que funcione entre frontend y backend desacoplados",
        "Crear una interfaz de usuario intuitiva que maneje roles diferentes (usuario vs admin) sin duplicar código",
        "Garantizar validaciones consistentes entre cliente y servidor para evitar datos inconsistentes",
        "Desplegar y mantener la aplicación en producción con alta disponibilidad",
      ],
      
      solutions: [
        {
          title: "Patrón State para Flujo de Reclamos",
          description:
            "Se implementó el patrón State en el backend para modelar los estados del reclamo (Pendiente, En Revisión, Resuelto, Rechazado). Cada estado es una clase que define sus propias transiciones válidas. Esto evita cambios de estado ilegales y facilita auditoría. Un contexto de reclamo delega las operaciones al estado actual, garantizando que solo transiciones permitidas ocurran.",
        },
        {
          title: "Autenticación JWT & Roles",
          description:
            "Spring Security genera tokens JWT al login, incluyendo roles en los claims. Next.js guarda el token en httpOnly cookies para seguridad. Un middleware de Next.js verifica el token antes de renderizar páginas protegidas. El backend valida el token en cada request y carga el contexto de seguridad, aplicando autorización basada en roles mediante anotaciones @PreAuthorize.",
        },
        {
          title: "UI Modular con Next.js & TypeScript",
          description:
            "Se crearon componentes reutilizables (ClaimCard, ClaimForm, StatusBadge) con TypeScript para type-safety. Next.js Server Components renderizan dashboards optimizados por rol. Tailwind CSS proporciona estilos consistentes. React Hook Form maneja formularios con validaciones en cliente antes de enviar al backend. SWR cachea y revalida datos automáticamente.",
        },
        {
          title: "Validaciones Duales (Cliente & Servidor)",
          description:
            "Las validaciones se definen como esquemas compartidos (TypeScript types en frontend, Java Bean Validation en backend). Yup valida formularios en Next.js antes de submit. Spring Boot valida DTOs con @Valid y retorna errores 400 con detalles. Esto garantiza consistencia y evita que datos inválidos lleguen a la base de datos.",
        },
        {
          title: "Deploy & CI/CD",
          description:
            "El frontend Next.js se despliega en Vercel con variables de entorno para la API URL. El backend Spring Boot se despliega en Railway/Render con MongoDB Atlas. GitHub Actions ejecuta tests y linting en cada push. Variables de entorno configuran JWT secrets y conexiones a BD de forma segura en producción.",
        },
      ],
      
      demoUrl: "https://claims-system.vercel.app/register",
      repoUrl: "https://github.com/Jacklb19/claim-management-system",
    },

    // ========== PROYECTO 3: Mino Music Player ==========
    {
      id: 3,
      name: "Mino Reproductor de Música",
      description:
        "Reproductor de música para organizar listas y reproducir audio. Permite agregar canciones desde tu dispositivo, reordenarlas por arrastrar y soltar, repetir la lista, y controlar el volumen y la reproducción.",
      status: "offline",
      technologies: ["Node.js", "React", "Tailwind", "TypeScript"],
      image: "/images/mino.png",
      slug: "mino-music-player",
      
      date: "Oct 2024",
      category: "Desktop App",
      
      overview:
        "Mino es un reproductor de música local minimalista construido con React y TypeScript, optimizado para gestionar playlists personalizadas. Permite cargar archivos de audio desde el dispositivo, organizarlos mediante drag-and-drop, y controlar la reproducción con funcionalidades avanzadas como repetición de playlist, control de volumen y navegación fluida entre canciones.",
      
      features: [
        "Carga de archivos de audio locales (MP3, WAV, OGG, etc.) con validación de formatos soportados",
        "Playlist interactiva con reordenamiento de canciones mediante drag-and-drop",
        "Controles de reproducción completos: play/pause, siguiente/anterior, barra de progreso, volumen",
        "Modo de repetición de playlist para reproducción continua",
        "Interfaz minimalista y responsiva con Tailwind CSS",
        "Persistencia local de playlists mediante localStorage",
      ],
      
      outcome:
        "Mino es un reproductor de música funcional y elegante que demuestra dominio de APIs del navegador (FileReader, Audio, Drag & Drop) y gestión de estado complejo en React. La interfaz intuitiva y responsiva permite una experiencia de usuario fluida sin necesidad de backend. El proyecto muestra cómo construir aplicaciones de escritorio/web con tecnologías frontend modernas, manejando archivos locales de forma segura y eficiente.",
      
      background:
        "El proyecto nace como una alternativa ligera a reproductores de música pesados, enfocándose en simplicidad y control total sobre playlists locales. Construido con React 18 y TypeScript para type-safety, usa la Web Audio API del navegador para reproducción y el API de archivos para carga local. Tailwind CSS proporciona un diseño limpio y responsivo. La lógica de drag-and-drop se implementa con HTML5 Drag & Drop API, y la persistencia de playlists se maneja con localStorage para recordar la cola entre sesiones.",
      
      challenges: [
        "Manejar la carga y lectura de archivos de audio locales de forma segura sin backend",
        "Implementar drag-and-drop fluido y funcional para reordenar canciones en la playlist",
        "Controlar el estado de reproducción (play/pause, tiempo actual, volumen) de forma sincronizada con la UI",
        "Persistir playlists entre sesiones del navegador sin usar base de datos externa",
        "Garantizar que la interfaz sea responsiva y accesible en diferentes dispositivos",
      ],
      
      solutions: [
        {
          title: "Carga Segura de Archivos con FileReader API",
          description:
            "Se usa el input type='file' con atributo 'accept' para filtrar solo formatos de audio. FileReader lee archivos seleccionados y genera URLs temporales (Object URLs) que se pasan al elemento <audio>. Esto permite reproducción sin subir archivos a un servidor, manteniendo privacidad y velocidad.",
        },
        {
          title: "Drag & Drop con HTML5 API",
          description:
            "Cada canción en la playlist es un div draggable. Los eventos dragStart, dragOver y drop manejan el reordenamiento. Al soltar una canción, se actualiza el estado de la playlist en React reordenando el array. onDragOver con preventDefault permite el drop. Visual feedback (clases CSS) indica dónde se soltará la canción.",
        },
        {
          title: "Gestión de Estado de Reproducción",
          description:
            "Un estado React centralizado (usando useReducer o Context) mantiene: canción actual, isPlaying, currentTime, volume, repeatMode. El componente Audio usa refs para controlar el elemento <audio>. Eventos como timeupdate y ended sincronizan el estado. Controles de UI (botones, sliders) disparan acciones que actualizan estado y llaman métodos del audio (play, pause, seek).",
        },
        {
          title: "Persistencia con localStorage",
          description:
            "Al agregar/reordenar canciones, se serializa la playlist (nombres, rutas locales si es posible, orden) a JSON y se guarda en localStorage. Al cargar la app, se lee localStorage y se reconstruye la playlist. Nota: Object URLs son temporales y se regeneran en cada sesión, pero los nombres y orden se preservan para mejor UX.",
        },
        {
          title: "UI Responsiva con Tailwind",
          description:
            "Tailwind CSS proporciona clases utilitarias para layouts flexibles (flexbox, grid) que se adaptan a móviles, tablets y desktop. Los controles de reproducción usan tamaños relativos y breakpoints de Tailwind. Iconos (Lucide React) son escalables. El diseño minimalista reduce carga visual y mejora usabilidad.",
        },
      ],
      
      repoUrl: "https://github.com/Jacklb19/Mino-Music-Player",
    },

    // ========== PROYECTO 4: Last Stand: Outbreak ==========
    {
      id: 4,
      name: "Last Stand: Outbreak",
      description:
        "Juego FPS de supervivencia contra zombis, donde debes atravesar tres niveles únicos — hospital, calle y cementerio — enfrentando oleadas de enemigos, gestionando recursos y derrotando un jefe final para escapar de la ciudad infestada.",
      status: "offline",
      technologies: ["Unity"],
      image: "/images/resident.png",
      slug: "last-stand-outbreak",
      
      date: "Sep 2024",
      category: "Game",
      
      overview:
        "Last Stand: Outbreak es un juego de disparos en primera persona (FPS) de supervivencia desarrollado en Unity con C#. El jugador debe sobrevivir a oleadas de zombis a través de tres zonas temáticas (hospital, calle urbana, cementerio), gestionando munición, salud y recursos limitados. El juego culmina con un enfrentamiento contra un jefe final, ofreciendo mecánicas de combate fluidas, sistema de armas intercambiables y un sistema de enemigos con IA basada en NavMesh.",
      
      features: [
        "Tres zonas de juego únicas con ambientación y desafíos específicos: hospital, calle urbana y cementerio",
        "Sistema de combate FPS con múltiples armas intercambiables (pistola, escopeta, rifle de asalto)",
        "Inteligencia artificial de enemigos con NavMesh para pathfinding dinámico y comportamiento de horda",
        "Gestión de recursos: munición limitada, sistema de salud, y botiquines dispersos en el mapa",
        "Sistema de oleadas con escalado de dificultad progresivo",
        "Jefe final con mecánicas de combate únicas y patrones de ataque",
        "UI dinámica con HUD mostrando salud, munición, arma actual y objetivos",
        "Sistema de sonido ambiental y efectos de audio para inmersión",
      ],
      
      outcome:
        "Last Stand: Outbreak es un FPS funcional y pulido que demuestra dominio de mecánicas de juego core (disparo, movimiento, IA de enemigos) y arquitectura de sistemas en Unity. El flujo de progresión a través de tres zonas mantiene al jugador comprometido, mientras que la gestión de recursos añade tensión estratégica. La implementación de NavMesh para enemigos garantiza pathfinding eficiente, y el sistema de armas modular permite fácil extensión. El proyecto muestra capacidad para crear experiencias de juego completas con gameplay loop atractivo, desde diseño de niveles hasta programación de sistemas complejos.",
      
      background:
        "El proyecto se desarrolló en Unity usando C# para toda la lógica de gameplay. El sistema de movimiento del jugador se implementó con CharacterController para control preciso. Las armas usan raycasting para detección de disparos instantánea. Los enemigos zombis tienen scripts de IA que usan Unity NavMesh para navegar obstáculos y perseguir al jugador, con estados (Idle, Chase, Attack) controlados por máquina de estados. El jefe final tiene patrones de ataque scripted y salud escalada. Cinemachine maneja las cámaras FPS, y el sistema de audio usa AudioSource con mezcla dinámica para ambiente y acción.",
      
      challenges: [
        "Sincronizar animaciones de disparo con el estado del arma y la cámara Cinemachine sin desincronización visual",
        "Optimizar rendimiento con múltiples enemigos en pantalla usando NavMesh sin caídas de FPS",
        "Diseñar un sistema de armas escalable que permita agregar nuevas armas fácilmente sin duplicar código",
        "Balancear la dificultad de oleadas para que sea desafiante pero justa, evitando frustración del jugador",
        "Implementar un jefe final con mecánicas interesantes que se sienta como un climax satisfactorio",
      ],
      
      solutions: [
        {
          title: "Sistema de Armas Modular con ScriptableObjects",
          description:
            "Se creó una clase base WeaponData como ScriptableObject que define propiedades de cada arma (daño, cadencia, capacidad de cargador, prefab). Un WeaponController maneja el arma actual, instancia el modelo, y ejecuta la lógica de disparo. Cambiar de arma es tan simple como referenciar otro ScriptableObject. Esto permite balanceo rápido y adición de nuevas armas sin modificar código core.",
        },
        {
          title: "IA de Enemigos con NavMesh & Máquina de Estados",
          description:
            "Los zombis usan NavMeshAgent para pathfinding eficiente. Una FSM (Finite State Machine) controla comportamiento: estado Idle cuando no detectan al jugador, Chase cuando entran en rango (usando Physics.OverlapSphere), y Attack cuando están cerca. Transiciones suaves entre estados evitan comportamiento errático. NavMesh se precalcula en Editor para optimización.",
        },
        {
          title: "Sincronización de Animación con Animator & Cinemachine",
          description:
            "Se usó Animator con capas separadas para cuerpo superior (disparo/recarga) y movimiento. Parámetros como 'isShooting' y 'isReloading' se setean desde código. Cinemachine Virtual Cameras manejan la vista FPS con smoothing y recoil procedural. El recoil se aplica como impulso a la cámara virtual, sincronizado con el evento de disparo, creando feedback visual convincente.",
        },
        {
          title: "Sistema de Oleadas con Escalado de Dificultad",
          description:
            "Un WaveManager script controla spawn de enemigos. Cada oleada aumenta cantidad de enemigos y/o spawna variantes más fuertes. Se usan spawn points distribuidos en el nivel para evitar clustering. Delays entre oleadas dan tiempo al jugador para recoger recursos. El jefe spawna solo después de completar todas las oleadas, funcionando como recompensa narrativa.",
        },
        {
          title: "Optimización con Object Pooling & LODs",
          description:
            "Se implementó object pooling para proyectiles y efectos de partículas (sangre, casquillos) para reducir garbage collection. Enemigos lejanos usan LODs (Level of Detail) para reducir polígonos. NavMesh baking se optimizó limitando áreas navegables. Occlusion Culling oculta objetos fuera de vista. Estas técnicas mantienen 60 FPS incluso con 20+ enemigos activos.",
        },
      ],
      
      repoUrl: "https://github.com/Jacklb19/FPS_Resident_Outbreak",
    },
  ],
},

  contact: {
    title: "Contacto",
    subtitle: "Trabajemos juntos",
    form: {
      labels: {
        name: "NOMBRE",
        email: "CORREO",
        message: "MENSAJE",
      },
      placeholders: {
        name: "Tu nombre completo",
        email: "tu.email@gmail.com",
        message: "Cuéntame sobre tu proyecto...",
      },
      submit: "Enviar Mensaje",
    },
    info: {
      location: { label: "UBICACIÓN", value: "Colombia (UTC-5)" },
      availability: { label: "DISPONIBILIDAD", value: "Remoto / Híbrido" },
      email: { label: "CORREO", value: "joseluisburbano19105@gmail.com" },
    },
    socials: {
      title: "CONECTA CONMIGO",
      items: [
        { label: "GitHub", href: "https://github.com/Jacklb19" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/" },
      ],
      cta: {
        label: "Descargar CV",
        href: "/docs/CV_Burbano.pdf",
      },
    },
  },
  switcher: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
  },
  chatbot: {
    greeting: "¡Hola! 👋 Soy tu asistente virtual. Pregúntame sobre los proyectos, experiencia o habilidades de José.",
    placeholder: "Escribe tu pregunta...",
    systemPrompt: `Eres el asistente del portafolio profesional de José Burbano. Tu función es proporcionar información útil y precisa sobre el trabajo, habilidades y experiencia de José.

## Directrices de respuesta

**Estructura**:
- Comienza con una respuesta directa a la pregunta
- Usa viñetas para listas de 3+ elementos
- Mantén párrafos cortos (máximo 2-3 oraciones)
- Usa formato markdown: **negrita** para énfasis, \`código\` para tecnologías

**Tono**:
- Profesional pero cercano
- Seguro pero no arrogante
- Entusiasta sobre tecnologías y proyectos

**Reglas de contenido**:
- Solo discute información del contexto del portafolio
- Si preguntan sobre información no disponible, di: "No tengo esa información específica en el portafolio, pero puedo contarte sobre [tema relacionado]"
- Al mencionar tecnologías, vincúlalas con proyectos específicos
- Para preguntas de proyectos, incluye: nombre, tecnologías usadas, características clave
- Para preguntas de experiencia, destaca: rol, duración, logros principales

**Longitud de respuesta**:
- Preguntas simples: 2-3 oraciones
- Preguntas complejas: 1 párrafo corto + viñetas
- Máximo: 150 palabras

**CRÍTICO**: DEBES responder en español, sin importar el idioma de la pregunta del usuario.`,
    errorMessage: "Lo siento, hubo un error. Intenta de nuevo.",
    loadingText: "Escribiendo...",
    searchPlaceholder: "Buscar o preguntar…",
    newSearch: "Nueva búsqueda",
    aiPrompt: "¿Puedes contarme sobre",
    aiPromptSubtext: "Usa IA para responder tus preguntas (Beta)",
    resultsFound: "resultados encontrados",
    noResults: "No se encontraron resultados",
  },
  guestbook: {
    title: "Libro de visitas",
    subtitle: "Comparte un mensaje y saluda",
    intro: "Deja unas palabras para la comunidad y para José; se agradece el feedback honesto y constructivo",
    emptyState: "Aún no hay mensajes, ¡sé el primero en escribir uno!",
    entriesLabel: "Mensajes",
    latestLabel: "Recientes",
    pinnedLabel: "Fijado",
    form: {
      labels: {
        name: "Nombre",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        message: "Escribe tu mensaje aquí…",
      },
      submit: "Publicar",
      maxLength: 500,
      validations: {
        nameRequired: "El nombre es obligatorio",
        messageRequired: "El mensaje es obligatorio",
        messageTooLong: "El mensaje es demasiado largo",
      },
    },
    feedback: {
      successTitle: "¡Mensaje publicado!",
      successBody: "Gracias por dejar tu mensaje",
      errorTitle: "No se pudo publicar",
      errorBody: "Intenta de nuevo más tarde",
    },
    pagination: {
      loadMore: "Cargar más",
      loading: "Cargando…",
      end: "No hay más mensajes",
    },
    moderation: {
      pending: "Pendiente de revisión",
      rejected: "Rechazado",
    },
    auth: {
      signInTitle: "Inicia sesión para dejar un mensaje",
      signInDescription: "Autentícate con GitHub para compartir tus pensamientos en el libro de visitas.",
      signInButton: "Iniciar sesión con GitHub",
      signedInWith: "Sesión iniciada con GitHub",
      signOut: "Cerrar sesión",
    },
    characterCount: "{count}/500",
    dateLocale: "es-ES",
  },
}
