import axiosClient from '../client';

const apiAdvertsURL = process.env.REACT_APP_ADVERTS_BASE_URL;

export const getLatestAdverts = async () => {
  const url = `${apiAdvertsURL}`;
  return await axiosClient.get(url);
};

export const getLatestPaginatedAdverts = async () => {
  const url = `${apiAdvertsURL}/p&1`;
  return await axiosClient.get(url);
};

export const getSingleAdvert = async (id) => {
  const url = `${apiAdvertsURL}/${id}`;
  return await axiosClient.get(url);
};

export const createAdvert = async (advert) => {
  console.log('advert', advert);
  const headers = { 'Content-Type': 'application/json' };

  const url = `${apiAdvertsURL}`;
  return await axiosClient.post(url, advert, { headers });
};

export const updateAdvert = async (advert) => {
  const url = `${apiAdvertsURL}`;
  return await axiosClient.put(url, advert);
};

export const deleteAdvert = async (advertId) => {
  const url = `${apiAdvertsURL}/${advertId}`;
  return await axiosClient.delete(url);
};
