import React from "react";
import {
  BsFillHouseDoorFill,
  BsFillPersonBadgeFill,
  BsFillRocketFill,
  BsChatLeftText,
} from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import MenuCategoryType from "@/types/menu_category.type";

const categoryList: MenuCategoryType[] = [
  {
    target: "home",
    link: "/",
    icon: <BsFillHouseDoorFill />,
  },
  {
    target: "about",
    link: "about",
    icon: <BsFillPersonBadgeFill />,
  },
  {
    target: "projects",
    link: "projects",
    icon: <BsFillRocketFill />,
  },
  {
    target: "gallery",
    link: "gallery",
    icon: <BiPhotoAlbum />,
  },
  {
    target: "articles",
    link: "",
    icon: <GiNotebook />,
  },
  {
    target: "contact",
    link: "contact",
    icon: <BsChatLeftText />,
  },
];

export default categoryList;
