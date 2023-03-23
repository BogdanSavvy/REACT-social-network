import DialogList from './DialogsList/DialogsList';
import DialogWindow from './DialogWindow/DialogWindow';
import style from './Messages.module.scss';



const Messages = (props) => {
   return (
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <DialogList />
            <DialogWindow />
         </div>
      </section>
   )
}

export default Messages;