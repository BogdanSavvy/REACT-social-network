import style from '../UserProfile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';


const Post = (props) => {
   return(
      <div className={`${style.page__postsBox} ${style.postsBox}`}>
         <div className={`${style.postsBox__post} ${style.post}`}>
            <div className={`${style.post__top}`}>
               <div className={`${style.post__avatar}`}>
                  <img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="ava" />
               </div>
               <div className={`${style.post__name}`}>
                  <span>Amogus Amongasovich,</span>  posted { props.time }
               </div>
            </div>
            <div className={`${style.post__body}`}>{ props.messege }</div>
            <div className={`${style.post__action}`}>
               <button><FontAwesomeIcon className={`${style.post__like}`} icon={faHeart} /></button>
               <button><FontAwesomeIcon className={`${style.post__comment}`} icon={faCommentDots} /></button>
               <button><FontAwesomeIcon className={`${style.post__repost}`} icon={faShareFromSquare} /></button>
               <button><FontAwesomeIcon className={`${style.post__share}`} icon={faSquareShareNodes} /></button>
            </div>
         </div>
      </div>
   )
};


const PostCreator = (props) => {
   return(
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action="#" className={`${style.postCreator__form}`}>
            <input type="text" placeholder="Start typing to create new post..." />
            <button type="submit"><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </div>
   )
};


const PostsTab = (props) => {
   return (
      <>
         <PostCreator />
         <Post messege="WTF" time="25 min ago" />
         <Post messege="is" time="1 hour ago" />
         <Post messege="going on" time="1h 10min ago" />
         <Post messege="THIS DESIGN IS TRASH!" time="Tommorow" />
      </>
   )
};


export default PostsTab;