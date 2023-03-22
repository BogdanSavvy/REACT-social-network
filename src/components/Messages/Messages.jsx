import style from './Messages.module.scss';

const Messages = (props) => {
   return(
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            THIS IS <span>DIALOGS</span> PAGE
         </div>
      </section>
   )
}

export default Messages;