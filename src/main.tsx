import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LoadingScreen } from "components/loadingScreen";
import { LayoutProvider } from "context/layout";
import { Home } from "pages";

import "index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutProvider>
      <LoadingScreen>
        <Home />
      </LoadingScreen>
    </LayoutProvider>
  </StrictMode>
);
