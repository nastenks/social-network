import React from "react";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = (props) => {
  return(
    <div className={s.wrap}>
      <Description />
      <MyPosts postData={props.postData} />
    </div>
  );
}

export default Profile;