import { combineReducers } from 'redux';
import { userReducer } from '../user/user';
import { addEventsReducer } from '../addEvents/addEvents';

export const rootReducer = combineReducers({
  user: userReducer,
  events: addEventsReducer
});