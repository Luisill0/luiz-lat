import { FC, useContext } from "react";

import { default as Luis } from "assets/gallery/luis.webp";
import { Section, SectionTitle } from "components/sections";
import { Anchor } from "components/html/Anchor";
import { LayoutContext } from "context/layout";
import { BreakpointHeight } from "interface/enum/Breakpoint";

const AboutSection: FC = () => {
  return (
    <Section id="about">
      <SectionTitle title="About me" />
      <div id="content" className="grid grid-cols-3 px-5 pt-3">
        <div id="left" className="col-span-2">
          <Description />
        </div>
        <div id="right" className="flex justify-center">
          <img
            src={Luis}
            alt={"Decorative. Image from gallery"}
            className="max-h-[65vh] border-4 border-violet-blue select-none"
            draggable={false}
          />
        </div>
      </div>
    </Section>
  );
};

const Description: FC = () => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  return (
    <div
      className={`
        w-[90%] leading-relaxed
        ${breakpointHeight <= BreakpointHeight.XS && "text-lg"}
        ${
          breakpointHeight > BreakpointHeight.XS &&
          breakpointHeight <= BreakpointHeight.SM &&
          "text-xl"
        }
        ${
          breakpointHeight > BreakpointHeight.SM &&
          breakpointHeight <= BreakpointHeight.MD &&
          "text-[1.35rem]"
        }
        ${
          breakpointHeight > BreakpointHeight.MD &&
          breakpointHeight < BreakpointHeight.XL &&
          "text-2xl"
        }
        ${breakpointHeight >= BreakpointHeight.XL && "text-[1.65rem]"}
      `}
    >
      <p>
        My name is{" "}
        <span className="font-bold text-chocolate-cosmos">Luis Naranjo</span>. I
        am a young Mexican developer who loves to create things. In 2025, I
        graduated with double degrees in Computer Science from
        <Anchor href="https://www.uaslp.mx">UASLP MX</Anchor> and
        <Anchor href="https://www.cityu.edu/">CityU Seattle</Anchor>. Right now
        I am working on web and cloud development, but I have experience with
        mobile applications, cybersecurity, data science and machine learning!
      </p>
      <p className="pt-5">
        I have been working on web applications and cloud since 2022, having
        experience with many languages, frameworks and platforms, especially the
        more popular ones.
      </p>
      <p className="pt-5">
        I am very passionate about music, cinema, photography and travelling,
        and I approach all of my projects with the same enthusiasm! Whenever I'm
        not working I'm probably{" "}
        <Anchor href="https://letterboxd.com/luisill0">
          ranting about movies
        </Anchor>
        .
      </p>
    </div>
  );
};

export default AboutSection;
