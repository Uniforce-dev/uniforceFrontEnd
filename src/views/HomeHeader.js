import React, { Component } from "react";

class HomeHeader extends Component {
  constructor() {
    super();
    this.state = {
      shortcut: "stream",
    };
  }

  render() {
    return (
      <div className="home-header">
        <div className="top-menu">
          <div>
            <a
              className="nav-anchor"
              href="#id-stream"
             
            >
              STREAM
            </a>
          </div>
          <div>
            <a
              className="nav-anchor"
              href="#id-youtube"
           
            >
              BEST OF
            </a>
          </div>
          {/* <div>
            <a
              className="nav-anchor"
              href="#id-news"
            
            >
              NEWS
            </a>
          </div> */}
          <div>
            <a
              className="nav-anchor"
              href="#id-planning"
            >
              PLANNING
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
