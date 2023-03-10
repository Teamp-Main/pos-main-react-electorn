import axios from 'axios';

const API_URL = process.env.API_URL_KEY;
console.log('API_URL: ', API_URL);

const createNewAxiosInstance = (url?: string) => {
  return axios.create({
    baseURL: `${API_URL}/${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
  });
};

export const members = createNewAxiosInstance('members');
export const signup = createNewAxiosInstance('signUp');
