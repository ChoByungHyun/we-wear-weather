import React from 'react';
import SearchInput from 'Components/Search/SearchInput';
import Header from 'Components/common/Header';
import MetaTag from 'Components/common/MetaTag';

const SearchDetail = () => {
  return (
    <>
      <MetaTag
        title='WWW 검색 상세 페이지'
        description='날씨 제공을 원하는 지역을 검색하고 해당 지역의 날씨를 확인해보세요'
        url='https://we-wear-weather.vercel.app/searchDetail'
      />
      <Header />
      <SearchInput type='input' />
    </>
  );
};

export default SearchDetail;
