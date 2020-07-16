import React, { useState, useEffect } from "react";
import netflix from "./netflix.png";
import smi from "./smi.png";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="nav-logo" src={netflix} alt="Netflix logo" />
      <img className="nav-avatar" src={smi} alt="Netflix logo" />
    </div>
  );
}

export default Nav;
