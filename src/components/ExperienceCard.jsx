function ExperienceCard({
  role,
  company,
  link,
  location,
  dates,
  overview,
  responsibilities,
  leadership,
  impact
}) {
  return (
    <div className="card mb-4 shadow-sm border">
      <div className="card-body">
        <h3 className="card-title fw-bold">{role}</h3>
        <p className="card-subtitle text-muted mb-3">
          <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
          >
              {company}
          </a>{" "}
          · {location} · {dates}
        </p>

        <h6 className="fw-bold">Role Overview</h6>
        <p>{overview}</p>

        <h6 className="fw-bold mt-3">What I Did</h6>
        <ul className="list-unstyled">
          {responsibilities.map((item, index) => (
            <li key={index} className="mb-1">• {item}</li>
          ))}
        </ul>

        <h6 className="fw-bold mt-3">Leadership, Communication & Problem Solving</h6>
        <p>{leadership}</p>

        <h6 className="fw-bold mt-3">Impact & Takeaways</h6>
        <p>{impact}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
