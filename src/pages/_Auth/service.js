import client from '../../api/client';

const usersURL = process.env.REACT_APP_USERS_BASE_URL;
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
