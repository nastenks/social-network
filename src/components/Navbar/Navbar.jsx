import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
  return(
    <nav className={s.nav}> 
      <NavLink className={s.link} to="/profile">Profile</NavLink>
      <NavLink className={s.link} to="/dialogs">Messages</NavLink>
      <NavLink className={s.link} to="/news">News</NavLink>
      <NavLink className={s.link} to="/music">Music</NavLink>
      <NavLink className={s.link} to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;