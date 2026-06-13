import { useEffect, useState } from "react";
import { SiSimplelogin } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = () => {
  const [emial, setEmail] = useState();
  const [password, setPassword] = useState();
  const [regUser, setRegUser] = useState();

  function handleLogin(e) {
    e.preventDefault();
  }

  function fetchRegUser() {
    const u = JSON.parse(localStorage.getItem("name"));
    setRegUser(u);
    
  }

  useEffect(() => {
    fetchRegUser();
  }, []);
  return (
    <>
      <div className="container mt-5 pt-3 pb-3 rounded bg-dark">
        <div className=" text-center mt-3 mb-2">
          <h1 className="text-warning  mb-4">
            Login{" "}
            <span>
              <SiSimplelogin />
            </span>
          </h1>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="text-center">
          <button
            className="btn btn-outline-warning mt-3 mb-3 ms-3-"
            onClick={handleLogin}
          >
            Login
          </button>
          <button className="btn btn-outline-warning mt-3 mb-3 ms-3">
            Forgot Password
          </button>
        </div>
        <div className="text-center">
          <Link className="text-warning" to="/register">
            If you don't have an account please register!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
