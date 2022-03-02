import styles from "./NavBar.module.css";
import React, {
  useState,
  useEffect,
  FC,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";
import { GlobalContext } from "../../context/GlobalContext";
import HamburgerAbove from "../HamburgerAbove/HamburgerAbove";
import Link from "next/link";

// interface Props {
//   setSideBarOpen: Dispatch<SetStateAction<boolean>>;
//   sideBarOpen: Boolean;
// }

const NavBar = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        {/*
        --------------------------------------------------------------------------
        */}
        <li className={`${styles.li}`}>
          <div
            className={styles.hamburger}
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          {/* <HamburgerAbove /> */}
          <Link href="/">
            <div className={`${styles.logoAndTtitleContainer} ${styles}`}>
              <svg
                viewBox="0 0 90 20"
                //   preserveAspectRatio="xMidYMid meet"
                //   focusable="false"
                className={`${styles.YTlogo}`}
              >
                <path
                  d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                  fill="#FF0000"
                ></path>
                <path
                  d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                  fill="white"
                ></path>
              </svg>
              <h2 className={` ${styles.title}`}>YouTube</h2>
            </div>
          </Link>
        </li>
        {/*
        --------------------------------------------------------------------------
        */}
        <li className={`${styles.li} ${styles.searchBarAndButtonContainer}`}>
          <div className={`${styles.searchBarContainer}`}>
            <input type="text" className={`${styles.searchBar}`} />
          </div>

          <button className={`${styles.searchBtn}`}>
            <svg
              className={`${styles.searchBtnSVG}`}
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <path
                fill="white"
                d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
              ></path>
            </svg>
          </button>
        </li>
        {/*
        --------------------------------------------------------------------------
        */}
        <li className={`${styles.UploadAndProfileContainer}`}>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className={`${styles.uploadSVG}`}
          >
            <path
              fill="white"
              d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
            ></path>
          </svg>

          <div className={`${styles.notification}`}>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <path
                fill="white"
                d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
              ></path>
            </svg>
          </div>

          <svg
            className={`${styles.searchBtnSVGMobile}`}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              className={`${styles.searchBtnSVGMobilePath}`}
              fill="white"
              d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
            ></path>
          </svg>

          <div className={`${styles.profile}`}></div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
