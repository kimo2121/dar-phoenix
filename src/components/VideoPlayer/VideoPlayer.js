import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = ({ item }) => {
  return (
    <iframe
      width="727"
      height="409"
      src={item.url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
export default VideoPlayer;
