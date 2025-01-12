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
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  hardhat,
  psql,
  solidity,
  timechain,
  bharat,
  oasis,
  octa,
  news,
  ico,
  schain,
  threejs,
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
    name: "nextjs Toolkit",
    icon: nextjs,
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
    name: "solidity",
    icon: solidity,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
  {
    name: "psql",
    icon: psql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Full Stack Web Development",
    company_name: "Bharat Intern",
    icon: bharat,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2023",
    points: [
      "Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB.",
"Collaborated with team members via GitHub for version control and seamless code contributions.",
"Deployed and optimized applications on Vercel for improved accessibility and performance.",
"Implemented responsive design and ensured cross-browser compatibility for an enhanced user experience.",   ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Oasis Infobyte",
    icon: oasis,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Designed and developed web applications using React.js, Express.js, and MySQL.",
"Leveraged GitHub for version control, collaborating effectively with the development team.",
"Enhanced application functionality and performance through efficient back-end integration and debugging.",
"Ensured responsiveness and optimized user interfaces for seamless user interaction across devices.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Octanet Solutions",
    icon: octa,
    iconBg: "#383E56",
    date: "June 2022 - Sep 2023",
    points: [
      "Built and maintained responsive user interfaces using React.js, HTML, and TailwindCSS.",
"Translated design mockups from figma into interactive, user-friendly web pages.",
"Collaborated with designers and developers to ensure seamless UI/UX consistency.",
"Optimized web performance by implementing best practices for front-end development.",
    ],
  },
  {
    title: "Blockchain Developer Intern",
    company_name: "Timechain Labs",
    icon: timechain,
    iconBg: "#E6DEDD",
    date: "June 2023 - Nov 2023",
    points: [
      "Developed and deployed decentralized applications leveraging BSV blockchain and Nucron Wallet for secure payment integrations.",
      "Built and maintained full-stack applications using TypeScript, NestJS, and PostgreSQL to enable robust and scalable solutions.",
      "Managed project workflows and progress using JIRA and coordinated with the team for timely delivery of tasks.",
      "Represented the company as a Campus Ambassador, promoting its initiatives and strengthening its presence among students and professionals.",
    ],
  },
];

const projects = [
  {
    name: "News Portal",
    description:
      "Developed a full-stack decentralized news portal on the BSV blockchain with smart contract-driven wallet and subscription management, leveraging SvelteKit, TypeScript, PostgreSQL, and Nucron Wallet, and deployed on Vercel for secure and seamless user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/BhavsarShubham/news-factory",
  },
  {
    name: "ICO Market Place",
    description:
      "Created a decentralized ICO platform on Ethereum for token sales and fundraises, utilizing Solidity for smart contracts and Ethers.js for blockchain interaction, ensuring security and transparency for DeFi projects and investors.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ico,
    source_code_link: "https://github.com/BhavsarShubham/ICO_Market",
  },
  {
    name: "Supply Chain",
    description:
      "Developed a blockchain-based supply chain management system on Ethereum to track goods' provenance in real time, using smart contracts for automation and fraud prevention, with React.js, Solidity, and Web3.js for seamless frontend and backend integration.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: schain,
    source_code_link: "https://github.com/BhavsarShubham/SHUBHAM_supply_chain_manage",
  },
];

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects };
