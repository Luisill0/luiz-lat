import { FC, useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { Section } from "components/sections";
import { LayoutContext } from "context/layout";

const HomeSection: FC = () => {
  const { navbarHeight } = useContext(LayoutContext)!;

  return (
    <Section id="home">
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
    </Section>
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
          className="font-bold text-purple-700"
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
            className="font-bold text-purple-700"
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
