import React, { Component} from "react"
import "../assets/jss/GamerCard.css"

class GamerCard extends Component{  

  constructor() {
    super()
    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
    this.state = {
      showMe: false
    }
  }
  
  onClickTrue(){
    this.setState({ showMe : true })
  }
  onClickFalse(){
    this.setState({ showMe : false })
  }

  render () {
    if(this.state.showMe){
      // verso (hover)
      return(
        <div className="GamerCard" onMouseLeave={this.onClickFalse}>
        <div className="Gamer-description">{this.props.gamer.pseudo}</div>
        <div className="Gamer-description">{this.props.gamer.description}</div>
        </div>
      )
    } else {
      // recto
      return(
        <div className="GamerCard" onMouseEnter={this.onClickTrue}>
          <div className="Gamer-shield">
            <div className="Gamer-photo">
              <img src={require(`../assets/img/streamers/${this.props.gamer.photo}`)} alt="Photo du joueur" />
            </div>
            {/* <div className="Gamer-pseudo">{this.props.gamer.pseudo}</div>          */}
          </div>
        </div>
      )
    }    
  }
}

export default GamerCard