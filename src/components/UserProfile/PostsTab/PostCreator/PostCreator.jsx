import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import style from "../../UserProfile.module.scss";


const PostCreator = () => {
   return(
      <section className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action="#" className={`${style.postCreator__form}`}>
            <input type="text" placeholder="Start typing to create new post..." />
            <button type="submit"><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </section>
   )
}

export default PostCreator;