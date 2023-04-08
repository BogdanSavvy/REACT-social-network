import style from '../UserProfile.module.scss';


const Activity = () => {
   return (
      <section className={`${style.page__activity} ${style.activity}`}>
         <div className={`${style.activity__container}`}>
            ACTIVITY
         </div>
      </section>
   )
}

export default Activity;