import style from '../Messages.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

let sentMessagesData = [
   {id: '1', message: 'Hello', sender: 'user', },
   {id: '2', message: 'how', sender: 'user', },
   {id: '3', message: 'are you??', sender: 'user', },
   {id: '4', message: 'test message', sender: 'user', },
   {id: '7', message: 'test message', sender: 'me', },
   {id: '5', message: 'test message', sender: 'user', },
   {id: '6', message: 'test message', sender: 'user', },
   {id: '7', message: 'test message', sender: 'me', },
   {id: '7', message: 'test message', sender: 'me', },
   {id: '6', message: 'test message', sender: 'user', },
   {id: '7', message: 'test message', sender: 'me', },
   {id: '7', message: 'test message', sender: 'me', },
   {id: '6', message: 'test message', sender: 'user', },
   {id: '8', message: 'test message', sender: 'me', },
];

const SentMessage = (props) => {
   return(
      <div className={`${style.dialogWindow__sent} ${style[props.sender]}`}>
         <p>{props.message}</p>
      </div>
   )
}

const DialogWindow = (props) => {

   let newMessage = sentMessagesData.map ( el => <SentMessage message={el.message} id={el.id} sender={el.sender} />)

   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            {newMessage}
         </div>
         <div className={`${style.dialogWindow__input}`}>
            <form action="">
               <textarea type="text" />
               <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
         </div>
      </div>
   )
}

export default DialogWindow;
