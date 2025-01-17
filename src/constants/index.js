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
  jarImage,
  nextjs,
  svg,
  framer,
  gsap,
  tailwind,
  nodejs,
  mongodb,
  enterprise,
  hardhat,
  psql,
  solidity,
  timechain,
  bharat,
  webgl,
  redux,
  oasis,
  octa,
  news,
  ico,
  schain,
  threejs,
  letsgrow,
  mizzle,
  jar4u,
  community,
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
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "AI and XR Web Development",
    icon: backend,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "psql",
    icon: psql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Framer",
    icon: framer,
  },
  {
    name: "SVG Animations",
    icon: svg,
  },
  {
    name: "WebGl",
    icon: webgl,
  },
  {
    name: "Redux",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Frontend Developement",
    company_name: "Mizzle Cloud",
    icon: mizzle,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Developed 200+ responsive web pages with SVG animations using React, Bootstrap, Tailwind CSS, Apache Echarts, GSAP...",
      "Integrated over 250 APIs coordinating with Rust backend and Python backend team into web applications to enable robust functionality and connectivity.",
      "Contributed to four major projects, including Community Portal, Enterprise Portal, Mizzle’s website, and admin portal, ensuring quality development and seamless integration.",
      "Implemented Web3 and blockchain technologies to develop decentralized applications and enhance platform capabilities.",
    ],
  },
  {
    title: "AI and Frontend XR Developer",
    company_name: "Jar4U",
    icon: jar4u,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Led the development of a 3D try-on product for Jar4U using ReactJS, WebGL, and AWS, enabling realistic VR/AR functionalities.",
      "Achieved a 25% increase in user satisfaction by implementing immersive try-on experiences.",
      "Developed a SaaS platform with TypeScript, Stripe API, and Prisma, streamlining the payment process.",
      "Implemented video-to-3D model conversion, boosting efficiency by 40% through advanced technologies.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Let's Grow More",
    icon: letsgrow,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Crafted a user-centric frontend web application for content creation using React, Tailwind, and Firebase.",
      "Delivered 100% fully functional code on time in a fast-paced work environment, exceeding expectations.",
      "Optimized frontend performance through efficient coding practices and performance tuning, improving loading times and user experience by 40%.",
    ],
  },
];

const projects = [
  {
    name: "Community Portal",
    description:
      "Developed a full-stack decentralized platform with NFT staking, DAO governance, blockchain voting, and a rewards marketplace, leveraging React, TailwindCSS, smart contract APIs, and backend APIs, deployed for a secure and seamless user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Smart Contract API's",
        color: "pink-text-gradient",
      },
    ],
    image: community,
    source_code_link: "https://communityportal.mizzle.io/",
  },
  {
    name: "3D Tryon",
    description:
      "Developed an advanced 3D Try-On solution for jewelry, featuring real-time visualization and hand tracking,face tracking utilizing VanillaJS, WebGL,ThreeJs, ReactJS, and Mediapipe to deliver an immersive and interactive user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "VanillaJs",
        color: "blue-text-gradient",
      },
      {
        name: "AR/VR",
        color: "green-text-gradient",
      },
    ],
    image: jarImage,
    source_code_link: "https://jar4u.com/",
  },
  {
    name: "Enterprise Marketplace",
    description:
      "Built a container portal with React, Redux, Tailwind CSS, and Apache Charts for scalable solutions. Developed responsive pages with SVG animations and integrated APIs with Rust and Python backends. Contributed to key projects, adding advanced features like Mizzle-Mate AI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "E-Charts",
        color: "pink-text-gradient",
      },
      {
        name: "SVG-Anim",
        color: "pink-text-gradient",
      },
    ],
    image: enterprise,
    source_code_link: "https://enterprise.mizzle.io/",
  },
];

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects };
