import style from '../../UserProfile.module.scss';

import React from 'react';
import { addPostAC, updatePostTxtAC } from '../../../../redux/profileReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';



const PostCreator = (props) => {

   let addPost = () => {
      props.newPostTxt === '' ? alert('The text field is empty. Please write something *)') : props.dispatch(addPostAC());
      props.dispatch(updatePostTxtAC(''));
   };

   let onPostChange = (e) => {
      let txt = e.target.value;
      props.dispatch(updatePostTxtAC(txt));
   };

   return (
      <div className={`${style.page__postCreator} ${style.postCreator}`}>
         <form action='#' className={`${style.postCreator__form}`}>
            <textarea onChange={onPostChange} value={props.newPostTxt} type="text" placeholder="Start typing to create new post..." />
            <button onClick={addPost} ><FontAwesomeIcon icon={faShare} /></button>
         </form>
      </div>
   )
};

export default PostCreator;