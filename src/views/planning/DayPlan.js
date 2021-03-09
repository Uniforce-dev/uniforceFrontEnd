import React, { Component } from "react";
import StreamTemplate from "./StreamTemplate";

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
    console.log("day in DayPlan", this.props.day);
    // let event_1 = null
    // let event_2 = null
    // if (this.props.day.events.length === 1) {
    //  event_1 = this.props.day.events[0]
    // }
    // if (this.props.day.events.length === 2) {
    //   event_2 = this.props.day.events[1]
    //  }
     const dayEvents = this.props.day.events.map((event) => (
      <StreamTemplate key={event.id} event={event} />
    ));
    return (
      <div className="day-plan">
          {/* <div className="date">
            <p>{this.props.day.name}</p>
            <p>{this.props.day.number}</p>
            {this.props.day.month}
          </div> */}
        <div className="day-top">
          <h3>{this.props.day.name}</h3>
          <p>{this.props.day.number}</p>
          {this.props.day.month}
        </div>
        <div className="day-content">
          <div className="day-event">{dayEvents}</div>
        </div>
      </div>
    );
  }
}

export default DayPlan;
