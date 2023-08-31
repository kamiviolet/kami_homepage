import { Link } from "react-router-dom";
import CATEGORIES from "../constants/Categories";
import ThemeToggle from "./ThemeToggle";
import { IoMdOpen } from "react-icons/io";
import React from "react";

export default function MenuWrapper() {
  return (
    <>
      <ul className="menu_wrapper hidden">
        {CATEGORIES.map((elem) => {
          return (
            <li key={elem.target + "__link"}>
              {elem.target == "articles" ? (
                <a
                  className="menu_link"
                  href="https://medium.com/@kamiviolet"
                  target="_blank"
                  rel="noreferrer" 
                >
                  <div className="menu_icon">{elem.svg}</div>
                  <p className="menu_text">
                    {elem.target.toUpperCase()} <IoMdOpen />
                  </p>
                </a>
              ) : (
                <Link className="menu_link" to={elem.link}>
                  <div className="menu_icon">{elem.svg}</div>
                  <p className="menu_text">{elem.target.toUpperCase()}</p>
                </Link>
              )}
            </li>
          );
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </>
  );
}
