import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";

import emailjs from "@emailjs/browser";

import { Footer } from "components/footer";
import { LoadingScreen } from "components/loadingScreen";
import { Navbar } from "components/navbar";
import { ValidateEnv } from "components/wrappers";

import { LayoutProvider } from "context/layout";

const Home = lazy(() => import("pages/Home"));

import "index.css";
import LoadingWrapper from "components/wrappers/LoadingWrapper";

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
          <LoadingWrapper>
            <Navbar />
            <LoadingScreen />
            <Home />
            <Footer />
          </LoadingWrapper>
        </PrimeReactProvider>
      </LayoutProvider>
    </ValidateEnv>
  </StrictMode>
);
