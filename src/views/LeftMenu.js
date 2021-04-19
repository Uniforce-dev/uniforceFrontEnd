import React, { Component } from "react";
import Menu from "./Menu";
import { Animated } from "react-animated-css";

class LeftMenu extends Component {
  render() {
    return (
      <div className="left-menu">
        <div className="logo-content">
          <Animated
            animationIn="flipInX"
            animationOut="fadeOut"
            isVisible={true}
          >
            <img
              className="logo"
              src={require("../assets/img/logo_neon.svg")}
              alt="Logo"
            />
          </Animated>
        </div>
        <Menu />
        <div>
        <div className="icons">
            <a href="https://twitter.com/UniForceTV"><img src={require('../assets/img/icon/twitter.svg')} alt="logo twitter"/></a>
            <a href="https://instagram.com/tvuniforce"><img src={require('../assets/img/icon/instagram.svg')} alt="logo instagram"/></a>
        </div>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
