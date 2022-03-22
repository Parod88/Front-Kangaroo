import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER } from '../types';

export function loginStart() {
  return {
    type: LOGIN_START
  };
}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token
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

export function loginInitiate(credentials) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(loginStart());
    try {
      const login = await api.users.login(credentials);
      console.log('login', login);
      dispatch(loginSuccess());
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}
