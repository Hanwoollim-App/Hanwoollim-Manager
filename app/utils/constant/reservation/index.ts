import {widthPercentage, heightPercentage} from '../common/design/Responsive';

const TIMETABLE_SIZE = {
  ColumnsHeight: heightPercentage(14),
  IndexWidth: widthPercentage(20),
  defaultBoxWidth: widthPercentage(46),
  defaultBoxHeight: heightPercentage(46),
};

export default TIMETABLE_SIZE;

export interface weekItemInterface {
  label: string;
  value: number;
  monday: string;
}

export const weekItem: Array<weekItemInterface> = [];

for (let i: number = 0; i < 5; i++) {
  const curDate: Date = new Date();

  curDate.setDate(curDate.getDate() + i * 7);

  const prevMonday: Date = new Date(curDate);
  const nextSunday: Date = new Date(curDate);

  if (prevMonday.getDay() !== 1) {
    if (prevMonday.getDay() === 0) {
      prevMonday.setDate(prevMonday.getDate() - 6);
    }
    prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() - 1));
  }
  if (nextSunday.getDay() !== 0) {
    nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()));
  }
  const content: string = `${
    prevMonday.getMonth() + 1
  }.${prevMonday.getDate()}~${
    nextSunday.getMonth() + 1
  }.${nextSunday.getDate()}`;

  weekItem.push({
    label: content,
    value: i,
    monday: prevMonday.toISOString().slice(0, 10),
  });
}
