import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ChangeTheme = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-btn">
      <FontAwesomeIcon icon={faCircleHalfStroke} className="theme-btn-icon" />
    </button>
  );
};

export default ChangeTheme;
