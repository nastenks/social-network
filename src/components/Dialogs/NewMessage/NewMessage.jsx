import React, { createRef } from "react";
import s from "./NewMessage.module.css";

const NewMessage = (props) => {

  let textMessage = React.createRef()

  let addMessage = () => {
    props.addMessage()
  }
  
  let onMessageChange = () => {
    let text = textMessage.current.value
    props.updateNewMessageText(text)
  }

  return(
    <div className={s.newMessage}>
      <div className={s.avatar}>
        <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
      </div>
      <textarea placeholder="write messade" ref={textMessage} value={props.NewMessageText} onChange={onMessageChange}></textarea>
      <button onClick={addMessage}>Send</button>
    </div>
  )
}

export default NewMessage;