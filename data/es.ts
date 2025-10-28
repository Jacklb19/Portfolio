import { Dictionary } from "./types";

export const contentEs: Dictionary = {
  hero: {
    intro: "Soy Jose Burbano, y disfruto",
    title: {
      start: "Construir",
      highlight: "Sistemas",
      end: "Escalables",
    },
    subtitle: "Ingeniero de Software",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/" },
      { label: "GitHub", href: "https://github.com/Jacklb19" },
      { label: "Correo", href: "mail" },
      { label: "Portafolio", href: "#" },
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
          image: "/images/testimonial-1.jpg",
        },
        {
          id: 2,
          name: "MARCUS JOHNSON",
          title: "Product Manager @ InnovateLab",
          content:
            "Trabajar con Jose ha sido inspirador. Su pasión por la programación va más allá de solo escribir código: realmente le importa entender el problema y entregar soluciones reflexivas. Su creatividad y compromiso con cada proyecto lo convierten en un valioso miembro del equipo.",
          image: "/images/testimonial-2.jpg",
        },
        {
          id: 3,
          name: "ELENA RODRIGUEZ",
          title: "Tech Lead @ StartupHub",
          content:
            "Jose demuestra habilidades excepcionales para resolver problemas y una base sólida en principios de ingeniería de software. Su entusiasmo por aprender nuevas tecnologías y su dedicación a las mejores prácticas lo hacen destacar. No tengo dudas de que se convertirá en un excelente ingeniero de software.",
          image: "/images/testimonial-3.jpg",
        },
      ],
    },
  },
  experience: {
    title: "Experiencia",
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
        period: "Ago 2021 - Ene 2025",
        technologies: ["Python", "PostgreSQL", "MongoDB", "Java"],
        description: [
          "Obtuve bases sólidas en desarrollo de software, algoritmos y estructuras de datos.",
          "Aprendí metodologías ágiles y patrones de diseño como Decorator, Singleton y MVC.",
          "Desarrollé y desplegué sistemas con Node.js, PostgreSQL y MongoDB, aplicando contenedorización y gestión de bases de datos.",
          "Apliqué principios de Clean Architecture y estructuras modulares para soluciones escalables.",
          "Creé proyectos académicos como un sistema de gestión de reclamos y una app de turismo con IA.",
        ],
        image: "/images/software.png",
      },
      {
        id: 3,
        category: "Sistema",
        title: "Sistema de Gestión de Reclamos",
        period: "Mar 2024 - Jun 2024",
        technologies: ["Node.js", "PostgreSQL", "Docker", "Express"],
        description: [
          "Desarrollé un sistema full-stack de gestión de reclamos y quejas para un proyecto universitario.",
          "Implementé APIs RESTful con Node.js y Express, manejando autenticación y roles de usuario.",
          "Diseñé y normalicé la base de datos en PostgreSQL para un almacenamiento eficiente.",
          "Contenericé la aplicación con Docker para despliegues consistentes entre entornos.",
        ],
        image: "/placeholder.svg?height=400&width=600",
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
        name: "Pharmasync",
        description:
          "Pharmasync es un asistente farmacéutico virtual diseñado para optimizar la gestión de medicamentos para estudiantes, farmacias y profesionales de la salud.",
        status: "offline",
        technologies: ["React", "Node.js", "PostgreSQL", "IA"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
      {
        id: 2,
        name: "Gestión de Reclamos",
        description:
          "ClaimHub es un sistema robusto de gestión de reclamos diseñado para simplificar la atención de quejas y el seguimiento eficiente de su resolución.",
        status: "online",
        technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
      {
        id: 3,
        name: "Mino Reproductor de Música",
        description:
          "Un reproductor de música elegante creado para organizar listas, transmitir audio y ofrecer una experiencia fluida.",
        status: "online",
        technologies: ["React", "Tailwind", "Web Audio API"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
      {
        id: 4,
        name: "Reloj",
        description:
          "Una herramienta minimalista de seguimiento del tiempo diseñada para ayudar a mantener el enfoque con una interfaz simple y limpia.",
        status: "online",
        technologies: ["React", "TypeScript", "Tailwind"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
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
};
