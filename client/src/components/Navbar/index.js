import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="menu">
      <h1 className="menu-name">Abbey Schueller</h1>
      <div>
        <ul className="menu-options">
          <li className="menu-item">
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
          </li>
          <li className="menu-item">
            <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
          </li>
          <li className="menu-item">
            <Link to="/projects" className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Work</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;