import React, { FC } from 'react';
import styled from 'styled-components';

import Toggle from 'Components/common/Toggle';

interface SetAlarmLocationProps {}

const SetAlarmLocation: FC<SetAlarmLocationProps> = ({}) => {
  return (
    <SSetAlarmLocation>
      <SSetAlarm>
        <p>알림설정</p>
        <Toggle />
      </SSetAlarm>
    </SSetAlarmLocation>
  );
};

export default SetAlarmLocation;

const SSetAlarmLocation = styled.div`
  background-color: white;
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* padding: 20px 0; */
    align-items: center;
  }
`;

const SSetAlarm = styled.div``;
