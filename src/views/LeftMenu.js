import React, { Component } from "react";
import Menu from "./Menu";
import { Animated } from "react-animated-css";

class LeftMenu extends Component {
  render() {
    return (
      <div className="left-menu">
        <div className="Logo-contain">
          <Animated
            animationIn="flipInX"
            animationOut="fadeOut"
            isVisible={true}
          >
            <img
              className="Logo"
              src={require("../assets/img/logo_neon.svg")}
              alt="Logo"
            />
          </Animated>
        </div>
        <Menu />
      </div>
    );
  }
}

export default LeftMenu;
