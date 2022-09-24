import React from "react";
import s from "./NewPost.module.css"

const NewPost = (props) => {
  let textNewPost = React.createRef();

  let addPost = () => { 
    props.addPost();
  }

  let onPostChange = () => {
    let text = textNewPost.current.value;
    props.updateNewPostText(text);
  }

  return(
    <div className={s.new_post}>
      <div className={s.avatar}>
        <img src="https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D1%8F-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B8-%D0%BA%D1%80%D1%83%D1%82%D0%B0%D1%8F_021.jpg" />
      </div>
      <textarea placeholder="Write" ref={textNewPost} value={props.NewPostText} onChange={onPostChange}/>
      <button onClick={ addPost }>Send</button>
    </div>
  );
}

export default NewPost;