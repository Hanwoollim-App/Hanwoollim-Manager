import axios from 'axios';
import {APPOINT_CHAIRMAN} from '../../../components/screens';
import {ISignIn} from './type';

export const baseAxios = axios.create({
  baseURL: 'https://api.hanwoolim.n-e.kr',
});

baseAxios.defaults.headers.post['Content-Type'] = 'application/json';

export const postSignIn = ({id = '', pw = ''}: ISignIn) => {
  return baseAxios.post('/manager/signIn', {
    id,
    password: pw,
  });
};

export const setAuthToken = (accessToken: string) => {
  baseAxios.defaults.headers['x-access-token'] = accessToken;
};

export const getApprovalList = () => {
  return baseAxios.get('/manager/approveNewMember');
};

export const postApproval = (studentId: string) => {
  return baseAxios.post('/manager/approveNewMember', {studentId});
};

export const getReservation = (startDate: string) => {
  return baseAxios.get('/manager/reservation', {params: {startDate}});
};

export const postReservation = (
  startDate: string,
  reservationType: string,
  day: string,
  startTime: number,
  endTime: number,
  session1: string,
  session2: string,
) => {
  const requestData = {
    startDate,
    reservationType,
    [day]: {startTime, endTime, session1, session2},
  };

  return baseAxios.post('/manager/reservation', requestData);
};

export const getUserList = () => {
  return baseAxios.get('/manager/manageList');
};

export const postManageUser = (
  AppointType: number,
  studentId: string,
  chairmanStudentId?: string,
) => {
  return chairmanStudentId
    ? baseAxios.post('/manager/manageList', {
        execute: APPOINT_CHAIRMAN,
        studentId,
        chairmanStudentId,
      })
    : baseAxios.post('/manager/manageList', {execute: AppointType, studentId});
};
