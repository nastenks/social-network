import React from "react";
import s from "./Post.module.css"

const Post = () => {
  return(
    <div className={s.post}>
      <div>
        <img src="https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D1%8F-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B8-%D0%BA%D1%80%D1%83%D1%82%D0%B0%D1%8F_021.jpg" />
      </div>
      <div>
        posts
      </div>
    </div>
  );
}

export default Post;