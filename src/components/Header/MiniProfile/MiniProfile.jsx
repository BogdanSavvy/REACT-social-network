import { NavLink } from 'react-router-dom';

import style from './../Header.module.scss';


const MiniProfile = (props) => {
   return (
      <div className={`${style.header__miniProfile} ${style.miniProfile}`}>
         <div className={style.miniProfile__avatar}>
            <NavLink to='/profile'><img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="mini-avatar" /></NavLink>
         </div>
         <div className={style.miniProfile__text}>
            <NavLink to='/profile'>Hi, {props.name}</NavLink>
         </div>
      </div>
   )
}

export default MiniProfile;