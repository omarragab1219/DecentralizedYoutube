import styles from "./VideoMain.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const VideoMain = () => {
  return (
    <div className={styles.container}>
      <video
        type="video/mp4"
        className={styles.video}
        src="https://ipfs.infura.io/ipfs/QmfG6K5HDpyYvoA94PyrPXa26cwrMasjX5BHmDPFzxPaqv"
        controls
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default VideoMain;
