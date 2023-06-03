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
				isAuth: true,
			};
		default:
			return state;
	}
};

//*_____"Action Creators"_____
export const authUser = (email, userId, login) => ({
	type: SET_USER_DATA,
	data: { email, userId, login },
});

export const authMe = () => dispatch => {
	authApi.me().then(data => {
		if (data.resultCode === 0) {
			let { email, id, login } = data.data;
			dispatch(authUser(email, id, login));
		}
	});
};

export default authReducer;
