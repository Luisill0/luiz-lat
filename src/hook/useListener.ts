import { useEffect } from "react";

export const useWindowListener = (
  eventType: keyof WindowEventMap,
  listener: EventListener
) => {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => window.removeEventListener(eventType, listener);
  }, [eventType, listener]);
};

export const useDocumentListener = (
  eventType: string,
  listener: EventListener | (() => void)
) => {
  useEffect(() => {
    document.addEventListener(eventType, listener);
    return () => document.removeEventListener(eventType, listener);
  }, [eventType, listener]);
};

export const useCustomEvent = () => {
  const dispatchCustomEvent = (eventType: string) => {
    const event = new CustomEvent(eventType);
    document.dispatchEvent(event);
  };

  return { dispatchCustomEvent };
};
