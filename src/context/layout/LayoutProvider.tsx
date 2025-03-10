import { useEffect, useState } from "react";

import { ComponentWithChildren } from "interface/html";
import { ScreenBreakpoint, WindowSize } from "interface/layout";

import { LayoutContext } from "context/layout";
import { useWindow } from "hook/useWindow";
import { BreakpointHeight, BreakpointWidth } from "interface/enum/Breakpoint";

const LayoutProvider: ComponentWithChildren = ({ children }) => {
  const windowSize = useWindow();
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<ScreenBreakpoint | null>(null);
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const { innerHeight, innerWidth } = windowSize;
    setMobile(innerHeight > innerWidth);
    updateCurrentBreakpoint(windowSize);
  }, [windowSize]);

  const updateCurrentBreakpoint = (windowSize: WindowSize) => {
    const { innerHeight, innerWidth } = windowSize;
    const height =
      innerHeight >= 800
        ? BreakpointHeight.XL
        : innerHeight >= 700
        ? BreakpointHeight.LG
        : innerHeight >= 650
        ? BreakpointHeight.MD
        : innerHeight >= 600
        ? BreakpointHeight.SM
        : BreakpointHeight.XS;

    const width =
      innerWidth >= 1200
        ? BreakpointWidth.XL
        : innerWidth >= 992
        ? BreakpointWidth.LG
        : innerWidth >= 768
        ? BreakpointWidth.MD
        : innerWidth >= 576
        ? BreakpointWidth.SM
        : BreakpointWidth.XS;

    setCurrentBreakpoint({ height, width });
  };

  if (!currentBreakpoint) return <></>;

  const value = {
    navbarHeight,
    setNavbarHeight,
    currentBreakpoint,
    mobile,
    window: windowSize,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
