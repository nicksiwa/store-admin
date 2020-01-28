import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000',
});

const sleep = (ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

service.interceptors.response.use(async function(res) {
  await sleep(2000);
  return res;
});

export default service;
