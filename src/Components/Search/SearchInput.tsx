import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from 'Assets/search-icon.svg';
import SearchIcon_Fill from 'Assets/search-fill-icon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';
import useSearchedCities from 'Hooks/useSearchedCites';
import { useQuery } from 'react-query';
import korea_location_lon_lan from 'Assets/korea-location/korea_location_lon_lan.json';
import LocationConfirmModal from './LocationConfirmModal';
import { getLatLonData } from 'API/weatherLatLonAPI';
interface SearchInputProps {
  type: string;
}
interface CityInfo {
  docity: string;
  do: string;
  city: string;
  lon: number;
  lat: number;
}

const SearchInput: React.FC<SearchInputProps> = ({ type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const filteredData = filterCityResults(searchValue);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [latLonData, setLatLonData] = useState({
    lon: 0,
    lat: 0,
  });

  const { getCityWeather } = useOpenWeatherAPI();
  const { searchedCities, addSearchedCity } = useSearchedCities();

  function filterCityResults(value: string): CityInfo[] {
    const lowerValue = value.toLowerCase();

    if (showModal) {
      const matchedCity = korea_location_lon_lan.filter((item) => item.docity.toLowerCase() === lowerValue);
      if (matchedCity.length > 0) {
        return [matchedCity[0]]; // 배열 형태로 반환
      }
    }
    return korea_location_lon_lan.filter((item) => item.docity.toLowerCase().includes(lowerValue));
  }
  const navigate = useNavigate();

  // Use the useQuery hook to fetch and manage the data
  const { data, isLoading, isError } = useQuery(
    ['weatherCity', searchValue], // Provide a query key based on searchValue
    () => getCityWeather(latLonData),
    {
      enabled: searchValue !== '', // Only enable the query if searchValue is not empty
    },
  );
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleSearchDetail() {
    navigate('/searchDetail');
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    setSelectedIndex(-1);
  }

  function handleSelectOption(option: string) {
    const selectedCityInfo = filteredData.find((cityInfo) => cityInfo.docity === option);

    if (selectedCityInfo) {
      const { lon, lat } = selectedCityInfo;
      setSelectedIndex(filteredData.indexOf(selectedCityInfo));
      setSearchValue(option);
      setShowModal(true);

      setLatLonData({
        lon: lon,
        lat: lat,
      });
    } else {
    }
  }

  function handleSearchIconClick(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();
    handleSearchValueCheck();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      // handleSearchValueCheck();
    }
  }
  function handleSearchValueCheck() {
    const selectedCityInfo = filteredData.find((cityInfo) => cityInfo.docity === searchValue);
    if (selectedCityInfo) {
      setShowModal(true);
    } else {
      alert('검색 형식에 맞게 지역을 입력해주세요!');
    }
  }

  function handleModal(confirm: boolean) {
    if (confirm) {
      console.log('성공');
      addSearchedCity(searchValue, latLonData, false);
      navigate('/', { state: { cityWeather: { data: data, cityName: searchValue, latLonData: latLonData } } });
      setShowModal(false);
    } else {
      console.log('실패');

      setShowModal(false);
    }
  }

  function highlightMatchedText(text: string): JSX.Element {
    const index = text.toLowerCase().indexOf(searchValue.toLowerCase());
    if (index === -1) return <>{text}</>;
    return (
      <>
        {text.slice(0, index)}
        <SHighlight>{text.slice(index, index + searchValue.length)}</SHighlight>
        {text.slice(index + searchValue.length)}
      </>
    );
  }
  useEffect(() => {
    // 방향키와 엔터로 드롭박스 이동 및 선택 가능하도록 하는 함수
    function handleKeyDown(event: KeyboardEvent) {
      if (isFocused && filteredData.length > 0) {
        switch (event.key) {
          case 'ArrowUp':
            setSelectedIndex((prevIndex) => (prevIndex <= 0 ? filteredData.length - 1 : prevIndex - 1));
            break;
          case 'ArrowDown':
            setSelectedIndex((prevIndex) => (prevIndex >= filteredData.length - 1 ? 0 : prevIndex + 1));
            break;
          case 'Enter':
            if (selectedIndex !== -1) {
              handleSelectOption(filteredData[selectedIndex].docity);
            }
            break;
          default:
            break;
        }
      }
    }

    // 스크롤 조정
    const activeOption = dropdownRef.current?.querySelector('.active-option');
    if (activeOption) {
      activeOption.scrollIntoView({ block: 'nearest' });
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFocused, selectedIndex, filteredData]);

  return (
    <>
      {type === 'button' ? (
        <>
          <SLayout $isFocused={isFocused} onClick={handleSearchDetail}>
            <SSearch type='text' placeholder='원하는 지역을 검색하세요' $isFocused={isFocused} readOnly />
            <SSearchIcon src={SearchIcon} alt='검색아이콘' />
          </SLayout>
        </>
      ) : (
        <>
          <SLayout $isFocused={isFocused}>
            <SSearch
              type='text'
              placeholder='원하는 지역을 검색하세요'
              $isFocused={isFocused}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />

            {isFocused && searchValue.length > 0 && (
              <>
                <SDropdown ref={dropdownRef}>
                  {filterCityResults(searchValue).map((cityInfo, index) => (
                    <SDropdownOption
                      key={cityInfo.docity}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onClick={() => {
                        handleSelectOption(cityInfo.docity);
                      }}
                      $isSelected={index === selectedIndex}
                      className={index === selectedIndex ? 'dropdown-option active-option' : 'dropdown-option'}
                    >
                      {highlightMatchedText(cityInfo.docity)}
                    </SDropdownOption>
                  ))}
                </SDropdown>
              </>
            )}
            {isFocused ? (
              <SSearchIcon src={SearchIcon_Fill} alt='검색아이콘' onClick={handleSearchIconClick} />
            ) : (
              <SSearchIcon src={SearchIcon} alt='검색아이콘' onClick={handleSearchIconClick} />
            )}
            {showModal && <LocationConfirmModal handleModal={handleModal} searchValue={searchValue} />}
          </SLayout>
        </>
      )}
    </>
  );
};

export default SearchInput;

const SLayout = styled.div<{ $isFocused: boolean }>`
  display: flex;
  width: 100%;
  height: 56px;
  position: relative;
`;

const SSearch = styled.input<{ $isFocused: boolean }>`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 14px;
  padding: 6px 20px;
  padding-right: 35px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.$isFocused ? '#F68E1D' : '#e6e6e6')};
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  /* box-shadow: ${(props) => (props.$isFocused ? '0px 0px 0px 0px' : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)')}; */
  color: #000;
  position: relative;
`;
const SSearchIcon = styled.img`
  position: absolute;
  left: 86%;
  bottom: 30%;
  width: 24px;
  cursor: pointer;
`;
const SDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  overflow-y: auto;
  z-index: 1;
`;

const SHighlight = styled.span`
  color: #f68e1d;
`;
interface SDropdownOptionProps {
  $isSelected: boolean;
}

const SDropdownOption = styled.div<SDropdownOptionProps>`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  ${(props) =>
    props.$isSelected &&
    `
    background-color: #f9f9f9;
    font-weight: bold;
  `}
`;
