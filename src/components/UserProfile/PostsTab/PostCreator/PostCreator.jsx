import style from '../../UserProfile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { addPostAC, updatePostTxtAC } from '../../../../redux/state';



const PostCreator = (props) => {
   let postEl = React.createRef();

   let addPost = () => {
      props.newPostTxt === '' ? alert('The text field is empty. Please write something *)') : props.dispatch(addPostAC());
      props.dispatch(updatePostTxtAC(''));
   };

   let onPostChange = () => {
      let txt = postEl.current.value;
      props.dispatch(updatePostTxtAC(txt));
   };

   return (
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action="#" className={`${style.postCreator__form}`}>
            <textarea onChange={onPostChange} value={props.newPostTxt} ref={postEl} type="text" placeholder="Start typing to create new post..." />
            <button onClick={addPost} type="submit"><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </div>
   )
};

export default PostCreator;