import { FC, useCallback, useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { HeroMobile } from "assets";
import { Section } from "components/sections";
import { LayoutContext } from "context/layout";

const HomeSection: FC = () => {
  const { mobile } = useContext(LayoutContext)!;

  const CurrentHome = useCallback(
    () => (mobile ? <HomeMobile /> : <HomeDesktop />),
    [mobile]
  );

  return (
    <Section id="home">
      <CurrentHome />
    </Section>
  );
};

const HomeDesktop = () => {
  const { navbarHeight } = useContext(LayoutContext)!;

  return (
    <div
      className="
          text-center text-6xl
          h-[100vh]
          flex flex-col justify-center items-center
          select-none
        "
      style={{ paddingTop: navbarHeight }}
    >
      <AnimatedText />
    </div>
  );
};

const HomeMobile = () => {
  const { navbarHeight, window } = useContext(LayoutContext)!;

  const getFullHeight = useCallback(
    () => window.innerHeight - navbarHeight,
    [navbarHeight, window.innerHeight]
  );

  return (
    <div
      className="
        h-[100vh]
        select-none
        relative
      "
      style={{ paddingTop: navbarHeight }}
    >
      <img
        src={HeroMobile}
        className="absolute object-cover brightness-50 transition-all z-10"
        style={{
          height: getFullHeight() + 1,
          width: window.innerWidth + 1,
          top: navbarHeight,
        }}
      />
      <div
        className="
          text-6xl text-magnolia
          relative z-30
          flex flex-col justify-center items-center
        "
        style={{
          height: getFullHeight(),
          fontWeight: 275,
        }}
      >
        <p>
          Hi, I'm <span className="font-extrabold">Luis</span>
        </p>
        <p className="text-2xl">I am a Developer</p>
      </div>
    </div>
  );
};

const AnimatedText = () => {
  const [animationsFinished, setAnimationsFinished] = useState(0);

  const onAnimationFinished = (delay: number) => {
    setTimeout(
      () => setAnimationsFinished((animation) => animation + 1),
      delay
    );
  };

  return (
    <div className="min-h-[7rem] relative font-thin">
      <span
        style={{
          clip: "rect(1px, 1px, 1px, 1px)",
          clipPath: "inset(50%)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
        }}
      >
        My name is Luis, I am a full-stack developer, data scientist and
        cybersecurity enthusiast!
      </span>
      <TypeAnimation
        aria-hidden
        sequence={["My name is ", () => onAnimationFinished(200)]}
        speed={{ type: "keyStrokeDelayInMs", value: 85 }}
        cursor={false}
      />
      {animationsFinished > 0 && (
        <TypeAnimation
          aria-hidden
          className="font-bold text-violet-blue"
          sequence={["Luis", () => onAnimationFinished(500)]}
          cursor={false}
        />
      )}
      <div className="mt-3">
        {animationsFinished > 1 && (
          <TypeAnimation
            aria-hidden
            sequence={["I am ", () => onAnimationFinished(200)]}
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            cursor={false}
          />
        )}
        {animationsFinished > 2 && (
          <TypeAnimation
            aria-hidden
            className="font-bold text-violet-blue"
            sequence={[
              "a Full-Stack Developer",
              500,
              "a Data Scientist",
              300,
              "a Cybersecurity Enthusiast",
              200,
              "a Student",
              100,
              "a Teacher",
              100,
              "a Photographer",
              100,
              "an Animal Lover",
              100,
              "a Cinephile",
              100,
              "a hard-worker",
              100,
              "a tech-bro",
              100,
              "a regular person",
              100,
              "an expert",
              100,
              "what you're looking for!",
            ]}
            speed={60}
            deletionSpeed={60}
            cursor={true}
          />
        )}
      </div>
    </div>
  );
};

export default HomeSection;
