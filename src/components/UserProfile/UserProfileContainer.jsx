import { connect } from 'react-redux';
import { addPost, updatePostTxt } from '../../redux/profileReducer';

import UserProfile from "./UserProfile";


//* MSTP => MapStateToProps
const MSTP = (state) => {
   return {
      postData: state.profileP.postsData,
      newPostTxt: state.profileP.newPostTxt,
   }
};


const UserProfileContainer = connect( MSTP, {addPost, updatePostTxt} )(UserProfile);


export default UserProfileContainer;