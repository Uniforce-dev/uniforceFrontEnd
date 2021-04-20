import React, { Component } from "react";
import "../assets/jss/Home.css";
import HomeHeader from "./HomeHeader";
import Planning from "./planning/Planning";
import Footer from "./Footer";
const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLive: false,
    };
    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
  }

  onClickTrue() {
    this.createEmbedTwitch();
    this.setState({ isLive: true });
  }
  onClickFalse() {
    this.createEmbedTwitch();
    this.setState({ isLive: false });
  }

  componentDidMount() {
    this.createEmbedTwitch();
  }

  createEmbedTwitch() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: "uniforce_tv",
        theme: "dark",
        muted: true,
        layout: this.state.isLive ? "video-with-chat" : "video",
      });
    });
    document.body.appendChild(script);

    // LAYOUT
    // video-with-chat: Default if channel is provided, and only supported for live content. Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.
    // video: Default if channel is not provided. Shows only the video player (omits chat).
    // embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    //   var player = embed.getPlayer();
    //   player.play();
    // });
  } // GET INFOS TO DISPLAY TWITCH OR YOUTUBE if no stream or replay available on TWITCH
  // getChannel() Returns the channel’s name. Works only for live streams, not VODs.
  // getVideo() Returns the video ID. Works only for VODs, not live streams.
  // console.log('embed', embed, embed.getVideo(), embed.getChannel())

  // CAN LISTEN TO EVENTS (not TESTED !!)
  // https://dev.twitch.tv/docs/embed/everything

  // embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  //     var player = embed.getPlayer();
  //   console.log(player)
  //     player.play();
  //   })
  // })
  // document.body.appendChild(twScript)
  // }

  render() {
    if (this.state.isLive) {
      // Stream TWITCH is Live
      return (
        <div className="home">
          <HomeHeader />
          <span className="anchor" id="id-stream"></span>
          <div className="home-stream">
            <h2 className="stream-title" onClick={this.onClickFalse}>
              LE STREAM
            </h2>
            <div className="twitch">
              <div id="twitch-embed"></div>
            </div>
          </div>
          <span className="anchor" id="id-youtube"></span>
          <div className="home-youtube">
            <h2>LA CHAINE YOUTUBE</h2>
            <div className="youtube">
              <div className="youtube-embed">
                <iframe src="http://www.youtube.com/embed/videoseries?list=UUfo3T5OUV2VMoyLqtrQR33g"></iframe>
              </div>
            </div>
          </div>
          <span id="id-planning" className="anchor"></span>
          <Planning />
          <Footer />
        </div>
      );
    } else {
      // No TWITCH Live
      return (
        <div className="home">
          <HomeHeader />
          <div className="home-videos">
            <span className="anchor" id="id-stream"></span>
            <div className="home-stream">
              <h2 className="stream-title" onClick={this.onClickTrue}>
                LE STREAM
              </h2>
              <div className="twitch">
                <div id="twitch-embed"></div>
              </div>
            </div>
            <span className="anchor" id="id-youtube"></span>
            <div className="home-youtube">
              <h2>LA CHAINE YOUTUBE</h2>
              <div className="youtube">
                <div className="youtube-embed">
                  <iframe src="http://www.youtube.com/embed/videoseries?list=UUfo3T5OUV2VMoyLqtrQR33g"></iframe>
                </div>
              </div>
            </div>
          </div>
          <span id="id-planning" className="anchor"></span>
          <Planning />
          <Footer />
        </div>
      );
    }
  }
}

export default Home;
