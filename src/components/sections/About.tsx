import { FC, useState } from "react";

import { Gallery } from "assets";
import { Section } from "components/sections";
import { Carousel } from "primereact/carousel";
import { Anchor } from "components/html/Anchor";

const HomeSection: FC = () => {
  return (
    <Section id="about">
      <div id="title" className="px-5 py-3 w-3/4 select-none">
        <p
          className={`
            pb-2 font-extralight
            border-b-4 border-chocolate-cosmos
            lg:text-7xl text-5xl
          `}
        >
          About me
        </p>
      </div>
      <div id="content" className="grid grid-cols-3 px-5 pt-3">
        <div id="left" className="col-span-2">
          <div
            className={`
              w-[90%]
              text-2xl leading-relaxed
          `}
          >
            <p>
              My name is{" "}
              <span className="font-bold text-chocolate-cosmos">
                Luis Naranjo
              </span>
              . I am a young Mexican developer who loves to create things. In
              2025, I graduated with double degrees in Computer Science from
              <Anchor href="https://www.uaslp.mx">UASLP MX</Anchor> and
              <Anchor href="https://www.cityu.edu/">CityU Seattle</Anchor>.
              Right now I am working on web and cloud development, but I have
              experience with mobile applications, cybersecurity, data science
              and machine learning!
            </p>
            <p className="pt-5">
              I have been working on web applications and cloud since 2022,
              having experience with many languages, frameworks and platforms,
              especially the more popular ones.
            </p>
            <p className="pt-5">
              I am very passionate about music, cinema, photography and
              travelling, and I approach all of my projects with the same
              enthusiasm! Whenever I'm not working I'm probably{" "}
              <Anchor href="https://letterboxd.com/luisill0">
                ranting about movies
              </Anchor>
              .
            </p>
          </div>
        </div>
        <div id="right">
          <PhotoCarousel />
        </div>
      </div>
    </Section>
  );
};

type PhotoTemplateProps = {
  src: string;
  alt?: string;
};

const PhotoTemplate = ({ src, alt }: PhotoTemplateProps) => (
  <div className="pb-3 w-fit mx-auto relative">
    <img
      src={src}
      alt={alt}
      className="max-h-[65vh] border-2 border-violet-blue"
    />
  </div>
);

const PhotoCarousel: FC = () => {
  const [images] = useState<Array<PhotoTemplateProps>>(
    Gallery.map((image, index) => ({
      src: image.default,
      alt: `Photo from gallery #${index + 1}`,
    }))
  );

  return (
    <div className="card">
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        itemTemplate={PhotoTemplate}
        showNavigators
        showIndicators
        circular
      />
    </div>
  );
};

export default HomeSection;
