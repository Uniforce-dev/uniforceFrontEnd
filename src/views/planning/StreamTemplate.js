import React, { Component } from "react";

class StreamTemplate extends Component {
  constructor(){
    super()
    this.state = {
      streamer : "",
    }
  }

  componentDidMount(){
    const event = this.props.event
    if(event){
      this.setState({
        streamer : event.streamer
      })
    }
  }
  render() {
    return (
      <div className="stream-template"  style={{
        backgroundImage: `url(${require(`../../assets/img/draws/${this.state.streamer}_Web_Tv_Site.png`)})`,
      }}>
        <div className="live-tag">LIVE!</div>
        <div className="hour">
          <h3>{this.props.event.hour}</h3>
        </div>
        <div className="game">
          <h3>{this.props.event.game}</h3>
        </div>
      </div>
    );
  }
}

export default StreamTemplate;
