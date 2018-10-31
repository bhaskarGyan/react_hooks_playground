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
