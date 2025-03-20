import { useDocumentListener } from "hook/useListener";
import { ComponentWithChildren } from "interface/html";
import { useEffect } from "react";

const LoadingWrapper: ComponentWithChildren = ({ children }) => {
  const onLoadingFinished = () => {
    window.onscroll = () => {};
  };

  useEffect(() => {
    window.onscroll = () => window.scrollTo(0, 0);
    return () => {
      window.onscroll = () => {};
    };
  }, []);

  useDocumentListener("loading-finished", onLoadingFinished);

  return children;
};

export default LoadingWrapper;
