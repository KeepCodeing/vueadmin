import axios from 'axios'

export default function (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8090',
    timeout: 5000
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return err;
  });

  return instance(config);
}
