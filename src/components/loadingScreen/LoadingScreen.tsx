import { Reducer, useEffect, useReducer, useRef } from "react";

import { DinoWalking } from "assets";
import { useCustomEvent } from "hook/useListener";
import { ComponentWithChildren } from "interface/html";
import { generateRandomInterval } from "utils/random";

import ProgressBar from "./Progressbar";

type ReducerState = {
  timeStarted: number;
  timeElapsed: number;
  maxAge: number;
  loading: boolean;
};

type ReducerAction = {
  type: string;
};

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  if (action.type === "update_time") {
    return {
      ...state,
      timeElapsed: Date.now() - state.timeStarted,
      loading: state.timeElapsed < state.maxAge,
    };
  }
  throw Error("Unknown action");
};

const LoadingScreen: ComponentWithChildren = ({ children }) => {
  const { dispatchCustomEvent } = useCustomEvent();

  const [state, dispatch] = useReducer(reducer, {
    timeStarted: Date.now(),
    timeElapsed: 0,
    maxAge: generateRandomInterval(4_000, 8_000),
    loading: true,
  });

  const gifRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "update_time" });
    }, generateRandomInterval(10, 300));

    if (!state.loading) {
      clearInterval(interval);
      setTimeout(() => dispatchCustomEvent("loading-finished"), 400);
    }
    return () => clearInterval(interval);
  });

  return (
    <>
      <div
        className={`
            absolute top-0 left-0
            bg-magnolia
            flex flex-col items-center justify-center
            overflow-hidden
            h-[100vh] w-[100vw]
            ${state.loading && "z-20"}
            ${!state.loading && "hidden"}
        `}
      >
        <div className="relative flex justify-center">
          <img
            ref={gifRef}
            src={DinoWalking}
            width={200}
            style={{
              transform: "scaleX(-1)",
              maxWidth: "30vw",
            }}
          />
          <a
            className="absolute w-fit h-fit text-[1rem]"
            href="https://www.behance.net/gallery/74597569/Dino-animation"
            target="_blank"
            rel="noreferrer"
            style={{
              left: (gifRef.current?.clientWidth ?? 0) * 0.75,
              bottom: (gifRef.current?.clientHeight ?? 0) * 0.1,
            }}
          >
            &copy;
          </a>
        </div>
        <ProgressBar timeElapsed={state.timeElapsed} maxAge={state.maxAge} />
      </div>
      {!state.loading && children}
    </>
  );
};

export default LoadingScreen;
