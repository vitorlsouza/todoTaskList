import axios from 'axios';

const api = axios.create({
  baseURL: 'https://homolog.compufacil.com.br/rpc/v1/',
});

export default api;
