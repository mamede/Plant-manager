import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mamede/Plant-manager'
});

export default api;