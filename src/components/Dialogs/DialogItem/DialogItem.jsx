import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialogItem}>
      <div className={s.avatar}>
        <img src={props.img} />
      </div>
      <div>
        <NavLink to={"/dialogs/" + (props.id)}> {props.name} </NavLink>
      </div>
    </div>
  )
}

export default DialogItem;