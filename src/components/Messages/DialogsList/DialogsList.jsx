import style from '../Messages.module.scss';
import Branch from './Branch/Branch'

const DialogList = () => {
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
      </div>
   )
}

export default DialogList;