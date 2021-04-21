import React, { Component } from "react";
import "../../assets/jss/GamerCard.css";

class GamerCard extends Component {
  render() {
    return (
      <div className="box">
        <div className="box-inner">
          <div className="box-front">
            <div className="gamer-card">
              <div className="card-title">{this.props.gamer.pseudo}</div>
              <div className="gamer-shield">
                <div className="gamer-photo">
                  <img
                    src={require(`../../assets/img/streamers/${this.props.gamer.photo}`)}
                    alt="Photo du joueur"
                  />
                </div>
                {/* <div className="gamer-pseudo">{this.props.gamer.pseudo}</div>          */}
              </div>
            </div>
          </div>
          <div className="box-back">
            <div className="gamer-card">
              <div className="gamer-details">
                <div className="card-title">{this.props.gamer.pseudo}</div>
                <div className="gamer-description">
                  <p>Age: {this.props.gamer.age}</p>
                  <p>{this.props.gamer.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // KEEP CODE EXAMPLE FOR JAVASCRIPT ACTIONS

  // constructor() {
  //   super()
  //   this.onClickTrue = this.onClickTrue.bind(this);
  //   this.onClickFalse = this.onClickFalse.bind(this);
  //   this.state = {
  //     showMe: false
  //   }
  // }

  // onClickTrue(){
  //   this.setState({ showMe : true })
  // }
  // onClickFalse(){
  //   this.setState({ showMe : false })
  // }

  //render () {
  // if(this.state.showMe){
  //   // verso (hover)
  //   return(
  //     <div className="gamer-card" onMouseLeave={this.onClickFalse}>
  //     <div className="gamer-description">{this.props.gamer.pseudo}</div>
  //     <div className="gamer-description">{this.props.gamer.description}</div>
  //     </div>
  //   )
  // } else {
  //   // recto
  //   return(
  //     <div className="gamer-card" onMouseEnter={this.onClickTrue}>
  //       <div className="gamer-shield">
  //         <div className="gamer-photo">
  //           <img src={require(`../../assets/img/streamers/${this.props.gamer.photo}`)} alt="Photo du joueur" />
  //         </div>
  //         {/* <div className="gamer-pseudo">{this.props.gamer.pseudo}</div>          */}
  //       </div>
  //     </div>
  //   )
  // }

  //}
}

export default GamerCard;
