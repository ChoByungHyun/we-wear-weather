function formatDateTime(dt_txt: string) {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const dateParts = dt_txt.split(' ')[0].split('-'); // "2023-08-09"를 '-'로 분할
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // JavaScript의 월은 0부터 시작
  const day = parseInt(dateParts[2]);

  const date = new Date(year, month, day);
  const today = new Date();

  const isToday = date.toDateString() === today.toDateString();

  let formattedDay = daysOfWeek[date.getDay()];

  if (isToday) {
    formattedDay = '오늘';
  }

  return formattedDay;
}

export default formatDateTime;
