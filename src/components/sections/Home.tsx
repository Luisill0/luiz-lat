import { FC, useContext } from "react";

import { Section } from "components/sections";
import { LayoutContext } from "context/layout";

const HomeSection: FC = () => {
  const { navbarHeight } = useContext(LayoutContext)!;

  return (
    <Section id="home" className="bg-amber-300">
      <div style={{ paddingTop: navbarHeight }}>Welcome home!</div>
    </Section>
  );
};

export default HomeSection;
