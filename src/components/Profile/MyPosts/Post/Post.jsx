import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
  return(
    <div className={s.post}>
      <div className={s.avatar}>
        <img src={props.urlImg} />
      </div>

      <div>
        { props.message }
      </div>
      
      <div className={s.like}>
        Like: {props.likeCounts}
      </div>
    </div>
  );
}

export default Post;