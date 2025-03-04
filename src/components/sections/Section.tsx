import { FC, useContext } from "react";

import { LayoutContext } from "context/layout";
import { DivProps } from "interface/html";

type SectionProps = DivProps;

const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  const { navbarHeight } = useContext(LayoutContext)!;

  return (
    <div
      {...props}
      className={"relative min-h-[100vh] -z-10 " + className}
      style={{
        paddingTop: navbarHeight,
        transition: "all 1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default Section;
