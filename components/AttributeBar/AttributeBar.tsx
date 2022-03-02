import styles from "./AttributeBar.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const data = [
  "All",
  "News",
  "Music",
  "NFT",
  "BlockChain",
  "ETH",
  "OpenZeppelin",
  "Crypto",
  "Gaming",
  "Tutorial",
  "Outer Space",
  "Dapp",
  "Money",
  "Solana",
  "AWS",
  "Python",
  "JavaScript",
  "Docker",
  "Google",
  "Apple",
  "Reddit",
  "Discord",
  "Gaming",
  "Tutorial",
  "Outer Space",
  "Dapp",
  "Money",
  "Solana",
  "AWS",
  "Python",
  "JavaScript",
  "Docker",
  "Google",
  "Apple",
  "Reddit",
  "Discord",
  "Google",
  "Apple",
  "Reddit",
  "Discord",
  "Google",
  "Apple",
  "Reddit",
  "Discord",
];

const AttributeBar = () => {
  const renderAttributeList = () => {
    return data.map((attribute, i) => {
      return (
        <div key={i} className={styles.attribute}>
          {attribute}
        </div>
      );
    });
  };
  return (
    <div className={styles.container0}>
      <div className={styles.container}>{renderAttributeList()}</div>
    </div>
  );
};

export default AttributeBar;
