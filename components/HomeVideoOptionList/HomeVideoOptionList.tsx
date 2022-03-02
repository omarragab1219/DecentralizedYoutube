import styles from "./HomeVideoOptionList.module.css";
import HomeVideoOption from "../HomeVideoOption/HomeVideoOption";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const HomeVideoOptionList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridList}>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
        <div className={styles.gridItem}>
          <HomeVideoOption />
        </div>
      </div>
    </div>
  );
};

export default HomeVideoOptionList;
