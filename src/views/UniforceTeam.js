import React, { Component} from 'react'
// import "../assets/jss/UniforceTeam.css"
import GamerCard from "../views/GamerCard"
import gamersInfos from "../datas/gamersInfos"


class UniforceTeam extends Component{  
  constructor () {
    super()
    this.state = {
      // gamersList: []
      gamersList: gamersInfos
    }
  }

  // componentDidMount(){
  //   fetch("http://localhost:8000/team", {
  //         method:'GET'
  //     }).then(res => res.json()).then(data => {
  //       this.setState({
  //         gamersList: data
  //       })
  //   })
  // }

  render () {
    const gamersCards = this.state.gamersList.map(gamer => <GamerCard key={gamer.id} gamer={gamer}/>)
    return(
      <div className="uniforce-team">
        <h2>TEAM UNI-FORCE</h2>
        {/* <h1 className="UniforceTeam-title">UNI-FORCE Team</h1> */}
        <div className="gamers-list">{gamersCards}</div>       
      </div>
    )
  }
}

export default UniforceTeam