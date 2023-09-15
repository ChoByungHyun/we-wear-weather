import React from 'react';
import useForecastData from 'Hooks/useForecastData';

const HOUR_12 = 5; // 3시간 단위로 12시간 내의 날씨 확인

const DailyForecast = () => {
  const { hourlyWeather } = useForecastData();

  // 0~4번 인덱스에서 "rain","snow"를 확인
  const hasRain = hourlyWeather.slice(0, HOUR_12).some((item) => item.weather[0].main.includes('Rain'));
  const hasSnow = hourlyWeather.slice(0, HOUR_12).some((item) => item.weather[0].main.includes('Snow'));

  let content = '';

  if (hasRain && hasSnow) {
    content = '비와 눈이 예상됩니다.';
  } else if (hasRain) {
    content = '비가 예상됩니다.';
  } else if (hasSnow) {
    content = '눈이 예상됩니다.';
  } else {
    content = '우산을 챙기지 않아도 돼요.';
  }

  return (
    <div>
      <p>오늘은 {content}</p>
    </div>
  );
};

export default DailyForecast;
