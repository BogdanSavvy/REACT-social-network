import { NavLink } from 'react-router-dom';

import style from './../Header.module.scss';


const MiniProfile = (props) => {
   return (
      <div className={`${style.header__miniProfile} ${style.miniProfile}`}>
         <div className={style.miniProfile__avatar}>
            <NavLink to='/profile'><img src="https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg" alt="mini-avatar" /></NavLink>
         </div>
         <div className={style.miniProfile__text}>
            <NavLink to='/profile'>Hi, {props.name}</NavLink>
         </div>
      </div>
   )
}

export default MiniProfile;