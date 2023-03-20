import style from './../Header.module.scss';

const Notification = () => {
   return(
      <div className={`${style.header__notification} ${style.notification}`}>
         <a href="#" className={style.notification__messeges}></a>
         <a href="#" className={style.notification__bell}></a>
      </div>
   )
}

export default Notification;