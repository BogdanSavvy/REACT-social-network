import style from "./NavBar.module.scss";

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
   return (
      <nav className={`${style.nav}`}>
         <ul className={`${style.nav__menuList}`}>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/home'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHouse} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/home'> Home </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/news'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faNewspaper} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/news'> News </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/messages'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faEnvelope} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/messages'> Messages </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/music'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faMusic} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='/music'> Music </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/groups'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faUsersLine} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='groups'> Group`s </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/friends'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHandshake} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='friends'> Friend`s </NavLink>
            </li>
            <li className={`${style.nav__menuItem}`}>
               <NavLink className={`${style.nav__iconBox}`} to='/settings'>
                  <FontAwesomeIcon className={`${style.nav__icon}`} icon={faGears} />
               </NavLink>
               <NavLink className={`${style.nav__link}`} to='settings'> Settings </NavLink>
            </li>
         </ul>
         <div className={`${style.nav__button}`}>
            <button><FontAwesomeIcon icon={faChevronRight} /></button>
         </div>
      </nav>
   )
}

export default NavBar;