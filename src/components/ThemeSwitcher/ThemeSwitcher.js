import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import "./ThemeSwitcher.css";

class ThemeSwitcher extends React.Component {
  render() {
    const { theme, toggleTheme } = this.props;
    return (
      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? (
          <BsMoonStarsFill className="dark-button-color" />
        ) : (
          <LuSunMoon className="light-button-color" />
        )}
      </button>
    );
  }
}

export default ThemeSwitcher;
