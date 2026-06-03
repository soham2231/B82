import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light py-4 mt-1 mb-0">
        <div className="container text-center">
          <h5 className="mb-3">Soham Kadam</h5>

          <p className="mb-2">React Developer | Frontend Developer</p>

          <div className="mb-3">
            <a
              href="https://github.com/soham2231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none mx-3"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none mx-3"
            >
              LinkedIn
            </a>

            <a
              href="sohamcs2003@gmail.com"
              className="text-light text-decoration-none mx-3"
            >
              Email
            </a>
          </div>

          <hr />

          <p className="mb-0">
            © {new Date().getFullYear()} Soham Kadam. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
