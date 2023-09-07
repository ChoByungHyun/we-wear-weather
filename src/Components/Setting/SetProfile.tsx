import React, { FC } from 'react';
import styled from 'styled-components';

import moreInfoIcn from 'Assets/setting-moreinfo-icon.svg';
import { useNavigate } from 'react-router-dom';

const SetProfile: FC = () => {
  const navigate = useNavigate();
  const updateProfile = () => {
    navigate('/profile', {
      state: {
        title: '프로필은 언제든 수정할 수 있어요.',
        button: '설정하기',
      },
    });
  };
  return (
    <>
      <SSetProfile>
        <p>성별 및 나이 설정</p>
        <button onClick={updateProfile}>
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
