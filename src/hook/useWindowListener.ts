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
