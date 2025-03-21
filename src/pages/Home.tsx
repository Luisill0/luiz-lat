import { FC } from "react";

import {
  AboutSection,
  ContactSection,
  HomeSection,
  ProjectsSection,
} from "components/sections";

const Home: FC = () => {
  return (
    <div className="relative z-[10]">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
