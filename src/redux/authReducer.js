import { authApi } from '../api/api';

//? Action variables
const SET_USER_DATA = 'SET-USER-DATA';

let initalState = {
	email: null,
	userId: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				//! ==> stateCopy
				...state,
				...action.data,
			};
		default:
			return state;
	}
};

//*_____"Action Creators"_____
export const authUser = (email, userId, login, isAuth) => ({
	type: SET_USER_DATA,
	data: { email, userId, login, isAuth },
});

export const authMe = () => dispatch => {
	authApi.me().then(data => {
		if (data.resultCode === 0) {
			let { email, id, login } = data.data;
			dispatch(authUser(email, id, login, true));
		}
	});
};

export const login = (email, password, rememberMe) => dispatch => {
	authApi.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(authMe());
		}
	});
};

export const logout = () => dispatch => {
	authApi.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(authUser(null, null, null, false));
		}
	});
};

export default authReducer;
