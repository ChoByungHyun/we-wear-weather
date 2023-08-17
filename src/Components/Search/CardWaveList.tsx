import React, { FC } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CityWeatherCard from './CityWeatherCard';
import { userCityAtom } from 'Atom/userLocationAtom';
import { CityWeatherType } from 'types/cityWeatherType';

const CardWaveList: FC = () => {
  const searchData = useRecoilValue(userCityAtom);

  return (
    <CardWaveLayout to=''>
      {searchData.map((el: CityWeatherType, index: number) => {
        return (
          <CityWeatherCard key={index} cityName={index === 0 ? '현재 위치' : el.cityName} latLonData={el.latLonData} />
        );
      })}
    </CardWaveLayout>
  );
};

const CardWaveLayout = styled(Link)``;

export default CardWaveList;
