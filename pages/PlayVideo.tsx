import styles from "../styles/PlayVideo.module.css";
import VideoAllTogether from "../components/VideoAllTogether/VideoAllTogether";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import VideoRecommendationList from "../components/VideoRecommendationList/VideoRecommendationList";

const PlayVideo = () => {
  return (
    <div className={styles.container0}>
      <div className={styles.container}>
        <VideoAllTogether />
        <VideoRecommendationList />
      </div>
    </div>
  );
};

export default PlayVideo;
