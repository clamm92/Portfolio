function ProjectsCard({
  title,
  tagline,
  problem,
  solution,
  technologies
}) {
  return (
    <div className="card mb-4 shadow-sm border">
      <div className="card-body">
        <h3 className="card-title fw-bold">{title}</h3>
        <p className="card-subtitle text-muted mb-3">{tagline}</p>

        <h6 className="fw-bold">Problem</h6>
        <p>{problem}</p>

        <h6 className="fw-bold mt-3">Solution & Impact</h6>
        <p>{solution}</p>

        <h6 className="fw-bold mt-3">Technologies Used</h6>
        <ul className="list-unstyled">
          {technologies.map((tech, index) => (
            <li key={index} className="mb-1">• {tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsCard;