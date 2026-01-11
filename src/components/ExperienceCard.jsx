function ExperienceCard({
  role,
  company,
  location,
  dates,
  overview,
  responsibilities,
  leadership,
  impact
}) {
  return (
    <div className="experience-card">
      <h3 className="experience-role">{role}</h3>
      <p className="experience-meta">
        {company} · {location} · {dates}
      </p>

      <h6>Role Overview</h6>
      <p>{overview}</p>

      <h6>What I Did</h6>
      <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h6>Leadership, Communication & Problem Solving</h6>
      <p>{leadership}</p>

      <h6>Impact & Takeaways</h6>
      <p>{impact}</p>
    </div>
  );
}

export default ExperienceCard;
