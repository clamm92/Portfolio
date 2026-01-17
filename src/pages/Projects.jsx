import ProjectsCard from "../components/ProjectsCard"

const projectsData = [
  {
    title: "Nail Salon Booking Platform (Client Project)",
    tagline: "A full-stack scheduling platform that modernizes appointment booking for nail salons.",
    problem:
      "Manual scheduling often leads to double bookings, inefficiencies, and poor customer experience for small service-based businesses.",
    solution:
      "I built a client-requested full-stack booking platform for the local business Happy Nails, enabling technicians to manage services, availability, and customer appointments in real time. The Spring Boot backend handles 6 unique entities, complex scheduling logic, and provides strong database integrity, while the responsive React frontend provides a smooth booking experience. Our client reported that the system reduced manual scheduling effort by approximately 70%, allowing technicians to focus more on service quality and customer satisfaction.",
    technologies: [
      "React",
      "TypeScript",
      "Bootstrap",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Gradle",
      "Postman",
      "Git"
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
    ]
  },

  {
    title: "Seattle Homeless Community Platform",
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