import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {

  let dialogsElement = props.dialogsData
    .map( dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} img={dialog.img} /> )

  let messageElement = props.messageData
    .map ( message => <Message key={message.id} id={message.id} message={message.message} /> )

  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messageElement}
      </div>
    </div>
  )
}

export default Dialogs;