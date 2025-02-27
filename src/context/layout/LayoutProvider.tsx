import { FC, ReactNode, useEffect, useState } from "react";

import { LayoutContext } from "context/layout";
import { LayoutState } from "interface/layout";
import { useWindow } from "hook/useWindow";

type LayoutProviderProps = {
  children: ReactNode | ReactNode[];
};

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
  const { windowSize } = useWindow();
  const [state, setState] = useState<LayoutState>({
    navbar: false,
    mobile: windowSize.innerHeight > windowSize.innerWidth,
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      mobile: windowSize.innerHeight > windowSize.innerWidth,
    }));
  }, [windowSize]);

  const value = {
    state,
    updateState: setState,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
