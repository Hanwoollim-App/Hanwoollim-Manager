import axios from 'axios';
import {SignInInterface} from '../../types/loginEnv';

const api = axios.create({
  baseURL: 'https://api.hanwoolim.n-e.kr',
});

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
