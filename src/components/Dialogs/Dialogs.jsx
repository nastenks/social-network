import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        names
      </div>
      <div className={s.messages}>
        messages
      </div>
    </div>
  )
}

export default Dialogs;