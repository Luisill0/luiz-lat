import { FC, useCallback, useContext } from "react";

import { Menubar } from "primereact/menubar";

import { LayoutContext } from "context/layout";
import { GlobalContext } from "context/global";

import { DivProps } from "interface/html";
import { Sections } from "interface/enums";

const Navbar: FC = () => {
  const { updateCurrentSection } = useContext(GlobalContext)!;
  const { setNavbarHeight } = useContext(LayoutContext)!;

  const onNavbarRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      setNavbarHeight(node.clientHeight);
    },
    [setNavbarHeight]
  );

  const RightLinks = () => (
    <div className="flex justify-end items-center gap-4 pe-3">
      <NavLink
        label="Home"
        icon="pi pi-home"
        onClick={() => updateCurrentSection(Sections.HOME)}
      />
      <NavLink
        label="About"
        icon="pi pi-user"
        onClick={() => updateCurrentSection(Sections.ABOUT)}
      />
      <NavLink
        label="My Work"
        icon="pi pi-briefcase"
        onClick={() => updateCurrentSection(Sections.PROJECTS)}
      />
      <NavLink
        label="Contact"
        icon="pi pi-envelope"
        onClick={() => updateCurrentSection(Sections.CONTACT)}
      />
    </div>
  );

  return (
    <div ref={onNavbarRef} className="select-none fixed top-0 w-full">
      <Menubar
        id="custom-navbar"
        start={LeftIcon}
        end={RightLinks}
        pt={{
          root: {
            className: "py-3 bg-sec border-0 rounded-none",
            style: {
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
            },
          },
        }}
      />
    </div>
  );
};

const LeftIcon = () => (
  <div
    className="
        flex items-center
        font-mono text-3xl
        cursor-default
    "
  >
    <img
      draggable={false}
      className="w-10 h-10"
      src="/android-chrome-192x192.png"
    />
    <span className="h-fit w-fit">luiz.lat</span>
  </div>
);

type NavLinkProps = DivProps & {
  label: string;
  icon: string;
};

const NavLink: FC<NavLinkProps> = ({ label, icon, ...props }) => (
  <div
    {...props}
    className="
        flex items-center justify-center gap-2
        font-medium
        cursor-pointer
        hover:opacity-60
      "
  >
    <i className={icon} />
    <span>{label}</span>
  </div>
);

export default Navbar;
