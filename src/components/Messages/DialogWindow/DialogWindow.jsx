import style from '../Messages.module.scss';

import SentMessage from './SentMessage/SentMessage';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const DialogWindow = (props) => {
   let newMessage = props.sentMessagesData.map ( el => <SentMessage message={el.message} id={el.id} sender={el.sender} /> )

   let dialogEl = React.createRef();

   let sendMessage = () => {
      let txt = dialogEl.current.value;
      if (txt === ''){
         alert ('You cant send "nothing"')
      } else props.sendMessage(txt);
      dialogEl.current.value = '';
   }

   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            {newMessage}
         </div>
         <div className={`${style.dialogWindow__input}`}>
            <form action="#">
               <textarea ref={dialogEl} type="text" />
               <button onClick={sendMessage} type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
         </div>
      </div>
   )
}

export default DialogWindow;
