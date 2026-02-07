import ProjectsCard from "../components/ProjectsCard"

const projectsData = [
  {
    title: "Nail Salon Booking Platform (Client Project)",
    tagline: "A full-stack scheduling platform that modernizes appointment booking for nail salons.",
    problem:
      "Manual scheduling often leads to double bookings, inefficiencies, and poor customer experience for small service-based businesses.",
    solution:
      "Built a client-requested full-stack booking platform for the local business Happy Nails, enabling technicians to manage services, availability, and customer appointments in real time. The Spring Boot backend handles 6 unique entities, complex scheduling logic, and provides strong database integrity, while the responsive React frontend provides a smooth booking experience. Our client reported that the system reduced manual scheduling effort by approximately 70%, allowing technicians to focus more on service quality and customer satisfaction.",
    technologies: [
      "Spring Boot",
      "TypeScript",
      "React",
      "Bootstrap",
      "Java",
      "PostgreSQL",
      "Gradle",
      "Postman",
      "Git"
    ],
    images: [
      "/select-services-nails.png",
      "/select-times-nails.png",
      "/contact-info-nails.png"
    ]
  },

  {
    title: "AwareAI: AI Environmental Impact Tracker (WINFO 2026)",
    tagline:
      "A privacy-first Chrome extension that estimates and visualizes the real-time water consumption of AI interactions across major platforms.",
    problem:
      "AI adoption is accelerating, yet most users remain unaware of its environmental footprint. Each prompt to systems like ChatGPT, Claude, or Gemini is processed in large-scale data centers that rely on water-intensive cooling, an invisible cost that compounds as AI usage grows globally.",
    solution:
      "Developed a Chrome extension that estimates water usage in real time using 2026 energy benchmarks from Google's Environmental Report and peer-reviewed academic research. During live demos, the extension processed over 1,000 prompts across six major platforms while keeping all user data local and aggregating only anonymous global totals via Firebase’s REST API. A floating widget visualizes both personal and collective impact using a six-tier scale (droplets → oceans), helping users contextualize consumption at a glance. Calculations run client-side in single-digit milliseconds and require no accounts or personally identifiable information.",
    technologies: [
      "JavaScript",
      "Chrome Extensions API",
      "Manifest V3",
      "Firebase Firestore",
      "REST APIs",
      "Chrome Storage API",
      "Content Scripts",
      "Service Workers"
    ],
    images: [
      "/aware-ai-gpt.png",
      "/aware-ai-info.png",
      "/awareai-firebase.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/clamm92/ai-environmental-tracker", icon: "github" },
      { label: "Video Demo", url: "https://drive.google.com/file/d/1exTDF3RUaQ5wnZpP4sUgbxY9Qa5wvw1I/view?usp=sharing", icon: "video" }
    ]
  },

  {
    "title": "Viola: Advanced K-in-a-Row Game-Playing Agent",
    "tagline": "An intelligent game-playing agent that combines adversarial search with LLM-powered conversational features for strategic board games.",
    "problem": "Competitive game-playing agents must balance search efficiency with strategic depth. Naive minimax approaches scale poorly in large search spaces, and adding meaningful, context-aware agent interactions increases system complexity.",
    "solution": "Built Viola, a high-performance K-in-a-Row game-playing agent using minimax with alpha-beta pruning, Zobrist hashing for transposition table caching, and move ordering optimization. Reduced move computation time from over 24 seconds to 0.1 seconds in 5-in-a-Row games through intelligent caching. Integrated the Google Gemini API to generate persona-driven, musical-themed dialogue that explains strategic decisions and summarizes gameplay, combining strong algorithmic performance with engaging interaction.",
    "technologies": [
      "Python",
      "Minimax Algorithm",
      "Alpha-Beta Pruning",
      "Zobrist Hashing",
      "Google Gemini API",
      "Adversarial Search",
      "Transposition Tables"
    ],
    images: [
      { src: "/viola-transcript.png", externalLink: "https://drive.google.com/file/d/12rSB-tPEBykYAf8zznsytAMSes1QnLf7/view?usp=sharing" },
      { src: "/viola-zobrist.png", externalLink: "https://drive.google.com/file/d/1f8kocjaA0wB3Y3C9bl9khx0-dWJlUk74/view?usp=sharing" }
    ]
  },

  {
    title: "EcoTrack",
    tagline: "A gamified waste reduction web app that helps users track, visualize, and improve their environmental impact.",
    problem:
      "Many people generate waste without understanding its environmental impact or how to improve their habits. Existing tools often lack personalization, feel tedious to use, or introduce cost barriers.",
    solution:
      "EcoTrack transforms waste reduction into an engaging, rewarding experience. Users log daily waste activities, earn points for sustainable actions, and visualize progress through interactive charts. A community leaderboard adds motivation through friendly competition, while personalized insights help users understand and improve their habits.",
    technologies: [
      "React",
      "Vite",
      "Bootstrap",
      "Chart.js",
      "Firebase Auth",
      "Firebase Realtime Database",
      "Git",
      "ESLint",
      "Node.js",
      "date-fns"
    ],
    images: [
      "/ecotrack-home.png",
      "/ecotrack-log.png",
      "/ecotrack-visualizations.png"
    ],
    links: [
      { label: "Website", url: "https://group-project-mayaoden.web.app/", icon: "live" }
    ]
  },

  {
    title: "Restaurant Client-Server Management Platform",
    tagline: "A full-stack web application designed to manage complex client-server relationships.",
    problem:
      "Managing client-server data across multiple users and entities can become difficult without a clear architecture.",
    solution:
      "This project implements a modular RESTful backend paired with a clean frontend interface. A carefully designed MongoDB schema ensures scalability, while structured APIs support full CRUD operations.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Postman"
    ],
    images: [
      "/restaurant-dashboard.png",
      "/restaurant-not-logged.png"
    ]
  },

  {
    title: "Zero-Touch Commute Assistant (DubHacks 2025)",
    tagline: "A serverless web app that automatically adds commute-based reminders to users' calendars.",
    problem:
      "Manually planning departure times is error-prone and inefficient, especially when transit delays and real-time conditions are involved.",
    solution:
      "Built during a 24-hour hackathon, this project automatically determines optimal departure times and adds reminders directly to users' calendars. The system leverages real-time transit data and event-driven cloud services to improve reminder accuracy and planning efficiency.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "AWS Lambda",
      "EventBridge",
      "DynamoDB",
      "Bedrock",
      "OneBusAway API",
      "Google Calendar API"
    ]
  },

  {
    title: "Vaccine Appointment Reservation System",
    tagline: "A secure and scalable appointment reservation system for managing vaccine scheduling.",
    problem:
      "Healthcare providers struggled with inefficient scheduling systems during the COVID-19 pandemic.",
    solution:
      "This system models a robust SQL schema managing 5,000+ records and provides secure authentication with password salting and hashing. A Java CLI enables direct interaction with the database via JDBC.",
    technologies: [
      "Java",
      "JDBC",
      "SQLite",
      "Aurora SQL",
      "IntelliJ IDEA"
    ],
    images: [
      "/vaccine-cli-options.png",
      "/vaccine-db-schema.png"
    ]
  },

  {
    title: "Geo-Economic Mapping of Educational Access",
    tagline: "An interactive data visualization analyzing income and education access in Washington State.",
    problem:
      "Educational equity is often discussed in funding terms rather than geographic availability.",
    solution:
      "I co-developed a data pipeline merging geospatial school data with census income metrics. The resulting choropleth map reveals strong correlations between income and school availability.",
    technologies: [
      "R",
      "dplyr",
      "ggplot2",
      "plotly",
      "ArcGIS",
      "Washington OSPI Data"
    ],
    images: [
      { src: "/washington-state-income.png", externalLink: "https://drive.google.com/file/d/14yDqNR9J-gf0Ht6t_39Mx-g3iTlPCy3E/view?usp=sharing" }
    ]
  },

  {
    title: "Seattle Homeless Community Platform (WINFO 2025)",
    tagline: "A community-driven platform connecting the homeless population with critical resources.",
    problem:
      "Seattle lacks centralized digital spaces for storytelling, awareness, and resource sharing.",
    solution:
      "This platform provides storytelling, community updates, and a resource directory in an accessible, mobile-friendly design. Built during a hackathon to foster empathy and action.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "VS Code"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/owenwon/seattlehomelessplatform", icon: "github" }
    ]
  }
];

function Projects() {
  return (
    <>
        <h1 className="fw-bold mb-4 text-center">Projects</h1>
        <section className="projects-section">
        {projectsData.map((project, index) => (
            <ProjectsCard key={index} {...project} />
        ))}
        </section>
    </>
    
  );
}

export default Projects