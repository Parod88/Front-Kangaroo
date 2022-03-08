import axios from 'axios';

const client = axios.create({
  baseURL: process.env.WALLACLONE_API_BASE_URL
  // baseURL: `http://localhost:3001/api/v1`
});

export default client;
