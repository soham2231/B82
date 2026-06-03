// import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React.js and Bootstrap.",
      technologies: "React.js, Bootstrap, CSS",
      github: "#",
      demo: "#",
    },
    {
      title: "TextUtils",
      description:
        "A text utility application that performs various text transformations.",
      technologies: "React.js, JavaScript, Bootstrap",
      github: "#",
      demo: "#",
    },
    {
      title: "Package Management System",
      description:
        "A backend project for managing packages using Node.js and Express.",
      technologies: "Node.js, Express.js, MySQL",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Voting Management System",
      description:
        "A backend project for managing voting processes using Node.js and Express.",
      technologies: "Node.js, Express.js, MySQL",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="bg-dark min-vh-100 mt-1">
      <div className="container py-5 text-light">
        <h1 className="text-center mb-5 text-dark">My Projects</h1>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card bg-dark text-light border-secondary h-100">
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>

                  <p className="card-text">{project.description}</p>

                  <p>
                    <strong>Tech Stack:</strong>
                    <br />
                    {project.technologies}
                  </p>
                </div>

                <div className="card-footer bg-transparent border-0">
                  <a
                    href={project.github}
                    target="/"
                    rel="noreferrer"
                    className="btn btn-outline-primary me-2"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="/"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
