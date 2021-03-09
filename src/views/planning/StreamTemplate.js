import React, { Component } from "react";

class StreamTemplate extends Component {
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
    return (
      <div className="stream-template">
        {/* <div className="date">
            <p>{this.props.day.name}</p>
            <p>{this.props.day.number}</p>
            {this.props.day.month}
          </div> */}
        <div className="live-tag">LIVE!</div>
        <div className="streamer">
          <h3>{this.props.event.streamer}</h3>
        </div>
      </div>
    );
  }
}

export default StreamTemplate;
