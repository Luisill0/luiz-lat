export type LayoutState = {
  navbar: boolean;
};

export type LayoutContextType = {
  state: LayoutState;
  updateState: (state: LayoutState) => void;
};
