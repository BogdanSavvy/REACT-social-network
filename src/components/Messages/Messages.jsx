import style from './Messages.module.scss';

import DialogList from './DialogsList/DialogsList';
import DialogWindow from './DialogWindow/DialogWindow';


const Messages = (props) => {
   return (
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <DialogList branchesData={props.messgData.branchesData} />
            <DialogWindow sentMessagesData={props.messgData.sentMessagesData}
                           newMessageTxt={props.messgData.newMessageTxt}
                           sendMessage={props.sendMessage}
                           updateMessageTxt={props.updateMessageTxt} />
         </div>
      </section>
   )
};


export default Messages;