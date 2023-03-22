import React from "react";
import style from "../UserProfile.module.scss";

const Post = (props) => {
   return(
      <section className={`${style.main__postsBox} ${style.postsBox}`}>
         <div className={`${style.postsBox__post} ${style.post}`}>
            <div className={`${style.post__top}`}>
               <div className={`${style.post__avatar}`}>
                  <img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="ava" />
               </div>
               <div className={`${style.post__name}`}>
                  <span>Amogus Amongasovich</span> , posted in <br /> { props.time }
               </div>
            </div>
            <div className={`${style.post__body}`}>{ props.messege }</div>
            <div className={`${style.post__action}`}><button>Some button`s in future</button></div>
         </div>
      </section>
   )
}

export default Post;