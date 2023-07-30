import React from 'react';
import BottomNav from 'Components/common/BottomNav';
import Header from 'Components/common/Header';
import SearchInput from 'Components/Search/SearchInput';
const Search = () => {
  return (
    <>
      <Header />
      <SearchInput type='button' />
      <BottomNav />
    </>
  );
};

export default Search;
