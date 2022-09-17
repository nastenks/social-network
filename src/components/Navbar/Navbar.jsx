import React from "react";
import s from "./Navbar.module.css"

const Navbar = () => {
  return(
    <nav className={s.nav}> 
      <a className={s.link}>Profile</a>
      <a className={s.link}>Messages</a>
      <a className={s.link}>News</a>
      <a className={s.link}>Music</a>
      <a className={s.link}>Settings</a>
    </nav>
  );
}

export default Navbar;