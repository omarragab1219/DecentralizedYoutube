import styles from "./VideoInfo.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import VideoTitleLikesSection from "../VideoTitleLikesSection/VideoTitleLikesSection";
import VideoDescriptionSection from "../VideoDescriptionSection/VideoDescriptionSection";

const VideoInfo = () => {
  return (
    <div className={styles.container}>
      <VideoTitleLikesSection />
      <VideoDescriptionSection />
    </div>
  );
};

export default VideoInfo;
