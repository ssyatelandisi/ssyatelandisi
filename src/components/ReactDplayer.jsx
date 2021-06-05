import DPlayer from "react-dplayer";
import { React, Component } from "react";
class ReactDplayer extends Component {
  render() {
    return (
      <DPlayer
        optons={{
          screenshot: true,
          hotkey: true,
          airplay: true,
          volume: 1.0,
          playbackSpeed: [0.5, 0.75, 1.0, 1.25, 1.5],
          video: {
            url: "https://ssyatelandisi.gitlab.io/doraemon/source.m3u8",
            pic: "https://ssyatelandisi.gitlab.io/doraemon/pic.jpg",
            type: "hls",
          },
        }}
      />
    );
  }
}

export default ReactDplayer;
