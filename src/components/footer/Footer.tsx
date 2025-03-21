import { Anchor } from "components/html/Anchor";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="bg-magnolia select-none py-8">
      <div
        className="
            w-1/2
            mx-auto
            flex justify-around
        "
      >
        <Anchor href="https://www.linkedin.com/in/luis-e-naranjo">
          <i className="pi pi-linkedin text-5xl" />
        </Anchor>
        <Anchor href="https://github.com/luisill0">
          <i className="pi pi-github text-5xl" />
        </Anchor>
        <Anchor href="mailto:luisnaranjo@duck.com">
          <i className="pi pi-envelope text-5xl" />
        </Anchor>
      </div>
      <p className="pt-5 text-center font-thin text-xl">
        Luis Naranjo &copy; 2025
      </p>
    </div>
  );
};

export default Footer;
