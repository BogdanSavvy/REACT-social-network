import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../redux/authReducer';

import Header from './Header';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authMe();
	}

	render() {
		return <Header {...this.props} />;
	}
}

const MTSP = state => {
	return {
		email: state.auth.email,
		userId: state.auth.userId,
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	};
};

export default connect(MTSP, { authMe })(HeaderContainer);
