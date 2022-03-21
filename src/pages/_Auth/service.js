import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../api/client';
import storage from '../../utils/storage';

const usersURL = process.env.REACT_APP_USERS_BASE_URL;
const loginURL = process.env.REACT_APP_LOGIN_BASE_URL;

export const login = ({ rememberMe, ...credentials }) => {
  const url = `${loginURL}/login`;
  return client
    .post(url, credentials)
    .then(({ token }) => {
      setAuthorizationHeader(token);
      return token;
    })
    .then((token) => {
      if (rememberMe) {
        storage.remove('auth');
        storage.set('auth', token);
      } else {
        storage.session('auth', token);
      }
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

export const registerNewAccount = (newUser) => {
  // const registerNewUser = new FormData();
  // registerNewUser.append('username', newUser.username);
  // registerNewUser.append('email', newUser.email);
  // registerNewUser.append('password', newUser.password);
  // registerNewUser.append('confirmPassword', newUser.confirmPassword);
  // if (newUser.imageAvatar) newUser.append('avatar', newUser.imageAvatar);

  const url = `${usersURL}/register`;
  return client.post(url, newUser);
};

export const confirmRegister = (userToken) => {
  const url = `${usersURL}/confirm-signup/${userToken}`;
  return client.put(url);
};

export const deleteAccount = (userId) => {
  const url = `${usersURL}/${userId}`;
  return client.delete(url);
};
