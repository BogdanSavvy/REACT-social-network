import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let rootReducer = combineReducers({
	profileP: profileReducer,
	messagesP: messagesReducer,
	usersP: usersReducer,
	auth: authReducer,
});

let store = configureStore({
	reducer: rootReducer,
	middleware: [thunkMiddleware],
});
export default store;
