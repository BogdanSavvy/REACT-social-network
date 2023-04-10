import style from "./NavBar.module.scss";

import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const NavBar = (props) => {
   
   let navEl = React.createRef();
   let navOpen = () => {
      if(navEl.current.className === `${style.nav}`){
         navEl.current.className =`${style.nav} ${style.nav_open}`;
      } else navEl.current.className =`${style.nav}`;
   };

   return (
      <nav ref={navEl} className={`${style.nav}`}>
         <ul className={`${style.nav__menuList}`}>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHouse} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/'> Home </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/news' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faNewspaper} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/news'> News </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/messages' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faEnvelope} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/messages'> Messages </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/music' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faMusic} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/music'> Music </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/groups' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faUsersLine} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='groups' > Group`s </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/friends' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHandshake} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='friends' > Friend`s </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/settings' style={({ isActive }) => {return {color: isActive ? "#2a8ffb" : "white",};}}>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faGears} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='settings'> Settings </NavLink>
            </li>
         </ul>
         <div className={`${style.nav__button}`}>
            <button ref={navEl} onClick={navOpen}><FontAwesomeIcon icon={faChevronRight} /></button>
         </div>
      </nav>
   )
}

export default NavBar;