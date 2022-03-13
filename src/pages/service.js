import client from '../api/client';

const advertsURL = '/api/v1/advertisements';
export const getLatestAdverts = () => {
  const url = `${advertsURL}`;
  return client.get(url);
};

export const getLatestPaginatedAdverts = () => {
  const url = `${advertsURL}/p&1`;
  return client.get(url);
};

export const getSingleAdvert = (id) => {
  const url = `${advertsURL}/${id}`;
  return client.get(url);
};
