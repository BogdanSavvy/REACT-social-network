import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

import style from './../Header.module.scss';


const Notification = (props) => {
   return(
      <div className={`${style.header__notification} ${style.notification}`}>
         <a href="#" className={style.notification__messeges}>
            <FontAwesomeIcon className={style.notification__icon} icon={faBell} />
         </a>
         <a href="#" className={style.notification__bell}>
            <FontAwesomeIcon className={style.notification__icon} icon={faMessage} />
         </a>
      </div>
   )
}

export default Notification;
