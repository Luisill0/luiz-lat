import { ImageLink } from "interface/assets";

import aws from "./aws-svgrepo-com.svg";
import bootstrap from "./bootstrap-svgrepo-com.svg";
import docker from "./docker-svgrepo-com.svg";
import express from "./express-svgrepo-com.svg";
import firebase from "./firebase-svgrepo-com.svg";
import flask from "./py-flask.webp";
import googlecloud from "./google-cloud-svgrepo-com.svg";
import mongodb from "./mongodb-svgrepo-com.svg";
import postgres from "./pgsql-svgrepo-com.svg";
import python from "./python-svgrepo-com.svg";
import react from "./react-svgrepo-com.svg";
import sass from "./sass-fill-svgrepo-com.svg";
import tailwind from "./tailwind-svgrepo-com.svg";
import typescript from "./typescript-svgrepo-com.svg";

export const AWS: ImageLink = {
  src: aws,
  href: "https://aws.amazon.com/",
};
export const Bootstrap: ImageLink = {
  src: bootstrap,
  href: "https://getbootstrap.com/",
};
export const Docker: ImageLink = {
  src: docker,
  href: "https://www.docker.com/",
};
export const Express: ImageLink = {
  src: express,
  href: "https://expressjs.com/",
};
export const Firebase: ImageLink = {
  src: firebase,
  href: "https://firebase.google.com/",
};
export const Flask: ImageLink = {
  src: flask,
  href: "https://flask.palletsprojects.com/",
};
export const GCloud: ImageLink = {
  src: googlecloud,
  href: "https://cloud.google.com/",
};
export const Mongodb: ImageLink = {
  src: mongodb,
  href: "https://www.mongodb.com/",
};
export const Postgres: ImageLink = {
  src: postgres,
  href: "https://www.postgresql.org/",
};
export const Python: ImageLink = {
  src: python,
  href: "https://www.python.org/",
};
export const React: ImageLink = {
  src: react,
  href: "https://react.dev/",
};
export const Sass: ImageLink = {
  src: sass,
  href: "https://sass-lang.com/",
};
export const Tailwind: ImageLink = {
  src: tailwind,
  href: "https://tailwindcss.com/",
};
export const Typescript: ImageLink = {
  src: typescript,
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
