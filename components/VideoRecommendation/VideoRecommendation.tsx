import styles from "./VideoRecommendation.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const VideoRecommendation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.test}>
        <img
          className={styles.image}
          src="https://images2.alphacoders.com/720/thumb-1920-72092.jpg"
          alt=""
        />
      </div>
      <div className={styles.test2}>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>
            FLYING OVER ICELAND (4K UHD) - Relaxing Music Along...
          </h4>
        </div>
        <div className={styles.creatorAndViewContainer}>
          <div>
            <p className={styles.creator}>creator</p>
          </div>
          <div>
            <p className={styles.viewsAndTime}>views --------how long ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRecommendation;
