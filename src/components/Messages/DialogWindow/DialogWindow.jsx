import style from '../Messages.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const DialogWindow = (props) => {
   return (
      <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
         <div className={`${style.dialogWindow__messages}`}>
            <div className={`${style.dialogWindow__sent}`}><p>Hello!</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>how</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>are</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>you</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
            <div className={`${style.dialogWindow__sent}`}><p>bro? bro? bro? bro? bro? bro? bro? bro? bro? bro?</p></div>
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
