import { FC, useCallback, useContext } from "react";
import { Button, ButtonProps } from "primereact/button";

import { Companies } from "assets";
import { Frontend, Backend } from "assets/icons";
import {
  ACSE,
  Chatroom,
  Detector,
  Puzzle15,
  Spotify,
  TicTacToe,
} from "assets/projects";

import { Section, SectionTitle } from "components/sections";
import { LayoutContext } from "context/layout";

import { ImageLink } from "interface/assets";
import { AnchorProps, ComponentWithChildren } from "interface/html";
import { BreakpointHeight } from "interface/enum/Breakpoint";

const ProjectsSection: FC = () => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  return (
    <div>
      <Section id="projects">
        <SectionTitle title="My work" />
        <div id="areas" className="mx-5 pt-5">
          <div
            className={`
            p-3
            flex gap-3
            rounded-2xl shadow-2xl
            bg-violet-blue
            ${breakpointHeight < BreakpointHeight.XL && "h-[70vh]"}
            ${breakpointHeight >= BreakpointHeight.XL && "h-[75vh]"}
          `}
          >
            <CSArea
              mainIcon="pi pi-desktop"
              title="Frontend Development"
              description="I've worked with many website-related projects, from complex web
            applications to landing pages."
            >
              <SubArea title="Tools">
                <MappedIcons icons={Frontend} />
              </SubArea>
              <SubArea title="Design">
                <p>UX/UI</p>
                <p>Responsive</p>
              </SubArea>
            </CSArea>
            <CSArea
              mainIcon="pi pi-database"
              title="Backend Development"
              description="I have extensive experience with REST APIs, relational and non-relational databases, and cloud services."
            >
              <SubArea title="Tools">
                <MappedIcons
                  icons={[
                    ...Backend.frameworks,
                    ...Backend.databases,
                    ...Backend.languages,
                  ]}
                />
              </SubArea>
              <SubArea title="Cloud">
                <MappedIcons icons={Backend.cloud} />
              </SubArea>
            </CSArea>
            <CSArea
              mainIcon="pi pi-sitemap"
              title="Other Areas"
              description="Some of my other areas of expertise include"
            >
              <SubArea title="Artificial Intelligence">
                <p>Data Science</p>
                <p>Computer Vision</p>
                <p>Machine Learning</p>
              </SubArea>
              <SubArea title="Cybersecurity">
                <p>Networks</p>
                <p>Pentesting</p>
              </SubArea>
            </CSArea>
          </div>
        </div>
      </Section>
      <Section id="recent">
        <div className="px-5 pt-4">
          <p className="text-center text-chocolate-cosmos brightness-[125%] text-3xl font-bold">
            Featured Projects
          </p>
          <div className="pt-5 grid grid-cols-3 grid-rows-2 gap-4">
            <ProjectShowcase
              title="Object Detector"
              image={Detector}
              description={[
                "Use a REST API to pass images to a neural network.",
                "Also has a client for hosting online!",
              ]}
            >
              <div className="flex justify-between">
                <LinkedButton
                  href="https://github.com/Luisill0/object-detector-api"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black w-full",
                    label: "API",
                    icon: "pi pi-github",
                    size: "small",
                  }}
                />
                <LinkedButton
                  href="https://github.com/Luisill0/object-detector-client"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black w-full",
                    label: "Client",
                    icon: "pi pi-github",
                    size: "small",
                  }}
                />
              </div>
            </ProjectShowcase>
            <ProjectShowcase
              title="Tic-Tac-Toe"
              image={TicTacToe}
              description={["Classic game with local and online play."]}
            >
              <div className="flex justify-between">
                <LinkedButton
                  href="https://projects.tic-tac-toe.luiz.lat"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Demo",
                    icon: "pi pi-code",
                    size: "small",
                  }}
                />
                <LinkedButton
                  href="https://github.com/Luisill0/tic-tac-toe"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Source",
                    icon: "pi pi-github",
                    size: "small",
                  }}
                />
              </div>
            </ProjectShowcase>
            <ProjectShowcase
              title="Chatroom"
              image={Chatroom}
              description={[
                "Concept for a global chatroom with users and authentication.",
              ]}
            >
              <div className="flex justify-between">
                <LinkedButton
                  href="https://projects.chatrooom.luiz.lat"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Demo",
                    icon: "pi pi-code",
                    size: "small",
                  }}
                />
                <LinkedButton
                  href="https://github.com/Luisill0/IOWA-chat-frontend"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Front",
                    icon: "pi pi-github",
                    size: "small",
                  }}
                />
              </div>
            </ProjectShowcase>
            <ProjectShowcase
              title="Spotify Stats"
              image={Spotify}
              description={[
                "Website to check most listened to artists and songs on Spotify.",
              ]}
            >
              <div className="flex justify-between">
                <LinkedButton
                  href="https://projects.spotify-stats.luiz.lat"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Demo",
                    icon: "pi pi-code",
                    size: "small",
                  }}
                />
                <LinkedButton
                  href="https://github.com/Luisill0/Spotify-Stats"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Source",
                    icon: "pi pi-github",
                    size: "small",
                  }}
                />
              </div>
            </ProjectShowcase>
            <ProjectShowcase
              title="15 Puzzle"
              image={Puzzle15}
              description={[
                "Implementation of the classic puzzle game with vanilla HTML + JavaScript.",
              ]}
            >
              <div className="flex justify-between">
                <LinkedButton
                  href="https://projects.15-puzzle.luiz.lat/"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Demo",
                    icon: "pi pi-code",
                    size: "small",
                  }}
                />
                <LinkedButton
                  href="https://github.com/Luisill0/15-puzzle"
                  className="w-[45%]"
                  btnProps={{
                    className: "bg-black hover:bg-gray-900 border-black",
                    label: "Source",
                    icon: "pi pi-github",
                    size: "small",
                  }}
                />
              </div>
            </ProjectShowcase>
            <ProjectShowcase
              title="Advanced Code SE"
              image={ACSE}
              description={[
                "I developed the whole stack for the landing page (and company portal) of my former startup!",
              ]}
            >
              <div className="flex justify-between">
                <LinkedButton
                  href="https://advancedcodese.com"
                  className="w-full"
                  btnProps={{
                    className: "w-full bg-black hover:bg-gray-900 border-black",
                    label: "Check it out",
                    icon: "pi pi-code",
                    size: "small",
                  }}
                />
              </div>
            </ProjectShowcase>
          </div>
        </div>
        <div id="companies" className="my-12">
          <p className="text-center text-3xl font-bold text-chocolate-cosmos brightness-[125%]">
            Some awesome companies I've worked with!
          </p>
          <div className="pt-5 flex justify-around select-none">
            {Companies.map((company, index) => (
              <img
                key={index}
                src={company.default}
                className={`
                  ${breakpointHeight < BreakpointHeight.LG && "h-[5rem]"}
                  ${breakpointHeight >= BreakpointHeight.LG && "h-[6rem]"}
                `}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

type CSAreaProps = {
  mainIcon: string;
  title: string;
  description: string;
};

const CSArea: ComponentWithChildren<CSAreaProps> = ({
  mainIcon,
  title,
  description,
  children,
}) => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  return (
    <div id="area" className="py-5 rounded-2xl text-center bg-magnolia w-1/3">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[5rem] h-[5rem] rounded-full bg-violet-blue text-magnolia">
          <i className={`${mainIcon} text-5xl`} />
        </div>
        <p className="mt-2 text-2xl font-semibold">{title}</p>
      </div>
      <div
        className={`
          mx-auto w-[80%]
          ${breakpointHeight < BreakpointHeight.MD && "mt-2 text-sm"}
          ${breakpointHeight >= BreakpointHeight.MD && "mt-5"}
        `}
      >
        {description}
      </div>
      {children}
    </div>
  );
};

type SubAreaProps = {
  title: string;
};

const SubArea: ComponentWithChildren<SubAreaProps> = ({ title, children }) => (
  <div className="mt-5 pt-2">
    <p className="text-lg text-violet-blue font-bold">{title}</p>
    {children}
  </div>
);

type MappedIconsProps = {
  icons: Array<ImageLink>;
};

const MappedIcons: FC<MappedIconsProps> = ({ icons }) => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  const getIconHeight = useCallback(
    () =>
      breakpointHeight > BreakpointHeight.LG
        ? 60
        : breakpointHeight <= BreakpointHeight.LG &&
          breakpointHeight > BreakpointHeight.MD
        ? 45
        : breakpointHeight <= BreakpointHeight.MD &&
          breakpointHeight > BreakpointHeight.SM
        ? 35
        : 30,
    [breakpointHeight]
  );

  return (
    <div className="pt-3 flex gap-2 items-center justify-center">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          rel="noreferrer"
          className="hover:brightness-90 hover:opacity-90"
        >
          <img
            src={icon.src}
            className="select-none"
            alt="Application icon"
            width={getIconHeight()}
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
};

type ProjectShowcaseProps = {
  title: string;
  image: string;
  description: Array<string>;
};

const ProjectShowcase: ComponentWithChildren<ProjectShowcaseProps> = ({
  title,
  image,
  description,
  children,
}) => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  const MappedDescription = useCallback(
    () => description.map((paragraph, index) => <p key={index}>{paragraph}</p>),
    [description]
  );

  return (
    <div
      className="
        p-5
        grid grid-cols-5
        border-2 border-violet-blue rounded-3xl
      "
    >
      <div className="flex justify-center items-center col-span-2">
        <img src={image} className="select-none" draggable={false} />
      </div>
      <div className="col-span-3 ps-4 flex flex-col justify-between">
        <div>
          <p
            className={`
              ${breakpointHeight < BreakpointHeight.MD && "text-lg"}
              ${breakpointHeight >= BreakpointHeight.MD && "text-2xl"}
              font-semibold text-center
            `}
          >
            {title}
          </p>
          <div
            className={`
            pt-2 
            ${breakpointHeight < BreakpointHeight.MD && "text-xs"}
            ${
              breakpointHeight >= BreakpointHeight.MD &&
              breakpointHeight < BreakpointHeight.LG &&
              "text-sm"
            }
            ${breakpointHeight >= BreakpointHeight.XL && "text-lg"}
          `}
          >
            <MappedDescription />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

type LinkedButtonProps = AnchorProps & {
  href: string;
  btnProps: ButtonProps;
};

const LinkedButton: FC<LinkedButtonProps> = ({ href, btnProps, ...props }) => (
  <a {...props} href={href} target="_blank" rel="noreferrer">
    <Button {...btnProps} />
  </a>
);

export default ProjectsSection;
