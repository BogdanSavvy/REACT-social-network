import style from './../Header.module.scss';

const MiniProfile = (props) => {
   return(
      <div className={`${style.header__miniProfile} ${style.miniProfile}`}>
         <div className={style.miniProfile__avatar}>
            <img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="mini-avatar" />
         </div>
         <div className={style.miniProfile__text}>Hi, {props.name}</div>
         <ul className={style.miniprofile__list}>
         </ul>
      </div>
   )
}

export default MiniProfile;