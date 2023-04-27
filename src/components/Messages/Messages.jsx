import style from './Messages.module.scss';

import DialogList from './DialogsList/DialogsList';
import DialogWindow from './DialogWindow/DialogWindow';


const Messages = (props) => {
   return (
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <DialogList branchesData = {props.branchesData} />
            <DialogWindow sentMessagesData = {props.sentMessagesData}
                           newMessageTxt = {props.newMessageTxt}
                           sendMessage = {props.sendMessage}
                           updateMessageTxt = {props.updateMessageTxt} />
         </div>
      </section>
   )
};


export default Messages;