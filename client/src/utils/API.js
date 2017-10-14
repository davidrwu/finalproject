import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export {getMyData};

function getMyData() {
  const url = `${BASE_URL}/api/aboutme/public`;
  return axios.get(url).then(response => response.data);
}
