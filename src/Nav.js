import React from "react";
import netflix from "./netflix.png";
import smi from "./smi.png";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <img className="nav-logo" src={netflix} alt="Netflix logo" />
      <img className="nav-avatar" src={smi} alt="Netflix logo" />
    </div>
  );
}

export default Nav;
