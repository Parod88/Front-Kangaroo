import { USER_UPDATE_FAILURE, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from '../types/UserTypes';

//===================================================================
//Update
//===================================================================
export function userUpdateRequest() {
  return {
    type: USER_UPDATE_REQUEST
  };
}

export function userUpdateSuccess(userUpdate) {
  return {
    type: USER_UPDATE_SUCCESS,
    payload: userUpdate
  };
}

export function userUpdateFailure(error) {
  return {
    type: USER_UPDATE_FAILURE,
    error: true,
    payload: error
  };
}

export function userUpdate(userInfo, userId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(userUpdateRequest());
    try {
      const userUpdate = await api.users.updateUser(userInfo, userId);
      dispatch(userUpdateSuccess(userUpdate));
    } catch (error) {
      dispatch(userUpdateFailure(error));
    }
  };
}
