import React, { Component } from "react";
import StreamTemplate from "./StreamTemplate";

class DayPlan extends Component {
  render() {
    const dayEvents = this.props.day.events.map((event) => (
      <StreamTemplate key={event.id} event={event} />
    ));
    return (
      <div className="day-plan">
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
