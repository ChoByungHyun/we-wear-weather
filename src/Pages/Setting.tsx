import React from 'react';
import styled from 'styled-components';
import BottomNav from 'Components/common/BottomNav';
import Header from 'Components/common/Header';
import SetAlarmLocation from 'Components/Setting/SetAlarmLocation';
import SetProfile from 'Components/Setting/SetProfile';
import TermsOfUse from 'Components/Setting/TermsOfUse';

const Setting = () => {
  return (
    <>
      <Header />
      <SSettingSection>
        <SetAlarmLocation />
        <SetProfile />
        <TermsOfUse />
      </SSettingSection>
      <SVersion>Ver. 0.0.1</SVersion>
      <BottomNav />
    </>
  );
};

export default Setting;

const SSettingSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SVersion = styled.p`
  text-align: center;
  color: var(--gray-600);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 100px;
`;
