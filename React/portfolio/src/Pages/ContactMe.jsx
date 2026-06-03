import React from "react";

const ContactMe = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center mt-1">
      <div className="container py-5 text-light">
        <h1 className="text-center mb-5 text-light">Contact Me</h1>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-dark border-secondary">
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label text-light">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Message</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-outline-success">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="text-center mt-5 text-light">
              <h4>Connect With Me</h4>

              <p className="mb-1">📧 sohamcs2003@gmail.com</p>

              <p className="mb-1">💻 GitHub: https://github.com/soham2231</p>

              <p>
                🔗 LinkedIn:https://www.linkedin.com/in/soham-kadam-2762a3393
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
