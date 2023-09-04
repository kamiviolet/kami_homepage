import ProjectType from "@/types/project.type";

const projectList: ProjectType[] = [
  {
    name: "Cookiess! Forum",
    description: `Migration of Ubiquitous Biscuit, a Reddit mock. Implemented Supabase Auth to authenticate user via either JWT/OAuth, with captcha protection from hCaptcha. Leveraged RLS in PSQL to level up the security. `,
    tools: "TypeScript, Next, PostgreSQL, Tailwind CSS",
    image: "/cookiess_forum.png",
    url: {
      demo: "https://cookiess-forum.vercel.app/",
      github: "https://github.com/kamiviolet/ubiquitous_biscuit_v2",
    },
  },
  {
    name: "Park Me Bike",
    description: `Presented by SmashCoders, Park Me Bike is a crossed-platform mobile application allowing users to find an ideal cycle parking spaces nearby or anywhere you look on the map.`,
    tools: "React, Tailwind CSS, JavaScript",
    image: "/park_me_bike.png",
    url: {
      demo: "https://northcoders.com/projects/june-2023/park-me-bike",
      github: "https://github.com/kamiviolet/ParkMeBike",
    },
  },
  {
    name: "Filmians",
    description: `A mock IMDB site to perform CRUD and allow users to check information about movies and TV series.`,
    tools: "TypeScript, React, Next, Styled Components",
    image: "/filmians_dark.png",
    url: {
      demo: "https://filmians.vercel.app/",
      github: "https://github.com/kamiviolet/filmians",
    },
  },
  {
    name: "FurryTail",
    description: `A mini project to search for different cat breeds and get overwhelmed by their cuteness.`,
    tools: "TypeScript, React, Next",
    image: "/furrytail_dark.png",
    url: {
      demo: "https://furrytail.vercel.app/",
      github: "https://github.com/kamiviolet/furrytail",
    },
  },
  {
    name: "Weathering",
    description: `A mini project for checking weather in current location or anywhere from the world.`,
    tools: "TypeScript, React, Next, Tailwind CSS",
    image: "/weathering_dark.png",
    url: {
      demo: "https://weathering-two.vercel.app/",
      github: "https://github.com/kamiviolet/weathering",
    },
  },
  {
    name: "Ubiquitous Biscuit",
    description: `A mock forum inspired by Reddit, allowing users to join/delete/edit the membership and to contribute to the community by sharing articles and comments.`,
    tools: "JavaScript, PostgreSQL, React, jest, CSS",
    image: "/ub_dark_web.png",
    url: {
      demo: "https://ubiquitous-biscuit.netlify.app/",
      github: "https://github.com/kamiviolet/ubiquitous_biscuit",
    },
  },
];

export default projectList;
