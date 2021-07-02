import * as axios from 'axios';

const instance = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000/'
      : 'https://report-generation-backend.herokuapp.com/',
  headers: {
    'API-KEY': '',
  },
});

export const appAPI = {
  connectAPI() {
    return instance
      .get()
      .then((response) => response.data)
      .catch((error) => 'No response from backend');
  },
};

export const homeAPI = {
  generateReport(url, interval, email) {
    return instance
      .post(`generateReport`, { url, interval: parseInt(interval), email })
      .then((response) => response.data);
  },
};
