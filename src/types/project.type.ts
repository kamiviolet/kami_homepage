type ProjectType = {
  name: string;
  description: string;
  tools: string[];
  image: string;
  url: {
    demo: string;
    github: string;
  };
};

export default ProjectType;
