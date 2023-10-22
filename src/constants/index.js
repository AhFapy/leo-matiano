import { three } from "maath";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chart,
  hundred,
  custom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Our Mission",
  },
  {
    id: "plan",
    title: "The Plan",
  },
  {
    id: "book",
    title: "Book a Call",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "x4 Weekly Calls",
    icon: web,
  },

  {
    title: "Accountability",
    icon: hundred,
  },
  {
    title: "Personalized Systems and Guides",
    icon: custom,
  },
  {
    title: "Jumpstart your self improvement Journey",
    icon: chart,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Landing Page for José Gómez",
    description:
      "This Landing Page is designed to attract pottential clients for a professional Instagram Sales Launcher to offer his services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "landing-page",
        color: "pink-text-gradient",
      },
    ],
    image: "landing-page-img.PNG",
    source_code_link: "https://landing-page-jose-gomez-demo.netlify.app/",
  },
];

export { services, technologies, projects };
