import { useCallback } from "react";

import { BreakpointHeight, BreakpointWidth } from "interface/enum/Breakpoint";
import { ScreenBreakpoint, WindowSize } from "interface/layout";

export const useBreakpoints = (windowSize: WindowSize): ScreenBreakpoint => {
  const getBreakpointHeight = useCallback(() => {
    const { innerHeight } = windowSize;
    return innerHeight >= 800
      ? BreakpointHeight.XL
      : innerHeight >= 700
      ? BreakpointHeight.LG
      : innerHeight >= 650
      ? BreakpointHeight.MD
      : innerHeight >= 600
      ? BreakpointHeight.SM
      : BreakpointHeight.XS;
  }, [windowSize]);

  const getBreakpointWidth = useCallback(() => {
    const { innerWidth } = windowSize;
    return innerWidth >= 1200
      ? BreakpointWidth.XL
      : innerWidth >= 992
      ? BreakpointWidth.LG
      : innerWidth >= 768
      ? BreakpointWidth.MD
      : innerWidth >= 576
      ? BreakpointWidth.SM
      : BreakpointWidth.XS;
  }, [windowSize]);

  return {
    height: getBreakpointHeight(),
    width: getBreakpointWidth(),
  };
};
