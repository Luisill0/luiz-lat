import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";

import { LoadingScreen } from "components/loadingScreen";
import { LayoutProvider } from "context/layout";
import { Home } from "pages";

import "index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutProvider>
      <PrimeReactProvider>
        <LoadingScreen>
          <Home />
        </LoadingScreen>
      </PrimeReactProvider>
    </LayoutProvider>
  </StrictMode>
);
