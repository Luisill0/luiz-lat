import { FC, PropsWithChildren, useContext } from "react";

import { LayoutContext } from "context/layout";
import { DivProps } from "interface/html";

type SectionProps = DivProps &
  PropsWithChildren & {
    head?: boolean;
  };

const Section: FC<SectionProps> = ({ children, head = false, ...props }) => {
  const { window, navbarHeight } = useContext(LayoutContext)!;
  const { style, className } = props;

  return (
    <div
      {...props}
      className={`relative box-border ${className ?? ""}`}
      style={{
        ...style,
        minHeight: head
          ? window.innerHeight
          : window.innerHeight - navbarHeight + 1,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
