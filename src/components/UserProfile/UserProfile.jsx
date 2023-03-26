import { Routes, Route } from "react-router-dom";
import MainProfile from "./MainProfie/MainProfile";
import PostsTab from "./PostsTab/PostsTab";
import GalleryTab from "./GalleryTab/GalleryTab";
import VideoTab from "./VideoTab/VideoTab";

import style from "./UserProfile.module.scss";


const UserProfile = (props) => {
   return (
      <div className={`${style.body}`}>
         <div className={`${style.body__page} ${style.page}`}>
            <MainProfile />
            <PostsTab />
            <GalleryTab />
            <VideoTab />
         </div>
      </div>
   )
}


export default UserProfile;