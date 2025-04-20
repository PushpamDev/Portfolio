
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


import jbmIcon from "../assets/company/jbmIcon.png";
import almondsIcon from "../assets/company/almondsIcon.png"
import forestlakeIcon from "../assets/company/forestlakeIcon.png"


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "JBM Group",
    icon: jbmIcon,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Designed and implemented backend services using Express, Node.js, and Mongoose.",
      "Improved data management and system performance."
    ],
  },
  {
    title: "Backend Developer (Intern)",
    company_name: "Almonds.ai, Gurugram, India",
    icon: almondsIcon,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Optimized algorithms for solving real-world challenges efficiently.",
      "Reduced project completion time by 23%, significantly improving user outcomes."
    ],
  },
  {
    title: "Research & Development Intern",
    company_name: "Forest Lake Technologies, India",
    icon: forestlakeIcon,
    iconBg: "#383E56",
    date: "April 2022 - March 2023",
    points: [
      "Developed optimized algorithms to solve real-world problems effectively.",
      "Reduced project completion time by 30%, positively impacting individuals."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pushpam proved me wrong.",
    name: "Bhavya Kumar",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Pushpam does.",
    name: "Nishant Pandey",
    designation: "CTO",
    company: "ThirdEye AI",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Pushpam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Nikhil Tiwari",
    designation: "Assistant CTO",
    company: "ThirtEye AI",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Timesheet",
    description:
      "Timesheet is a Time and resource mangement web application and a PWA",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
