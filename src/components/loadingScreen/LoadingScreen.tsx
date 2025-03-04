import { Reducer, useEffect, useReducer, useRef, useState } from "react";

import { DinoWalking } from "assets";
import { generateRandomInterval } from "utils/random";

import ProgressBar from "./Progressbar";
import { ComponentWithChildren } from "interface/html";

type ReducerState = {
  timeStarted: number;
  timeElapsed: number;
};

type ReducerAction = {
  type: string;
};

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  if (action.type === "update_time") {
    return {
      ...state,
      timeElapsed: Date.now() - state.timeStarted,
    };
  }
  throw Error("Unknown action");
};

const LoadingScreen: ComponentWithChildren = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [maxAge] = useState(generateRandomInterval(4_000, 8_000));

  const [state, dispatch] = useReducer(reducer, {
    timeStarted: Date.now(),
    timeElapsed: 0,
  });

  const gifRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "update_time" });
    }, generateRandomInterval(10, 300));
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.timeElapsed > maxAge) {
      setIsLoading(false);
    }
  }, [maxAge, state.timeElapsed]);

  return (
    <>
      <div
        className={`
            absolute top-0 left-0
            bg-sec
            flex flex-col items-center justify-center
            overflow-hidden
            h-[100vh] w-[100vw]
            z-20
            ${!isLoading && "hidden"}
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
        <ProgressBar timeElapsed={state.timeElapsed} maxAge={maxAge} />
      </div>
      {!isLoading && children}
    </>
  );
};

export default LoadingScreen;
