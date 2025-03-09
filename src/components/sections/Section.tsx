import { FC, PropsWithChildren, useContext } from "react";

import { LayoutContext } from "context/layout";
import { DivProps } from "interface/html";

type SectionProps = DivProps & PropsWithChildren;

const Section: FC<SectionProps> = ({ children, ...props }) => {
  const { navbarHeight, window } = useContext(LayoutContext)!;
  const { id, style, className } = props;

  return (
    <div
      {...props}
      id="section"
      className={`relative box-border -z-10 ${className}`}
      style={{
        ...style,
        minHeight: window.innerHeight,
      }}
    >
      <div
        id={id}
        className="h-[1px] w-full absolute offset-anchor"
        style={{ top: -navbarHeight }}
      ></div>
      {children}
    </div>
  );
};

export default Section;
