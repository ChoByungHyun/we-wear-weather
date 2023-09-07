import { ItemType } from 'types/weeklyType';

function filterMinMax(changedDtArr: ItemType[]): ItemType[] {
  const selectedDataArray = changedDtArr.filter((item) => item.dt !== '오늘');

  // dt 값별로 객체들을 그룹화, groupedData에 저장
  const groupedData: { [key: string]: ItemType[] } = {};
  selectedDataArray.forEach((item) => {
    if (!groupedData[item.dt]) {
      groupedData[item.dt] = [];
    }
    groupedData[item.dt].push(item);
  });

  // 필터링 값
  const filteredData: ItemType[] = [];

  // 최저 중 가장 작은 값, 최고 중 가장 큰 값인 객체 필터링
  for (const dt in groupedData) {
    const items = groupedData[dt];

    // 최저가 가장 작은 객체의 인덱스 찾기
    let minTempIndex = 0;
    for (let i = 1; i < items.length; i++) {
      if (items[i].main.temp_min < items[minTempIndex].main.temp_min) {
        minTempIndex = i;
      }
    }

    // 최고가 가장 큰 객체의 인덱스 찾기
    let maxTempIndex = 0;
    for (let i = 1; i < items.length; i++) {
      if (items[i].main.temp_max > items[maxTempIndex].main.temp_max) {
        maxTempIndex = i;
      }
    }

    filteredData.push({
      ...items[minTempIndex], // temp_min이 가장 작은 값을 가진 객체
      main: {
        ...items[minTempIndex].main, // main 타입도 복사하여 변경
        temp_max: items[maxTempIndex].main.temp_max, // temp_max만 변경
      },
    });
  }

  return filteredData;
}

export default filterMinMax;
