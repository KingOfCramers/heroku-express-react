import React from "react";

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2>
    </div>
  </div>
);

Header.defaultProps = {
  // We can give our components default props. OR we can pass them in (I do this for subtitle above in the render function of the IndecisionApp)
  title: "Indecision App"
};

export default Header;
