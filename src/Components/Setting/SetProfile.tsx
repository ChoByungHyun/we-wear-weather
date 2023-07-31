import React, { FC } from 'react';
import styled from 'styled-components';

import moreInfoIcn from 'Assets/setting-moreinfo-icon.svg';

interface SetProfileProps {}

const SetProfile: FC<SetProfileProps> = ({}) => {
  return (
    <>
      <SSetProfile>
        <p>성별 및 나이 설정</p>
        <button>
          <img src={moreInfoIcn} alt='more-info-icon' />
        </button>
      </SSetProfile>
    </>
  );
};

export default SetProfile;

const SSetProfile = styled.div`
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
