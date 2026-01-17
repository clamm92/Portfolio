import ExperienceCard from "../components/ExperienceCard";

const experienceData = [
  {
    role: "Coding Instructor",
    company: "Coding with Kids",
    link: "https://www.codingwithkids.com/",
    location: "Portland, OR",
    dates: "May 2025 - September 2025",

    overview:
      "I taught weekly coding camps and classes to students ages 5-18, primarily working with middle and high school students learning programming fundamentals and applied software development. Over the course of the summer, I instructed 120+ students across 12 weeks, leading both beginner and advanced cohorts.",

    responsibilities: [
      "Designed and taught lessons covering Python, Java, HTML/CSS/JavaScript, TCP/IP fundamentals, APIs, object-oriented programming, Scratch, and robotics",
      "Led Monday-Friday coding camps (6 hours/day) requiring sustained engagement, adaptability, and energy",
      "Guided advanced students through collaborative team projects using Replit and VS Code to build games and web applications",
      "Facilitated individual Scratch and robotics projects for younger students, adapting instruction to diverse learning styles"
    ],

    leadership:
      "Worked closely with parents by writing detailed student reports, communicating progress, addressing individual learning needs, and troubleshooting challenges such as WiFi failures or offline instruction. Created backup lesson plans and offline activities to ensure consistent learning under constraints.",

    impact:
      "Maintained a 4.8/5 instructor rating while helping students grow from writing their first lines of code to confidently presenting final projects. Developed strong leadership, communication, and technical teaching skills while reinforcing my passion for making learning accessible and engaging."
  },

  {
    role: "Front-End Employee",
    company: "Fred Meyer",
    link: "https://www.fredmeyer.com/",
    location: "Vancouver, WA",
    dates: "September 2021 - May 2023",

    overview:
      "Worked in a fast-paced retail environment supporting 1,000+ customers daily. While operational in nature, the role required composure under pressure, clear communication, and strong teamwork.",

    responsibilities: [
      "Provided customer service through grocery bagging, carryouts, cart management, and front-of-store maintenance",
      "Responded to supervisor requests including cleaning floors and restrooms, restocking supplies, trash removal, and vacuuming common areas",
      "Handled direct customer complaints and urgent requests, learning to prioritize tasks calmly and communicate expectations clearly"
    ],

    leadership:
      "Regularly worked 20-25 hours per week while balancing school and often took on extra shifts when short-staffed. As a parcel/cart attendant, navigated busy parking lots safely while keeping store entryways organized and stocked.",

    impact:
      "This role strengthened my reliability, work ethic, and ability to stay calm and effective in high-pressure environments, skills that translate directly to collaborative engineering teams."
  }
];

function Experience() {
  return (
    <>
        <h1 className="fw-bold mb-4 text-center">Experience</h1>
        <section className="experience-section">
        {experienceData.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
        ))}
        </section>
    </>
    
  );
}

export default Experience;
