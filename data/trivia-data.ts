export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TriviaCategory {
  id: string;
  name: string;
  description: string;
  questions: TriviaQuestion[];
}

export const triviaCategories: TriviaCategory[] = [
  {
    id: "random",
    name: "Random Mix",
    description: "Challenge yourself with random questions from all categories",
    questions: [], // Will be populated dynamically
  },
  {
    id: "algorithms",
    name: "Algorithms",
    description: "Test your knowledge of complexity, data structures, and efficiency",
    questions: [
      {
        id: "alg1",
        question: "What is the time complexity of binary search on a sorted array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1,
        explanation: "Binary search divides the search space in half with each iteration, resulting in O(log n) time complexity.",
      },
      {
        id: "alg2",
        question: "Which data structure uses LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: 1,
        explanation: "A Stack follows the LIFO principle where the last element added is the first one to be removed.",
      },
      {
        id: "alg3",
        question: "What is the average time complexity of QuickSort?",
        options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
        correctAnswer: 2,
        explanation: "QuickSort has an average time complexity of O(n log n), though worst case is O(n²).",
      },
      {
        id: "alg4",
        question: "Which data structure is best for implementing a priority queue?",
        options: ["Array", "Linked List", "Heap", "Hash Table"],
        correctAnswer: 2,
        explanation: "A Heap (typically a binary heap) is the most efficient data structure for priority queues.",
      },
      {
        id: "alg5",
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: "Merge sort requires O(n) additional space for the temporary arrays used during merging.",
      },
    ],
  },
  {
    id: "tech-culture",
    name: "Tech Culture",
    description: "Explore the history, key people, and milestones in technology",
    questions: [
      {
        id: "tc1",
        question: "Who is known as the father of computer science?",
        options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Tim Berners-Lee"],
        correctAnswer: 1,
        explanation: "Alan Turing is widely considered the father of computer science and artificial intelligence.",
      },
      {
        id: "tc2",
        question: "In what year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        correctAnswer: 2,
        explanation: "The first iPhone was released by Apple on June 29, 2007.",
      },
      {
        id: "tc3",
        question: "What does 'open source' mean?",
        options: [
          "Free software",
          "Source code is publicly accessible",
          "Software without bugs",
          "Cloud-based software",
        ],
        correctAnswer: 1,
        explanation: "Open source means the source code is publicly accessible and can be modified and shared.",
      },
      {
        id: "tc4",
        question: "Who created Linux?",
        options: ["Bill Gates", "Linus Torvalds", "Richard Stallman", "Dennis Ritchie"],
        correctAnswer: 1,
        explanation: "Linux was created by Linus Torvalds in 1991 as a free and open-source operating system.",
      },
      {
        id: "tc5",
        question: "What year was Stack Overflow founded?",
        options: ["2006", "2008", "2010", "2012"],
        correctAnswer: 1,
        explanation: "Stack Overflow was founded in 2008 by Jeff Atwood and Joel Spolsky.",
      },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Challenge yourself with React, JavaScript, CSS, and components",
    questions: [
      {
        id: "fe1",
        question: "What hook is used to manage side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useEffect is the React hook used to handle side effects like data fetching and subscriptions.",
      },
      {
        id: "fe2",
        question: "Which CSS property is used for flexbox layout?",
        options: ["display: flex", "flex-direction", "justify-content", "All of the above"],
        correctAnswer: 3,
        explanation: "All these properties are part of the flexbox system, with display: flex being the initializer.",
      },
      {
        id: "fe3",
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
        correctAnswer: 0,
        explanation: "JSX stands for JavaScript XML, a syntax extension for JavaScript used in React.",
      },
      {
        id: "fe4",
        question: "Which of these is NOT a valid React hook?",
        options: ["useEffect", "useLocalStorage", "useState", "useContext"],
        correctAnswer: 1,
        explanation: "useLocalStorage is not a built-in React hook, though it can be created as a custom hook.",
      },
      {
        id: "fe5",
        question: "What is the virtual DOM in React?",
        options: [
          "A copy of the real DOM",
          "A programming concept",
          "A lightweight representation of the DOM",
          "A browser API",
        ],
        correctAnswer: 2,
        explanation: "The virtual DOM is a lightweight representation of the actual DOM that React uses for efficient updates.",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Deep dive into APIs, architecture, and databases",
    questions: [
      {
        id: "be1",
        question: "What does REST stand for?",
        options: [
          "Remote Execution State Transfer",
          "Representational State Transfer",
          "Relational Execution System Transfer",
          "Resource Execution State Transfer",
        ],
        correctAnswer: 1,
        explanation: "REST stands for Representational State Transfer, an architectural style for web APIs.",
      },
      {
        id: "be2",
        question: "Which HTTP method is idempotent?",
        options: ["POST", "PUT", "PATCH", "All of the above"],
        correctAnswer: 1,
        explanation: "PUT is idempotent, meaning multiple identical requests have the same effect as a single request.",
      },
      {
        id: "be3",
        question: "What is middleware in Express.js?",
        options: [
          "A database",
          "Functions that execute during the request-response cycle",
          "A routing system",
          "A template engine",
        ],
        correctAnswer: 1,
        explanation: "Middleware functions have access to request and response objects and execute during the request-response cycle.",
      },
      {
        id: "be4",
        question: "What does JWT stand for?",
        options: [
          "Java Web Token",
          "JavaScript Web Tool",
          "JSON Web Token",
          "Java Web Tool",
        ],
        correctAnswer: 2,
        explanation: "JWT stands for JSON Web Token, used for secure information transmission between parties.",
      },
      {
        id: "be5",
        question: "What is the purpose of CORS?",
        options: [
          "Database security",
          "Cross-Origin Resource Sharing",
          "Code optimization",
          "Server configuration",
        ],
        correctAnswer: 1,
        explanation: "CORS (Cross-Origin Resource Sharing) allows or restricts resources from different origins.",
      },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    description: "Master SQL, NoSQL, and data modeling concepts",
    questions: [
      {
        id: "db1",
        question: "What does SQL stand for?",
        options: [
          "Simple Query Language",
          "Structured Query Language",
          "Standard Query Language",
          "System Query Language",
        ],
        correctAnswer: 1,
        explanation: "SQL stands for Structured Query Language, used for managing relational databases.",
      },
      {
        id: "db2",
        question: "Which of these is a NoSQL database?",
        options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
        correctAnswer: 2,
        explanation: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
      },
      {
        id: "db3",
        question: "What is a primary key?",
        options: [
          "A unique identifier for a record",
          "The first column in a table",
          "A foreign key reference",
          "An encrypted value",
        ],
        correctAnswer: 0,
        explanation: "A primary key uniquely identifies each record in a database table.",
      },
      {
        id: "db4",
        question: "What does ACID stand for in database transactions?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Asynchronous, Consistent, Isolated, Durable",
          "Atomic, Concurrent, Isolated, Distributed",
          "Automated, Consistent, Independent, Durable",
        ],
        correctAnswer: 0,
        explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability - key properties of database transactions.",
      },
      {
        id: "db5",
        question: "What is an index in a database?",
        options: [
          "A table identifier",
          "A data structure that improves query speed",
          "A backup system",
          "A security feature",
        ],
        correctAnswer: 1,
        explanation: "An index is a data structure that improves the speed of data retrieval operations on a database table.",
      },
    ],
  },
];
