import { ImageLink } from "interface/assets";

export const AWS: ImageLink = {
  src: import.meta.resolve("./aws-svgrepo-com.svg?raw"),
  href: "https://aws.amazon.com/",
};
export const Bootstrap: ImageLink = {
  src: import.meta.resolve("./bootstrap-svgrepo-com.svg?raw"),
  href: "https://getbootstrap.com/",
};
export const Docker: ImageLink = {
  src: import.meta.resolve("./docker-svgrepo-com.svg?raw"),
  href: "https://www.docker.com/",
};
export const Express: ImageLink = {
  src: import.meta.resolve("./express-svgrepo-com.svg?raw"),
  href: "https://expressjs.com/",
};
export const Firebase: ImageLink = {
  src: import.meta.resolve("./firebase-svgrepo-com.svg?raw"),
  href: "https://firebase.google.com/",
};
export const Flask: ImageLink = {
  src: import.meta.resolve("./py-flask.webp?raw"),
  href: "https://flask.palletsprojects.com/",
};
export const GCloud: ImageLink = {
  src: import.meta.resolve("./google-cloud-svgrepo-com.svg?raw"),
  href: "https://cloud.google.com/",
};
export const Mongodb: ImageLink = {
  src: import.meta.resolve("./mongodb-svgrepo-com.svg?raw"),
  href: "https://www.mongodb.com/",
};
export const Postgres: ImageLink = {
  src: import.meta.resolve("./pgsql-svgrepo-com.svg?raw"),
  href: "https://www.postgresql.org/",
};
export const Python: ImageLink = {
  src: import.meta.resolve("./python-svgrepo-com.svg?raw"),
  href: "https://www.python.org/",
};
export const React: ImageLink = {
  src: import.meta.resolve("./react-svgrepo-com.svg?raw"),
  href: "https://react.dev/",
};
export const Sass: ImageLink = {
  src: import.meta.resolve("./sass-fill-svgrepo-com.svg?raw"),
  href: "https://sass-lang.com/",
};
export const Tailwind: ImageLink = {
  src: import.meta.resolve("./tailwind-svgrepo-com.svg?raw"),
  href: "https://tailwindcss.com/",
};
export const Typescript: ImageLink = {
  src: import.meta.resolve("./typescript-svgrepo-com.svg?raw"),
  href: "https://www.typescriptlang.org/",
};

export const Frontend: Array<ImageLink> = [
  React,
  Typescript,
  Tailwind,
  Bootstrap,
  Sass,
];

export const Backend = {
  frameworks: [Express, Flask],
  languages: [Typescript, Python],
  databases: [Mongodb, Postgres],
  cloud: [AWS, Docker, Firebase, GCloud],
};
