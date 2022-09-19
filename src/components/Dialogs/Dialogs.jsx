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

  let messageData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hihu'},
    {id: 3, message: 'how are you?'}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
      </div>
      <div className={s.messages}>
        <Message id={messageData[0].id} message={messageData[0].message} />
        <Message id={messageData[1].id} message={messageData[1].message} />
        <Message id={messageData[2].id} message={messageData[2].message} />
      </div>
    </div>
  )
}

export default Dialogs;