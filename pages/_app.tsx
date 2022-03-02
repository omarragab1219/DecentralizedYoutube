import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { useState, useContext } from "react";
import MiniSideBar from "../components/MiniSideBar/MiniSideBar";
import { GlobalContext, GlobalProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <div>
        <NavBar />
        <SideBar />
        <MiniSideBar />
        <Component {...pageProps} />
      </div>
    </GlobalProvider>
  );
}

export default MyApp;
