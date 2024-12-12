import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ url, title }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => setPlaying((prev) => !prev);

  const handleSpeedChange = (rate) => {
    setPlaybackRate(rate);
  };

  const handleProgress = (progressState) => {
    setProgress(progressState.played * 100);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          playbackRate={playbackRate}
          width="100%"
          height="100%"
          onProgress={handleProgress}
          controls={false} // Custom controls
        />
      </div>
      <div className={styles.controls}>
        <button onClick={togglePlay} className={styles.button}>
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={() => handleSpeedChange(1)} className={styles.button}>
          1x
        </button>
        <button
          onClick={() => handleSpeedChange(1.5)}
          className={styles.button}
        >
          1.5x
        </button>
        <button onClick={() => handleSpeedChange(2)} className={styles.button}>
          2x
        </button>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
