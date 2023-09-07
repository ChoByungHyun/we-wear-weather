import { ItemType } from 'types/weeklyType';
import { dateTimeToDate } from './dateTimeToDate';

export function changeHour(forecastData: ItemType[]): ItemType[] {
  const offset = new Date().getTimezoneOffset() * 60000;
  const date = new Date();
  const hour = date.getHours();
  const today = new Date(Date.now() - offset).toISOString().slice(0, 10);

  const twoDaysLater = new Date();
  twoDaysLater.setDate(date.getDate() + 3);
  const twoDaysLaterString = twoDaysLater.toISOString().slice(0, 10);

  // 현재 시간 이전 객체와 오늘 00:00 ~ 현재 시간 이전 객체 제외
  const filteredData = forecastData.filter((data) => {
    const { date, time } = dateTimeToDate(data.dt_txt);
    const convertedTime = Number(time.split(':')[0]);
    if (date < today || date > twoDaysLaterString || (date === today && convertedTime < hour)) {
      return false;
    }
    return true;
  });

  return filteredData.map((data) => {
    const { hour } = dateTimeToDate(data.dt_txt);
    return { ...data, hour };
  });
}
