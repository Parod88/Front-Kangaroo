import client from '../api/client';

const advertsBaseURL = '/api/v1/advertisements';

export const getLatestAdverts = () => {
  const url = `${advertsBaseURL}`;
  return client.get(url);
};
