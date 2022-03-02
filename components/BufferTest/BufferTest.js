import styles from "./BufferTest.module.css";
import React, { useState, useEffect, useRef } from "react";

const BufferTest = () => {
  const videoRef = useRef();
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  return (
    <div className={styles.container}>
      <video src="" ref={videoRef} id="video"></video>
    </div>
  );
};

export default BufferTest;
