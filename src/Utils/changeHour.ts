import { ItemType } from 'types/weeklyType';

export function changeHour(forecastData: ItemType[]): ItemType[] {
  const date = new Date();
  const hour = date.getHours();
  const today = date.toISOString().slice(0, 10);

  // dt_txt 시간 문자열을 Date 객체로 변환
  function datetimeToDate(datetime: string): { date: string; time: string; hour: string } {
    const [date, time] = datetime.split(' ');
    const stringTime = time.split(':');
    const newTime = Number(stringTime[0]);
    const hour = `${newTime}시`;
    return { date, time, hour };
  }

  // 현재 시간 이전 객체와 오늘 00:00 ~ 현재 시간 이전 객체 제외
  const filteredData = forecastData.filter((data) => {
    const { date, time } = datetimeToDate(data.dt_txt);
    const convertedTime = Number(time.split(':')[0]);
    if (date === today && convertedTime < hour) {
      return false; // 현재 시간 이전 객체 제외
    }
    return true;
  });

  return filteredData.map((data) => {
    const { hour } = datetimeToDate(data.dt_txt);
    return { ...data, hour };
  });
}

// export function changeHour(forecastData: ItemType[]): ItemType[][] {
//   const date = new Date();
//   const today = date.toISOString().slice(0, 10);

//   // dt_txt 시간 문자열을 Date 객체로 변환
//   function datetimeToDate(datetime: string): { date: string; time: string; hour: string } {
//     const [date, time] = datetime.split(' ');
//     const stringTime = time.split(':');
//     const newTime = Number(stringTime[0]);
//     // const hour = newTime >= 12 ? `오후 ${newTime}시` : `오전 ${newTime}시`;
//     const hour = `${newTime}시`;
//     return { date, time, hour };
//   }

//   const groupedData = forecastData.reduce(
//     (acc, data) => {
//       const { date, time, hour } = datetimeToDate(data.dt_txt);
//       if (date === today && time < hour) {
//         return acc; // 현재 시간 이전 객체 제외
//       }
//       const key = data.dt;
//       if (!acc[key]) {
//         acc[key] = [];
//       }
//       acc[key].push({ ...data, hour });
//       return acc;
//     },
//     {} as Record<string, ItemType[]>,
//   );

//   return Object.values(groupedData);
// }
