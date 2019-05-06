import React, { Component } from "react";
// import shortid from 'shortid';
import "./style.css";

class Header extends Component {

  // generateKey () {
  //   return `${ new Date().getTime() }`;
  // }

  // repeatLogo() {
  //   return (
  //     <div className="row">
  //       {Array(5).fill(<img src={logo} className={"App-logo"} alt="logo" key={shortid.generate()}/>)}
  //     </div>
  //   )
  // }

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

/* image, index key=index
  const a = ["App-logo", "App-logo", "App-logo"];
  {a.map(i => {
    return <img src={logo} className={i} alt="logo" />
  })}
*/