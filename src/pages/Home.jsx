function Home() {
  return (
    <>
        <h1 className="fw-bold mb-4 text-center">About</h1>
        <img 
            src="../../profile.png" 
            alt="headshot at Volunteer Park" 
            className="img-fluid rounded-circle mb-4 w-25 border border-3 border-dark float-start me-4" 
        />
        <p className="mb-3">
            Hello! I'm a third-year {" "}
            <a
                href="https://ischool.uw.edu/programs/informatics"
                target="_blank"
                rel="noopener noreferrer"
            >
                Informatics
            </a> {" "}
            student at the {" "}
            <a
                href="https://www.washington.edu/"
                target="_blank"
                rel="noopener noreferrer"
            >
                University of Washington
            </a>
            , seeking
            summer and fall 2026 software engineering internships. I'm interested in building impactful
            software across frontend, backend, and database systems.
        </p>
        <p className="mb-3">
            I'm motivated by creating solutions that genuinely impact others. Whether it's building a 
            nail salon booking platform to empower a local nail tech or analyzing Washington State 
            datasets to uncover correlations between income and education, I enjoy creating things 
            that make a difference and don't shy away from responsibility.
        </p>
        <p className="mb-3">
            Through my coursework, hackathons, and projects, I've explored full-stack development 
            and learned how different parts of a system come together. I'm comfortable moving across 
            the stack, improving user experience, optimizing backend logic, and designing reliable 
            data flows, and I enjoy learning new tools quickly when a problem demands it.
        </p>
        <p className="mb-3">
            I thrive in fast-paced, high-pressure environments. I take initiative naturally, step into
            leadership roles when needed, and care deeply about consistency and growth. I believe real
            progress comes from showing up every day, working hard, and continuously improving, both
            technically and personally.
        </p>
        <p className="mb-3">
            Right now, my goal is to strengthen my software engineering fundamentals while building
            meaningful projects and gaining real-world experience through internships. Long term, I want
            to continue developing scalable, thoughtful solutions that have tangible impact.
        </p>
        <p> 
            Check out my {" "}
            <a
                href="https://drive.google.com/file/d/1L0uaP0Mxw8Ap8_FTUJPqF1rAN-yK7SQm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                resume
            </a> {" "}
            and links below!
        </p>
    </>
  );
}

export default Home