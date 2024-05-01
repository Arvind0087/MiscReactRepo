import React, { useEffect, useRef } from "react";
import videojs from "video.js"; // Import video.js

export default function MediaElementJs(props) {
  const videoRef = useRef(null);
  useEffect(() => {
    const { sources, ...options } = props;
    videojs(videoRef?.current, options, function () { // Use videojs directly
      window.player = this;
      this.updateSrc(sources);
    });
    return () => {
      window.player && window.player.dispose();
    };
  }, []);

  var player = videojs('player', {
    plugins: {
      videoJsResolutionSwitcher: {
        default: 'low',
        dynamicLabel: true
      }
    }
  });
  player.updateSrc([
    {
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
      res: 480,
      label: 'SD'
    },
    {
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
      res: 720,
      label: 'HD'
    },
  ])

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ borderRadius: 10, overflow: "hidden" }}>
        <video id="player" ref={videoRef} className="video-js vjs-default-skin"></video>
      </div>
    </div>
  );
}
