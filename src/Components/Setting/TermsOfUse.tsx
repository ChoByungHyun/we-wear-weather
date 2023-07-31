import React, { FC } from 'react';
import styled from 'styled-components';

interface TermsOfUseProps {}

const TermsOfUse: FC<TermsOfUseProps> = ({}) => {
  return (
    <>
      <STermsOfUse>termsofuse</STermsOfUse>
    </>
  );
};

export default TermsOfUse;

const STermsOfUse = styled.div`
  background-color: white;
  width: 100%;
  height: 51px;
  border: 1px solid black;
`;
