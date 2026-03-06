import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top"
    >
      <div className="container-fluid px-3">
        <a className="navbar-brand fw-bold">Uday.dev</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse bg-white mt-2 rounded shadow-sm"
          id="navMenu"
        >
          <ul className="navbar-nav ms-auto text-center py-2">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact">
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                href="http://localhost:5000/uploads/resume.pdf"
                target="_blank"
                className="btn btn-dark btn-sm"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
