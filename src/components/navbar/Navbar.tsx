import { AnchorHTMLAttributes, DetailedHTMLProps, FC, useContext } from "react";

import { LayoutContext } from "context/layout";
import { Menubar } from "primereact/menubar";

const Navbar: FC = () => {
  const { state } = useContext(LayoutContext)!;

  return (
    <div
      style={{
        display: `${state.navbar ? "inline" : "none"}`,
      }}
    >
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
  <a
    href="#"
    className="
        flex items-center
        font-mono text-3xl
        hover:opacity-85
    "
  >
    <img className="w-10 h-10" src="/android-chrome-192x192.png" />
    <span className="h-fit w-fit">luiz.lat</span>
  </a>
);

type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type NavLinkProps = AnchorProps & {
  label: string;
  icon: string;
};

const NavLink: FC<NavLinkProps> = ({ label, icon, ...props }) => (
  <a {...props}>
    <div
      className="
        flex items-center justify-center gap-2
        font-medium
        hover:opacity-60
      "
    >
      <i className={icon} />
      <span>{label}</span>
    </div>
  </a>
);

const RightLinks = () => (
  <div className="flex justify-end items-center gap-4 pe-3">
    <NavLink href={"#about"} label="About" icon="pi pi-user" />
    <NavLink href={"#projects"} label="My Work" icon="pi pi-briefcase" />
    <NavLink href={"#contact"} label="Contact" icon="pi pi-envelope" />
  </div>
);

export default Navbar;
