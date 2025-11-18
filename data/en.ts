import type { Dictionary } from "./types"

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
          name: "Sara Ojeda",
          title: "UCC Student",
          content:
            "Jose is a university classmate with a genuine passion for software engineering. Since I met him, I’ve been impressed by his constant curiosity and his ability to quickly understand how things work. In the projects we’ve worked on together, it’s clear that he truly cares about how he develops them and about coming up with good solutions. He’s the kind of teammate you trust to solve difficult problems without needing to supervise him closely. He is definitely going to be a good engineer.",
          image: "/images/testimonal1.png",
        },
        {
          id: 2,
          name: "Steven Ortega",
          title: "UCC Student",
          content:
            "Working with Jose has been inspiring. His passion for programming goes beyond just writing code — he genuinely cares about understanding the problem and delivering thoughtful solutions. His creativity and commitment to every project make him a valuable team member.",
          image: "/images/testimonal2.png",
        },
        {
          id: 3,
          name: "Jhonatan Mideros",
          title: "University Professor",
          content:
            "Jose made a ... portfolio.",
          image: "/images/testimonal3.png",
        },
                {
          id: 4,
          name: "Santiago Arevalo",
          title: "UCC Estudent",
          content:
            "José is an outstanding professional distinguished by his exceptional sense of responsibility and dedication.",
          image: "/images/testimonal4.png",
        },
      ],
    },
  },
  experience: {
    title: "Experience",
    intro: {
      paragraph1:
        "Throughout my professional journey, I have had the opportunity to work on diverse and challenging projects that have strengthened my technical skills and ability to solve complex problems.",
      paragraph2:
        "From full-stack development to implementing innovative solutions, each experience has contributed to my growth as a developer. Below, I present a journey through the projects and roles that have defined my professional career.",
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
          "I collaborated in teams with Agile/Scrum, communicating effectively and delivering iteratively.",
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
          "Built a responsive UI with Tailwind CSS, allowing clients to submit claims and agents to manage them through a controlled workflow.",
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
        "AI-powered pharmaceutical assistance platform: Java 21+ Spring Boot backend with JWT security, PostgreSQL and MongoDB; React 18+ TypeScript frontend with Vite and Tailwind.",
      status: "offline",
      technologies: ["SpringBoot", "Java", "React", "TypeScript", "PostgreSQL", "MongoDB", "JWT", "Tailwind"],
      image: "/images/PharmaSync.png",
      slug: "pharmasync",
    },
    {
      id: 2,
      name: "Claim Management",
      description:
        "A complete claims management system with a decoupled architecture, featuring a Spring Boot (Java) backend and a Next.js (TypeScript) frontend.",
      status: "online",
      technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
      image: "/images/ClaimsSystem.png",
      slug: "claim-management",
    },
    {
      id: 3,
      name: "Mino Music Player",
      description:
        "A music player to organize playlists and stream audio. It allows adding songs from the device, reordering them by drag-and-drop, repeating the playlist, and controlling volume and playback.",
      status: "offline",
      technologies: ["Node.js", "React", "Tailwind", "TypeScript"],
      image: "/images/mino.png",
      slug: "mino-music-player",
    },
    {
      id: 4,
      name: "Last Stand: Outbreak",
      description:
        "Zombie survival FPS game, where you cross three unique zones — hospital, urban street, and cemetery — battling enemy waves, managing resources, and defeating a final boss to escape the infected city.",
      status: "offline",
      technologies: ["Unity"],
      image: "/images/resident.png",
      slug: "last-stand-outbreak",
    },
  ],

  projectDetails: [
    // ========== PROJECT 1: PharmaSync ==========
    {
      id: 1,
      name: "PharmaSync",
      description:
        "AI-powered pharmaceutical assistance platform: Java 21+ Spring Boot backend with JWT security, PostgreSQL and MongoDB; React 18+ TypeScript frontend with Vite and Tailwind. Features AI-assisted chat, role-based protected routing, session history, and agent orchestration using Strategy, Facade, Decorator, and Observer patterns.",
      status: "offline",
      technologies: ["SpringBoot", "Java", "React", "TypeScript", "PostgreSQL", "MongoDB", "JWT", "Tailwind"],
      image: "/images/PharmaSync.png",
      slug: "pharmasync",
      
      date: "Dec 2024",
      category: "Web App",
      
      overview:
        "PharmaSync is a comprehensive pharmaceutical assistance platform combining a robust Spring Boot backend with a modern React interface. Designed to facilitate medical and pharmaceutical information queries through an AI-assisted chat system, with role-based access control and session persistence.",
      
      features: [
        "AI-assisted chat with agent orchestration for precise pharmaceutical queries",
        "Authentication and authorization system with JWT and role control (admin, user, guest)",
        "Dual persistence with PostgreSQL for relational data and MongoDB for chat sessions",
        "User query history with ability to resume previous conversations",
        "Decoupled architecture with design patterns (Strategy, Facade, Decorator, Observer) for scalability",
        "Responsive frontend with Vite, Tailwind CSS, and TypeScript for smooth user experience",
      ],
      
      outcome:
        "The result is a scalable and secure platform that enables users and healthcare professionals to access pharmaceutical information intelligently and contextually. The design pattern-based architecture ensures maintainability and extensibility, while AI integration significantly improves medical response accuracy. The system demonstrates how to combine modern backend and frontend technologies to solve complex healthcare sector problems.",
      
      background:
        "PharmaSync was born from the need to democratize access to reliable and contextualized pharmaceutical information. Using Java 21+ with Spring Boot for the backend, a robust security system with JWT and a hybrid database (PostgreSQL + MongoDB) was implemented to handle both structured data and conversations. The React 18+ frontend with TypeScript and Vite offers an intuitive interface, while AI agent orchestration through design patterns enables precise and personalized responses based on user profile.",
      
      challenges: [
        "Implement a secure authentication system that handles multiple roles and persists sessions without compromising security",
        "Design an AI agent architecture that can orchestrate complex queries and maintain context between interactions",
        "Integrate two databases (PostgreSQL and MongoDB) efficiently for relational and non-relational data",
        "Ensure the React frontend communicates securely with the Spring Boot backend via JWT tokens",
        "Scale the application while maintaining clean design patterns and maintainable code",
      ],
      
      solutions: [
        {
          title: "JWT Security & Role Control",
          description:
            "Spring Security was implemented with JWT for stateless authentication. Tokens include role claims that protect specific endpoints. A custom filter validates tokens on each request and loads the security context, enabling granular role-based authorization (ADMIN, USER, GUEST).",
        },
        {
          title: "AI Agent Orchestration",
          description:
            "The Strategy pattern was applied to select different agents based on query type (medications, interactions, dosing). The Facade pattern simplifies interaction with multiple AI services, while Decorator adds functionality like logging and response caching. Observer notifies changes in query status.",
        },
        {
          title: "Hybrid Data Architecture",
          description:
            "PostgreSQL stores structured data of users, roles, and medications with normalized relationships. MongoDB saves chat sessions as JSON documents, enabling fast queries and flexibility in conversation structure. Spring Data JPA and Spring Data MongoDB integrate transparently.",
        },
        {
          title: "Modern & Responsive Frontend",
          description:
            "React 18+ with TypeScript provides type-safety and better DX. Vite accelerates development with instant HMR. Tailwind CSS with reusable components ensures consistent UI. Axios intercepts requests to automatically add JWT tokens in headers. React Router implements protected routes that verify roles before rendering components.",
        },
        {
          title: "Design Patterns for Scalability",
          description:
            "The architecture follows SOLID and GoF patterns: Strategy for interchangeable AI algorithms, Facade to simplify complex subsystems, Decorator to add functionality without modifying existing code, and Observer to decouple components that react to events. This facilitates testing, maintenance, and future extension.",
        },
      ],
      
      repoUrl: "https://github.com/SantiagoArTyrs/PharmaSync",
    },

    // ========== PROJECT 2: Claim Management ==========
    {
      id: 2,
      name: "Claim Management",
      description:
        "A complete claims management system with a decoupled architecture, featuring a Spring Boot (Java) backend and a Next.js (TypeScript) frontend. It uses JWT for role-based security and the State pattern to control the claim workflow.",
      status: "online",
      technologies: ["SpringBoot", "NextJS", "MongoDB", "JWT", "Tailwind"],
      image: "/images/ClaimsSystem.png",
      slug: "claim-management",
      
      date: "Nov 2024",
      category: "Web App",
      
      overview:
        "Enterprise claims management system that allows users to register complaints, track their status, and administrators to process them through a well-defined state flow. Built with Spring Boot (Java) for the REST API backend and Next.js (TypeScript) for a modern and responsive interface. Security is handled with JWT and claim states are controlled using the State pattern.",
      
      features: [
        "User registration and authentication with JWT and role-based access control (user/administrator)",
        "Complete CRUD of claims with validations in frontend and backend",
        "Claim state flow (Pending → Under Review → Resolved/Rejected) controlled by State pattern",
        "Differentiated dashboard: users see their claims, administrators manage all",
        "MongoDB persistence for flexibility in claim structure and scalability",
        "Responsive UI with Next.js, TypeScript, and Tailwind CSS for smooth experience on any device",
      ],
      
      outcome:
        "The system provides a complete and scalable solution for enterprise claim management, with clear separation of concerns between frontend and backend. The decoupled architecture allows maintaining and extending each part independently. State pattern usage ensures state transitions are valid and traceable, while JWT ensures only authorized users can access specific functionalities. Deployed in production, it demonstrates how to build modern full-stack applications with enterprise-grade technologies.",
      
      background:
        "The project emerged from the need to digitize the manual claim management process in organizations. Using Spring Boot, a robust REST API was built with business validations and MongoDB persistence. Next.js provides Server-Side Rendering (SSR) for SEO and fast user experience. The State pattern controls each claim's lifecycle, preventing invalid transitions. JWT enables stateless authentication and role-based authorization, clearly separating user and administrator permissions.",
      
      challenges: [
        "Design a robust claim state flow that prevents invalid transitions and is auditable",
        "Implement secure authentication and authorization with JWT that works between decoupled frontend and backend",
        "Create an intuitive user interface that handles different roles (user vs admin) without duplicating code",
        "Ensure consistent validations between client and server to avoid inconsistent data",
        "Deploy and maintain the application in production with high availability",
      ],
      
      solutions: [
        {
          title: "State Pattern for Claim Flow",
          description:
            "The State pattern was implemented in the backend to model claim states (Pending, Under Review, Resolved, Rejected). Each state is a class that defines its own valid transitions. This prevents illegal state changes and facilitates auditing. A claim context delegates operations to the current state, ensuring only allowed transitions occur.",
        },
        {
          title: "JWT Authentication & Roles",
          description:
            "Spring Security generates JWT tokens at login, including roles in claims. Next.js saves the token in httpOnly cookies for security. A Next.js middleware verifies the token before rendering protected pages. The backend validates the token on each request and loads the security context, applying role-based authorization via @PreAuthorize annotations.",
        },
        {
          title: "Modular UI with Next.js & TypeScript",
          description:
            "Reusable components (ClaimCard, ClaimForm, StatusBadge) were created with TypeScript for type-safety. Next.js Server Components render role-optimized dashboards. Tailwind CSS provides consistent styles. React Hook Form handles forms with client-side validations before submitting to backend. SWR caches and revalidates data automatically.",
        },
        {
          title: "Dual Validations (Client & Server)",
          description:
            "Validations are defined as shared schemas (TypeScript types in frontend, Java Bean Validation in backend). Yup validates forms in Next.js before submit. Spring Boot validates DTOs with @Valid and returns 400 errors with details. This ensures consistency and prevents invalid data from reaching the database.",
        },
        {
          title: "Deploy & CI/CD",
          description:
            "Next.js frontend is deployed on Vercel with environment variables for API URL. Spring Boot backend is deployed on Railway/Render with MongoDB Atlas. GitHub Actions runs tests and linting on each push. Environment variables configure JWT secrets and DB connections securely in production.",
        },
      ],
      
      demoUrl: "https://claims-system.vercel.app/register",
      repoUrl: "https://github.com/Jacklb19/claim-management-system",
    },

    // ========== PROJECT 3: Mino Music Player ==========
    {
      id: 3,
      name: "Mino Music Player",
      description:
        "A music player to organize playlists and stream audio. It allows adding songs from the device, reordering them by drag-and-drop, repeating the playlist, and controlling volume and playback.",
      status: "offline",
      technologies: ["Node.js", "React", "Tailwind", "TypeScript"],
      image: "/images/mino.png",
      slug: "mino-music-player",
      
      date: "Oct 2024",
      category: "Desktop App",
      
      overview:
        "Mino is a minimalist local music player built with React and TypeScript, optimized for managing personalized playlists. It allows loading audio files from the device, organizing them via drag-and-drop, and controlling playback with advanced features like playlist repeat, volume control, and smooth navigation between songs.",
      
      features: [
        "Local audio file loading (MP3, WAV, OGG, etc.) with supported format validation",
        "Interactive playlist with song reordering via drag-and-drop",
        "Complete playback controls: play/pause, next/previous, progress bar, volume",
        "Playlist repeat mode for continuous playback",
        "Minimalist and responsive interface with Tailwind CSS",
        "Local playlist persistence via localStorage",
      ],
      
      outcome:
        "Mino is a functional and elegant music player that demonstrates mastery of browser APIs (FileReader, Audio, Drag & Drop) and complex state management in React. The intuitive and responsive interface enables a smooth user experience without requiring a backend. The project shows how to build desktop/web applications with modern frontend technologies, handling local files securely and efficiently.",
      
      background:
        "The project was born as a lightweight alternative to heavy music players, focusing on simplicity and full control over local playlists. Built with React 18 and TypeScript for type-safety, it uses the browser's Web Audio API for playback and the File API for local loading. Tailwind CSS provides a clean and responsive design. Drag-and-drop logic is implemented with HTML5 Drag & Drop API, and playlist persistence is handled with localStorage to remember the queue between sessions.",
      
      challenges: [
        "Handle loading and reading of local audio files securely without a backend",
        "Implement smooth and functional drag-and-drop to reorder songs in the playlist",
        "Control playback state (play/pause, current time, volume) synchronized with the UI",
        "Persist playlists between browser sessions without using external database",
        "Ensure the interface is responsive and accessible on different devices",
      ],
      
      solutions: [
        {
          title: "Secure File Loading with FileReader API",
          description:
            "Input type='file' with 'accept' attribute is used to filter only audio formats. FileReader reads selected files and generates temporary URLs (Object URLs) that are passed to the <audio> element. This enables playback without uploading files to a server, maintaining privacy and speed.",
        },
        {
          title: "Drag & Drop with HTML5 API",
          description:
            "Each song in the playlist is a draggable div. DragStart, dragOver, and drop events handle reordering. When dropping a song, the playlist state in React is updated by reordering the array. onDragOver with preventDefault enables the drop. Visual feedback (CSS classes) indicates where the song will be dropped.",
        },
        {
          title: "Playback State Management",
          description:
            "A centralized React state (using useReducer or Context) maintains: current song, isPlaying, currentTime, volume, repeatMode. The Audio component uses refs to control the <audio> element. Events like timeupdate and ended synchronize state. UI controls (buttons, sliders) trigger actions that update state and call audio methods (play, pause, seek).",
        },
        {
          title: "Persistence with localStorage",
          description:
            "When adding/reordering songs, the playlist (names, local paths if possible, order) is serialized to JSON and saved in localStorage. When loading the app, localStorage is read and the playlist is reconstructed. Note: Object URLs are temporary and regenerated each session, but names and order are preserved for better UX.",
        },
        {
          title: "Responsive UI with Tailwind",
          description:
            "Tailwind CSS provides utility classes for flexible layouts (flexbox, grid) that adapt to mobile, tablet, and desktop. Playback controls use relative sizes and Tailwind breakpoints. Icons (Lucide React) are scalable. The minimalist design reduces visual load and improves usability.",
        },
      ],
      
      repoUrl: "https://github.com/Jacklb19/Mino-Music-Player",
    },

    // ========== PROJECT 4: Last Stand: Outbreak ==========
    {
      id: 4,
      name: "Last Stand: Outbreak",
      description:
        "Zombie survival FPS game, where you cross three unique zones — hospital, urban street, and cemetery — battling enemy waves, managing resources, and defeating a final boss to escape the infected city.",
      status: "offline",
      technologies: ["Unity"],
      image: "/images/resident.png",
      slug: "last-stand-outbreak",
      
      date: "Sep 2024",
      category: "Game",
      
      overview:
        "Last Stand: Outbreak is a first-person shooter (FPS) survival game developed in Unity with C#. The player must survive zombie waves through three themed zones (hospital, urban street, cemetery), managing ammo, health, and limited resources. The game culminates in a final boss showdown, offering fluid combat mechanics, interchangeable weapon system, and an enemy AI system based on NavMesh.",
      
      features: [
        "Three unique game zones with specific ambiance and challenges: hospital, urban street, and cemetery",
        "FPS combat system with multiple interchangeable weapons (pistol, shotgun, assault rifle)",
        "Enemy artificial intelligence with NavMesh for dynamic pathfinding and horde behavior",
        "Resource management: limited ammo, health system, and health kits scattered in the map",
        "Wave system with progressive difficulty scaling",
        "Final boss with unique combat mechanics and attack patterns",
        "Dynamic UI with HUD showing health, ammo, current weapon, and objectives",
        "Ambient sound system and audio effects for immersion",
      ],
      
      outcome:
        "Last Stand: Outbreak is a functional and polished FPS that demonstrates mastery of core game mechanics (shooting, movement, enemy AI) and system architecture in Unity. Progression flow through three zones keeps the player engaged, while resource management adds strategic tension. NavMesh implementation for enemies ensures efficient pathfinding, and the modular weapon system allows easy extension. The project shows the ability to create complete game experiences with attractive gameplay loop, from level design to complex system programming.",
      
      background:
        "The project was developed in Unity using C# for all gameplay logic. Player movement system was implemented with CharacterController for precise control. Weapons use raycasting for instant hit detection. Zombie enemies have AI scripts that use Unity NavMesh to navigate obstacles and chase the player, with states (Idle, Chase, Attack) controlled by state machine. The final boss has scripted attack patterns and scaled health. Cinemachine handles FPS cameras, and the audio system uses AudioSource with dynamic mixing for ambient and action.",
      
      challenges: [
        "Synchronize shooting animations with weapon state and Cinemachine camera without visual desync",
        "Optimize performance with multiple on-screen enemies using NavMesh without FPS drops",
        "Design a scalable weapon system that allows adding new weapons easily without code duplication",
        "Balance wave difficulty to be challenging but fair, avoiding player frustration",
        "Implement a final boss with interesting mechanics that feels like a satisfying climax",
      ],
      
      solutions: [
        {
          title: "Modular Weapon System with ScriptableObjects",
          description:
            "A WeaponData base class was created as ScriptableObject defining each weapon's properties (damage, fire rate, magazine capacity, prefab). A WeaponController handles the current weapon, instantiates the model, and executes shooting logic. Switching weapons is as simple as referencing another ScriptableObject. This enables quick balancing and adding new weapons without modifying core code.",
        },
        {
          title: "Enemy AI with NavMesh & State Machine",
          description:
            "Zombies use NavMeshAgent for efficient pathfinding. An FSM (Finite State Machine) controls behavior: Idle state when not detecting player, Chase when entering range (using Physics.OverlapSphere), and Attack when close. Smooth transitions between states avoid erratic behavior. NavMesh is precalculated in Editor for optimization.",
        },
        {
          title: "Animation Sync with Animator & Cinemachine",
          description:
            "Animator with separate layers was used for upper body (shooting/reload) and movement. Parameters like 'isShooting' and 'isReloading' are set from code. Cinemachine Virtual Cameras handle FPS view with smoothing and procedural recoil. Recoil is applied as impulse to the virtual camera, synchronized with shooting event, creating convincing visual feedback.",
        },
        {
          title: "Wave System with Difficulty Scaling",
          description:
            "A WaveManager script controls enemy spawning. Each wave increases enemy count and/or spawns stronger variants. Spawn points distributed in the level avoid clustering. Delays between waves give player time to collect resources. Boss spawns only after completing all waves, functioning as narrative reward.",
        },
        {
          title: "Optimization with Object Pooling & LODs",
          description:
            "Object pooling was implemented for projectiles and particle effects (blood, shells) to reduce garbage collection. Distant enemies use LODs (Level of Detail) to reduce polygons. NavMesh baking was optimized by limiting navigable areas. Occlusion Culling hides objects out of view. These techniques maintain 60 FPS even with 20+ active enemies.",
        },
      ],
      
      repoUrl: "https://github.com/Jacklb19/FPS_Resident_Outbreak",
    },
  ],
},

  contact: {
    title: "Contact",
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
  chatbot: {
    greeting: "Hi! 👋 I'm your virtual assistant. Ask me about Jose's projects, experience, or skills.",
    placeholder: "Type your question...",
    systemPrompt: `You are Jose Burbano's professional portfolio assistant. Your role is to provide helpful, accurate information about Jose's work, skills, and experience.

## Response Guidelines

**Structure**: 
- Start with a direct answer to the question
- Use bullet points for lists of 3+ items
- Keep paragraphs short (2-3 sentences max)
- Use markdown formatting: **bold** for emphasis, \`code\` for technologies

**Tone**:
- Professional yet approachable
- Confident but not arrogant
- Enthusiastic about technologies and projects

**Content Rules**:
- Only discuss information from the portfolio context
- If asked about unavailable info, say: "I don't have that specific information in the portfolio, but I can tell you about [related topic]"
- When mentioning technologies, link them to specific projects
- For project questions, include: name, technologies used, key features
- For experience questions, highlight: role, duration, main achievements

**Response Length**:
- Simple questions: 2-3 sentences
- Complex questions: 1 short paragraph + bullet points
- Maximum: 150 words

**CRITICAL**: You MUST respond in English, regardless of the user's question language.`,
    errorMessage: "Sorry, there was an error. Please try again.",
    loadingText: "Typing...",
    searchPlaceholder: "Search or ask…",
    newSearch: "New search",
    aiPrompt: "Can you tell me about",
    aiPromptSubtext: "Use AI to answer your questions (Beta)",
    resultsFound: "results found",
    noResults: "No results found",
  },
  guestbook: {
    title: "Guestbook",
    subtitle: "Share a message and say hi",
    intro: "Leave a few words for the community and for Jose; honest, constructive feedback is welcome",
    emptyState: "No messages yet — be the first to write one!",
    entriesLabel: "Messages",
    latestLabel: "Latest",
    pinnedLabel: "Pinned",
    form: {
      labels: {
        name: "Name",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        message: "Write your message here…",
      },
      submit: "Post",
      maxLength: 500,
      validations: {
        nameRequired: "Name is required",
        messageRequired: "Message is required",
        messageTooLong: "Message is too long",
      },
    },
    feedback: {
      successTitle: "Message posted!",
      successBody: "Thanks for leaving a message",
      errorTitle: "Could not post",
      errorBody: "Please try again later",
    },
    pagination: {
      loadMore: "Load more",
      loading: "Loading…",
      end: "No more messages",
    },
    moderation: {
      pending: "Pending review",
      rejected: "Rejected",
    },
    auth: {
      signInTitle: "Sign in to leave a message",
      signInDescription: "Authenticate with GitHub to share your thoughts in the guestbook.",
      signInButton: "Sign in with GitHub",
      signedInWith: "Signed in with GitHub",
      signOut: "Sign out",
    },
    characterCount: "{count}/500",
    dateLocale: "en-US",
  },
}
