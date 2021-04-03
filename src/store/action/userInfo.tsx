export const CHANGE_USER_NAME = "CHANGE_USER_NAME";
export const CHANGE_USER_IMAGE = "CHANGE_USER_IMAGE";

// export interface LEARNINGACTIONS {
//     CHANGE_USER_NAME: 'CHANGE_USER_NAME';
//     CHANGE_USER_IMAGE: 'CHANGE_USER_IMAGE';
// }

// export const changeUserName = (info: any) => ({
//     type: CHANGE_USER_NAME,
//     info,
// })

// export const changeUserImage = (info: any) => ({
//     type: CHANGE_USER_IMAGE,
//     info
// })

export interface changeUserNameRequest {
  type: typeof CHANGE_USER_NAME;
  data: any;
}

interface changeUserImageRequest {
  type: typeof CHANGE_USER_IMAGE;
  data: any;
}

export type UserInfoActionsType =
  | changeUserNameRequest
  | changeUserImageRequest;

export const changeUserName = (info: any) => {
  return {
    type: CHANGE_USER_NAME,
    info,
  };
};

export const changeUserImage = (info: any) => ({
  type: CHANGE_USER_IMAGE,
  info,
});
