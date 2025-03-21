import { FC, useCallback, useContext } from "react";

import { LayoutContext } from "context/layout";

import { BreakpointHeight } from "interface/enum/Breakpoint";
import { DivProps } from "interface/html";

type SectionTitleProps = DivProps & {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  const { mobile } = useContext(LayoutContext)!;

  const CurrentTitle = useCallback(
    () =>
      mobile ? <TitleMobile title={title} /> : <TitleDesktop title={title} />,
    [mobile, title]
  );

  return <CurrentTitle />;
};

const TitleDesktop: FC<SectionTitleProps> = ({ title }) => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  return (
    <div id={"section-title"} className={"px-5 py-3 w-3/4 select-none"}>
      <p
        className={`
            pb-2 font-extralight
            border-b-4 border-chocolate-cosmos
            ${breakpointHeight <= BreakpointHeight.SM && "text-5xl"}
            ${
              breakpointHeight > BreakpointHeight.SM &&
              breakpointHeight < BreakpointHeight.LG &&
              "text-6xl"
            }
            ${breakpointHeight >= BreakpointHeight.LG && "text-7xl"}
        `}
      >
        {title}
      </p>
    </div>
  );
};

const TitleMobile: FC<SectionTitleProps> = ({ title }) => (
  <div
    id={"section-title"}
    className={"pt-5 w-4/5 mx-auto text-center select-none"}
  >
    <p
      className="
          pb-2 mb-2
          font-extralight text-5xl
          border-b-6 border-chocolate-cosmos
        "
    >
      {title}
    </p>
  </div>
);

export default SectionTitle;
