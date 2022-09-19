import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Kseniya'}
  ]

  let dialogsElement = dialogsData
    .map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> )

  let messageData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hihu'},
    {id: 3, message: 'how are you?'}
  ]

  let messageElement = messageData
    .map ( message => <Message id={message.id} message={message.message} /> )

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