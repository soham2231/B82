import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, "theme in card");

  return (
    <>
      <nav
        data-bs-theme={theme}
        className={`navbar border-bottom border-dark navbar-expand-lg bg-body-tertiary ${theme}==='dark'?'bg-dark':'bg-light'} `}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand text-warning font-weight-bold "
            href="#"
          >
            ShopVault
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning me-2" type="submit">
                Search
              </button>
              <Link
                to="/cart"
                className="btn btn-outline-warning position-relative ms-3 me-3"
              >
                <FaShoppingCart size={20} />

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                className="border-0 shadow-sm"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, #1e293b, #334155)"
                      : "linear-gradient(135deg, #f8fafc, #e2e8f0)",
                  color: theme === "dark" ? "#facc15" : "#0f172a",
                  transition: "all 0.3s ease",
                }}
              >
                {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
