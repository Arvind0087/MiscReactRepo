import React from "react";
import Player from "shaka-player-react";
import "shaka-player/dist/controls.css";

function ShakaPlayer() {
  let src =
    "https://drmn8bn2rxjbk.cloudfront.net/content-video_reduced_item/sentences_used_in_daily_life_part-2.mp4";
  return (
    <div style={{ width: "600px", height: "500px", margin: "auto" }}>
      {/*Youtube video not supported*/}
      <Player src={src} />
    </div>
  );
}

export default ShakaPlayer;
