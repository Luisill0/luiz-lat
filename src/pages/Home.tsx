/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useContext, useState, WheelEvent, WheelEventHandler } from "react";
import { GlobalContext } from "context/global";

import { Sections } from "interface/enums";
import { DivProps } from "interface/html";
import {
  AboutSection,
  ContactSection,
  HomeSection,
  ProjectsSection,
  Section,
} from "components/sections";

const Home: FC = () => {
  const { currentSection, updateCurrentSection } = useContext(GlobalContext)!;
  const [scrollable, setScrollable] = useState(true);

  const onScroll: WheelEventHandler<HTMLDivElement> = (
    ev: WheelEvent<HTMLDivElement>
  ) => {
    if (!scrollable) return;
    setScrollable(false);
    // wheelDelta doesnt appear in whatever Typescript declaration NativeEvent has
    const direction = (ev.nativeEvent as any).wheelDelta > 0 ? -1 : 1;

    let newIndex = currentSection + direction;
    newIndex = newIndex < 0 ? 0 : newIndex > 3 ? 3 : newIndex;

    // enum related
    const newSection = getSectionFromIndex(newIndex);
    updateCurrentSection(newSection);
    setTimeout(() => setScrollable(true), 1000);
  };

  const getSectionFromIndex = (index: number): Sections =>
    Sections[Sections[index] as any] as unknown as Sections;

  const getSectionProps = (): DivProps => {
    const props: DivProps = {
      id: "",
      className: "",
    };
    switch (currentSection) {
      case Sections.HOME:
        props.id = "home";
        props.className = "bg-amber-300";
        break;
      case Sections.ABOUT:
        props.id = "about";
        props.className = "bg-blue-300";
        break;
      case Sections.PROJECTS:
        props.id = "projects";
        props.className = "bg-green-300";
        break;
      case Sections.CONTACT:
        props.id = "contact";
        props.className = "bg-red-300";
        break;
    }
    return props;
  };

  return (
    <div onWheel={onScroll}>
      <Section {...getSectionProps()}>
        {Sections[currentSection]} scroll: {`${scrollable}`}
        {currentSection === Sections.HOME && <HomeSection />}
        {currentSection === Sections.ABOUT && <AboutSection />}
        {currentSection === Sections.PROJECTS && <ProjectsSection />}
        {currentSection === Sections.CONTACT && <ContactSection />}
      </Section>
    </div>
  );
};

export default Home;
