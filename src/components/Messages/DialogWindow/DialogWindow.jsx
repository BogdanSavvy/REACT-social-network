import style from '../Messages.module.scss';

import SentMessage from './SentMessage/SentMessage';
import React from 'react';
import { sendMessageAC, updateMessageTxtAC } from '../../../redux/messagesReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const DialogWindow = (props) => {
   let newMessage = props.sentMessagesData.map(el => <SentMessage message={el.message} id={el.id} sender={el.sender} />)

   let sendMessage = () => {
      props.newMessageTxt === '' ? alert('You cant send "nothing"') : props.dispatch(sendMessageAC());
      props.dispatch(updateMessageTxtAC(''));
   };

   let onMessageChange = (e) => {
      let txt = e.target.value;
      props.dispatch(updateMessageTxtAC(txt));
   };

   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            {newMessage}
         </div>
         <div className={`${style.dialogWindow__input}`}>
            <form action='#'>
               <input onChange={onMessageChange} value={props.newMessageTxt} placeholder='Type your message...' type="text" />
               <button onClick={sendMessage} ><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
         </div>
      </div>
   )
};

export default DialogWindow;
