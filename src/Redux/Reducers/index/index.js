import { combineReducers } from 'redux';
import { userReducer } from '../user/user';
import { sidedrawerReducer } from '../sidedrawer/sidedrawer';

export const rootReducer = combineReducers({
  user: userReducer,
  sidedrawer: sidedrawerReducer
});