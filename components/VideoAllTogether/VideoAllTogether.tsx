import styles from "./VideoAllTogether.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import VideoMain from "../VideoMain/VideoMain";
import VideoRecommendationList from "../VideoRecommendationList/VideoRecommendationList";
import VideoCommentList from "../VideoCommentList/VideoCommentList";
import VideoInfo from "../VideoInfo/VideoInfo";

const VideoAllTogether = () => {
  return (
    <div className={styles.container}>
      <VideoMain />
      <VideoInfo />
      <VideoCommentList />
    </div>
  );
};

export default VideoAllTogether;
