import React, { useState } from 'react';
import SearchIcon from 'Assets/search-icon.svg';
import SearchIcon_Fill from 'Assets/search-fill-icon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
interface SearchInputProps {
  type: string;
  // disable된 input은 type을 button으로 처리했고 아니라면 input으로 처리했는데 헷갈릴려나요?
  // 근데 사용되는 곳이 많이 없긴해서,,
}
const SearchInput: React.FC<SearchInputProps> = ({ type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }
  function handleSearchDetail() {
    navigate('/searchDetail');
  }

  return (
    <>
      {type === 'button' ? (
        <SLayout isFocused={isFocused} onClick={handleSearchDetail}>
          <SSearch type='text' placeholder='원하는 지역을 검색하세요' isFocused={isFocused} readOnly />
          <SSearchIcon src={SearchIcon} alt='' />
        </SLayout>
      ) : (
        <SLayout isFocused={isFocused}>
          <SSearch
            type='text'
            placeholder='원하는 지역을 검색하세요'
            isFocused={isFocused}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            autoFocus
          />
          {isFocused ? <SSearchIcon src={SearchIcon_Fill} alt='' /> : <SSearchIcon src={SearchIcon} alt='' />}
        </SLayout>
      )}
    </>
  );
};

export default SearchInput;

const SLayout = styled.div<{ isFocused: boolean }>`
  display: flex;
  width: 100%;
  height: 56px;
`;

const SSearch = styled.input<{ isFocused: boolean }>`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 14px;
  padding: 6px 20px;
  padding-right: 35px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.isFocused ? '#F68E1D' : '#e6e6e6')};
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  box-shadow: ${(props) => (props.isFocused ? '0px 0px 0px 0px' : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)')};
  color: #000;
  position: relative;
`;
const SSearchIcon = styled.img`
  position: absolute;
  left: 86%;
  bottom: 89%;
  width: 24px;
`;
