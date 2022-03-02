import styles from "./HamburgerAbove.module.css";
import MiniSideBar from "../MiniSideBar/MiniSideBar";
import SideBar from "../SideBar/SideBar";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import { GlobalContext } from "../../context/GlobalContext";

const HamburgerAbove = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <div
        className={styles.hamburger}
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <MiniSideBar />
      </div>
    </div>
  );
};

export default HamburgerAbove;
