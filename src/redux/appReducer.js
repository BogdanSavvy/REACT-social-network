import { authMe } from './authReducer';

const SET_INITIALIZE = 'SET-INITIALISED';

let initalState = {
	isInitialized: false,
};

const appReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_INITIALIZE:
			return {
				...state,
				isInitialized: true,
			};
		default:
			return state;
	}
};

export const setInitialize = () => ({
	type: SET_INITIALIZE,
});

//?_____ 'dispatch(authMe())' returning promise and we can '.then' from him and so 'dispatch(setInitialize());' ______
export const initialize = () => dispatch => {
	dispatch(authMe()).then(() => {
		dispatch(setInitialize());
	});
};

export default appReducer;
