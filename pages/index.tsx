import type { NextPage } from "next";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import Test from "../components/Test/Test";
import BufferTest from "../components/BufferTest/BufferTest";
import { GlobalContext } from "../context/GlobalContext";
import AttributeBar from "../components/AttributeBar/AttributeBar";
import HomeVideoOptionList from "../components/HomeVideoOptionList/HomeVideoOptionList";

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  return (
    <div className={styles.container0}>
      <div
        className={`${styles.container} ${styles.mobileWidth}
         ${sideBarOpen ? styles.width240px : styles.width72px}`}
        // style={{ width: `calc(100vw - ${sideBarOpen ? "240px" : "72px"})` }}
      >
        <div className={styles.HomePage}>
          <AttributeBar />
          <HomeVideoOptionList />
        </div>
      </div>
    </div>
  );
};

export default Home;

//72px;
