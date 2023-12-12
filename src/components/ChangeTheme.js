import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ChangeTheme = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-btn">
      <FontAwesomeIcon
        icon={theme === "dark" ? faMoon : faSun}
        className="theme-btn-icon"
      />
    </button>
  );
};

export default ChangeTheme;
