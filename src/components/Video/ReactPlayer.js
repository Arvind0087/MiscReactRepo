import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import screenfull from "screenfull";
import { Button, PlayerIcon } from "react-player-controls";

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerRef.current.wrapper);
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        playing={playing}
        // controls={true}
      />
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 }}
      >
        <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
        <Button onClick={handleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
