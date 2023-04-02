import style from './Messages.module.scss';

import DialogList from './DialogsList/DialogsList';
import DialogWindow from './DialogWindow/DialogWindow';


const Messages = (props) => {
   return (
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <DialogList branchesData={props.mesgData.branchesData} />
            <DialogWindow sentMessagesData={props.mesgData.sentMessagesData} />
         </div>
      </section>
   )
}


export default Messages;