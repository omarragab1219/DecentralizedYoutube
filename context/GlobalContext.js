import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const router = useRouter();
  const [sideBarOpen, setSideBarOpen] = useState(true);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setSideBarOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
  }, []);
  return (
    <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
