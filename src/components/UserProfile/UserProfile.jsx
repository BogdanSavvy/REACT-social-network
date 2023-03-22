import Post from "./Post/Post";
import style from "./UserProfile.module.scss";

const UserProfile = () => {
   return (
      <div className={`${style.body}`}>
         <div className={`${style.body__main} ${style.main}`}>
            <section className={`${style.main__profile}`}>
               <div className={`${style.main__image}`}>
                  <img src="https://salsknews.ru/wp-content/uploads/2019/06/%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%BA%D0%B0-1.jpg" alt="wallpaper img" />
               </div>
               <div className={`${style.main__info} ${style.info}`}>
                  <div className={`${style.info__avatar}`}>
                     <img src="https://img.itch.zone/aW1nLzU5MDA5MTAucG5n/original/gj0AMk.png" alt="that was be avatar )" />
                  </div>
                  <div className={`${style.info__description}`}>
                     <div className={`${style.info__name}`}>Amogus Amongasovich</div>
                     <div className={`${style.info__status}`}>Hey world, always say: "Chinaaaaa!"</div>
                  </div>
               </div>
               <div className={`${style.main__tabs} ${style.tabs}`}>
                  <ul className={`${style.tabs__list}`}>
                     <li className={`${style.tabs__link}`}><a href="#">Post`s</a></li>
                     <li className={`${style.tabs__link}`}><a href="#">Null</a></li>
                     <li className={`${style.tabs__link}`}><a href="#">Null</a></li>
                     <li className={`${style.tabs__link}`}><a href="#">Null</a></li>
                  </ul>
               </div>
            </section>
            <Post messege="WTF" time="25 min ago" />
            <Post messege="is" time="1 hour ago" />
            <Post messege="going on" time="1h 10min ago" />
            <Post messege="THIS DESIGN IS TRASH!" time="Tommorow" />
         </div>
      </div>
   )
}

export default UserProfile;