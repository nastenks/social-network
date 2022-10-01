import React, { createRef } from "react";
import s from "./NewMessage.module.css";

const NewMessage = () => {

  let textMessage = React.createRef()
  
  let sendMessage = () => {
    let text = textMessage.current.value
  }

  return(
    <div className={s.newMessage}>
      <div className={s.avatar}>
        <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
      </div>
      <textarea placeholder="write messade" ref={textMessage}></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default NewMessage;