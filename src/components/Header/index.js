import React from "react";
import "./style.css";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Memory Test</h1>
        <h4>Click on each unique inkblot only once.</h4>
        <h4>Don't let the captions distract you.</h4>
      </header>
    );
  };
}

export default Header;
