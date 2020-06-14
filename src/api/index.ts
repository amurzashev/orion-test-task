import axios from 'axios';

export default axios.create({
  baseURL: 'https://run.mocky.io/v3/',
  timeout: 10000,
});
