import style from '../../UserProfile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const PostCreator = (props) => {

   let postEl = React.createRef();

   let addPost = () => {
      let txt = postEl.current.value;
      props.addPost(txt);
      postEl.current.value = '';
   }

   return (
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action="#" className={`${style.postCreator__form}`}>
            <input ref={postEl} type="text" placeholder="Start typing to create new post..." />
            <button onClick={addPost} type="submit"><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </div>
   )
};

export default PostCreator;