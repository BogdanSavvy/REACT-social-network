import style from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
   return (
      <nav className={`${style.nav}`}>
         <ul className={`${style.nav__menuList}`}>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='/profile'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHouse} /> Home </NavLink>
            </li>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='/news'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faNewspaper} /> News </NavLink>
            </li>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='/messages'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faEnvelope} /> Messages </NavLink>
            </li>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='/music'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faMusic} /> Music </NavLink>
            </li>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='groups'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faUsersLine} /> Group`s </NavLink>
            </li>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='friends'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faHandshake} /> Friend`s </NavLink>
            </li>
            <li className={`${style.nav__menuLink}`}>
               <NavLink to='setings'> <FontAwesomeIcon className={`${style.nav__icon}`} icon={faGears} /> Settings </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default NavBar;