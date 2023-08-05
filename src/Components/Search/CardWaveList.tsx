import React, { FC } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import CardWeather from './CardWeather';
import { useQuery } from 'react-query';
import { getLatLonData } from 'API/weatherLatLonAPI';
import { useRecoilValue } from 'recoil';
import userLocationAtom from 'Atom/userLocationAtom';

const CardWaveList: FC = () => {
  const latLon = useRecoilValue(userLocationAtom);
  const { data, isLoading, isError } = useQuery('weatherLatLon', () => getLatLonData(latLon.lat, latLon.lon));

  console.log(data);

  return (
    <CardWaveLayout to=''>
      {isLoading ? (
        <div>로딩중입니다</div>
      ) : (
        <CardWeather
          key={data.coord.id}
          temp={data.main.temp}
          max={data.main.temp_max}
          min={data.main.temp_min}
          weather={data.weather[0].main}
          name='현재 나의 위치'
        />
      )}
      {/* {week?.map((el, index) => {
        return (
          <CardWeather
            key={index}
            temp={el.main.temp}
            max={el.main.max}
            min={el.main.min}
            icon={el.main.icon}
            name={el.main.name}
          />
        );
      })} */}
    </CardWaveLayout>
  );
};

const CardWaveLayout = styled(Link)``;

export default CardWaveList;
