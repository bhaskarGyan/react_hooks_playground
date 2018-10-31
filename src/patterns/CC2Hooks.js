import React, { useState, useEffect } from "react";

import logo from "../logo.svg";
import "./style.css";
import { Switch } from "../components/Switch";

const LogoAnimation = props => {
  const [showAnimation, onAnimationChange] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleArrow);
    return () => {
      document.removeEventListener("keydown", handleArrow);
    };
  }, []);

  const handleArrow = e => {
    console.log(e.which);
    if (e.which === 37) {
      onAnimationChange(false);
    }
    if (e.which === 39) {
      onAnimationChange(true);
    }
  };
  const toggleLogoAnimation = () => {
    onAnimationChange(!showAnimation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://uploads.codesandbox.io/uploads/user/3c5a98d3-535d-4992-8975-1a1db2e033d1/7MID-logo.svg"
          className={`App-logo ${
            showAnimation ? "" : "stop-react-logo-animation"
          }`}
          alt="logo"
        />
        <Switch on={showAnimation} onClick={toggleLogoAnimation} />
        <span>Animation : {`${showAnimation ? "On" : "Off"}`}</span>
        <span>Use &larr; / &rarr; to toggle animation</span>
      </header>
    </div>
  );
};

export default LogoAnimation;
