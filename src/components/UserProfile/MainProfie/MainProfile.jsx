import style from "../UserProfile.module.scss";

import { NavLink } from "react-router-dom";


const MainProfile = (props) => {

   return (
      <section className={`${style.page__profile} ${style.profile}`}>
         <div className={`${style.profile__image}`}>
            <img src={props.bgImg} alt="wallpaper_img" />
         </div>
         <div className={`${style.profile__info} ${style.info}`}>
            <div className={`${style.info__avatar}`}>
               <img src={props.ava} alt="that was be avatar )" />
            </div>
            <div className={`${style.info__description}`}>
               <h2 className={`${style.info__name}`}> {props.name} </h2>
               <p className={`${style.info__status}`}> {props.status} </p>
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