import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.messageAvatar}>
        <img src={props.img} />
      </div>
      { props.message }
    </div>
  )
}

export default Message;