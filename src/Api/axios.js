import axioc from 'axios';

const axiosInstance = axioc.create({
  baseURL: 'http://127.0.0.1:5001/lone-2025/us-central1/api'
});

export {axiosInstance};