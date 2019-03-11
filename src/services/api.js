import axios from 'axios';

const api = axios.create({
  baseURL: 'https://homolog.compufacil.com.br/rpc/v1/',
  headers: {
    'challenge-token': 'df27bfc9e8bf54054bd575d2ae9e7e9a',
  },
});

export default api;
