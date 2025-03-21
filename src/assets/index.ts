// Animation by Vera Ri - https://www.behance.net/gallery/74597569/Dino-animation. All rights reserved
export { default as DinoWalking } from "./dino_animaton_by_Vera_Ri.gif";

export { default as HeroMobile } from "./mobile.webp";

export const Companies: Array<ImportedImage> = Object.values(
  import.meta.glob("./companies/*webp", {
    eager: true,
    query: "?url",
  })
);
