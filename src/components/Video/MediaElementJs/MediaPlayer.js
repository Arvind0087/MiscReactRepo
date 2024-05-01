import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Button, PlayerIcon } from "react-player-controls";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SettingsIcon from "@mui/icons-material/Settings";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
// import HighQualityIcon from "@material-ui/icons/HighQuality";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import StreamIcon from "@mui/icons-material/Stream";

function MediaPlayer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=Zt9iklpOJAc");
  const [playTime, setPlayTime] = useState(0);
  const [sourceChanged, setSourceChanged] = useState(false);
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  const handleQualityChange = (res) => {
    console.log("res...", res);
  };

  const handleClick = () => {
    if (playerRef.current) {
      setPlayTime(playerRef.current.getCurrentTime());
      setSourceChanged(true);
    }

    if (url === "https://www.youtube.com/watch?v=Zt9iklpOJAc") {
      setUrl("https://www.youtube.com/watch?v=Zt9iklpOJAc&vq=hd720");
    } else {
      setUrl("https://www.youtube.com/watch?v=Zt9iklpOJAc");
    }
  };

  const handleProgress = () => {
    if (sourceChanged && playerRef.current) {
      playerRef.current.seekTo(playTime);
      setSourceChanged(false);
      setPlayTime(0);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (playerContainerRef.current.requestFullscreen) {
        playerContainerRef.current.requestFullscreen();
      } else if (playerContainerRef.current.mozRequestFullScreen) {
        playerContainerRef.current.mozRequestFullScreen();
      } else if (playerContainerRef.current.webkitRequestFullscreen) {
        playerContainerRef.current.webkitRequestFullscreen();
      } else if (playerContainerRef.current.msRequestFullscreen) {
        playerContainerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // const handleSetting = () => {};

  const handleSetting = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      ref={playerContainerRef}
      style={{ width: "500px", height: "400px", margin: "auto" }}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls={false}
        width="100%"
        height="100%"
        playing={isPlaying}
        onPlaybackQualityChange={handleQualityChange}
        onProgress={handleProgress}
      />

      <div
        style={{
          // position: "absolute",
          marginTop: "-75px",
          bottom: isFullscreen ? "10px" : 0,
          // background: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "gray",
        }}
      >
        <div style={{ display: "flex" }}>
          <Button
            onClick={handlePlayPause}
            style={{
              margin: "20px 0px 0px 10px",
              background: "none",
              border: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            {!isPlaying ? (
              <PlayArrowIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />
            ) : (
              <PauseIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />
            )}
          </Button>
        </div>

        <div style={{ display: "flex" }}>
          {/*<Button
            onClick={handleSetting}
            style={{
              margin: "20px 0px 0px 10px",
              background: "none",
              border: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <SettingsIcon sx={{ color: "#fff", fontSize: "2.5rem" }} />
          </Button> */}

          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleSetting}
          >
            <SettingsIcon />
          </Button>
          <Button
            onClick={handleFullscreen}
            style={{
              margin: "20px 10px 0px 0px",
              background: "none",
              border: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            {isFullscreen ? (
              <FullscreenExit sx={{ color: "white", fontSize: "3rem" }} />
            ) : (
              <Fullscreen sx={{ color: "white", fontSize: "3rem" }} />
            )}
          </Button>
          <div style={{ position: "relative" }}>
            <div
            // style={{ position: "absolute", right: "40px", bottom: "45px" }}
            >
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ position: "absolute", right: "40px", bottom: "45px" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    {/*<HighQualityIcon fontSize="small" /> */}
                    <StreamIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Quality" />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <SlowMotionVideoIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Playback Speed" />
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaPlayer;
