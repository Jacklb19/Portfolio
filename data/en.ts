import { Dictionary } from "./types";

export const contentEn: Dictionary = {
  hero: {
    intro: "I am Jose Burbano, and I enjoy",
    title: {
      start: "Building",
      highlight: "Scalable",
      end: "Systems",
    },
    subtitle: "Software Engineer",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/" },
      { label: "GitHub", href: "https://github.com/Jacklb19" },
      { label: "Email", href: "mail" },
      { label: "Portfolio", href: "#" },
    ],
  },
  about: {
    title: "About Me",
    description:
      "Hi, I'm Jose Burbano, an aspiring software engineer with an incredible curiosity for the world of programming. I have a passion for backend development and building scalable, full-featured systems, always striving to learn from the latest technologies to bring ideas to life in every way possible. My goal is to deliver systems that can grow and provide more solutions than I could ever imagine.",
    hobbies: {
      title: "Hobbies",
      text: "Make photography, play ping pong, go camping, and just enjoy life.",
    },
    interests: {
      title: "Interests",
      text: "Backend, exploring new technologies, AI, and VR.",
    },
    stack: {
      title: "Stack",
      description: "Tools, resources, and software I use daily.",
      button: "View Stack",
    },
    projects: {
      title: "Projects",
      description: "Dive into My Projects",
      button: "View Projects",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What people say about me",
      testimonials: [
        {
          id: 1,
          name: "SARAH CHEN",
          title: "Senior Developer @ TechCorp",
          content:
            "Jose is a highly motivated aspiring software engineer with a natural curiosity and passion for learning. He stands out for his ability to quickly grasp new concepts and apply them in real projects. His dedication to clean code and scalable architecture is impressive for someone early in their development journey.",
          image: "/images/testimonial-1.jpg",
        },
        {
          id: 2,
          name: "MARCUS JOHNSON",
          title: "Product Manager @ InnovateLab",
          content:
            "Working with Jose has been inspiring. His passion for programming goes beyond just writing code — he genuinely cares about understanding the problem and delivering thoughtful solutions. His creativity and commitment to every project make him a valuable team member.",
          image: "/images/testimonial-2.jpg",
        },
        {
          id: 3,
          name: "ELENA RODRIGUEZ",
          title: "Tech Lead @ StartupHub",
          content:
            "Jose demonstrates exceptional problem-solving skills and a strong foundation in software engineering principles. His enthusiasm for learning new technologies and his dedication to best practices make him stand out. I have no doubt he will become an excellent software engineer.",
          image: "/images/testimonial-3.jpg",
        },
      ],
    },
  },
  experience: {
    title: "Experience",
    experiences: [
      {
        id: 1,
        category: "Automation",
        title: "Travel Agency",
        period: "Aug 2025 - Sep 2025",
        technologies: ["React", "Node.js", "Tailwind", "WhatsApp API"],
        description: [
          "Designed and implemented an automated WhatsApp lead capture flow using n8n, integrating Meta's Business Cloud API with Google Sheets and CRM.",
          "Built a dynamic landing page using React, Tailwind, and Node.js, improving user acquisition and visibility.",
          "Applied clean code and scalable architecture principles, ensuring maintainability and adaptability for future integrations.",
        ],
        image: "/images/agencia.jpg",
      },
      {
        id: 2,
        category: "Career Path",
        title: "Software Engineer Career - UCC",
        period: "Aug 2021 - Jan 2025",
        technologies: ["Python", "PostgreSQL", "MongoDB", "Java"],
        description: [
          "Gained strong foundations in software development, algorithms, and data structures.",
          "Learned Agile and applied design patterns (Decorator, Singleton, MVC, etc.) in academic projects.",
          "Built and deployed systems with Node.js, PostgreSQL, and MongoDB, practicing containerization and database management.",
          "Applied Clean Architecture and modular structures for scalable solutions.",
          "Created academic projects like a claims management system and an AI-powered tourism app.",
        ],
        image: "/images/software.png",
      },
      {
        id: 3,
        category: "System",
        title: "Claims Management System",
        period: "Mar 2024 - Jun 2024",
        technologies: ["Node.js", "PostgreSQL", "Docker", "Express"],
        description: [
          "Developed a full-stack claims and complaints management system for a university project.",
          "Implemented RESTful APIs with Node.js and Express, managing user authentication and roles.",
          "Designed and normalized a PostgreSQL schema for efficient data handling.",
          "Containerized the app with Docker for consistent deployment across environments.",
        ],
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  footer: {
    title: "Portfolio. All rights reserved.",
    made: "Made with",
    by: "by Jose Burbano",
  },
  projects: {
    title: "Projects",
    description: "Explore some of my featured works and experiments.",
    filter: {
      name: "Filter",
      option: "All Projects",
    },
    button: "View More",
    projects: [
      {
        id: 1,
        name: "Pharmasync",
        description:
          "Pharmasync is a virtual pharmaceutical assistant designed to streamline medication for students, pharmacies, and healthcare professionals.",
        status: "offline",
        technologies: ["React", "Node.js", "PostgreSQL", "AI"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
      {
        id: 2,
        name: "Claim Management",
        description:
          "ClaimHub is a robust claims management system designed to simplify complaint handling, track resolution efficiently.",
        status: "online",
        technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
      {
        id: 3,
        name: "Mino Music Player",
        description:
          "A sleek music player built to organize playlists, stream audio, and deliver a seamless listening experience.",
        status: "online",
        technologies: ["React", "Tailwind", "Web Audio API"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
      {
        id: 4,
        name: "Clock",
        description:
          "A minimalist time-tracking tool designed to help users stay focused with simple, clean interface and productivity features.",
        status: "online",
        technologies: ["React", "TypeScript", "Tailwind"],
        image: "/placeholder.svg?height=300&width=400",
        link: "#",
      },
    ],
  },
  contact: {
  title: "CONTACT",
  subtitle: "Let's work together",
  form: {
    labels: {
      name: "NAME",
      email: "EMAIL",
      message: "MESSAGE",
    },
    placeholders: {
      name: "Your full name",
      email: "your.email@gmail.com",
      message: "Tell me about your project...",
    },
    submit: "Send Message",
  },
  info: {
    location: { label: "LOCATION", value: "Colombia (UTC-5)" },
    availability: { label: "AVAILABILITY", value: "Remote / Hybrid" },
    email: { label: "EMAIL", value: "joseburbano1995@gmail.com" },
  },
  socials: {
    title: "CONNECT WITH ME",
    items: [
      { label: "GitHub", href: "https://github.com/Jacklb19" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/" },
    ],
    cta: {
      label: "Download CV",
      href: "/docs/CV_Burbano.pdf",
    },
  },
  },
  switcher: {
    label: "Language",
    es: "Spanish",
    en: "English",
  },
};
