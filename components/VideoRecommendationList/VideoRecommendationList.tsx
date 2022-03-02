import styles from "./VideoRecommendationList.module.css";
import VideoRecommendation from "../VideoRecommendation/VideoRecommendation";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const VideoRecommendationList = () => {
  return (
    <div className={styles.container}>
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
      <VideoRecommendation />
    </div>
  );
};

export default VideoRecommendationList;
