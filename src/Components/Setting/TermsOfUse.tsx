import { FC } from 'react';
import styled from 'styled-components';

import moreInfoIcn from 'Assets/setting-moreinfo-icon.svg';

const TermsOfUse: FC = () => {
  return (
    <>
      <STermsOfUse>
        <p>이용약관 및 정보처리 방침</p>
        <button type='button' aria-label='이용약관 및 정보처리 방침 확인하러가기'>
          <img src={moreInfoIcn} alt='more-info-icon' />
        </button>
      </STermsOfUse>
    </>
  );
};

export default TermsOfUse;

const STermsOfUse = styled.div`
  background-color: white;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    padding: 16px;
  }

  & > button {
    margin-right: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
