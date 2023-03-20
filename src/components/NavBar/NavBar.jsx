import React from "react";
import style from "./NavBar.module.scss";

const NavBar = () => {
   return (
      <div className={`${style.nav}`}>
         <div className={`${style.nav__container}`}>
            <ul className={`${style.nav__menuList}`}>
               <li className={`${style.nav__menuLink}`}><a href="#">Home</a></li>
               <li className={`${style.nav__menuLink}`}><a href="#">Messeges</a></li>
               <li className={`${style.nav__menuLink}`}><a href="#">Music</a></li>
               <li className={`${style.nav__menuLink}`}><a href="#">Friend`s</a></li>
            </ul>
         </div>
      </div>
   )
}

export default NavBar;