import styles from "./MiniSideBar.module.css";
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useRouter } from "next/router";

const MiniSideBar = () => {
  const router = useRouter();
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);

  // if (sideBarOpen === false) return <div className={styles.container}>hi</div>;

  // if (sideBarOpen === true)
  return (
    <div
      className={`${styles.container} ${
        router.asPath === "/PlayVideo" ? styles.otherPage : null
      }`}
    >
      <div className={styles.homeContainer}>
        <svg
          className={`${styles.svg}`}
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
        </svg>
        <p>Home</p>
      </div>
      <div className={styles.exploreContainer}>
        <svg
          className={`${styles.svg}`}
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"></path>
        </svg>
        <p>Explore</p>
      </div>
      <div className={styles.SubscriptionsContainer}>
        <svg
          className={`${styles.svg}`}
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
        </svg>
        <p>Subscriptions</p>
      </div>
      <div className={styles.libraryContainer}>
        <svg
          className={`${styles.svg}`}
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
        </svg>
        <p>Library</p>
      </div>
    </div>
  );
};

export default MiniSideBar;
