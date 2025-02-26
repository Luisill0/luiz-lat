import { FC, ReactNode, useState } from "react";

import { LayoutContext } from "context/layout";
import { LayoutState } from "interface/layout";

type LayoutProviderProps = {
  children: ReactNode | ReactNode[];
};

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
  const [state, setState] = useState<LayoutState>({ navbar: true });

  const value = {
    state: state,
    updateState: setState,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
