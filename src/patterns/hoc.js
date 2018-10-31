import React, { Component } from "react";

import logo from "../logo.svg";
import "./style.css";
import { Switch } from "../components/Switch";

const withAnimation = CustomComponent => {
  class Animation extends Component {
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
        <CustomComponent
          toggleLogoAnimation={this.toggleLogoAnimation}
          showAnimation={showAnimation}
          {...this.props}
        />
      );
    }
  }
  return Animation;
};

const LogoAnimation = props => {
  const { showAnimation, toggleLogoAnimation } = props;

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

export default withAnimation(LogoAnimation);
