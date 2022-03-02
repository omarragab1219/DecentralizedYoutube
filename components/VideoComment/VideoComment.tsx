import styles from "./VideoComment.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const VideoComment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profilePicContainer}>
        <img
          className={styles.profilePic}
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.creatorAndDateContainer}>
          <h4>Relaxing Nature In 4K</h4>
          <p className={styles.date}>1 month ago</p>
        </div>

        <p className={styles.comment}>
          This is so relaxing... Thank you for making this! I could watch this
          all day!
        </p>
        <div className={styles.likeOrDislikeContainer}>
          <svg
            className={styles.thumbsUp}
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"></path>
          </svg>
          <div className={styles.thumbCount}>0</div>

          <svg
            className={styles.thumbsDown}
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"></path>
          </svg>

          <div className={styles.reply}>REPLY</div>
        </div>
      </div>
    </div>
  );
};

export default VideoComment;
