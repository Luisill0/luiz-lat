import { createContext } from "react";
import { LayoutContextType } from "interface/layout";

export const LayoutContext = createContext<LayoutContextType | null>(null);
