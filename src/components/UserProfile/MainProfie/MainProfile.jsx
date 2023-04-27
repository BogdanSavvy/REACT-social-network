import style from "../UserProfile.module.scss";

import { NavLink } from "react-router-dom";


const MainProfile = (props) => {

   return (
      <section className={`${style.page__profile} ${style.profile}`}>
         <div className={`${style.profile__image}`}>
            <img src='https://wallpapers.com/images/featured/fc0xi68rw21ini90.jpg' alt="wallpaper_img" />
         </div>
         <div className={`${style.profile__info} ${style.info}`}>
            <div className={`${style.info__avatar}`}>
               <img src='https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg' alt="that was be avatar )" />
            </div>
            <div className={`${style.info__description}`}>
               <h2 className={`${style.info__name}`}> Pepe Frog </h2>
               <p className={`${style.info__status}`}> It should be status </p>
            </div>
         </div>
         <div className={`${style.profile__tabs} ${style.tabs}`}>
            <ul className={`${style.tabs__list}`}>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='posts/'>Posts</NavLink>
               </li>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='activity/'>Activity</NavLink>
               </li>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='gallery/'>Gallery</NavLink>
               </li>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='videos/'>Videos</NavLink>
               </li>
            </ul>
         </div>
      </section>
   )
}


export default MainProfile;