import { BreakpointHeight, BreakpointWidth } from "./enum/Breakpoint";

export type WindowSize = {
  innerHeight: number;
  innerWidth: number;
};

export type ScreenBreakpoint = {
  height: BreakpointHeight;
  width: BreakpointWidth;
};

export type LayoutContextType = {
  navbarHeight: number;
  setNavbarHeight: (navbarHeight: number) => void;
  currentBreakpoint: ScreenBreakpoint;
  mobile: boolean;
  window: WindowSize;
};
