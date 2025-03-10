// Animation by Vera Ri - https://www.behance.net/gallery/74597569/Dino-animation. All rights reserved
export { default as DinoWalking } from "./dino_animaton_by_Vera_Ri.gif";

type ImportedImage = {
  default: string;
  "Symbol(Symbol.toStringTag)": string;
};

export const Gallery: Array<ImportedImage> = Object.values(
  import.meta.glob("./gallery/*.webp", {
    eager: true,
    query: "?url",
  })
);
