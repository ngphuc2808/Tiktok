import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
  const response = await http.get(path, option);
  return response.data;
};

export default http;
