import {CHANGE_USER_NAME, CHANGE_USER_IMAGE} from '../action/userInfo';
import {UserInfoActionsType} from '../action/userInfo';

type ActionsType = UserInfoActionsType;

export interface reducerState {
  image: string;
  name: string;
}

export const defaultState: reducerState = {
  image: '1',
  name: '1',
};

function userInfoReducer(state: reducerState = defaultState, action: ActionsType) {
  let newState;
  switch (action.type) {
    case CHANGE_USER_NAME: {
      newState = JSON.parse(JSON.stringify(state));
      newState.name = '2';
      console.log('store change');
      break;
    }
    case CHANGE_USER_IMAGE: {
      newState = JSON.parse(JSON.stringify(state));
      newState.img = '2';
      console.log('a');
      break;
    }
    default:
      break;
  }
  return newState;
}

export default userInfoReducer;

// function infoReducer(state: InitialState = initialState, action: Actions) {
//     const { data } = action;
//     let update = {};
//     switch (action.type) {
//     // 创建项目
//     case CREATE_PROJECT_REQUEST_SUCCESS: {
//         const { ... } = state;
//         const { ... } = data;

//         update = {
//             ...state,
//             projectData,
//             Xxdata,
//             msg: '',
//         };
//         break;
//     }
//     case CREATE_PROJECT_REQUEST_FAIL: {
//         break;
//     }

//     default:
//     break;
//     };
//     return Object.keys(update).length ? {
//     ...state,
//     ...update,
//     } : { ...state }; // 这里这样写是combineReducer的坑 不能有undefined
// }

// export default infoReducer;
