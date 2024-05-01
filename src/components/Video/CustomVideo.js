import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from 'react-player/youtube';
import { Button, PlayerIcon } from "react-player-controls";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import screenfull from "screenfull";

function CustomVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(playerRef.current.wrapper);
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleNext = () => {
    console.log("Next button clicked");
  };

  return (
    <div>
      <div
        style={{
          display: isFullscreen ? "none" : "block",
          position: "relative",
          // width: isFullscreen ? "100%" : "600px",
          // height: isFullscreen ? "100vh" : "400px",
        }}
      >
      <ReactPlayer 
      ref={playerRef}
      url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
      playing={isPlaying}
      controls={true}
    />
        <div
          style={{
            // position: "absolute",
            marginTop: "-55px",
            bottom: isFullscreen ? "10px" : 0,
            // background: "rgba(0, 0, 0, 0.5)",
            zIndex: 10000,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={handlePlayPause}
            style={{
              margin: "0 10px",
              width: "40px",
              height: "50px",
              border: "none",
            }}
          >
            {isPlaying ? <PlayerIcon.Pause /> : <PlayerIcon.Play />}
          </Button>
          <Button
            onClick={handleNext}
            style={{ margin: "0 10px", width: "40px", height: "50px" }}
          >
            <PlayerIcon.Next />
          </Button>
          <Button
            onClick={handleMuteUnmute}
            style={{ margin: "0 10px", width: "40px", height: "50px" }}
          >
            {isMuted ? <PlayerIcon.SoundOff /> : <PlayerIcon.SoundOn />}
          </Button>
          <Button
            onClick={handleFullscreen}
            style={{ margin: "0 10px", width: "40px", height: "50px" }}
          >
            {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
          </Button>
        </div>
      </div>

      {isFullscreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 9999,
          }}
        >
          <ReactPlayer
            ref={playerRef}
            playing={isPlaying}
            muted={isMuted}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width="100%"
            height="100%"
          />
          <div
            style={{
              position: "absolute",
              bottom: isFullscreen ? "10px" : 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 10000,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handlePlayPause}
              style={{ margin: "0 10px", width: "40px", height: "50px" }}
            >
              {isPlaying ? <PlayerIcon.Pause /> : <PlayerIcon.Play />}
            </Button>
            <Button
              onClick={handleNext}
              style={{ margin: "0 10px", width: "40px", height: "50px" }}
            >
              <PlayerIcon.Next />
            </Button>
            <Button
              onClick={handleMuteUnmute}
              style={{ margin: "0 10px", width: "40px", height: "50px" }}
            >
              {isMuted ? <PlayerIcon.SoundOff /> : <PlayerIcon.SoundOn />}
            </Button>
            <Button
              onClick={handleFullscreen}
              style={{ margin: "0 10px", width: "40px", height: "50px" }}
            >
              {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomVideo;
