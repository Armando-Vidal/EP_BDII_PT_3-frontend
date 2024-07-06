import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // local utilizado
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
