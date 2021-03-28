import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { changeUserName } from './action/userInfo';
import reducers from './reducer/userInfo'
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log('change');
})

// export const changeuserName = () => {
//     store.dispatch(changeUserName())
// }

export default store;