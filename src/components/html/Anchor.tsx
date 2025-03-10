import { AnchorProps, ComponentWithChildren } from "interface/html";

type CustomAnchorProps = AnchorProps & {
  whitespace?: boolean;
};

export const Anchor: ComponentWithChildren<CustomAnchorProps> = ({
  children,
  href,
  whitespace = true,
  ...props
}) => (
  <span>
    {whitespace && " "}
    <a
      className="
        cursor-pointer
        underline
        text-chocolate-cosmos
        hover:opacity-80
    "
      target="_blank"
      rel="noreferrer"
      href={href}
      {...props}
    >
      {children}
    </a>
  </span>
);
