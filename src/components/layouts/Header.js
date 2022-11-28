import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header flex items-center justify-center flex-wrap gap-x-5 pt-5 mb-5 text-white">
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          return isActive ? "text-primary cursor-pointer" : "cursor-pointer";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) =>
          isActive ? "text-primary cursor-pointer" : "cursor-pointer"
        }
      >
        Movies
      </NavLink>
      <NavLink
        to={"/moviesV2"}
        className={({ isActive }) =>
          isActive ? "text-primary cursor-pointer" : "cursor-pointer"
        }
      >
        Movies - Load More
      </NavLink>
    </header>
  );
}
