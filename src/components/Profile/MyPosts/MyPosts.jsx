import React from "react";
import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElement = props.postData
    .map( p => <Post key={p.id} message={p.message} urlImg={p.urlImg} likeCounts={p.likeCounts} /> )

  return(
    <div className={s.my_posts}>
      <NewPost addPost={props.addPost} NewPostText={props.NewPostText} updateNewPostText={props.updateNewPostText} />
      <div className={s.listPosts}>
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;