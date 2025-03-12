import { FC, useContext } from "react";

import { LayoutContext } from "context/layout";

import { BreakpointHeight } from "interface/enum/Breakpoint";
import { DivProps } from "interface/html";

type SectionTitleProps = DivProps & {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  id,
  className,
  ...props
}) => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  return (
    <div
      id={id ?? "section-title"}
      className={className ?? "px-5 py-3 w-3/4 select-none"}
      {...props}
    >
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

export default SectionTitle;
