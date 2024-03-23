import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaSnapchat } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className="footer-container">
      <div className="footer-sub-container-1">
        <a
          href="https://www.linkedin.com/in/reshmithabathala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin
            className={`each-link ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          />
        </a>
        <a href="https://x.com/" target="_blank" rel="noreferrer">
          <FaXTwitter
            className={`each-link ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub
            className={`each-link ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          />
        </a>
        <a href="https://facebooks.com/" target="_blank" rel="noreferrer">
          <RiFacebookCircleLine
            className={`each-link ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          />
        </a>
        <a href="https://telegram.com/" target="_blank" rel="noreferrer">
          <FaTelegram
            className={`each-link ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          />
        </a>
        <a href="https://snapchat.com/" target="_blank" rel="noreferrer">
          <FaSnapchat
            className={`each-link ${
              theme === "light" ? "light-text" : "dark-text"
            }`}
          />
        </a>
      </div>
      <p className="mail">reshmithabathala26@gmail.com</p>
    </footer>
  );
};

export default Footer;
