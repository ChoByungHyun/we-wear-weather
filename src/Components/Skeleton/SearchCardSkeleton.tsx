import React from 'react';
import SSkeleton from 'Components/style/SSkeleton';
import styled from 'styled-components';

const SearchCardSkeleton: React.FC = () => {
  return <SSearchCardSkeleton />;
};

const SSearchCardSkeleton = styled(SSkeleton)`
  height: 112px;
  margin-top: 32px;
`;

export default SearchCardSkeleton;
