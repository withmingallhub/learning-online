import {combineReducers} from 'redux';
import userInfoReducer, {reducerState} from './userInfo';

export interface store {
  userState: reducerState;
}

export default combineReducers({
  userInfoReducer,
});
