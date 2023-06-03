import { profileApi } from '../api/api';

//? Action variables
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initalState = {
	postsData: [
		{
			id: 1,
			ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
			name: 'Pepe Frog',
			message: 'WTF',
			time: '25min ago',
		},
		{
			id: 2,
			ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
			name: 'Pepe Frog',
			message: 'is',
			time: '2 days ago',
		},
		{
			id: 3,
			ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
			name: 'Pepe Frog',
			message: 'going on',
			time: '1 hour ago',
		},
		{
			id: 4,
			ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
			name: 'Pepe Frog',
			message:
				'THIS DESIGN IS TRASH! THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!',
			time: '22min ago',
		},
		{
			id: 5,
			ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
			name: 'Pepe Frog',
			message: 'THIS DESIGN IS TRASH!',
			time: '4min ago',
		},
		{
			id: 6,
			ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
			name: 'Pepe Frog',
			message: 'THIS DESIGN IS TRASH!',
			time: '5min ago',
		},
	],
	profile: null,
	status: '',
};

const profileReducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 7,
				ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
				name: 'Amogus Amongasovich',
				message: action.newPostTxt,
				time: 'now',
			};
			return {
				//! ==> stateCopy
				...state,
				postsData: [newPost, ...state.postsData], //! ===>  stateCopy.postsData.unshift(newPost);
			};
		case SET_USER_PROFILE:
			return {
				//! ==> stateCopy
				...state,
				profile: action.profile,
			};
		case SET_STATUS:
			return {
				//! ==> stateCopy
				...state,
				status: action.status,
			};
		default:
			return state;
	}
};

//*_____"Action Creators"_____
export const addPost = newPostTxt => ({ type: ADD_POST, newPostTxt });
export const setUserProfile = profData => ({
	type: SET_USER_PROFILE,
	profile: profData,
});
export const setUserStatus = status => ({ type: SET_STATUS, status });

//*Thunk`s
export const getProfile = profId => dispatch => {
	profileApi.getProfile(profId).then(data => {
		dispatch(setUserProfile(data));
	});
};

export const getProfileStatus = profId => dispatch => {
	profileApi.getStatus(profId).then(data => {
		dispatch(setUserStatus(data));
	});
};

export const updateProfileStatus = status => dispatch => {
	profileApi.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	});
};

export default profileReducer;
