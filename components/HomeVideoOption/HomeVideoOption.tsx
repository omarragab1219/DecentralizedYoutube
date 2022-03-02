import styles from "./HomeVideoOption.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import Link from "next/link";

const HomeVideoOption = () => {
  return (
    <Link href={"/PlayVideo"}>
      <div className={styles.VideOptionContainer}>
        <img
          className={styles.thumbnail}
          src="https://wallpapercave.com/wp/wp4676569.jpg"
          alt=""
        />
        {/* -------------------------------------------------------------------------- */}
        <div className={styles.AllTextContainer}>
          <div className={styles.profPicAndTitleContainer}>
            <div className={styles.profilePicContainer}>
              <img
                src="https://ghantee.com/wp-content/uploads/2020/10/shiv-god-hd-wallpaper-cosmic-energy-576x1024.jpg"
                alt=""
                className={styles.profilePic}
              />
            </div>
          </div>
          <div>
            <h3 className={styles.title}>
              Title Goes here gksfjdsf fssdf fs fdsfdsg k sds sf sf gdw
            </h3>
            <div className={styles.creatorDateRatingContainer}>
              <div className={styles.creatorDateContainer}>
                <p className={styles.creator}>Dude Perfect</p>
                <div className={styles.viewsAndDateContainter}>
                  <p className={styles.views}>46.2M views</p>
                  <p className={styles.date}>1 month ago</p>
                </div>
              </div>
              <p className={styles.rating}>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeVideoOption;

{
  /* <div>
          <h3 className={styles.title}>
            Title Goes here gksfjdsf fssdf fs fdsfdsg k
          </h3>
          <div className={styles.creatorDateRatingContainer}>
            <div className={styles.creatorDateContainer}>
              <p className={styles.creator}>Creator</p>
              <p className={styles.date}>Date Posted</p>
            </div>
            <p className={styles.rating}>Rating</p>
          </div>
        </div> */
}
