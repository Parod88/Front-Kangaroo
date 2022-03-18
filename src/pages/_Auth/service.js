import client, {removeAuthorizationHeader, setAuthorizationHeader} from '../../api/client';
import storage from '../../utils/storage';

const usersURL = process.env.REACT_APP_USERS_BASE_URL;
const loginURL =  process.env.REACT_APP_LOGIN_BASE_URL;

export const login = credentials => {
    const url = `${loginURL}/login`;
    return client.post(url, credentials)
    .then(({ token }) => {
    setAuthorizationHeader(token);
    storage.set('auth', token);
    });
};

export const logout = () =>
    Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
});

// USER SERVICES

export const forgottenPassword = (email) => {
  const url = `${usersURL}/forgot-password`;
  return client.put(url, {
    email: `${email.content}`
  });
};

export const resetForgottenPassword = (data, userToken) => {
  const url = `${usersURL}/new-password/${userToken}`;
  client.defaults.headers.common['reset'] = `${userToken}`;
  return client.put(url, {
    newPassword: `${data.password}`,
    newPasswordConfirmation: `${data.confirmPassword}`
  });
};
