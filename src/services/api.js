import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = (response) => {
  return response.data;
};

const handleError = (error) => {
  if (error.response) {
    console.error(`API Error: ${error.response.status} - ${error.response.statusText}`);
  } else {
    console.error('API Error: Unable to connect to the API');
  }
  return Promise.reject(error);
};

export const get = (endpoint) => {
  return api.get(endpoint)
    .then(handleResponse)
    .catch(handleError);
};

export const post = (endpoint, data) => {
  return api.post(endpoint, data)
    .then(handleResponse)
    .catch(handleError);
};

export const put = (endpoint, data) => {
  return api.put(endpoint, data)
    .then(handleResponse)
    .catch(handleError);
};

export const deleteApi = (endpoint) => {
  return api.delete(endpoint)
    .then(handleResponse)
    .catch(handleError);
};

export default {
  get,
  post,
  put,
  delete: deleteApi,
};