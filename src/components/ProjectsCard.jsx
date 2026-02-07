import { useState } from "react";

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

  const handleImageClick = (image) => {
    // If image is an object with externalLink, open the link
    if (typeof image === 'object' && image.externalLink) {
      window.open(image.externalLink, '_blank');
    } else {
      // Otherwise open in modal
      const src = typeof image === 'object' ? image.src : image;
      setModalImage(src);
    }
  };

  const closeModal = () => setModalImage(null);

  return (
    <div className="card mb-4 shadow-sm border">
      <div className="card-body">
        <h3 className="card-title fw-bold">{title}</h3>
        <p className="card-subtitle text-muted mb-3">{tagline}</p>

        {links && links.length > 0 && (
          <div className="d-flex gap-2 mb-3 flex-wrap">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
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
                {link.label}
              </a>
            ))}
          </div>
        )}

        {images && (
          <div className="d-flex gap-3 my-3 flex-wrap">
            {images.map((image, index) => {
              const imgSrc = typeof image === 'object' ? image.src : image;
              const isExternal = typeof image === 'object' && image.externalLink;
              return (
                <div
                  key={index}
                  className="project-image-container border rounded bg-light overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "120px", cursor: "pointer", position: "relative" }}
                  onClick={() => handleImageClick(image)}
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