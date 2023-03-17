import React from "react";
import style from './Header.module.scss';


const Header = () => {
   return(
      <header className={style.header}>
         <div className={style.header__container}>
            <div className={style.header__logo}><a href="#">Anesta<span>.</span></a></div>
            <div className={style.search}>
               <div className={style.search__icon}></div>
               <input className={style.search__input} type="text" placeholder="Start typing to search..." />
            </div>
            <div className={style.notification}>
               <a href="#" className={style.notification__messeges}></a>
               <a href="#" className={style.notification__bell}></a>
            </div>
            <div className={style.miniProfile}>
               <div className={style.miniProfile__avatar}></div>
               <div className={style.miniProfile__text}>Hi, User</div>
               <ul className={style.miniprofile__list}>
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header;

