import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {CHANGE_USER_NAME} from './action/userInfo';
import reducers from './reducer/userInfo';
const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('change');
});

export const changeuserName = (data: any) => {
  store.dispatch({
    type: CHANGE_USER_NAME,
    data,
  });
};

export default store;
