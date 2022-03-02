import styles from "./VideoDescriptionSection.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const VideoDescriptionSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userDescriptionSubscribeContainer}>
        <div className={styles.imageCreatorSubsContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src="https://www.licany.org/wp-content/uploads/2018/10/male.jpg"
              alt=""
            />
          </div>
          <div>
            <h4 className={styles.creator}>Dude Perfect</h4>
            <p className={styles.subs}>57.1M subscribers</p>
          </div>
        </div>
        <button className={styles.subBtn}>SUBSCRIBE</button>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          obcaecati temporibus tenetur porro culpa, aspernatur quam rerum
          minima, non architecto quibusdam, delectus facilis voluptatibus
          dolores unde ab omnis voluptatem debitis!
        </p>
      </div>
    </div>
  );
};

export default VideoDescriptionSection;
