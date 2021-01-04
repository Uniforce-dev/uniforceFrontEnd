import React, { Component } from 'react'
import './assets/jss/App.css'
import ComingSoon from './views/ComingSoon'
import Header from './views/Header'
import Home from './views/Home'
import UniforceTeam from './views/UniforceTeam'
import Footer from './views/Footer'
import UniforcePresentation from './views/UniforcePresentation'
import LoginPage from './views/LoginPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component{
  render () {   
    return(
      <Router>
        <div className="App">
          {/* <ComingSoon></ComingSoon> */}
          <Header/>
          {/* <p>{this.state.webpagedata}</p> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/team" component={UniforceTeam} />
            <Route path="/association" component={UniforcePresentation}/> 
            <Route path="/loginPage" component={LoginPage}/>
          </Switch>
          <Footer/> 
        </div>

      </Router>      
    )
  }
}

export default App