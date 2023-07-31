import React from 'react';
import Header from 'Components/common/Header';
import BottomNav from 'Components/common/BottomNav';
import WeeklyForecast from 'Components/Weekly/WeeklyForecast';

const Weekly = () => {
  return (
    <>
      <Header />
      <WeeklyForecast />
      <BottomNav />
    </>
  );
};

export default Weekly;
