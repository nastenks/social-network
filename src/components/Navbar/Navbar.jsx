import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = (props) => {
  return(
    <nav className={s.nav}> 
      <NavLink 
        exact
        className={ navData => navData.isActive ? s.active : s.link} 
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link}  to="/dialogs">Messages</NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link}  to="/news">News</NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link}  to="/music">Music</NavLink>
      <NavLink className={ navData => navData.isActive ? s.active : s.link}  to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;