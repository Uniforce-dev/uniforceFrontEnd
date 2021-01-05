import React, { Component} from 'react'
import "../assets/jss/Home.css"
import Footer from "./Footer";
const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js'

class Home extends Component{ 

  constructor () {
    super()
  }

  componentDidMount() {
    console.log('home mounted')
    let embed;
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      EMBED_URL
    )
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed("twitch-embed", {
        width: '100%',
        height: '100%',
        channel: 'uniforce_tv',
        theme: 'dark',
        muted: true
      })
    })
    document.body.appendChild(script)
    // embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    //   var player = embed.getPlayer();
    //   player.play();
    // });
  }

    // GET INFOS TO DISPLAY TWITCH OR YOUTUBE if no stream or replay available on TWITCH
    // getChannel() Returns the channel’s name. Works only for live streams, not VODs.
    // getVideo() Returns the video ID. Works only for VODs, not live streams.
    // console.log('embed', embed, embed.getVideo(), embed.getChannel()) 
    
    // CAN LISTEN TO EVENTS

    // embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    //     var player = embed.getPlayer();
    //   console.log(player)
    //     player.play();
    //   })
    // })
    // document.body.appendChild(twScript)
  // }

  render () {
    return(
      <div className="home">
        <h2>LE STREAM</h2>
        <div className="twitch">
          <div id="twitch-embed"></div>
        </div>
        <h2>LA CHAINE YOUTUBE</h2>
        <div className="youtube">          
          <div className="youtube-embed">
            <iframe src="http://www.youtube.com/embed/videoseries?list=UUfo3T5OUV2VMoyLqtrQR33g"></iframe>
          </div>   
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home



