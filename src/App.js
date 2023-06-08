import './scss/null.scss';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer';

import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
// import Music from './components/Music/Music';
// import Groups from './components/Groups/Groups';
// import Settings from './components/Settings/Settings';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initialize();
	}

	render() {
		return !this.props.isInitialized ? (
			<Preloader />
		) : (
			<div className="wrapper">
				<HeaderContainer />
				<NavBar />
				<div className="main-container">
					<Routes>
						<Route path="/" Component={Home} />
						<Route path="/profile/:userId?/*" element={<UserProfileContainer />} />
						<Route path="/messages/*" element={<MessagesContainer />} />
						<Route path="/news" Component={News} />
						<Route path="/music" Component={NotFoundPage} />
						<Route path="/groups" Component={NotFoundPage} />
						<Route path="/users/*" element={<UsersContainer />} />
						<Route path="/settings" Component={NotFoundPage} />
						<Route path="/login" Component={Login} />
					</Routes>
				</div>
			</div>
		);
	}
}

const MTSP = state => ({
	isInitialized: state.app.isInitialized,
});

export default connect(MTSP, { initialize })(App);
