import React from 'react';
import BottomNav from 'Components/common/BottomNav';
import Header from 'Components/common/Header';
import SearchInput from 'Components/Search/SearchInput';
import CardWaveList from 'Components/Search/CardWaveList';
import MetaTag from 'Components/common/MetaTag';

const Search = () => {
  return (
    <>
      <MetaTag
        title='WWW 검색 페이지'
        description='날씨 제공을 원하는 지역을 검색하고 해당 지역의 날씨를 확인해보세요'
        url='https://we-wear-weather.vercel.app/search'
      />

      <Header />
      <SearchInput type='button' />
      <CardWaveList />
      <BottomNav />
    </>
  );
};

export default Search;
