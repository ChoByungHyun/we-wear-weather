import styled from 'styled-components';
import Header from 'Components/common/Header';
import BottomNav from 'Components/common/BottomNav';
import ParticulateMatter from 'Components/Home/ParticulateMatter';
import HourlyForcast from 'Components/Home/HourlyForcast';
import TodayWeather from 'Components/Home/TodayWeather';
import speechBubbleTail from 'Assets/speech-bubble-tail.svg';
import weatherFewClouds from 'Assets/weather-few-clouds.svg';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SUpdateDate>AM 11:10 업데이트</SUpdateDate>
        <SSpeechBubble>
          {/* TODO 날씨 이미지마다 말풍선을 덮는 정도가 달라 이미지 파일 수정 필요 */}
          <img className='todayWeatherImg' src={weatherFewClouds} alt='today-weather' />
          {/* NOTE 화면 가로 크기가 변경되면 말풍선 가로 공백이 유동적이어서, 말풍선 꼬리를 따로 아래에 붙이는 방식으로 해결 */}
          <img className='speechBubbleTail' src={speechBubbleTail} alt=' ' />
          <TodayWeather>
          </TodayWeather>
          <p className='todayComment'>
          날씨가 흐리고 일교차가 심하네요 <br/>가벼운 겉옷 하나 챙기는건 어떨까요?
          </p>
        </SSpeechBubble>
        <SPMHourlySection>
          <ParticulateMatter />
          <HourlyForcast />
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

const SSpeechBubble = styled.article`
  width: calc(100% - 32px);
  margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  text-align: center;
  padding: 0 16px;

  .speechBubbleTail {
    position: absolute;
    bottom: -70px;
    left: calc(50% - 160px);
  }

  .todayWeatherImg {
    position: absolute;
    top: -80px;
    right: 0;
  }
  
  .todayComment {
    padding: 24px 0 36px 0;
    font-size: 16px;
    color: var(--gray-800);
    font-weight: 500;
    border-top: 1px solid var(--gray-200);
    line-height: 150%;
  }
`;

const SPMHourlySection = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`;
