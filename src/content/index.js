// import project1 from "../assets/projects/project-1.webp";
// import project2 from "../assets/projects/project-2.webp";
// import project3 from "../assets/projects/project-3.webp";
// import project4 from "../assets/projects/project-4.webp";
import project1 from "./projectImage/Project1.webp"
import project2 from "./projectImage/Project2.webp"
import project3 from "./projectImage/Project3.webp"
import project4 from "../allAsstes/assets/projects/project-4.webp"


export const HERO_CONTENT = `I'm a Full Stack Developer proficient in the MERN stack, passionate about building scalable and efficient web applications. I'm actively learning System Design and have a strong interest in Data Structures & Algorithms. I'm always excited to grow, explore new technologies, and tackle real-world challenges through code.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Imagify",
    image: project1,
    description:
      "A powerful image processing and manipulation web application that allows users to upload, edit, and transform images with various filters and effects. Features include image cropping, resizing, applying filters, and batch processing capabilities.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Image Processing APIs"],
  },
  
  {
    title: "Tic-Tac-Toe",
    image: project2,
    description:
      "An interactive and responsive Tic-Tac-Toe game built with modern web technologies. Features include multiplayer support, game history tracking, customizable themes, and an intelligent AI opponent with different difficulty levels.",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Game Logic"],
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A comprehensive weather application that provides real-time weather information, forecasts, and location-based weather alerts. Features include current weather conditions, 7-day forecasts, hourly predictions, and weather maps with interactive elements.",
    technologies: ["React", "Weather APIs", "Geolocation", "Responsive Design", "Chart.js"],
  },
  {
    title: "Crypto Price Tracker",
    image: project4,
    description:
      "A real-time cryptocurrency price tracking application that monitors various digital currencies and provides detailed market analysis. Features include live price updates, historical price charts, portfolio tracking, and price alerts for selected cryptocurrencies.",
    technologies: ["React", "Crypto APIs", "Chart.js", "WebSocket", "Local Storage"],
  },
];

export const CONTACT = {
  email: "dhruvinughareja@gmail.com",
};
