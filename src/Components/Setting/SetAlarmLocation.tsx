import React, { FC } from 'react';
import styled from 'styled-components';

interface SetAlarmLocationProps {}

const SetAlarmLocation: FC<SetAlarmLocationProps> = ({}) => {
  return (
    <>
      <SSetAlarmLocation>alarm Location</SSetAlarmLocation>
    </>
  );
};

export default SetAlarmLocation;

const SSetAlarmLocation = styled.section`
  background-color: white;
  width: 100%;
  height: 120px;
  border: 1px solid black;
`;
