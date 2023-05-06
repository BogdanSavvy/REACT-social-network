import style from "../UserProfile.module.scss";

import { NavLink } from "react-router-dom";

import defaultUserAva from '../../../images/defaultAva/user.jpg';
import defaultBgImg from '../../../images/defaultBg/defBg.webp';
import Preloader from '../../common/Preloader/Preloader';

const MainProfile = (props) => {
   if(props.profile === null){
      return <Preloader />
   }
   return (
      <section className={`${style.page__profile} ${style.profile}`}>
         <div className={`${style.profile__image}`}>
            <img src={!props.profile.photos.large ? defaultBgImg : props.profile.photos.large} alt="wallpaper_img" />
         </div>
         <div className={`${style.profile__info} ${style.info}`}>
            <div className={`${style.info__avatar}`}>
               <img src={!props.profile.photos.small ? defaultUserAva : props.profile.photos.small} alt="that was be avatar )" />
            </div>
            <div className={`${style.info__description}`}>
               <h2 className={`${style.info__name}`}> {props.profile.fullName} </h2>
               <p className={`${style.info__status}`}> {props.profile.aboutMe} </p>
               <p className={`${style.info__status}`}> {props.profile.lookingForAJobDescription} </p>
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