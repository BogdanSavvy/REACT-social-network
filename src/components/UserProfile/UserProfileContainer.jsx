import { addPostAC, updatePostTxtAC } from '../../redux/profileReducer';

import UserProfile from "./UserProfile";


const UserProfileContainer = (props) => {

   let postData = props.store.getState().profileP.postsData;
   let newPostTxt = props.store.getState().profileP.newPostTxt;

   let addPost = () => {
      newPostTxt === '' ? alert('The text field is empty. Please write something *)') : props.store.dispatch(addPostAC());
      props.store.dispatch(updatePostTxtAC(''));
   };

   let onPostChange = (txt) => {
      props.store.dispatch(updatePostTxtAC(txt));
   };

   return (<UserProfile postData = {postData} 
                        newPostTxt = {newPostTxt} 
                        addPost = {addPost} 
                        updatePostTxt = {onPostChange} />)
}


export default UserProfileContainer;