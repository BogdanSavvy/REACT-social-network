import { connect } from 'react-redux';
import { addPost, updatePostTxt, setUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import React from 'react';
import { getProfile } from '../api/api'

import UserProfile from "./UserProfile";

class UserProfileAJAXContainer extends React.Component {

   componentDidMount () {
      let profId = this.props.router.params.userId;
      if (!profId) {
         profId = 28996;
      };
      getProfile(profId).then(data => this.props.setUserProfile(data));
   }

   render = () => {
      return <UserProfile {...this.props} />
   }
}

//* MSTP => MapStateToProps
const MSTP = (state) => {
   return {
      postData: state.profileP.postsData,
      newPostTxt: state.profileP.newPostTxt,
      profile: state.profileP.profile,
   }
};

//* We use the Hook - UseParams, it allows you to reach the url, we take and wrap our hook into a function, then from the function, which just coincides with the non-working withRouter
function withRouter (Component) {
   function ComponentWithRouterProp (props) {
      let params = useParams();
      return (
         <Component {...props} router={{ params }} />
      );
   }
   return ComponentWithRouterProp;
}

const UserProfileContainer = connect( MSTP, {addPost, updatePostTxt, setUserProfile} )(withRouter(UserProfileAJAXContainer));


export default UserProfileContainer;