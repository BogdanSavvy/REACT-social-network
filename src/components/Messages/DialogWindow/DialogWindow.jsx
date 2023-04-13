import style from '../Messages.module.scss';

import SentMessage from './SentMessage/SentMessage';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const DialogWindow = (props) => {
   let newMessage = props.sentMessagesData.map(el => <SentMessage message={el.message} id={el.id} sender={el.sender} />)

   let dialogEl = React.createRef();

   let sendMessage = () => {
      props.newMessageTxt === '' ? alert('You cant send "nothing"') : props.sendMessage();
      props.updateMessageTxt('');
   };

   let onMessageChange = () => {
      let txt = dialogEl.current.value;
      props.updateMessageTxt(txt);
   };

   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            {newMessage}
         </div>
         <div className={`${style.dialogWindow__input}`}>
            <form action="#">
               <input onChange={onMessageChange} value={props.newMessageTxt} ref={dialogEl} type="text" />
               <button onClick={sendMessage} type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
         </div>
      </div>
   )
};

export default DialogWindow;
