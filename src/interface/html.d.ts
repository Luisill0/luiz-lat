import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type ChildrenProp = {
  children?: ReactNode | ReactNode[];
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ComponentWithChildren<P = {}> = FC<P & ChildrenProp>;
