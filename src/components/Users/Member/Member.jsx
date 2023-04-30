import style from '../Users.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';


const Member = props => {
   let onFollow = () => props.follow(props.id);

   let onUnFollow = () => props.unFollow(props.id);

   return (
      <div className={`${style.users__member} ${style.member}`}>
         <div className={`${style.member__img}`}>
            <img src={props.bgImg} alt="BG_IMG" />
         </div>
         <div className={`${style.member__ava}`}>
            <img src={props.ava} alt="AVATAR" />
         </div>
         <div className={`${style.member__text}`}>
            <div className={`${style.member__userName}`}> {props.name} </div>
            <div className={`${style.member__status}`}> {props.status} </div>
         </div>
         <div className={`${style.member__actions}`}>
            {props.followed ?
               <button onClick={onUnFollow} className={`${style.member__unFollow}`}><FontAwesomeIcon icon={faUserXmark} /> Un Follow</button>
               : <button onClick={onFollow} className={`${style.member__follow}`}><FontAwesomeIcon icon={faUserCheck} /> Follow</button>
            }
            <button className={`${style.member__message}`}><FontAwesomeIcon icon={faEnvelopeOpen} /></button>
         </div>
      </div>
   )
}

export default Member