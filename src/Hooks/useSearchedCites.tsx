import React from 'react';
import { useRecoilState } from 'recoil';
import { userCityAtom } from 'Atom/userLocationAtom';
import { CityWeatherType } from 'types/cityWeatherType';

// 검색된 도시명과 좌표 정보를 Recoil을 사용하여 저장하고 삭제하는 훅
const useSearchedCities = () => {
  const [searchedCities, setSearchedCities] = useRecoilState<CityWeatherType[]>(userCityAtom);

  const addSearchedCity = (cityName: string, latLonData: { longitude: number; latitude: number }) => {
    if (!searchedCities.some((city) => city.cityName === cityName)) {
      if (searchedCities.length >= 4) {
        setSearchedCities((prevCities) => [...prevCities.slice(1), { cityName: cityName, latLonData: latLonData }]);
      } else {
        setSearchedCities((prevCities) => [...prevCities, { cityName: cityName, latLonData: latLonData }]);
      }
    }
  };

  return { searchedCities, addSearchedCity };
};

export default useSearchedCities;
