import React from 'react';
import Header from 'Components/common/Header';
import BottomNav from 'Components/common/BottomNav';
import WeeklyForecast from 'Components/Weekly/WeeklyForecast';
import MetaTag from 'Components/common/MetaTag';

const Weekly = () => {
  return (
    <>
      <MetaTag
        title='WWW 주간 날씨 페이지'
        description='현재 위치의 주간 날씨를 미리 확인해보세요'
        url='https://we-wear-weather.vercel.app/weekly'
      />
      <Header />
      <WeeklyForecast />
      <BottomNav />
    </>
  );
};

export default Weekly;
