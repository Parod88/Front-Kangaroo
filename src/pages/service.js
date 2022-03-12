import client from '../api/client';

const advertsBaseURL = '/api/v1/advertisements';

export const getLatestAdverts = () => {
  const url = `${advertsBaseURL}`;
  return client.get(url);
};

export const getLatestPaginatedAdverts = () => {
  const url = `${advertsBaseURL}/p&1`;
  return client.get(url);
};

export const getSingleAdvert = (id) => {
  const url = `${advertsBaseURL}/${id}`;
  return client.get(url);
};
