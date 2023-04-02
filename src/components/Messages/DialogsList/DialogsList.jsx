import style from '../Messages.module.scss';

import Branch from './Branch/Branch';


const DialogList = (props) => {
   let newBranch = props.branchesData.map( 
      el => <Branch id={el.id} name={el.name} surname={el.surname} lastSent={el.lastSent} visit={el.visit} avatar={el.avatar} /> );

   return (
      <div className={`${style.page__dialogsList} ${style.dialogsList}`}>
         {newBranch}
      </div>
   )
}

export default DialogList;