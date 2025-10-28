import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ branding , home,recipes}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  mt-0 mb-0">
      <div className="container-fluid ">
        <Link className="navbar-brand ms-5  fw-bold" to="/">
          {branding}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links do menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link fw-bold ${
                    isActive ? "text-success" : "text-secondary"
                  }`
                }
              >
                {home}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  `nav-link fw-bold ${
                    isActive ? "text-success" : "text-secondary"
                  }`
                }
              >
                {recipes}
              </NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
