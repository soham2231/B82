import { useState } from "react";
import { SiTheregister } from "react-icons/si";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [name, setName] = useState();
  const [emial, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleRegister(e) {
    e.preventDefault();
    const regUser = {
      name: name,
      email: emial,
      password: password,
    };
    localStorage.setItem('name',JSON.stringify(regUser))
    toast("Registered Successfully");
  }

  return (
    <>
      <div className="container mt-5 pt-3 pb-3 rounded bg-dark">
        <div className=" text-center mt-4 mb-2 ">
          <h1 className="text-warning mt-4 mb-4">
            Register{" "}
            <span>
              <SiTheregister />
            </span>
          </h1>
        </div>
        <form id="registerForm" onSubmit={handleRegister}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingName">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="text-center">
            <button
              className="btn btn-outline-warning mt-3 mb-2 "
              form="registerForm"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="text-center">
          <Link to="/login" className="text-warning">Already have an account?</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegisterPage;
