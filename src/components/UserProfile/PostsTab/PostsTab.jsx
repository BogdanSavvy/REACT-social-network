import style from '../UserProfile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';

// immitation of Data to Posts
let postsData = [
   { name: 'Amogus Amongasovich', message: 'WTF', time: '25min ago', },
   { name: 'Amogus Amongasovich', message: 'is', time: '2 days ago', },
   { name: 'Amogus Amongasovich', message: 'going on', time: '1 hour ago', },
   { name: 'Amogus Amongasovich', message: 'THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!', time: '22min ago', },
   { name: 'Amogus Amongasovich', message: 'THIS DESIGN IS TRASH!', time: '4min ago', },
   { name: 'Amogus Amongasovich', message: 'THIS DESIGN IS TRASH!', time: '15min ago', },
   { name: 'Amogus Amongasovich', message: 'THIS DESIGN IS TRASH!', time: '35min ago', },
   { name: 'Amogus Amongasovich', message: 'THIS DESIGN IS TRASH!', time: '5min ago', },
];
//____________________________________________________________

const Post = (props) => {
   return (
      <div className={`${style.page__postsBox} ${style.postsBox}`}>
         <div className={`${style.postsBox__post} ${style.post}`}>
            <div className={`${style.post__top}`}>
               <div className={`${style.post__avatar}`}>
                  <img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="ava" />
               </div>
               <div className={`${style.post__name}`}>
                  <span>{props.name},</span>  posted {props.time}.
               </div>
            </div>
            <div className={`${style.post__body}`}>{props.message}</div>
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
   return (
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action="#" className={`${style.postCreator__form}`}>
            <input type="text" placeholder="Start typing to create new post..." />
            <button type="submit"><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </div>
   )
};


const PostsTab = (props) => {
   
   let newPost = postsData.map( el => <Post name={el.name} message={el.message} time={el.time} />);

   return (
      <>
         <PostCreator />
         {newPost}
      </>
   )
};


export default PostsTab;