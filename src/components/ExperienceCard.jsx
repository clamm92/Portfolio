import { useState } from "react";

// Tech icon mapping for experience-related skills
const techIcons = {
  "Python": { icon: "🐍", color: "#3776ab" },
  "Java": { icon: "☕", color: "#f89820" },
  "JavaScript": { icon: "JS", color: "#f7df1e", textColor: "#000" },
  "HTML": { icon: "◇", color: "#e34f26" },
  "CSS": { icon: "◈", color: "#1572b6" },
  "Scratch": { icon: "🐱", color: "#ff8c1a" },
  "Robotics": { icon: "🤖", color: "#6b7280" },
  "TCP/IP": { icon: "🌐", color: "#0ea5e9" },
  "APIs": { icon: "⚡", color: "#8b5cf6" },
  "OOP": { icon: "⬡", color: "#10b981" },
  "Teaching": { icon: "📚", color: "#ef4444" },
  "Communication": { icon: "💬", color: "#06b6d4" },
  "Leadership": { icon: "🎯", color: "#f59e0b" },
  "Customer Service": { icon: "🤝", color: "#ec4899" },
  "Teamwork": { icon: "👥", color: "#6366f1" },
  "Time Management": { icon: "⏰", color: "#14b8a6" },
  "Problem Solving": { icon: "🧩", color: "#8b5cf6" },
};

function ExperienceCard({
  role,
  company,
  link,
  location,
  dates,
  overview,
  responsibilities,
  leadership,
  impact, 
  images,
  skills = []
}) {
  const [modalImage, setModalImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  // Default skills based on role if not provided
  const displaySkills = skills.length > 0 ? skills : 
    role.includes("Coding") ? ["Python", "Java", "JavaScript", "Scratch", "Robotics", "Teaching"] :
    ["Customer Service", "Communication", "Leadership", "Teamwork"];

  return (
    <div className="expandable-card-wrapper">
      <div 
        className={`expandable-card ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Collapsed Header - Always Visible */}
        <div className="card-header-section">
          <div className="card-header-content">
            <div className="card-title-row">
              <h3 className="card-title fw-bold mb-0">{role}</h3>
              <span className={`expand-indicator ${isExpanded ? 'rotated' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </span>
            </div>
            <p className="card-subtitle text-muted mb-2">
              <a href={link} target="_blank" rel="noopener noreferrer" className="company-link">
                {company}
              </a>
              <span className="subtitle-separator">·</span>
              <span className="location-dates">{location} · {dates}</span>
            </p>
            
            {/* Skills as named pills */}
            <div className="tech-stack-expanded">
              {displaySkills.slice(0, 5).map((skill, index) => {
                const tech = techIcons[skill];
                return (
                  <span 
                    key={index} 
                    className="tech-tag"
                    style={{ 
                      borderColor: tech?.color || '#6b7280',
                      color: tech?.color || '#6b7280'
                    }}
                  >
                    <span 
                      className="tech-tag-icon" 
                      style={{ 
                        backgroundColor: tech?.color || '#6b7280', 
                        color: tech?.textColor || '#fff' 
                      }}
                    >
                      {tech?.icon || skill[0]}
                    </span>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div className="card-expandable-content">
          <div className="card-expandable-inner">
            {images && (
              <div className="d-flex gap-3 my-3 flex-wrap">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="project-image-container border rounded bg-light overflow-hidden d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "100px", cursor: "pointer" }}
                    onClick={() => openModal(src)}
                  >
                    <img
                      src={src}
                      alt={`${company} experience ${index + 1}`}
                      className="w-100 h-100 object-fit-cover project-image"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="content-section">
              <h6 className="section-title">Role Overview</h6>
              <p className="section-text">{overview}</p>
            </div>

            <div className="content-section">
              <h6 className="section-title">What I Did</h6>
              <ul className="responsibilities-list">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h6 className="section-title">Leadership & Problem Solving</h6>
              <p className="section-text">{leadership}</p>
            </div>

            <div className="content-section">
              <h6 className="section-title">Impact & Takeaways</h6>
              <p className="section-text">{impact}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeModal}>×</button>
            <img src={modalImage} alt="Enlarged view" className="image-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
