import React from 'react';
import { useRecoilState } from 'recoil';
import { userCityAtom } from 'Atom/userLocationAtom';

interface CityInfo {
  cityName: string;
  latLonData: {
    lon: number;
    lat: number;
  };
}

// 검색된 도시명과 좌표 정보를 Recoil을 사용하여 저장하고 삭제하는 훅
const useSearchedCities = () => {
  const [searchedCities, setSearchedCities] = useRecoilState<CityInfo[]>(userCityAtom);

  const addSearchedCity = (cityName: string, latLonData: { lon: number; lat: number }, isZerothIndex: boolean) => {
    if (isZerothIndex) {
      setSearchedCities((prevCities) => [{ cityName: cityName, latLonData: latLonData }, ...prevCities.slice(1)]);
    } else {
      setSearchedCities((prevCities) => [
        prevCities[0],
        ...prevCities.slice(1),
        { cityName: cityName, latLonData: latLonData },
      ]);
    }
  };

  return { searchedCities, addSearchedCity };
};

export default useSearchedCities;
