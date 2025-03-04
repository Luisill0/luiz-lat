import { Sections } from "./enums";

export type GlobalContextType = {
  currentSection: Sections;
  updateCurrentSection: (newSection: Sections) => void;
};
