import { FC, PropsWithChildren, useContext } from "react";

import { LayoutContext } from "context/layout";
import { DivProps } from "interface/html";

type SectionProps = DivProps & PropsWithChildren;

const Section: FC<SectionProps> = ({ children, ...props }) => {
  const { window } = useContext(LayoutContext)!;
  const { style, className } = props;

  return (
    <div
      {...props}
      className={`relative box-border ${className ?? ""}`}
      style={{
        ...style,
        minHeight: window.innerHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
