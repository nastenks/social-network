import React from "react";
import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
  return(
    <div className={s.my_posts}>
      <NewPost />
      <Post message="привет" />
      <Post message="котики-кукотики" />
      <Post message="ешки-матрешки" />
    </div>
  );
}

export default MyPosts;