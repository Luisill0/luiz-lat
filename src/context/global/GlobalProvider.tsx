import { useState } from "react";

import { GlobalContext } from "context/global";

import { Sections } from "interface/enums";
import { ComponentWithChildren } from "interface/html";

const GlobalProvider: ComponentWithChildren = ({ children }) => {
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
