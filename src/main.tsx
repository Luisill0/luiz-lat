import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LoadingScreen } from "components/loadingScreen";
import { Home } from "pages";

import "index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingScreen>
      <Home />
    </LoadingScreen>
  </StrictMode>
);
