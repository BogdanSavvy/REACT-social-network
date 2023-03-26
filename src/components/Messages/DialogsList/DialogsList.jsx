import style from '../Messages.module.scss';


const Branch = (props) => {
   return (
      <div className={`${style.dialogsList__branch}`}>
         <div className={`${style.dialogsList__branchWho}`}>
            <div className={`${style.dialogsList__userAvatar}`}>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU" alt="user_ava" />
            </div>
            <div className={`${style.dialogsList__userName}`}>{props.name} {props.surname}</div>
         </div>
         <div className={`${style.dialogsList__lastMessage}`}><span>Last message: </span> {props.lastSent}</div>
      </div>
   )
};


const DialogList = (props) => {
   return (
      <div className={`${style.page__dialogsList} ${style.dialogsList}`}>
         <Branch name='Andre' surname='Boyarskiy' lastSent='Чінаааа, ком цу моне' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
         <Branch name='User' surname='NOname' lastSent='Someone message' />
      </div>
   )
}

export default DialogList;