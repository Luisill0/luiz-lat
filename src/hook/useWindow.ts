import { WindowSize } from "interface/layout";
import { useState, useEffect } from "react";

const getWindowSize = (): WindowSize => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };
};

export const useWindow = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize());

  useEffect(() => {
    const onWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return {
    windowSize,
  };
};
