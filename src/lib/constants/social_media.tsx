import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaCodepen, FaMedium } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import React from "react";
import SocialMediaType from "@/types/socialmedia.type";

const socialmediaList: SocialMediaType[] = [
  {
    name: "@kamiviolet",
    path: "https://github.com/kamiviolet/",
    icon: <BsGithub />,
  },
  {
    name: "@in/kamiviolet",
    path: "https://www.linkedin.com/in/kamiviolet",
    icon: <BsLinkedin />,
  },
  {
    name: "@kamiviolet",
    path: "https://medium.com/@kamiviolet",
    icon: <FaMedium />,
  },
  {
    name: "@kamiviolet",
    path: "https://www.codewars.com/users/kamiviolet",
    icon: <SiCodewars />,
  },
];

export default socialmediaList;
