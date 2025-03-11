import { useEffect, useState } from "react";

import { ComponentWithChildren } from "interface/html";

import { LayoutContext } from "context/layout";

import { useWindow } from "hook/useWindow";
import { useBreakpoints } from "hook/useBreakpoints";

const LayoutProvider: ComponentWithChildren = ({ children }) => {
  const windowSize = useWindow();
  const { height: breakpointHeight, width: breakpointWidth } =
    useBreakpoints(windowSize);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    setMobile(windowSize.innerHeight > windowSize.innerWidth);
  }, [windowSize]);

  const value = {
    navbarHeight,
    setNavbarHeight,
    currentBreakpoint: {
      height: breakpointHeight,
      width: breakpointWidth,
    },
    mobile,
    window: windowSize,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
