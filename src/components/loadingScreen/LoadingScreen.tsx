import {
  FC,
  ReactNode,
  Reducer,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import { DinoWalking } from "assets";
import { LayoutContext } from "context/layout";
import { generateRandomInterval } from "utils/random";

import ProgressBar from "./Progressbar";

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

type LoadingScrenProps = {
  children?: ReactNode | ReactNode[];
};

const LoadingScreen: FC<LoadingScrenProps> = ({ children }) => {
  const { state: layoutState, updateState: updateLayoutState } =
    useContext(LayoutContext)!;

  const [maxAge] = useState(generateRandomInterval(4_000, 8_000));
  const [loadingFinished, setLoadingFinished] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    timeStarted: Date.now(),
    timeElapsed: 0,
  });

  const onLoadingFinished = useCallback(() => {
    setLoadingFinished(true);
    updateLayoutState({ ...layoutState, navbar: true });
  }, [layoutState, updateLayoutState]);

  const gifRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "update_time" });
    }, generateRandomInterval(10, 300));
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (state.timeElapsed > maxAge) {
      setTimeout(onLoadingFinished, 2000);
    }
  }, [maxAge, state, onLoadingFinished]);

  return (
    <>
      <div
        className={`
            flex flex-col items-center justify-center
            overflow-hidden
            h-[100vh]
            ${loadingFinished && "hidden"}
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
      {children}
    </>
  );
};

export default LoadingScreen;
