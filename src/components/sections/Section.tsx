import { FC, PropsWithChildren, useCallback, useContext } from "react";

import { LayoutContext } from "context/layout";
import { DivProps } from "interface/html";

type SectionProps = DivProps &
  PropsWithChildren & {
    head?: boolean;
  };

const Section: FC<SectionProps> = ({ children, head = false, ...props }) => {
  const { window, navbarHeight } = useContext(LayoutContext)!;
  const { style, className } = props;

  const getMinHeight = useCallback(
    () => (head ? window.innerHeight : window.innerHeight - navbarHeight + 1),
    [head, window.innerHeight, navbarHeight]
  );

  return (
    <div
      {...props}
      className={`relative box-border ${className ?? ""}`}
      style={{
        ...style,
        minHeight: getMinHeight(),
      }}
    >
      {children}
    </div>
  );
};

export default Section;
