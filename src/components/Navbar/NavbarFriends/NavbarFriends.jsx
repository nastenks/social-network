import React from "react";
import s from "./NavbarFriends.module.css";
import { NavLink } from 'react-router-dom';

const NavbarFriends = (props) => {

  let friendsElement = props.friendsData
    .map ( f => 
    <NavLink 
      className={s.avatar} 
      to={"/profile/" + f.id}
    >
      <img src={f.img} />
      {f.name}
    </NavLink>)

  return (
    <div className={s.navbarFriends}>
      <NavLink 
        className={ navData => navData.isActive ? s.active : s.link} 
        to="/friends"
      >
        Friends
      </NavLink>
      <div className={s.avatars}>
        {friendsElement}
      </div>
    </div>
  )
}

export default NavbarFriends; 

      
