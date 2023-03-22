import style from './Messages.module.scss';

const Messages = (props) => {
   return (
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <div className={`${style.page__dialogsList} ${style.dialogsList}`}>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
               <div className={`${style.dialogsList__item}`}>User</div>
            </div>
            <div className={`${style.page__dialogWindow} ${style.dialogWindow}`}>
               <div className={`${style.dialogWindow__messages}`}></div>
               <div className={`${style.dialogWindow__input}`}>
                  <form action="">
                     <input type="text" />
                     <button type='submit'>Send</button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Messages;