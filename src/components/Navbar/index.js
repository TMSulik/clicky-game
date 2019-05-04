import React, { Component } from "react";
import "./style.css";
import logo from './logo.svg';
import gallery from '../Gallery';

class Navbar extends Component {

  state = { instruction: 'Something' };

  // componentDidMount() {
  //   this.setState({ instruction: giveInstruction });
  // }

  render() {
    return (
    <div className="navbar">
      <img src={logo} className={"App-logo"} alt="logo" />
      <img src={logo} className={"App-logo"} alt="logo" />
      <img src={logo} className={"App-logo"} alt="logo" />
      <img src={logo} className={"App-logo"} alt="logo" />
        <div className="top-line">
          <ul>
            <li id="instruction">{this.state.instruction}</li>
            <li id="current-score">Current Score: 0/16</li>
            <li id="top-score">Top Score: 0/16</li>
          </ul>
        </div>
    </div>
    );
  };

}

export default Navbar;