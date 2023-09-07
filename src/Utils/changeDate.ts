import { ForecastAllType, ItemType } from 'types/weeklyType';
import formatDateTime from './formatDateTime';
import { dateTimeToDate } from './dateTimeToDate';

export function changeDate(forecastData: ForecastAllType) {
  const originalData = forecastData?.list;
  const dataArr: ItemType[] = Object.values(originalData);

  const date = new Date();
  const hour = date.getHours();
  const offset = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - offset).toISOString().slice(0, 10);

  const changedDtArr = dataArr.map((item) => {
    const formattedDate = formatDateTime(item.dt_txt);

    return {
      ...item,
      dt: formattedDate,
    };
  });
  const filteredDtArr = changedDtArr.filter((item) => {
    const { date, time } = dateTimeToDate(item.dt_txt);
    const convertedTime = Number(time.split(':')[0]);
    if (date < today || (date === today && convertedTime < hour)) {
      return false;
    }
    return true;
  });
  return filteredDtArr;
}
