import * as fs from "fs/promises";
import ProjectType from "@/types/project.type";

const projectList: ProjectType[] = [
  {
    name: "Filmians",
    description: `A multipage site to perform CRUD, with dark/light theme, allow users to check information about movies and TV series.`,
    tools: ["TypeScript", "React", "Next", "Styled Components"],
    image: "/filmians_dark.png",
    url: {
      demo: "https://filmians.vercel.app/",
      github: "https://github.com/kamiviolet/filmians",
    },
  },
  {
    name: "Ubiquitous Biscuit",
    description: `Inspired by Reddit, with user registration function, update, delete their profile and contribute to the community by sharing articles and comments.`,
    tools: ["JavaScript", "PostgreSQL", "React", "jest", "CSS"],
    image: "/ub_dark_web.png",
    url: {
      demo: "https://ubiquitous-biscuit.netlify.app/",
      github: "https://github.com/kamiviolet/ubiquitous_biscuit",
    },
  },
  {
    name: "Weathering",
    description: `Check weather in current location based on GPS or any cities upon user input. Feature suggested city names for better UX.`,
    tools: ["TypeScript", "React", "Next", "Tailwind CSS"],
    image: "/weathering_dark.png",
    url: {
      demo: "https://weathering-two.vercel.app/",
      github: "https://github.com/kamiviolet/weathering",
    },
  },
  {
    name: "Park Me Bike (presented by SmashCoders)",
    description: `A hybrid mobile application, with authentication and authorisation powered by Fire Auth, allow users to navigate themselves with GPS to find an ideal cycle parking spaces.`,
    tools: ["React", "Tailwind CSS", "JavaScript"],
    image: "/park_me_bike.png",
    url: {
      demo: "https://northcoders.com/projects/june-2023/park-me-bike",
      github: "https://github.com/kamiviolet/ParkMeBike",
    },
  },
  {
    name: "Cookiess! Forum (Ubiquitous Biscuit v2)",
    description: `Implemented Supabase Auth to authenticate user via either JWT/OAuth, with captcha protection from hCaptcha. Leveraged RLS in PSQL to level up the security. `,
    tools: ["TypeScript", "Next", "PostgreSQL", "Tailwind CSS"],
    image: "/cookiess_forum.png",
    url: {
      demo: "https://cookiess-forum.vercel.app/",
      github: "https://github.com/kamiviolet/ubiquitous_biscuit_v2",
    },
  },
  {
    name: "The official website of Ai Morikawa & Gentaro Suzuki",
    description: `An official website for a Japanese musical group with full responsiveness, designed with Figma and SEO optimised, hosted on behalf of the client.`,
    tools: ["TypeScript", "Next", "Tailwind CSS"],
    image: "/ai-gentaro.png",
    url: {
      demo: "https://aigentaro.live",
    },
  },
];

const formattedProjects = JSON.stringify(projectList, null, 4);

try {
  fs.writeFile("./src/db_setup/data/projects.json", formattedProjects);
  console.log("File created successfully.");
} catch (error: unknown) {
  console.error(error);
}
