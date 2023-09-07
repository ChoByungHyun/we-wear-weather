import React from 'react';
import BottomNav from 'Components/common/BottomNav';
import Header from 'Components/common/Header';
import SearchInput from 'Components/Search/SearchInput';
import CardWaveList from 'Components/Search/CardWaveList';
const Search = () => {
  return (
    <>
      <Header />
      <SearchInput type='button' />
      <CardWaveList />
      <BottomNav />
    </>
  );
};

export default Search;
