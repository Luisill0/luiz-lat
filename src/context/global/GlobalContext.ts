import { createContext } from "react";
import { GlobalContextType } from "interface/global";

export const GlobalContext = createContext<GlobalContextType | null>(null);
