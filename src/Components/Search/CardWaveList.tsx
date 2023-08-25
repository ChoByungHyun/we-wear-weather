import React, { FC } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CityWeatherCard from './CityWeatherCard';
import { userCityAtom } from 'Atom/userLocationAtom';
import { CityWeatherType } from 'types/cityWeatherType';
import useSearchedCities from 'Hooks/useSearchedCites';

const CardWaveList: FC = () => {
  const searchData = useRecoilValue(userCityAtom);
  const { deleteSearchCity } = useSearchedCities();
  return (
    <SCardWaveLayout>
      {searchData.map((el: CityWeatherType, index: number) => {
        return (
          <CityWeatherCard key={index} cityName={index === 0 ? '현재 위치' : el.cityName} latLonData={el.latLonData} />
        );
      })}
      <SCardWaveDelete onClick={deleteSearchCity}>검색내역 지우기</SCardWaveDelete>
    </SCardWaveLayout>
  );
};

const SCardWaveLayout = styled.div``;
const SCardWaveDelete = styled.div`
  margin-top: 20px;
  text-align: center;
  color: var(--gray-800);
  text-decoration: underline;
  cursor: pointer;
`;

export default CardWaveList;
