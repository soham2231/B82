// import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";

const Home = () => {
  return (
    <div className="container">
      <div className="row align-items-center min-vh-100 text-light">
        {/* Left Section */}
        <div className="col-lg-6">
          <p className="text-primary fs-5 text-dark">Hello, I'm</p>

          <h1 className="display-3 fw-bold text-dark">Soham Kadam</h1>

          <h3 className="text-secondary mb-4">
            React Developer | Frontend Developer
          </h3>

          <p className="lead text-dark">
            Passionate about building modern, responsive, and user-friendly web
            applications using React.js, JavaScript, Bootstrap, and other
            frontend technologies.
          </p>

          <div className="mt-4">
            <Link to="/projects" className="btn btn-primary me-3">
              View Projects
            </Link>

            <Link to="/contact" className="btn btn-outline-light">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <img
            alt="Profile"
            src={profile}
            className="img-fluid rounded-circle shadow h-75 w-75"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
