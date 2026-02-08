import { useState } from "react";

// Comprehensive tech icon mapping with colors
const techIcons = {
  // Languages
  "React": { icon: "⚛", color: "#61dafb", textColor: "#000" },
  "TypeScript": { icon: "TS", color: "#3178c6" },
  "JavaScript": { icon: "JS", color: "#f7df1e", textColor: "#000" },
  "Python": { icon: "🐍", color: "#3776ab" },
  "Java": { icon: "☕", color: "#f89820" },
  "HTML": { icon: "◇", color: "#e34f26" },
  "CSS": { icon: "◈", color: "#1572b6" },
  "R": { icon: "R", color: "#276dc3" },
  
  // Frameworks & Libraries
  "Spring Boot": { icon: "🍃", color: "#6db33f" },
  "Node.js": { icon: "⬢", color: "#339933" },
  "Express": { icon: "Ex", color: "#000000" },
  "Vite": { icon: "⚡", color: "#646cff" },
  "Bootstrap": { icon: "B", color: "#7952b3" },
  "Chart.js": { icon: "📊", color: "#ff6384" },
  "dplyr": { icon: "📦", color: "#276dc3" },
  "ggplot2": { icon: "📈", color: "#276dc3" },
  "plotly": { icon: "📉", color: "#3f4f75" },
  "date-fns": { icon: "📅", color: "#770c56" },
  
  // Databases
  "PostgreSQL": { icon: "🐘", color: "#4169e1" },
  "MongoDB": { icon: "🍃", color: "#47a248" },
  "Firebase Firestore": { icon: "🔥", color: "#ffca28", textColor: "#000" },
  "Firebase Auth": { icon: "🔐", color: "#ffca28", textColor: "#000" },
  "Firebase Realtime Database": { icon: "📡", color: "#ffca28", textColor: "#000" },
  "SQLite": { icon: "💾", color: "#003b57" },
  "Aurora SQL": { icon: "☁️", color: "#ff9900" },
  "DynamoDB": { icon: "⚡", color: "#4053d6" },
  
  // Cloud & DevOps
  "AWS Lambda": { icon: "λ", color: "#ff9900" },
  "EventBridge": { icon: "🔗", color: "#ff4f8b" },
  "Bedrock": { icon: "🪨", color: "#232f3e" },
  "Git": { icon: "⎇", color: "#f05032" },
  "Postman": { icon: "📮", color: "#ff6c37" },
  "ESLint": { icon: "✓", color: "#4b32c3" },
  "VS Code": { icon: "💻", color: "#007acc" },
  "IntelliJ IDEA": { icon: "🧠", color: "#fe315d" },
  "Gradle": { icon: "🐘", color: "#02303a" },
  
  // APIs & Extensions
  "Chrome Extensions API": { icon: "🧩", color: "#4285f4" },
  "Manifest V3": { icon: "📋", color: "#4285f4" },
  "REST APIs": { icon: "🔌", color: "#009688" },
  "Chrome Storage API": { icon: "💿", color: "#4285f4" },
  "Content Scripts": { icon: "📝", color: "#34a853" },
  "Service Workers": { icon: "⚙️", color: "#fbbc04" },
  "Google Calendar API": { icon: "📅", color: "#4285f4" },
  "OneBusAway API": { icon: "🚌", color: "#4caf50" },
  "Google Gemini API": { icon: "✨", color: "#8e44ad" },
  "JDBC": { icon: "🔗", color: "#f89820" },
  
  // Algorithms & Concepts
  "Minimax Algorithm": { icon: "🎮", color: "#9c27b0" },
  "Alpha-Beta Pruning": { icon: "✂️", color: "#673ab7" },
  "Zobrist Hashing": { icon: "#️⃣", color: "#3f51b5" },
  "Adversarial Search": { icon: "🎯", color: "#e91e63" },
  "Transposition Tables": { icon: "📊", color: "#00bcd4" },
  
  // Data & GIS
  "ArcGIS": { icon: "🗺️", color: "#2c7fb8" },
  "Washington OSPI Data": { icon: "📚", color: "#1e88e5" },
};

function ProjectsCard({
  title,
  tagline,
  problem,
  solution,
  technologies,
  images,
  links
}) {
  const [modalImage, setModalImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = (image, e) => {
    e.stopPropagation();
    if (typeof image === 'object' && image.externalLink) {
      window.open(image.externalLink, '_blank');
    } else {
      const src = typeof image === 'object' ? image.src : image;
      setModalImage(src);
    }
  };

  const closeModal = () => setModalImage(null);

  return (
    <div className="expandable-card-wrapper">
      <div 
        className={`expandable-card ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Collapsed Header - Always Visible */}
        <div className="card-header-section">
          <div className="card-header-content">
            <div className="card-title-row">
              <h3 className="card-title fw-bold mb-0">{title}</h3>
              <span className={`expand-indicator ${isExpanded ? 'rotated' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </span>
            </div>
            <p className="card-tagline text-muted mb-2">{tagline}</p>
            
            {/* Tech Icons */}
            <div className="tech-icons-row">
              {technologies.slice(0, 3).map((tech, index) => {
                const techData = techIcons[tech];
                return (
                  <div 
                    key={index}
                    className="tech-icon-badge"
                    style={{ 
                      backgroundColor: techData?.color || '#6b7280',
                      color: techData?.textColor || '#fff'
                    }}
                    title={tech}
                  >
                    <span className="tech-icon-symbol">{techData?.icon || tech.substring(0, 2)}</span>
                  </div>
                );
              })}
              {technologies.length > 3 && (
                <div className="tech-icon-badge tech-icon-more" title={technologies.slice(3).join(', ')}>
                  +{technologies.length - 3}
                </div>
              )}
            </div>

            {/* Quick Links (visible in collapsed state too) */}
            {links && links.length > 0 && (
              <div className="quick-links-row">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.icon === 'github' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    )}
                    {link.icon === 'live' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    )}
                    {link.icon === 'video' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                      </svg>
                    )}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Expandable Content */}
        <div className="card-expandable-content">
          <div className="card-expandable-inner">
            {images && (
              <div className="d-flex gap-3 my-3 flex-wrap">
                {images.map((image, index) => {
                  const imgSrc = typeof image === 'object' ? image.src : image;
                  const isExternal = typeof image === 'object' && image.externalLink;
                  return (
                    <div
                      key={index}
                      className="project-image-container border rounded bg-light overflow-hidden d-flex align-items-center justify-content-center"
                      style={{ width: "100px", height: "100px", cursor: "pointer", position: "relative" }}
                      onClick={(e) => handleImageClick(image, e)}
                    >
                      <img
                        src={imgSrc}
                        alt={`${title} screenshot ${index + 1}`}
                        className="w-100 h-100 object-fit-cover project-image"
                      />
                      {isExternal && (
                        <div className="external-link-badge">
                          PDF
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="content-section">
              <h6 className="section-title">Problem</h6>
              <p className="section-text">{problem}</p>
            </div>

            <div className="content-section">
              <h6 className="section-title">Solution & Impact</h6>
              <p className="section-text">{solution}</p>
            </div>

            <div className="content-section">
              <h6 className="section-title">Tech Stack</h6>
              <div className="tech-stack-expanded">
                {technologies.map((tech, index) => {
                  const techData = techIcons[tech];
                  return (
                    <span 
                      key={index} 
                      className="tech-tag"
                      style={{ 
                        borderColor: techData?.color || '#6b7280',
                        color: techData?.color || '#6b7280'
                      }}
                    >
                      <span className="tech-tag-icon" style={{ backgroundColor: techData?.color || '#6b7280', color: techData?.textColor || '#fff' }}>
                        {techData?.icon || tech.substring(0, 2)}
                      </span>
                      {tech}
                    </span>
                  );
                })}
              </div>
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

export default ProjectsCard;