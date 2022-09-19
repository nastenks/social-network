import React from "react";
import s from "./MyPosts.module.css"
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    { id: 1, message: "hi", likeCounts: 12, urlImg: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
    { id: 2, message: "hello", likeCounts: 0, urlImg: "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE-%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-023.jpg"},
    { id: 3, message: "kuku", likeCounts: 2, urlImg: "https://weblinks.ru/wp-content/uploads/2022/02/Krasivye-kartinki-leta-na-zastavku-telefona-1.jpg"}
  ]

  return(
    <div className={s.my_posts}>
      <NewPost />
      <Post id={postData[0].id} message={postData[0].message} urlImg={postData[0].urlImg} likeCounts={postData[0].likeCounts} />
      <Post id={postData[1].id} message={postData[1].message} urlImg={postData[1].urlImg} likeCounts={postData[1].likeCounts} />
      <Post id={postData[2].id} message={postData[2].message} urlImg={postData[2].urlImg} likeCounts={postData[2].likeCounts} />
    </div>
  );
}

export default MyPosts;