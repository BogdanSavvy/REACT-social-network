import style from "../../UserProfile.module.scss";


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
               <button>like</button>
               <button>comment</button>
               <button>repost</button>
            </div>
         </div>
      </div>
   )
}


export default Post;