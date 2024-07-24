import axios from 'axios';

const apiUrl = 'https://your-drf-backend-api.com'; // Replace with your DRF backend API URL

const axiosConfig = {
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};

export default axios.create(axiosConfig);