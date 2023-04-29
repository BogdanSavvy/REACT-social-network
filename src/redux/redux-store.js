import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'


let rootReducer = combineReducers({
   profileP: profileReducer,
   messagesP: messagesReducer,
});

let store = configureStore({
   reducer: rootReducer,
});


export default store;