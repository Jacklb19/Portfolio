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
        image: "images/agencia.jpg?height=400&width=600",
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
        image: "images/software.png?height=400&width=600",
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
    by: "Por Jose Burbano"
  },
  switcher: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
  },
};
