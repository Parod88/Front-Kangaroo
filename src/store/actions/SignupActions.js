import { USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from '../types';

export function signUpRequest() {
  return {
    type: USER_SIGNUP_REQUEST
  };
}

export function signUpSuccess(newUser) {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: newUser
  };
}

export function signUpFailure(error) {
  return {
    type: USER_SIGNUP_FAILURE,
    error: true,
    payload: error
  };
}

export function signUpUser(createUser) {
  return async function (dispatch, getState, { api }) {
    dispatch(signUpRequest());
    try {
      const newUser = await api.users.registerNewAccount(createUser);
      dispatch(signUpSuccess(newUser));
    } catch (error) {
      dispatch(signUpFailure(error));
    }
  };
}
