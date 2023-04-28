import style from '../../UserProfile.module.scss';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';



const PostCreator = (props) => {

   let addPost = () => {
      props.newPostTxt === '' ? alert('The text field is empty. Please write something *)') : props.addPost();
      props.updatePostTxt('');
   };

   let onPostChange = (e) => {
      let txt = e.target.value;
      props.updatePostTxt(txt);
   };

   return (
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <div action='#' className={`${style.postCreator__form}`}>
            <textarea onChange={onPostChange} value={props.newPostTxt} type="text" placeholder="Start typing to create new post..." />
            <button onClick={addPost} ><FontAwesomeIcon icon={faShare} /></button>
         </div>
      </div>
   )
};

export default PostCreator;