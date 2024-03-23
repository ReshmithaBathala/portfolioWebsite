import React from "react";
import { GiJusticeStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = ({ toggleTheme, theme }) => {
  return (
    <nav className="header-container">
      <div className="name-icon-container">
        <GiJusticeStar className="name-icon" />
        RESHMITHA BATHALA
      </div>
      <ul className="header-comaponents-ul-container">
        <li>
          <Link
            to="/"
            className={`component-list-item ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`component-list-item ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={`component-list-item ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={`component-list-item ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`component-list-item ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`component-list-item ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          >
            Contact
          </Link>
        </li>
        <li>
          <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
