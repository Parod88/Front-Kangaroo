import client from '../../api/client';

const usersURL = '/api/v1/user';
// USER SERVICES
export const forgottenPassword = (email) => {
  const url = `${usersURL}/forgot-password`;
  return client.put(url, {
    email: `${email.content}`
  });
};
