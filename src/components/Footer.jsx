function Footer() {
  return (
    <footer className="bg-light border-top mt-5 py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 mb-3 mb-md-0">
                <ul className="list-unstyled mb-0">
                  <li className="fw-semibold">Connor Lam</li>
                  <li>
                    <a
                      href="mailto:connorlam92@gmail.com"
                      className="text-decoration-none text-muted"
                    >
                      connorlam92@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4 text-md-center mb-3 mb-md-0">
                <a
                  href="https://github.com/clamm92/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-muted fs-5"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/connor-lam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted fs-5"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="col-12 col-md-4 text-md-end">
                <p className="mb-0 text-muted small">
                  Last updated: February 2026
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
