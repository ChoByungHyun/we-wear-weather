import React from 'react';
import { useRecoilState } from 'recoil';
import { userCityAtom } from 'Atom/userLocationAtom';
import { currentUserIndexAtom } from 'Atom/userLocationAtom';

interface CityInfo {
  cityName: string;
  latLonData: {
    lon: number;
    lat: number;
  };
}
import { CityWeatherType } from 'types/cityWeatherType';

// 검색된 도시명과 좌표 정보를 Recoil을 사용하여 저장하고 삭제하는 훅
const useSearchedCities = () => {
  const [searchedCities, setSearchedCities] = useRecoilState<CityWeatherType[]>(userCityAtom);
  const [userCityChange, setUserCityChange] = useRecoilState(currentUserIndexAtom);
  const findCityIndexByName = (cityName: string) => {
    return searchedCities.findIndex((city) => city.cityName === cityName);
  };
  const addSearchedCity = (cityName: string, latLonData: { lon: number; lat: number }, isZerothIndex: boolean) => {
    if (isZerothIndex) {
      setSearchedCities((prevCities) => [{ cityName: cityName, latLonData: latLonData }, ...prevCities.slice(1)]);
      setUserCityChange(0);
    } else {
      if (searchedCities.some((city) => city.cityName === cityName)) {
        const cityIndex = findCityIndexByName(cityName);
        setUserCityChange(cityIndex);
      } else {
        if (searchedCities.length >= 5) {
          setSearchedCities((prevCities) => [
            prevCities[0],
            ...prevCities.slice(2),
            { cityName: cityName, latLonData: latLonData },
          ]);
          setUserCityChange(findCityIndexByName(cityName));
        } else {
          setSearchedCities((prevCities) => [
            prevCities[0],
            ...prevCities.slice(1),
            { cityName: cityName, latLonData: latLonData },
          ]);
          setUserCityChange(searchedCities.length);
        }
      }
    }
  };

  return { searchedCities, addSearchedCity, findCityIndexByName, setUserCityChange };
};

export default useSearchedCities;
