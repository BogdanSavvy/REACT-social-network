import style from '../Messages.module.scss';

import SentMessage from './SentMessage/SentMessage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const DialogWindow = (props) => {

   let newMessage = props.sentMessagesData.map(el => <SentMessage message={el.message} id={el.id} sender={el.sender} />)

   let sendMessage = () => {
      props.newMessageTxt === '' ? alert('You cant send "nothing"') : props.sendMessage();
      props.updateMessageTxt('');
   };

   let onMessageChange = (e) => {
      let txt = e.target.value;
      props.updateMessageTxt(txt);
   };

   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            {newMessage}
         </div>
         <div className={`${style.dialogWindow__input}`}>
            <div action='#' className={`${style.dialogWindow__form}`}>
               <input onChange={onMessageChange} value={props.newMessageTxt} placeholder='Type your message...' type="text" />
               <button onClick={sendMessage} ><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
         </div>
      </div>
   )
};

export default DialogWindow;
