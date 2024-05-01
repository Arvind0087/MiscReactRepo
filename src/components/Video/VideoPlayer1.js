import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
function Dummy() {
  const playerRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    if (playerRef.current) {
      console.log("Player initialized:", playerRef);
    }
  }, [playerRef]);
  console.log("playerRef", playerRef);

  const changeQuality = (url) => {
    // console.log("url...", playerRef.current, playerRef?.current?.getInternalPlayer);
    if (playerRef.current && playerRef.current.getInternalPlayer) {
      playerRef.current.getInternalPlayer().src = url;
      playerRef.current.getInternalPlayer().load();
      playerRef.current.getInternalPlayer().play();
    }
  };

  console.log(
    "url...",
    playerRef.current,
    playerRef?.current?.getInternalPlayer
  );

  useEffect(() => {
    const videoElement = playerRef?.current?.getInternalPlayer();
    if (videoElement) {
      videoElement.addEventListener("mouseenter", () => setShowButtons(true));
      videoElement.addEventListener("mouseleave", () => setShowButtons(false));
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("mouseenter", () =>
          setShowButtons(true)
        );
        videoElement.removeEventListener("mouseleave", () =>
          setShowButtons(false)
        );
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "500px",
        overflow: "hidden",
      }}
      // onMouseEnter={() => setShowButtons(true)}
      // onMouseLeave={() => setShowButtons(false)}
    >
      <ReactPlayer
        ref={playerRef}
        url="https://drmn8bn2rxjbk.cloudfront.net/content-video_reduced_item/introduction_of_Spoken_English.mp4"
        controls
        playing
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
              type: "video/mp4",
            },
            tracks: [
              {
                kind: "captions",
                src: "https://www.example.com/captions.vtt",
                srcLang: "en",
                label: "English",
              },
            ],
          },
          youtube: {
            playerVars: { modestbranding: 1 },
          },
        }}
      />
      {showButtons && (
        <div style={{ position: "absolute", top: "0", left: 0, zIndex: 3356 }}>
          <button
            onClick={() =>
              changeQuality(
                "https://drmn8bn2rxjbk.cloudfront.net/content-video_reduced_item/introduction_of_Spoken_English.mp4"
              )
            }
          >
            720p
          </button>
          <button
            onClick={() =>
              changeQuality(
                "https://drmn8bn2rxjbk.cloudfront.net/content-video_reduced_item/introduction_of_Spoken_English.mp4"
              )
            }
          >
            1080p
          </button>
        </div>
      )}
    </div>
  );
}

export default Dummy;
