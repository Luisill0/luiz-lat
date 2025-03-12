import { WindowSize } from "interface/layout";
import { useState } from "react";
import { useWindowListener } from "./useWindowListener";

const getWindowSize = (): WindowSize => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize());

  useWindowListener("resize", () => setWindowSize(getWindowSize()));

  return {
    innerHeight: windowSize.innerHeight,
    innerWidth: windowSize.innerWidth,
  };
};
