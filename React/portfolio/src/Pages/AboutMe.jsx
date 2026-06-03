import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center mt-1">
      <div className="container py-5 text-light ">
        <h1 className="text-center mb-5">About Me</h1>

        <div className="row">
          <div className="col-lg-7">
            <h3 className="mb-3">Hello, I'm Soham Kadam</h3>

            <p>
              I am a final-year B.Tech student at Fabtech Technical Campus
              College of Engineering, Sangola, with a strong interest in web
              development and software engineering.
            </p>

            <p>
              I enjoy building responsive and user-friendly web applications
              using modern technologies. I am currently focusing on React.js,
              JavaScript, and full-stack development to strengthen my skills and
              prepare for a professional software development career.
            </p>

            <p>
              I am passionate about learning new technologies, solving
              real-world problems, and creating applications that provide great
              user experiences.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="card bg-dark border-secondary text-light">
              <div className="card-body">
                <h4 className="mb-3">Education</h4>

                <p>
                  <strong>Degree:</strong> B.Tech
                </p>

                <p>
                  <strong>College:</strong> Fabtech Technical Campus College of
                  Engineering, Sangola
                </p>

                <p>
                  <strong>Year:</strong> Final Year (4th Year)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="mb-4">Technical Skills</h3>

          <div className="d-flex flex-wrap gap-3">
            <span className="badge bg-success p-3 fs-6">Java</span>
            <span className="badge bg-primary p-3 fs-6">JavaScript</span>
            <span className="badge bg-success p-3 fs-6">React.js</span>
            <span className="badge bg-primary p-3 fs-6">HTML</span>
            <span className="badge bg-success p-3 fs-6">CSS</span>
            <span className="badge bg-primary p-3 fs-6">MySQL</span>
            <span className="badge bg-success p-3 fs-6">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
