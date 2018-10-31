import React, { Component } from "react";

import logo from "../logo.svg";
import "./style.css";
import { Switch } from "../components/Switch";

class LogoAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnimation: true
    };
    this.toggleLogoAnimation = this.toggleLogoAnimation.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleArrow);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleArrow);
  }

  toggleLogoAnimation() {
    this.setState(prevState => {
      return { showAnimation: !prevState.showAnimation };
    });
  }

  handleArrow(e) {
    console.log(e.which);
    if (e.which === 37) {
      this.setState({ showAnimation: false });
    }
    if (e.which === 39) {
      this.setState({ showAnimation: true });
    }
  }

  render() {
    const { showAnimation } = this.state;

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
          <Switch on={showAnimation} onClick={this.toggleLogoAnimation} />
          <span>Animation : {`${showAnimation ? "On" : "Off"}`}</span>
          <span>Use &larr; / &rarr; to toggle animation</span>
        </header>
      </div>
    );
  }
}

export default LogoAnimation;
