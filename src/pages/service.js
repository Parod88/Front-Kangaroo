import client from '../api/client';

const advertsBaseURL = '/advertisements';

export const getLatestAdverts = () => {
  const url = `${advertsBaseURL}`;
  return client.get(url);
};
