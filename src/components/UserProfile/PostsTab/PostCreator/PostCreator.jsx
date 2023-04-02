import style from '../../UserProfile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';


const PostCreator = (props) => {
   return (
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action="#" className={`${style.postCreator__form}`}>
            <input type="text" placeholder="Start typing to create new post..." />
            <button type="submit"><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </div>
   )
};

export default PostCreator;