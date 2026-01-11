function ProjectsCard({
  title,
  tagline,
  problem,
  solution,
  technologies,
  links
}) {
  return (
    <div className="projects-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-tagline">{tagline}</p>

      <h6>Problem</h6>
      <p>{problem}</p>

      <h6>Solution & Impact</h6>
      <p>{solution}</p>

      <h6>Technologies Used</h6>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {links && (
        <>
          <h6>Links</h6>
          <p className="project-links">{links}</p>
        </>
      )}
    </div>
  );
}

export default ProjectsCard;