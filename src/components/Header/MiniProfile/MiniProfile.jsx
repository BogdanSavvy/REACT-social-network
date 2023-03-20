import React from 'react';
import style from './../Header.module.scss';

const MiniProfile = () => {
   return(
      <div className={`${style.header__miniProfile} ${style.miniProfile}`}>
         <div className={style.miniProfile__avatar}></div>
         <div className={style.miniProfile__text}>Hi, User</div>
         <ul className={style.miniprofile__list}>
         </ul>
      </div>
   )
}

export default MiniProfile;