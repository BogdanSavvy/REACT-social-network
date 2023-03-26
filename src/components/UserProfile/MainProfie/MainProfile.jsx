import { NavLink } from "react-router-dom";
import style from "../UserProfile.module.scss";


const MainProfile = (props) => {
   return (
      <section className={`${style.page__profile} ${style.profile}`}>
         <div className={`${style.profile__image}`}>
            <img src="https://salsknews.ru/wp-content/uploads/2019/06/%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%BA%D0%B0-1.jpg" alt="wallpaper_img" />
         </div>
         <div className={`${style.profile__info} ${style.info}`}>
            <div className={`${style.info__avatar}`}>
               <img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="that was be avatar )" />
            </div>
            <div className={`${style.info__description}`}>
               <div className={`${style.info__name}`}>Amogus Amongasovich</div>
               <div className={`${style.info__status}`}>Hey world, always say: "Chinaaaaa!"</div>
            </div>
         </div>
         <div className={`${style.profile__tabs} ${style.tabs}`}>
            <ul className={`${style.tabs__list}`}>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='/'>Posts</NavLink>
               </li>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='/'>Gallery</NavLink>
               </li>
               <li className={`${style.tabs__link}`}>
                  <NavLink to='/'>Videos</NavLink>
               </li>
            </ul>
         </div>
      </section>
   )
}


export default MainProfile;