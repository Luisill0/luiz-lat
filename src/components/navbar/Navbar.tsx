import {
  FC,
  MouseEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";
import { Link, LinkProps } from "react-scroll";

import { Menubar } from "primereact/menubar";

import { LayoutContext } from "context/layout";
import { BreakpointHeight, BreakpointWidth } from "interface/enum/Breakpoint";
import { Sidebar } from "primereact/sidebar";

const Navbar: FC = () => {
  const { mobile, setNavbarHeight } = useContext(LayoutContext)!;

  const udpateNavbar = useCallback(
    (node: HTMLDivElement | null) => {
      setNavbarHeight(node?.clientHeight ?? 0);
    },
    [setNavbarHeight]
  );

  const CurrentNavbar = useCallback(
    () => (mobile ? <NavbarMobile /> : <NavbarDesktop />),
    [mobile]
  );

  return (
    <>
      <div ref={udpateNavbar} className="fixed top-0 z-20 w-full select-none">
        {import.meta.env.DEV && <LayoutInfo />}
        <CurrentNavbar />
      </div>
    </>
  );
};

const LayoutInfo = () => {
  const { currentBreakpoint, mobile, navbarHeight, window } =
    useContext(LayoutContext)!;

  return (
    <div className="fixed top-0 z-20 pointer-events-none">
      <div>
        {`Nav: ${navbarHeight}px, Res: ${window.innerWidth}px * ${
          window.innerHeight
        }px H: ${BreakpointHeight[currentBreakpoint.height]} W: ${
          BreakpointWidth[currentBreakpoint.width]
        } ${mobile ? "Mobile" : "Desktop"}`}
      </div>
    </div>
  );
};

const NavbarDesktop = () => (
  <Menubar
    id="custom-navbar"
    start={PageIcon}
    end={PageLinks}
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
);

const PageIcon = () => (
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

const PageLinks = () => (
  <div className="flex justify-end items-center gap-4 pe-3">
    <NavLink label="Home" icon="pi pi-home" to="home" />
    <NavLink label="About" icon="pi pi-user" to="about" />
    <NavLink label="My Work" icon="pi pi-briefcase" to="projects" />
    <NavLink label="Contact" icon="pi pi-envelope" to="contact" />
  </div>
);

const NavbarMobile = () => (
  <Menubar
    id="custom-navbar"
    start={MobileStart}
    pt={{
      root: {
        className: "p-0 border-0 rounded-none mobile",
        style: {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        },
      },
    }}
  />
);

const MobileStart = () => {
  const { navbarHeight } = useContext(LayoutContext)!;
  const [sidebar, setSidebar] = useState<boolean>(false);

  const onClick = () => setSidebar(!sidebar);

  return (
    <>
      <div className="py-2 relative w-full flex justify-center items-center ">
        <PageIcon />
        <BurgerButton onClick={onClick} className="w-10 px-3 left-0" />
      </div>
      <Sidebar
        id="mobile-menu"
        visible={sidebar}
        onHide={() => setSidebar(false)}
        pt={{
          root: {
            className: "bg-violet-blue text-magnolia w-[75vw]",
          },
        }}
      >
        <BurgerButton
          onClick={onClick}
          dark
          className="w-10 px-3 left-0 top-0"
        />
        <div
          className="flex flex-col items-start text-3xl gap-4"
          style={{
            marginTop: navbarHeight + 15,
          }}
        >
          <div className="flex py-4 justify-start w-full  border-magnolia">
            <NavLink
              label="Home"
              icon="pi pi-home text-2xl"
              to="home"
              callback={onClick}
            />
          </div>
          <div className="flex py-4 justify-start w-full  border-magnolia">
            <NavLink
              label="About"
              icon="pi pi-user text-2xl"
              to="about"
              callback={onClick}
            />
          </div>
          <div className="flex py-4 justify-start w-full  border-magnolia">
            <NavLink
              label="My Work"
              icon="pi pi-briefcase text-2xl"
              to="projects"
              callback={onClick}
            />
          </div>
          <div className="flex py-4 justify-start w-full  border-magnolia">
            <NavLink
              label="Contact"
              icon="pi pi-envelope text-2xl"
              to="contact"
              callback={onClick}
            />
          </div>
        </div>
      </Sidebar>
    </>
  );
};

type BurgerButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  className?: string;
  dark?: boolean;
};

const BurgerButton: FC<BurgerButtonProps> = ({
  onClick,
  className,
  dark = false,
}) => {
  const { navbarHeight } = useContext(LayoutContext)!;
  const [isActive, setIsActive] = useState<boolean>(false);

  const clickHandler: MouseEventHandler<HTMLDivElement> = (ev) => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 200);
    onClick(ev);
  };

  const palette = {
    light: {
      border: "gray-500",
      active: "gray-100",
    },
    dark: {
      border: "magnolia",
      active: "gray-200",
    },
  };

  const Separator = () => (
    <div
      className="h-[1px] w-3/4 border"
      style={{
        borderColor: `var(--color-${
          dark ? palette.dark.border : palette.light.border
        })`,
      }}
    ></div>
  );

  return (
    <div
      id="burger-btn"
      className={`
        absolute
        box-content 
        ${className ?? ""}
      `}
      onClick={clickHandler}
      style={{
        height: navbarHeight,
      }}
    >
      <div
        className="
            w-8 h-8
            rounded-md
            absolute top-0 bottom-0 right-0 left-0 m-auto
            flex flex-col justify-evenly items-center
            transition-all
          "
        style={{
          backgroundColor: `${isActive ? "var(--color-gray-100)" : "inherit"}`,
        }}
      >
        <Separator />
        <Separator />
        <Separator />
      </div>
    </div>
  );
};

type NavLinkProps = LinkProps & {
  label: string;
  icon: string;
  callback?: () => void;
};

const NavLink: FC<NavLinkProps> = ({ to, label, icon, callback, ...props }) => {
  const { navbarHeight } = useContext(LayoutContext)!;
  return (
    <Link
      to={to}
      duration={400}
      offset={-navbarHeight + 1}
      isDynamic
      smooth
      onClick={callback}
    >
      <span
        {...props}
        className="
          flex items-center justify-center gap-2
          font-medium
          cursor-pointer
          hover:opacity-60
          active:opacity-60
        "
      >
        <i className={icon} />
        <span>{label}</span>
      </span>
    </Link>
  );
};

export default Navbar;
