import style from '../Users.module.scss';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import defaultUserPhoto from '../../../images/defaultAva/user.jpg';
import defaultBgImg from '../../../images/defaultBg/defBg.webp';


const Member = props => {

   let onFollow = () => {
      props.follow(props.id);
   };

   let onUnFollow = () => {
      props.unfollow(props.id);
   };

   let isDisabled = props.followProgress.some(id => id === props.id);

   return (
      <div className={`${style.users__member} ${style.member}`}>
         <div className={`${style.member__img}`}>
            <img src={props.bgImg != null ? props.bgImg : defaultBgImg} alt="BG_IMG" />
         </div>
         <div className={`${style.member__ava}`}>
            <NavLink to={`/profile/${props.id}`}>
               <img src={props.ava != null ? props.ava : defaultUserPhoto} alt="AVATAR" />
            </NavLink>
         </div>
         <div className={`${style.member__text}`}>
            <div className={`${style.member__userName}`}> {props.name} </div>
            <div className={`${style.member__status}`}> {props.status} </div>
         </div>
         <div className={`${style.member__actions}`}>
            {props.followed 
               ? <button disabled={isDisabled} onClick={onUnFollow} className={`${style.member__unFollow}`}>
                  <FontAwesomeIcon icon={faUserXmark} /> Un Follow
               </button>
               : <button disabled={isDisabled} onClick={onFollow} className={`${style.member__follow}`}>
                  <FontAwesomeIcon icon={faUserCheck} /> Follow
               </button>
            }
            <button className={`${style.member__message}`}><FontAwesomeIcon icon={faEnvelopeOpen} /></button>
         </div>
      </div>
   )
}

export default Member