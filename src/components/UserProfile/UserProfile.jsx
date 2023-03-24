import { Routes, Route } from "react-router-dom";
import MainProfile from "./MainProfie/MainProfile";
import PostsTab from "./PostsTab/PostsTab";

import style from "./UserProfile.module.scss";


const UserProfile = () => {
   return (
      <div className={`${style.body}`}>
         <div className={`${style.body__page} ${style.page}`}>
            <MainProfile />
            <PostsTab />
         </div>
      </div>
   )
}


export default UserProfile;