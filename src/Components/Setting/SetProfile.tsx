import React, { FC } from 'react';
import styled from 'styled-components';

interface SetProfileProps {}

const SetProfile: FC<SetProfileProps> = ({}) => {
  return (
    <>
      <SSetProfile>profile</SSetProfile>
    </>
  );
};

export default SetProfile;

const SSetProfile = styled.div`
  background-color: white;
  width: 100%;
  height: 51px;
  border: 1px solid black;
`;
