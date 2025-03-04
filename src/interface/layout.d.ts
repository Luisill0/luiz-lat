export type WindowSize = {
  innerHeight: number;
  innerWidth: number;
};

export type LayoutContextType = {
  navbarHeight: number;
  setNavbarHeight: (navbarHeight: number) => void;
  mobile: boolean;
  window: WindowSize;
};
