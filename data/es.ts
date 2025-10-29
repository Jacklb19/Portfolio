import { Dictionary } from "./types";

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
          name: "SARAH CHEN",
          title: "Desarrolladora Senior @ TechCorp",
          content:
            "Jose es un aspirante a ingeniero de software altamente motivado con una curiosidad natural y pasión por el aprendizaje. Destaca por su capacidad para comprender rápidamente nuevos conceptos y aplicarlos en proyectos reales. Su dedicación al código limpio y la arquitectura escalable es impresionante para alguien en las primeras etapas de su trayectoria.",
          image: "/placeholder.svg",
        },
        {
          id: 2,
          name: "MARCUS JOHNSON",
          title: "Product Manager @ InnovateLab",
          content:
            "Trabajar con Jose ha sido inspirador. Su pasión por la programación va más allá de solo escribir código: realmente le importa entender el problema y entregar soluciones reflexivas. Su creatividad y compromiso con cada proyecto lo convierten en un valioso miembro del equipo.",
          image: "/placeholder.svg",
        },
        {
          id: 3,
          name: "ELENA RODRIGUEZ",
          title: "Tech Lead @ StartupHub",
          content:
            "Jose demuestra habilidades excepcionales para resolver problemas y una base sólida en principios de ingeniería de software. Su entusiasmo por aprender nuevas tecnologías y su dedicación a las mejores prácticas lo hacen destacar. No tengo dudas de que que se convertirá en un excelente ingeniero de software.",
          image: "/placeholder.svg",
        },
      ],
    },
  },
  experience: {
      title: "Experiencia",
      intro: {
        paragraph1: "A lo largo de mi trayectoria profesional, he tenido la oportunidad de trabajar en proyectos diversos y desafiantes que han fortalecido mis habilidades técnicas y mi capacidad para resolver problemas complejos.",
        paragraph2: "Desde el desarrollo full-stack hasta la implementación de soluciones innovadoras, cada experiencia ha contribuido a mi crecimiento como desarrollador. A continuación, te presento un recorrido por los proyectos y roles que han definido mi carrera profesional."
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
        "Trabajé en equipo con metodologías ágiles como Scrum, comunicándome de forma efectiva y entregando de manera iterativa."
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
          "Construí una interfaz de usuario responsiva con Tailwind CSS, permitiendo a los clientes enviar reclamos y a los agentes gestionarlos mediante un flujo controlado."
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
        "Plataforma de asistencia farmacéutica con IA: backend en Java 21+ (Spring Boot) con seguridad JWT, PostgreSQL y MongoDB; frontend en React 18+ con TypeScript, Vite y Tailwind. Incluye chat asistido por IA, rutas protegidas por roles, historial de sesiones y orquestación de agentes con patrones Strategy, Facade, Decorator y Observer.",
      status: "offline",
      technologies: [
        "SpringBoot",
        "Java",
        "React",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "JWT",
        "Tailwind",
        "Vite",
      ],
      image: "/images/PharmaSync.png",
      link: "https://github.com/SantiagoArTyrs/PharmaSync"
      },
      {
        id: 2,
        name: "Gestión de Reclamos",
        description:
          "Un sistema completo de gestión de reclamos con arquitectura desacoplada, con un backend en Spring Boot (Java) y un frontend en Next.js (TypeScript). Utiliza JWT para seguridad basada en roles y el patrón State para controlar el flujo de los reclamos.",
        status: "online",
        technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
        image: "/images/ClaimsSystem.png",
        link: "https://claims-system.vercel.app/register",
      },
      {
        id: 3,
        name: "Mino Reproductor de Música",
        description:
          "Reproductor de música para organizar listas y reproducir audio. Permite agregar canciones desde tu dispositivo (no carpetas completas), reordenarlas por arrastrar y soltar, repetir la lista, y controlar el volumen y la reproducción.",
        status: "offline",
        technologies: ["Node.js", "React", "Tailwind", "TypeScript"],
        image: "/images/mino.png",
        link: "https://github.com/Jacklb19/Mino-Music-Player.git",
      },
      {
      id: 4,
      name: "Last Stand: Outbreak",
      description:
        "Juego FPS de supervivencia contra zombis, donde debes atravesar tres niveles únicos — hospital, calle y cementerio — enfrentando oleadas de enemigos, gestionando recursos y derrotando un jefe final para escapar de la ciudad infestada.",
      status: "offline",
      technologies: [
        "Unity",
        "C#",
      ],
      image: "/images/resident.png",
      link: "https://github.com/Jacklb19/FPS_Resident_Outbreak"
      },
    ],
  },
  contact: {
  title: "CONTACTO",
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
    systemPrompt: `Eres un asistente del portafolio profesional de José Burbano.

[INSTRUCCIONES]
- Solo responde preguntas sobre la información del portafolio proporcionada
- Si preguntan algo no relacionado con José o su portafolio, redirige amablemente
- Sé conciso pero informativo (máximo 3-4 líneas)
- Usa un tono profesional pero cercano
- Responde SIEMPRE en español
- Menciona proyectos específicos cuando sea relevante
- Si mencionan una tecnología, relaciona con proyectos que la usen

[COMPORTAMIENTO]
- Para preguntas sobre proyectos: describe brevemente el proyecto y las tecnologías usadas
- Para preguntas sobre experiencia: menciona roles y logros clave
- Para preguntas sobre habilidades: lista las más relevantes y da ejemplos
- Para preguntas genéricas: ofrece un resumen y sugiere áreas específicas

[IMPORTANTE]
- NO inventes información que no esté en el contexto
- Si no tienes la información, di "No tengo esa información en el portafolio"`,
    errorMessage: "Lo siento, hubo un error. Intenta de nuevo.",
    loadingText: "Escribiendo..."
  },
};
