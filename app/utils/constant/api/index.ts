import axios from 'axios';
import {SignInInterface} from '../../types/loginEnv';
import {APPOINT_CHAIRMAN} from '../member';

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

export function getReservation(startDate: string) {
  return api.get('/manager/reservation', {params: {startDate}});
}

export function postReservation(
  startDate: string,
  reservationType: string,
  day: string,
  startTime: number,
  endTime: number,
  session1: string,
  session2: string,
) {
  const requestData = {
    startDate,
    reservationType,
    [day]: {startTime, endTime, session1, session2},
  };

  return api.post('/manager/reservation', requestData);
}

export function getUserList() {
  return api.get('/manager/manageList');
}

export function postManageUser(
  AppointType: number,
  studentId: string,
  chairmanStudentId?: string,
) {
  return chairmanStudentId
    ? api.post('/manager/manageList', {
        execute: APPOINT_CHAIRMAN,
        studentId,
        chairmanStudentId,
      })
    : api.post('/manager/manageList', {execute: AppointType, studentId});
}
