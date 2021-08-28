import axios from 'axios';
import {SignInInterface} from '../../types/loginEnv';

const api = axios.create({
  baseURL: 'https://api.hanwoolim.n-e.kr',
});

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

export function postSignIn({id = '', pw = ''}: SignInInterface) {
  return api.post('/manager/signIn', {
    id,
    password: pw,
  });
}

export function setAuthToken(accessToken: string) {
  api.defaults.headers['x-access-token'] = accessToken;
}

export function getApprovalList() {
  return api.get('/manager/approveNewMember');
}

export function postApproval(studentId: string) {
  return api.post('/manager/approveNewMember', {studentId});
}
