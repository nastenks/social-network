import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"
import NavbarFriends from './NavbarFriends/NavbarFriends';
import NavbarLinks from "./NavbarLinks/NavbarLinks";

const Navbar = (props) => {
  return(
    <div className={s.navbar}> 
      <NavbarLinks className={s.links} />
      <NavbarFriends friendsData={props.friendsData} />
    </div>
    
  );
}

export default Navbar;