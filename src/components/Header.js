import React from "react";

const Header = ({ theme }) => (
  <div className="header" id={`${theme}`}>
    <img
      src="https://www.thebrooklynbrothers.com/assets/images/logo@2x.png"
      alt="The Brooklyn Brothers"
      className="logo"
    />
  </div>
);

export default Header;
