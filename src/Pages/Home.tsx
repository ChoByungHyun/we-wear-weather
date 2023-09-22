import styled from 'styled-components';
import Header from 'Components/common/Header';
import BottomNav from 'Components/common/BottomNav';
import Character from 'Components/Home/Character';
import ParticulateMatter from 'Components/Home/ParticulateMatter';
import { useRecoilValue } from 'recoil';
import { updateDate } from 'Atom/updateDate';
import HourlyForecast from 'Components/Home/HourlyForecast';
import SpeechBubble from 'Components/Home/SpeechBubble';
import MetaTag from 'Components/common/MetaTag';
import PWAInstallPrompt from 'Components/common/PWAInstallPrompt';

const Home = () => {
  const date = useRecoilValue(updateDate);
  return (
    <>
      <MetaTag
        title='WWW 홈페이지'
        description='WWW에서 오늘의 날씨, 시간대별 날씨, 주간대별 날씨 등을 확인하고 어떤 옷을 입을지 참고해보세요'
        url='https://we-wear-weather.vercel.app/home'
      />
      <Header />
      <main>
        <PWAInstallPrompt />

        <SUpdateDate>{date} 업데이트</SUpdateDate>
        <SpeechBubble />
        <Character />
        <SPMHourlySection>
          <ParticulateMatter />
          <HourlyForecast />
        </SPMHourlySection>
      </main>
      <BottomNav />
    </>
  );
};

export default Home;

const SUpdateDate = styled.p`
  color: var(--gray-200);
  font-size: 12px;
  margin: 8px;
`;

const SPMHourlySection = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 80px;
`;
