import { FC, ReactNode, useState } from "react";

import { GlobalContext } from "context/global";
import { Sections } from "interface/enums";

type GlobalProviderProps = {
  children: ReactNode | ReactNode[];
};

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<Sections>(Sections.HOME);

  const value = {
    currentSection,
    updateCurrentSection: setCurrentSection,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
