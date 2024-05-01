import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

function MediaPlayer() {
  return (
    <div className="App">
      <video
        id="vid1"
        class="video-js vjs-default-skin"
        controls
        autoplay
        width="640"
        height="264"
        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}], "youtube": { "iv_load_policy": 1 } }'
      ></video>
    </div>
  );
}

export default MediaPlayer;
