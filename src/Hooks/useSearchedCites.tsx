import React from 'react';
import { useRecoilState } from 'recoil';
import { userCityAtom } from 'Atom/userLocationAtom';
// 검색된 도시명을 Recoil을 사용하여 저장하고 삭제하는 훅
const useSearchedCities = () => {
  const [searchedCities, setSearchedCities] = useRecoilState(userCityAtom);

  const addSearchedCity = (cityName: string) => {
    if (!searchedCities.includes(cityName)) {
      if (searchedCities.length >= 5) {
        setSearchedCities((prevCities: string) => [...prevCities.slice(1), cityName]);
      } else {
        setSearchedCities((prevCities: string) => [...prevCities, cityName]);
      }
    }
  };

  return { searchedCities, addSearchedCity };
};

export default useSearchedCities;
