export type ISignIn = {
  id?: string;
  pw?: string;
};

/* eslint-disable no-unused-vars */
import { EDay } from './enum';

export type IGetAnnounceMentType = {
	id: number;
	title: string;
	date: string;
	writer: string;
	body: string;
};

export type ISignInDataType = {
	accessToken: string;
	position: string;
};

export type IReservationGivenDataByDay = {
	isMine: boolean;
	name: string;
	startTime: number;
	endTime: number;
	session1: string;
	session2?: string;
};

export type IReservationPostingData = {
	startTime: number;
	endTime: number;
	session1: string;
	session2?: string;
};

export type IReservationDefaultData = {
	startDate: string;
	reservationType: string;
};

export type IReservationGettingDataByDay = {
	[value in EDay]?: IReservationGivenDataByDay[];
};

export type IReservationPostingDataByDay = {
	[value in EDay]?: IReservationPostingData;
};

export type IGetReservationData = (IReservationDefaultData &
	IReservationGettingDataByDay)[];

export type IPostReservationData = IReservationDefaultData &
	IReservationPostingDataByDay;

