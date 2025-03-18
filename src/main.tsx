import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";

import emailjs from "@emailjs/browser";

import { LoadingScreen } from "components/loadingScreen";
import { Navbar } from "components/navbar";
import { ValidateEnv } from "components/wrappers";

import { LayoutProvider } from "context/layout";
import { Home } from "pages";

import "index.css";

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    id: "app",
    throttle: 30_000,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ValidateEnv>
      <LayoutProvider>
        <PrimeReactProvider>
          <Navbar />
          <LoadingScreen>
            <Home />
          </LoadingScreen>
        </PrimeReactProvider>
      </LayoutProvider>
    </ValidateEnv>
  </StrictMode>
);
