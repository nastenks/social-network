import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
  return(
    <div className={s.content}>
      <div>
        <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" />
      </div>
      <div>
        ava+desc
      </div>
      <div>
        nev post
      </div>
      <div>
        posts
      </div>
    </div>
  );
}

export default Profile;