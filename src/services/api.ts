import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://thevirustracker.com/free-api',
});
