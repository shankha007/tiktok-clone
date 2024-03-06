import React, { useEffect, useRef } from "react";
import Footer from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./Video.css";

export default function Video(props) {
  const { id, playing, setPlaying, url, channel, description, song, likes, shares, messages } = props;
  const videoRef = useRef(null);

  useEffect(() => {
	if (playing !== id) {
		videoRef.current.pause()
	}
}, [playing])

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
	  setPlaying(id)
    } else {
      videoRef.current.pause();
	  setPlaying(null)
    }
  };

  return (
    <div className="video">
      <video
        className="player"
        onClick={onVideoPress}
        ref={videoRef}
        loop
        src={url}
      ></video>
      <div className="bottom-controls">
        <Footer channel={channel} description={description} song={song} />
        <FooterRight likes={likes} shares={shares} messages={messages} />
      </div>
    </div>
  );
}
