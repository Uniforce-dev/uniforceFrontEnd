import React, { Component } from "react";
// import "../assets/jss/Footer.css"

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-blocks">
          <div className="footer-block">
            <p>NOS PARTENAIRES</p>
          </div>
          <div className="footer-block">
            <p>NOUS REJOINDRE</p>
            <div className="icons">
              <a href="https://twitter.com/UniForceTV" target="_blank">
                <img
                  src={require("../assets/img/icon/twitter.svg")}
                  alt="logo twitter"
                />
              </a>
              <a href="https://instagram.com/tvuniforce" target="_blank">
                <img
                  src={require("../assets/img/icon/instagram.svg")}
                  alt="logo instagram"
                />
              </a>
              <a href="https://discord.com/invite/ZQGEbP4" target="_blank">
                <img
                  src={require("../assets/img/icon/discord.svg")}
                  alt="logo discord"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
