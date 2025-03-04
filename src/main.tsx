import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";

import { LoadingScreen } from "components/loadingScreen";
import { Navbar } from "components/navbar";

import { GlobalProvider } from "context/global";
import { LayoutProvider } from "context/layout";
import { Home } from "pages";

import "index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <LayoutProvider>
        <PrimeReactProvider>
          <Navbar />
          <LoadingScreen>
            <Home />
          </LoadingScreen>
        </PrimeReactProvider>
      </LayoutProvider>
    </GlobalProvider>
  </StrictMode>
);
