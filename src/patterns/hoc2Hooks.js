import React from "react";

import { useButtonToggle } from "../CustomHooks";
import logo from "../logo.svg";
import "./style.css";
import { Switch } from "../components/Switch";

const LogoAnimation = props => {
  const [showAnimation, toggleLogoAnimation] = useButtonToggle(true);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
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
