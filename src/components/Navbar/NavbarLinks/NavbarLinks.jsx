import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavbarLinks.module.css";

const NavbarLinks = () => {
  return (
    <nav className={s.nav}> 
      <NavLink 
        className={ navData => navData.isActive ? s.active : s.link} 
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link} to="/dialogs">Messages</NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link} to="/news">News</NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link} to="/music">Music</NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link} to="/settings">Settings</NavLink>
    </nav>
  )
}

export default NavbarLinks;