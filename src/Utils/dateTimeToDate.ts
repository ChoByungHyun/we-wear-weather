// dt_txt 시간 문자열을 Date 객체로 변환
export function dateTimeToDate(datetime: string): { date: string; time: string; hour: string } {
  const [date, time] = datetime.split(' ');
  const stringTime = time.split(':');
  const newTime = Number(stringTime[0]);
  const hour = `${newTime}시`;
  return { date, time, hour };
}
