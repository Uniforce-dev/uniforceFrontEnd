import React, { Component } from "react";
import "./assets/jss/App.css";
import ComingSoon from "./views/ComingSoon";
import LeftMenu from "./views/LeftMenu";
import Home from "./views/Home";
import UniforceTeam from "./views/streamers/UniforceTeam";

import UniforcePresentation from "./views/presentation/UniforcePresentation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <ComingSoon></ComingSoon> */}
          <LeftMenu />
          {/* <p>{this.state.webpagedata}</p> */}
          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/team" component={UniforceTeam} />
              <Route path="/association" component={UniforcePresentation} />
            </Switch>            
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
