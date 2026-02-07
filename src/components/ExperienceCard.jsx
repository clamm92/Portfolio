import { useState } from "react";

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
  images
}) {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

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
        {images && (
          <div className="d-flex gap-3 my-3 flex-wrap">
            {images.map((src, index) => (
              <div
                key={index}
                className="project-image-container border rounded bg-light overflow-hidden d-flex align-items-center justify-content-center"
                style={{ width: "120px", height: "120px", cursor: "pointer" }}
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
