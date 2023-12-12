import React from "react";
import ChangeTheme from "./ChangeTheme";

const Header = ({ theme, toggleTheme }) => (
  <div className="header" id={`${theme}`}>
    <img
      src="https://www.thebrooklynbrothers.com/assets/images/logo@2x.png"
      alt="The Brooklyn Brothers"
      className="logo"
    />
    <ChangeTheme theme={theme} toggleTheme={toggleTheme} />
  </div>
);

export default Header;
