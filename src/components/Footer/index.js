import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer row">
      <div className="left-caption col-6lg">
        <p>© T.M. Sulik Promotions, LLC 2019</p>
      </div>
      <div className="right-caption">
        <a href="https://github.com/TMSulik/clicky-game">
          Git Repository
        </a>
      </div>
    </div>
  );
};

export default Footer;