export type LayoutState = {
  navbar: boolean;
  mobile: boolean;
};

export type WindowSize = {
  innerHeight: number;
  innerWidth: number;
};

export type LayoutContextType = {
  state: LayoutState;
  updateState: Dispatch<SetStateAction<LayoutState>>;
};
