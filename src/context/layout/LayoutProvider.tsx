import { useEffect, useState } from "react";

import { LayoutContext } from "context/layout";
import { useWindow } from "hook/useWindow";
import { ComponentWithChildren } from "interface/html";

const LayoutProvider: ComponentWithChildren = ({ children }) => {
  const windowSize = useWindow();
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const { innerHeight, innerWidth } = windowSize;
    setMobile(innerHeight > innerWidth);
  }, [windowSize]);

  const value = {
    navbarHeight,
    setNavbarHeight,
    mobile,
    window: windowSize,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
