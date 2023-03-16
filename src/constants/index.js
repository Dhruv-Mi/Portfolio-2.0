import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Netflix,
  Weconnect,
  Newsmonkey,
  java
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    icon: html,
    iconBg: "#383E56",
    date: "December 2021 - February 2022",
    points: [
      "Developing and maintaining web applications using HTML , CSS and Javascript.",
      "Implementing responsive design using media queries.",
      "Building a notes taking application using HTML, CSS and Javascript"
    ],
  },
  {
    title: "Java Developer",
    icon: java,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2022",
    points: [
      "Started Working and getting known about introduction to java from Coding Ninja's",
      "Start solving questions in java efficiently.",
      "Got a hands on experience of solving DSA in java.",
    ],
  },
  {
    title: "MERN Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2022 - Novemebr 2022",
    points: [
      "Developing and maintaining web applications using React.js , Express and MongoDb.",
      "Collaborating with batch mates, and creating a full stack project.",
      "Implementing responsive design and attractive UI.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix-Clone",
    description:
      "Netflix-Clone is an exact copy of netfix which allows an indivisual to binge watch the latest tv shows and movies and take a time off to enjoy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "We-Connect",
    description:
      "It is a real time based chat application which used to connect people and allow them to create different chat rooms and invite people to chat in a secure encrypted environment",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Weconnect,
    source_code_link: "https://github.com/Dhruv-Mi/we-connect",
  },
  {
    name: "News Monkey",
    description:
      "Using ReactJS, created an application named “NewsMonkey” as it fetches latest news from the news API and display news category wise . and contains infinite scrolling",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: Newsmonkey,
    source_code_link: "https://github.com/Dhruv-Mi/NewsMonkey",
  },
];

export { services, technologies, experiences, testimonials, projects };
