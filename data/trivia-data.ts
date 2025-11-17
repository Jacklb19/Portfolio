export interface TriviaQuestion {
  id: string;
  question: {
    es: string;
    en: string;
  };
  options: {
    es: string[];
    en: string[];
  };
  correctAnswer: number;
  explanation: {
    es: string;
    en: string;
  };
}

export interface TriviaCategory {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  questions: TriviaQuestion[];
}

export const triviaCategories: TriviaCategory[] = [
  {
    id: "random",
    name: {
      es: "Mezcla Aleatoria",
      en: "Random Mix",
    },
    description: {
      es: "Desafíate con preguntas aleatorias de todas las categorías",
      en: "Challenge yourself with random questions from all categories",
    },
    questions: [], // Will be populated dynamically
  },
  {
    id: "algorithms",
    name: {
      es: "Algoritmos",
      en: "Algorithms",
    },
    description: {
      es: "Prueba tu conocimiento sobre complejidad, estructuras de datos y eficiencia",
      en: "Test your knowledge of complexity, data structures, and efficiency",
    },
    questions: [
      {
        id: "alg1",
        question: {
          es: "¿Cuál es la complejidad de tiempo de búsqueda binaria en un array ordenado?",
          en: "What is the time complexity of binary search on a sorted array?",
        },
        options: {
          es: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
          en: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        },
        correctAnswer: 1,
        explanation: {
          es: "La búsqueda binaria divide el espacio de búsqueda a la mitad en cada iteración, resultando en una complejidad O(log n).",
          en: "Binary search divides the search space in half with each iteration, resulting in O(log n) time complexity.",
        },
      },
      {
        id: "alg2",
        question: {
          es: "¿Qué estructura de datos usa LIFO (Último en Entrar, Primero en Salir)?",
          en: "Which data structure uses LIFO (Last In First Out)?",
        },
        options: {
          es: ["Cola", "Pila", "Lista Enlazada", "Árbol"],
          en: ["Queue", "Stack", "Linked List", "Tree"],
        },
        correctAnswer: 1,
        explanation: {
          es: "Una Pila sigue el principio LIFO donde el último elemento agregado es el primero en ser removido.",
          en: "A Stack follows the LIFO principle where the last element added is the first one to be removed.",
        },
      },
      {
        id: "alg3",
        question: {
          es: "¿Cuál es la complejidad de tiempo promedio de QuickSort?",
          en: "What is the average time complexity of QuickSort?",
        },
        options: {
          es: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
          en: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
        },
        correctAnswer: 2,
        explanation: {
          es: "QuickSort tiene una complejidad de tiempo promedio de O(n log n), aunque el peor caso es O(n²).",
          en: "QuickSort has an average time complexity of O(n log n), though worst case is O(n²).",
        },
      },
      {
        id: "alg4",
        question: {
          es: "¿Cuál estructura de datos es mejor para implementar una cola de prioridad?",
          en: "Which data structure is best for implementing a priority queue?",
        },
        options: {
          es: ["Array", "Lista Enlazada", "Heap", "Tabla Hash"],
          en: ["Array", "Linked List", "Heap", "Hash Table"],
        },
        correctAnswer: 2,
        explanation: {
          es: "Un Heap (típicamente un heap binario) es la estructura de datos más eficiente para colas de prioridad.",
          en: "A Heap (typically a binary heap) is the most efficient data structure for priority queues.",
        },
      },
      {
        id: "alg5",
        question: {
          es: "¿Cuál es la complejidad de espacio de merge sort?",
          en: "What is the space complexity of merge sort?",
        },
        options: {
          es: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          en: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        },
        correctAnswer: 2,
        explanation: {
          es: "Merge sort requiere O(n) espacio adicional para los arrays temporales usados durante la fusión.",
          en: "Merge sort requires O(n) additional space for the temporary arrays used during merging.",
        },
      },
    ],
  },
  {
    id: "tech-culture",
    name: {
      es: "Cultura Tecnológica",
      en: "Tech Culture",
    },
    description: {
      es: "Explora la historia, personas clave e hitos en la tecnología",
      en: "Explore the history, key people, and milestones in technology",
    },
    questions: [
      {
        id: "tc1",
        question: {
          es: "¿Quién es conocido como el padre de la informática?",
          en: "Who is known as the father of computer science?",
        },
        options: {
          es: ["Bill Gates", "Alan Turing", "Steve Jobs", "Tim Berners-Lee"],
          en: ["Bill Gates", "Alan Turing", "Steve Jobs", "Tim Berners-Lee"],
        },
        correctAnswer: 1,
        explanation: {
          es: "Alan Turing es ampliamente considerado el padre de la informática e inteligencia artificial.",
          en: "Alan Turing is widely considered the father of computer science and artificial intelligence.",
        },
      },
      {
        id: "tc2",
        question: {
          es: "¿En qué año se lanzó el primer iPhone?",
          en: "In what year was the first iPhone released?",
        },
        options: {
          es: ["2005", "2006", "2007", "2008"],
          en: ["2005", "2006", "2007", "2008"],
        },
        correctAnswer: 2,
        explanation: {
          es: "El primer iPhone fue lanzado por Apple el 29 de junio de 2007.",
          en: "The first iPhone was released by Apple on June 29, 2007.",
        },
      },
      {
        id: "tc3",
        question: {
          es: "¿Qué significa 'código abierto'?",
          en: "What does 'open source' mean?",
        },
        options: {
          es: [
            "Software gratuito",
            "El código fuente es públicamente accesible",
            "Software sin errores",
            "Software basado en la nube",
          ],
          en: [
            "Free software",
            "Source code is publicly accessible",
            "Software without bugs",
            "Cloud-based software",
          ],
        },
        correctAnswer: 1,
        explanation: {
          es: "Código abierto significa que el código fuente es públicamente accesible y puede ser modificado y compartido.",
          en: "Open source means the source code is publicly accessible and can be modified and shared.",
        },
      },
      {
        id: "tc4",
        question: {
          es: "¿Quién creó Linux?",
          en: "Who created Linux?",
        },
        options: {
          es: ["Bill Gates", "Linus Torvalds", "Richard Stallman", "Dennis Ritchie"],
          en: ["Bill Gates", "Linus Torvalds", "Richard Stallman", "Dennis Ritchie"],
        },
        correctAnswer: 1,
        explanation: {
          es: "Linux fue creado por Linus Torvalds en 1991 como un sistema operativo libre y de código abierto.",
          en: "Linux was created by Linus Torvalds in 1991 as a free and open-source operating system.",
        },
      },
      {
        id: "tc5",
        question: {
          es: "¿En qué año fue fundado Stack Overflow?",
          en: "What year was Stack Overflow founded?",
        },
        options: {
          es: ["2006", "2008", "2010", "2012"],
          en: ["2006", "2008", "2010", "2012"],
        },
        correctAnswer: 1,
        explanation: {
          es: "Stack Overflow fue fundado en 2008 por Jeff Atwood y Joel Spolsky.",
          en: "Stack Overflow was founded in 2008 by Jeff Atwood and Joel Spolsky.",
        },
      },
    ],
  },
  {
    id: "frontend",
    name: {
      es: "Frontend",
      en: "Frontend",
    },
    description: {
      es: "Desafíate con React, JavaScript, CSS y componentes",
      en: "Challenge yourself with React, JavaScript, CSS, and components",
    },
    questions: [
      {
        id: "fe1",
        question: {
          es: "¿Qué hook se usa para manejar efectos secundarios en React?",
          en: "What hook is used to manage side effects in React?",
        },
        options: {
          es: ["useState", "useEffect", "useContext", "useReducer"],
          en: ["useState", "useEffect", "useContext", "useReducer"],
        },
        correctAnswer: 1,
        explanation: {
          es: "useEffect es el hook de React utilizado para manejar efectos secundarios como obtención de datos y suscripciones.",
          en: "useEffect is the React hook used to handle side effects like data fetching and subscriptions.",
        },
      },
      {
        id: "fe2",
        question: {
          es: "¿Cuál propiedad CSS se usa para diseño flexbox?",
          en: "Which CSS property is used for flexbox layout?",
        },
        options: {
          es: ["display: flex", "flex-direction", "justify-content", "Todas las anteriores"],
          en: ["display: flex", "flex-direction", "justify-content", "All of the above"],
        },
        correctAnswer: 3,
        explanation: {
          es: "Todas estas propiedades son parte del sistema flexbox, siendo display: flex el inicializador.",
          en: "All these properties are part of the flexbox system, with display: flex being the initializer.",
        },
      },
      {
        id: "fe3",
        question: {
          es: "¿Qué significa JSX?",
          en: "What does JSX stand for?",
        },
        options: {
          es: [
            "JavaScript XML",
            "Extensión de Sintaxis Java",
            "Extensión de JavaScript",
            "JSON XML",
          ],
          en: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extension",
            "JSON XML",
          ],
        },
        correctAnswer: 0,
        explanation: {
          es: "JSX significa JavaScript XML, una extensión de sintaxis para JavaScript utilizada en React.",
          en: "JSX stands for JavaScript XML, a syntax extension for JavaScript used in React.",
        },
      },
      {
        id: "fe4",
        question: {
          es: "¿Cuál de estos NO es un hook de React válido?",
          en: "Which of these is NOT a valid React hook?",
        },
        options: {
          es: ["useEffect", "useLocalStorage", "useState", "useContext"],
          en: ["useEffect", "useLocalStorage", "useState", "useContext"],
        },
        correctAnswer: 1,
        explanation: {
          es: "useLocalStorage no es un hook nativo de React, aunque puede ser creado como un hook personalizado.",
          en: "useLocalStorage is not a built-in React hook, though it can be created as a custom hook.",
        },
      },
      {
        id: "fe5",
        question: {
          es: "¿Qué es el DOM virtual en React?",
          en: "What is the virtual DOM in React?",
        },
        options: {
          es: [
            "Una copia del DOM real",
            "Un concepto de programación",
            "Una representación ligera del DOM",
            "Una API del navegador",
          ],
          en: [
            "A copy of the real DOM",
            "A programming concept",
            "A lightweight representation of the DOM",
            "A browser API",
          ],
        },
        correctAnswer: 2,
        explanation: {
          es: "El DOM virtual es una representación ligera del DOM real que React utiliza para actualizaciones eficientes.",
          en: "The virtual DOM is a lightweight representation of the actual DOM that React uses for efficient updates.",
        },
      },
    ],
  },
  {
    id: "backend",
    name: {
      es: "Backend",
      en: "Backend",
    },
    description: {
      es: "Profundiza en APIs, arquitectura y bases de datos",
      en: "Deep dive into APIs, architecture, and databases",
    },
    questions: [
      {
        id: "be1",
        question: {
          es: "¿Qué significa REST?",
          en: "What does REST stand for?",
        },
        options: {
          es: [
            "Transferencia de Estado de Ejecución Remota",
            "Transferencia de Estado Representacional",
            "Sistema de Transferencia de Ejecución Relacional",
            "Transferencia de Estado de Ejecución de Recursos",
          ],
          en: [
            "Remote Execution State Transfer",
            "Representational State Transfer",
            "Relational Execution System Transfer",
            "Resource Execution State Transfer",
          ],
        },
        correctAnswer: 1,
        explanation: {
          es: "REST significa Transferencia de Estado Representacional, un estilo arquitectónico para APIs web.",
          en: "REST stands for Representational State Transfer, an architectural style for web APIs.",
        },
      },
      {
        id: "be2",
        question: {
          es: "¿Cuál método HTTP es idempotente?",
          en: "Which HTTP method is idempotent?",
        },
        options: {
          es: ["POST", "PUT", "PATCH", "Todas las anteriores"],
          en: ["POST", "PUT", "PATCH", "All of the above"],
        },
        correctAnswer: 1,
        explanation: {
          es: "PUT es idempotente, lo que significa que múltiples solicitudes idénticas tienen el mismo efecto que una solicitud única.",
          en: "PUT is idempotent, meaning multiple identical requests have the same effect as a single request.",
        },
      },
      {
        id: "be3",
        question: {
          es: "¿Qué es middleware en Express.js?",
          en: "What is middleware in Express.js?",
        },
        options: {
          es: [
            "Una base de datos",
            "Funciones que se ejecutan durante el ciclo solicitud-respuesta",
            "Un sistema de enrutamiento",
            "Un motor de plantillas",
          ],
          en: [
            "A database",
            "Functions that execute during the request-response cycle",
            "A routing system",
            "A template engine",
          ],
        },
        correctAnswer: 1,
        explanation: {
          es: "Las funciones middleware tienen acceso a los objetos de solicitud y respuesta y se ejecutan durante el ciclo solicitud-respuesta.",
          en: "Middleware functions have access to request and response objects and execute during the request-response cycle.",
        },
      },
      {
        id: "be4",
        question: {
          es: "¿Qué significa JWT?",
          en: "What does JWT stand for?",
        },
        options: {
          es: [
            "Token Web de Java",
            "Herramienta Web de JavaScript",
            "Token Web JSON",
            "Herramienta Web de Java",
          ],
          en: [
            "Java Web Token",
            "JavaScript Web Tool",
            "JSON Web Token",
            "Java Web Tool",
          ],
        },
        correctAnswer: 2,
        explanation: {
          es: "JWT significa Token Web JSON, utilizado para la transmisión segura de información entre partes.",
          en: "JWT stands for JSON Web Token, used for secure information transmission between parties.",
        },
      },
      {
        id: "be5",
        question: {
          es: "¿Cuál es el propósito de CORS?",
          en: "What is the purpose of CORS?",
        },
        options: {
          es: [
            "Seguridad de la base de datos",
            "Compartir Recursos Entre Orígenes",
            "Optimización de código",
            "Configuración del servidor",
          ],
          en: [
            "Database security",
            "Cross-Origin Resource Sharing",
            "Code optimization",
            "Server configuration",
          ],
        },
        correctAnswer: 1,
        explanation: {
          es: "CORS (Compartir Recursos Entre Orígenes) permite o restringe recursos de diferentes orígenes.",
          en: "CORS (Cross-Origin Resource Sharing) allows or restricts resources from different origins.",
        },
      },
    ],
  },
  {
    id: "databases",
    name: {
      es: "Bases de Datos",
      en: "Databases",
    },
    description: {
      es: "Domina SQL, NoSQL y conceptos de modelado de datos",
      en: "Master SQL, NoSQL, and data modeling concepts",
    },
    questions: [
      {
        id: "db1",
        question: {
          es: "¿Qué significa SQL?",
          en: "What does SQL stand for?",
        },
        options: {
          es: [
            "Lenguaje de Consulta Simple",
            "Lenguaje de Consulta Estructurado",
            "Lenguaje de Consulta Estándar",
            "Lenguaje de Consulta del Sistema",
          ],
          en: [
            "Simple Query Language",
            "Structured Query Language",
            "Standard Query Language",
            "System Query Language",
          ],
        },
        correctAnswer: 1,
        explanation: {
          es: "SQL significa Lenguaje de Consulta Estructurado, utilizado para gestionar bases de datos relacionales.",
          en: "SQL stands for Structured Query Language, used for managing relational databases.",
        },
      },
      {
        id: "db2",
        question: {
          es: "¿Cuál de estos es una base de datos NoSQL?",
          en: "Which of these is a NoSQL database?",
        },
        options: {
          es: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
          en: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
        },
        correctAnswer: 2,
        explanation: {
          es: "MongoDB es una base de datos NoSQL que almacena datos en documentos flexibles tipo JSON.",
          en: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
        },
      },
      {
        id: "db3",
        question: {
          es: "¿Qué es una clave primaria?",
          en: "What is a primary key?",
        },
        options: {
          es: [
            "Un identificador único para un registro",
            "La primera columna en una tabla",
            "Una referencia de clave externa",
            "Un valor cifrado",
          ],
          en: [
            "A unique identifier for a record",
            "The first column in a table",
            "A foreign key reference",
            "An encrypted value",
          ],
        },
        correctAnswer: 0,
        explanation: {
          es: "Una clave primaria identifica únicamente cada registro en una tabla de base de datos.",
          en: "A primary key uniquely identifies each record in a database table.",
        },
      },
      {
        id: "db4",
        question: {
          es: "¿Qué significa ACID en transacciones de base de datos?",
          en: "What does ACID stand for in database transactions?",
        },
        options: {
          es: [
            "Atomicidad, Consistencia, Aislamiento, Durabilidad",
            "Asincronía, Consistencia, Aislamiento, Durabilidad",
            "Atómico, Concurrente, Aislado, Distribuido",
            "Automatizado, Consistente, Independiente, Duradero",
          ],
          en: [
            "Atomicity, Consistency, Isolation, Durability",
            "Asynchronous, Consistent, Isolated, Durable",
            "Atomic, Concurrent, Isolated, Distributed",
            "Automated, Consistent, Independent, Durable",
          ],
        },
        correctAnswer: 0,
        explanation: {
          es: "ACID significa Atomicidad, Consistencia, Aislamiento y Durabilidad - propiedades clave de las transacciones de base de datos.",
          en: "ACID stands for Atomicity, Consistency, Isolation, and Durability - key properties of database transactions.",
        },
      },
      {
        id: "db5",
        question: {
          es: "¿Qué es un índice en una base de datos?",
          en: "What is an index in a database?",
        },
        options: {
          es: [
            "Un identificador de tabla",
            "Una estructura de datos que mejora la velocidad de consultas",
            "Un sistema de respaldo",
            "Una característica de seguridad",
          ],
          en: [
            "A table identifier",
            "A data structure that improves query speed",
            "A backup system",
            "A security feature",
          ],
        },
        correctAnswer: 1,
        explanation: {
          es: "Un índice es una estructura de datos que mejora la velocidad de operaciones de recuperación de datos en una tabla de base de datos.",
          en: "An index is a data structure that improves the speed of data retrieval operations on a database table.",
        },
      },
    ],
  },
];