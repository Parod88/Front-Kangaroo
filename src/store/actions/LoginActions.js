import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  USER_DATA_SUCCESS
} from '../types';

export function loginStart() {
  return {
    type: LOGIN_START
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: true,
    payload: error
  };
}

export function logoutInitiate() {
  return {
    type: LOGOUT_USER
  };
}

export function userDataSuccess(userData) {
  return {
    type: USER_DATA_SUCCESS,
    payload: userData
  };
}

export function loginInitiate(credentials) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(loginStart());
    try {
      await api.users
        .login(credentials)
        .then(({ _id, name, email, imageAvatar }) =>
          dispatch(userDataSuccess({ _id, name, email, imageAvatar }))
        );
      dispatch(loginSuccess());
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}
