import { FC, useEffect, useRef, useState } from "react";

type ProgressBarProps = {
  maxAge: number;
  timeElapsed: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ maxAge, timeElapsed }) => {
  const [percentage, setPercentage] = useState(0);
  const [progessWidth, setProgressWitdh] = useState(0);

  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPercentage(() => {
      const percentage = Math.floor((timeElapsed / maxAge) * 100);
      return percentage >= 100 ? 100 : percentage;
    });
    return () => setPercentage(0);
  }, [timeElapsed, maxAge]);

  useEffect(() => {
    if (!barRef.current) return;
    setProgressWitdh(barRef.current.clientWidth * (percentage / 100));
  }, [barRef, percentage]);

  return (
    <div
      ref={barRef}
      className="
        relative
        w-1/2 h-[3rem]
        border-1 border-primary
        rounded-3xl
        text-center text-primary
      "
    >
      <span
        className="
            text-2xl
            flex items-center
            absolute
            w-fit
            left-0 right-0 top-0 bottom-0
        "
        style={{
          marginInline: "auto",
        }}
      >
        {percentage}%
      </span>
      <div
        id="progress"
        className="rounded-3xl"
        style={{
          height: barRef.current?.clientHeight ?? 0,
          width: progessWidth,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
