import { combineReducers } from 'redux';
import { createStore } from 'redux';

import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'


let rootReducer = combineReducers({
   profileP: profileReducer,
   messagesP: messagesReducer,
});

let store = createStore(rootReducer);


export default store;