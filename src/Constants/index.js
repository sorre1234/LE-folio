import {
  meta,
  shopify,
  starbucks,
  tesla,
  iitism,
  lemonimg,
  memories,
  muscleblaze,
  roboism
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  muscle,
  lemon,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  // {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  // {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  // }
];

export const experiences = [
  {
    title: "Bachelor's Degree",
    company_name: "Indian institute of Technology, Dhanbad",
    icon: iitism,
    iconBg: "#accbe1",
    date: "Dec 2021 - Present",
    points: [
      "Qualified the JEE Mains Examination securing a percentile of 99.4, placing myself among the top 0.6% in the country and the JEE Advanced Examination securing an All India Rank of 4466, placing myself among the top 2.9% in the country",
      "Secured a seat in the Indian Institute of Technology, Dhanbad, one of the most prestigious engineering institutes in India.",
      "Maintaining a CGPA of 7.49/10.0 by the end of the 6th semester.",
    ],
  },
  {
    title: "Club Member",
    company_name: "Robo-ISM, IIT Dhanbad",
    icon: roboism,
    iconBg: "#D7C9F9",
    date: "April 2022 - Sept 2022",
    points: [
      "Introduced to the Arduino architecture, Arduino IDE programming, along with a few useful sensors.",
      "Consolidation of some useful Linux Commands, along with the introduction to the ROS (Robot Operating System)",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Memories",
    icon: memories,
    iconBg: "#A0F8EB",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Created a full stack Memory Sharing App allowing users to Create, Edit, Like and Delete their posts",
      "Integrated user authentication using the jsonwebtoken, bcrypt npm Packages. Presents an option for users to login with google using OAuth 2.0 credential token.",
      "Collaborating with fellow developers and established a recurring job using node-schedule npm package to execute a profanity filter on posts daily at 12:00am, flagging explicit content automatically.",
      "Implemented flagging system allowing users 24 hours to update posts; automatic deletion occurs thereafter.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Exerthustle",
    icon: muscleblaze,
    iconBg: "#b7e4c7",
    date: "Aug 2023 - Sept 2023",
    points: [
      "Developed a React-based Exercise App featuring diverse exercises to promote wellness.",
      "Each exercise has a description, links to exercise videos, and similar exercises",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Built using a diverse and robust database with over 1300 exercises exposed through RapidAPI.",
      "Implemented a user-friendly search bar for efficient exercise filtering, enhancing accessibility of the application.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "LE-folio",
  //   icon: lemonimg,
  //   iconBg: "#a2d2ff",
  //   date: "May-2024 - May-2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  // {
  //     iconUrl: pricewise,
  //     theme: 'btn-back-red',
  //     name: 'Amazon Price Tracker',
  //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
  //     link: 'https://github.com/adrianhajdin/pricewise',
  // },
  {
    iconUrl: muscle,
    theme: "btn-back-green",
    name: "Exerthustle",
    description:
      "Developed a React-based Exercise App featuring diverse exercises to promote wellness.Each exercise has a description, links to exercise videos, and similar exercises. Built using a diverse and robust database with over 1300 exercises exposed through RapidAPI. Implemented a user-friendly search bar for efficient exercise filtering, enhancing accessibility of the application.",
    link: "https://exerthustle.netlify.app/",
  },
  // {
  //     iconUrl: car,
  //     theme: 'btn-back-blue',
  //     name: 'Car Finding App',
  //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
  //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  // },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Memories",
    description:
      " A full stack Memory sharing App allowing users to Create, Edit, Like and Delete posts. With integrated user authentication using the jsonwebtoken, bcrypt npm Packages, it also Presents an option for users to login with google using OAuth 2.0 credential token. A recurring job has been established using node-schedule npm package to execute a profanity filter on posts daily at 12:00am, flagging explicit content automatically.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: lemon,
    theme: "btn-back-blue",
    name: "LE-folio",
    description:
      "LE-folio(Lemon-Energy Portfolio) is a 3d portfolio website template that is fully responsive and customizable, built using React, Tailwind CSS, and Three.js. The portfolio includes an About page which shows my skills and what I've done so far including my projects and upcoming prospects, and a Projects page which shows my projects. It also includes a contact form that can be used by visitors to get in touch with the developer. It is easy to use and can be customized to fit the needs of any developer.",
    link: "https://le-folio.netlify.app/",
  },
  // {
  //     iconUrl: summiz,
  //     theme: 'btn-back-yellow',
  //     name: 'AI Summarizer Application',
  //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
  //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  // }
];
