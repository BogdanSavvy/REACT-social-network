import style from '../Messages.module.scss';

import SentMessage from './SentMessage/SentMessage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const DialogWindow = (props) => {
   let newMessage = props.sentMessagesData.map ( el => <SentMessage message={el.message} id={el.id} sender={el.sender} /> )

   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            {newMessage}
         </div>
         <div className={`${style.dialogWindow__input}`}>
            <form action="#">
               <textarea type="text" />
               <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
         </div>
      </div>
   )
}

export default DialogWindow;
