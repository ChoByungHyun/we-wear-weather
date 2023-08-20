import { ForecastAllType, ItemType } from 'types/weeklyType';
import formatDateTime from './formatDateTime';

export function changeDate(forecastData: ForecastAllType) {
  const originalData = forecastData?.list;
  const dataArr: ItemType[] = Object.values(originalData);
  const changedDtArr = dataArr.map((item) => {
    const formattedDate = formatDateTime(item.dt_txt);

    return {
      ...item,
      dt: formattedDate,
    };
  });

  return changedDtArr;
}
