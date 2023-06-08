import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
	addPost,
	getProfile,
	getProfileStatus,
	updateProfileStatus,
} from '../../redux/profileReducer';
import { Navigate, useParams } from 'react-router-dom';
import UserProfile from './UserProfile';

class UserProfileContainer extends React.Component {
	componentDidMount() {
		let profId = this.props.router.params.userId;
		if (!profId) {
			profId = this.props.authorisedProfileId;
		}
		this.props.getProfile(profId);
		this.props.getProfileStatus(profId);
	}

	render = () => {
		let whenToRedirect =
			!this.props.isAuth && typeof this.props.router.params['userId'] === 'undefined';

		return whenToRedirect ? <Navigate to="/login" /> : <UserProfile {...this.props} />;
	};
}

//* MSTP => MapStateToProps
const MSTP = state => {
	return {
		postData: state.profileP.postsData,
		newPostTxt: state.profileP.newPostTxt,
		profile: state.profileP.profile,
		status: state.profileP.status,
		isAuth: state.auth.isAuth,
		authorisedProfileId: state.auth.userId,
	};
};

//* We use the Hook - UseParams, it allows you to reach the url, we take and wrap our hook into a function, then from the function, which just coincides with the non-working withRouter
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let params = useParams();
		return <Component {...props} router={{ params }} />;
	}
	return ComponentWithRouterProp;
}

export default compose(
	connect(MSTP, {
		addPost,
		getProfile,
		getProfileStatus,
		updateProfileStatus,
	}),
	withRouter
)(UserProfileContainer);
