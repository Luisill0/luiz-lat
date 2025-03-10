import { FC, useCallback, useContext } from "react";
import { Link, LinkProps } from "react-scroll";

import { Menubar } from "primereact/menubar";

import { LayoutContext } from "context/layout";

const Navbar: FC = () => {
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
      <NavLink label="Home" icon="pi pi-home" to="home" />
      <NavLink label="About" icon="pi pi-user" to="about" />
      <NavLink label="My Work" icon="pi pi-briefcase" to="projects" />
      <NavLink label="Contact" icon="pi pi-envelope" to="contact" />
    </div>
  );

  return (
    <div ref={onNavbarRef} className="z-10 select-none fixed top-0 w-full">
      <Menubar
        id="custom-navbar"
        start={LeftIcon}
        end={RightLinks}
        pt={{
          root: {
            className: "py-3 border-0 rounded-none",
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

type NavLinkProps = LinkProps & {
  label: string;
  icon: string;
};

const NavLink: FC<NavLinkProps> = ({ to, label, icon, ...props }) => {
  const { navbarHeight } = useContext(LayoutContext)!;
  return (
    <Link to={to} duration={400} offset={-navbarHeight + 1} isDynamic smooth>
      <span
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
      </span>
    </Link>
  );
};

export default Navbar;
