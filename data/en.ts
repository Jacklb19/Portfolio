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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-luis-burbano-buchelly-a1313834a/"},
      { label: "GitHub", href: "https://github.com/Jacklb19" },
      { label: "Email", href: "mailto:joseluisburbano19105@gmail.com" },
      { label: "CV", href: "/docs/CV_Burbano.pdf" },
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
      intro: {
        paragraph1: "Throughout my professional journey, I have had the opportunity to work on diverse and challenging projects that have strengthened my technical skills and ability to solve complex problems.",
        paragraph2: "From full-stack development to implementing innovative solutions, each experience has contributed to my growth as a developer. Below, I present a journey through the projects and roles that have defined my professional career."
      },
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
        period: "Aug 2021 - Jan 2027",
        technologies: ["Python", "PostgreSQL", "MongoDB", "Java"],
        description: [
          "I combined computing fundamentals and engineering practices to design, build, and operate reliable, scalable software that solves real problems.",
          "I mastered algorithms, data structures, complexity, discrete math, and databases to reason about performance and correctness in my projects.",
          "I applied requirements engineering, domain modeling, and documentation to align each solution with stakeholder needs.",
          "I designed using layered architectures, SOA, and distributed systems, optimizing cohesion, coupling, and scalability.",
          "I implemented software testing (unit and integration), clean code practices, and version control to ensure delivery quality.",
          "I incorporated DevOps principles and cloud computing to automate integration and deployment and improve operational reliability.",
          "I embedded security from design by following OWASP guidelines and performing systematic code reviews.",
          "I collaborated in teams with Agile/Scrum, communicating effectively and delivering iteratively."
        ],
        image: "/images/software.png",
      },
      {
        id: 3,
        category: "System",
        title: "Claims Management System",
        period: "Mar 2024 - Jun 2024",
        technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
        description: [
          "Developed a full-stack claims management system with a decoupled architecture, featuring a Spring Boot backend and a Next.js frontend.",
          "Implemented a secure REST API with JWT for role-based authentication (Client and Agent).",
          "Used MongoDB for data persistence and the State design pattern to manage the claim lifecycle.",
          "Built a responsive UI with Tailwind CSS, allowing clients to submit claims and agents to manage them through a controlled workflow."
        ],
        image: "/images/ClaimsSystem.png",
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
      name: "PharmaSync",
      description:
        "AI-powered pharmaceutical assistance platform: Java 21+ Spring Boot backend with JWT security, PostgreSQL and MongoDB; React 18+ TypeScript frontend with Vite and Tailwind. Features AI-assisted chat, role-based protected routing, session history, and agent orchestration using Strategy, Facade, Decorator, and Observer patterns.",
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
        name: "Claim Management",
        description:
          "A complete claims management system with a decoupled architecture, featuring a Spring Boot (Java) backend and a Next.js (TypeScript) frontend. It uses JWT for role-based security and the State pattern to control the claim workflow.",
        status: "online",
        technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
        image: "/images/ClaimsSystem.png",
        link: "https://claims-system.vercel.app/register",
      },
      {
        id: 3,
        name: "Mino Music Player",
        description:
          "A music player to organize playlists and stream audio. It allows adding songs from the device, reordering them by drag-and-drop, repeating the playlist, and controlling volume and playback.",
        status: "offline",
        technologies: ["Node.js", "React", "Tailwind", "TypeScript"],
        image: "/images/mino.png",
        link: "https://github.com/Jacklb19/Mino-Music-Player.git",
      },
      {
      id: 2,
      name: "Last Stand: Outbreak",
      description:
        "Zombie survival FPS game, where you cross three unique zones — hospital, urban street, and cemetery — battling enemy waves, managing resources, and defeating a final boss to escape the infected city.",
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
    email: { label: "EMAIL", value: "joseluisburbano19105@gmail.com" },
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
