import React, { Component } from "react";
// import "../assets/jss/Planning.css"

class DayPlan extends Component {
//   constructor() {
//     super();
//     // this.getCurrentWeek = this.getCurrentWeek.bind(this);
//     this.state = {
//       currentWeek: [],
//       // gamersList: []
//       // gamersList: gamersInfos
//     };
//   }

  render() {
    // const gamersCards = this.state.gamersList.map(gamer => <GamerCard key={gamer.id} gamer={gamer}/>)

    return (
      <div className="day-plan">
        <h2>{this.props.day.name}</h2>
        <h3>{this.props.day.number}</h3>
        {this.props.day.month}
      </div>
    )
  }
}

export default DayPlan
