import styles from "./VideoCommentList.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import VideoComment from "../VideoComment/VideoComment";

const VideoCommentList = () => {
  return (
    <div className={styles.container}>
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
      <VideoComment />
    </div>
  );
};

export default VideoCommentList;
