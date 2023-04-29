import style from '../../Messages.module.scss';

import { NavLink } from 'react-router-dom';


const Branch = (props) => {
   return (
      <NavLink to={`/messages/${props.id}`}>
         <div className={`${style.dialogsList__branch}`}>
            <div className={`${style.dialogsList__branchWho}`}>
               <div className={`${style.dialogsList__userAvatar}`}>
                  <img src={`${props.avatar}`} alt="user_ava" />
               </div>
               <div className={`${style.dialogsList__userName}`}>
                  {props.name} {props.surname}
               </div>
               <div className={`${style.dialogsList__lastVisit} ${style[props.visit]}`}>{props.visit}</div>
            </div>
            <div className={`${style.dialogsList__lastMessage}`}><span>Last message: </span> {props.lastSent}</div>
         </div>
      </NavLink>
   )
};


export default Branch;