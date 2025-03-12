import { useCallback, useState } from "react";

import { ComponentWithChildren } from "interface/html";

import { LayoutContext } from "context/layout";

import { useWindowSize } from "hook/useWindowSize";
import { useBreakpoints } from "hook/useBreakpoints";

const LayoutProvider: ComponentWithChildren = ({ children }) => {
  const windowSize = useWindowSize();
  const breakpoints = useBreakpoints(windowSize);

  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  const getMobile = useCallback(
    () => windowSize.innerHeight > windowSize.innerWidth,
    [windowSize]
  );

  const value = {
    navbarHeight,
    setNavbarHeight,
    currentBreakpoint: {
      height: breakpoints.height,
      width: breakpoints.width,
    },
    mobile: getMobile(),
    window: windowSize,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
