import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';


let rootReducer = combineReducers({
   profileP: profileReducer,
   messagesP: messagesReducer,
   usersP: usersReducer,
});

let store = configureStore({
   reducer: rootReducer,
});


export default store;