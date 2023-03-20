import React from "react";
import style from "./NavBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
   return (
      <div className={`${style.nav}`}>
         <div className={`${style.nav__container}`}>
            <ul className={`${style.nav__menuList}`}>
               <li className={`${style.nav__menuLink}`}>
                  <a href="#"> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHouse} /> Home</a>
               </li>
               <li className={`${style.nav__menuLink}`}>
                  <a href="#"> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faEnvelope} /> Messeges</a></li>
               <li className={`${style.nav__menuLink}`}>
                  <a href="#"> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faMusic} /> Music </a>
               </li>
               <li className={`${style.nav__menuLink}`}>
                  <a href="#"> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHandshake} /> Friend`s </a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default NavBar;