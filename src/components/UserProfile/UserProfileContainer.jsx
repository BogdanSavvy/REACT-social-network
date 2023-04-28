import { connect } from 'react-redux';
import { addPostAC, updatePostTxtAC } from '../../redux/profileReducer';

import UserProfile from "./UserProfile";


//?_____ function "mapStateToProps" _____
const func1 = (state) => {
   return {
      postData: state.profileP.postsData,
      newPostTxt: state.profileP.newPostTxt,
   }
};

//?_____ function "mapDispatchToProps" _____
const func2 = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostAC());
      },
      updatePostTxt: (txt) => {
         dispatch(updatePostTxtAC(txt));
      },
   }
};

const UserProfileContainer = connect(func1,func2)(UserProfile);


export default UserProfileContainer;