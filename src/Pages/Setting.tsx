import React from 'react';
import styled from 'styled-components';
import BottomNav from 'Components/common/BottomNav';
import Header from 'Components/common/Header';
import SetAlarmLocation from 'Components/Setting/SetAlarmLocation';
import SetProfile from 'Components/Setting/SetProfile';
import TermsOfUse from 'Components/Setting/TermsOfUse';
import MetaTag from 'Components/common/MetaTag';

const Setting = () => {
  return (
    <>
      <MetaTag
        title='WWW 세팅 페이지'
        description='알림 설정 및 프로필 설정을 변경해보세요'
        url='https://we-wear-weather.vercel.app/setting'
      />
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
