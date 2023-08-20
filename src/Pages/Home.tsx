import styled from 'styled-components';
import Header from 'Components/common/Header';
import BottomNav from 'Components/common/BottomNav';
import Character from 'Components/Home/Character';
import ParticulateMatter from 'Components/Home/ParticulateMatter';

import HourlyForecast from 'Components/Home/HourlyForecast';
import SpeechBubble from 'Components/Home/SpeechBubble';
import { useNavigate, useLocation } from 'react-router';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SUpdateDate>AM 11:10 업데이트</SUpdateDate>
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
`;
