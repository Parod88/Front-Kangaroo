import storage from 'redux-persist/lib/storage';
import client from '../api/client';

const advertsURL = process.env.REACT_APP_ADVERTS_BASE_URL;

const loginURL = process.env.REACT_APP_LOGIN_BASE_URL;

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

