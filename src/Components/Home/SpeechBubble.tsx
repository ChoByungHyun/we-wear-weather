import React, { FC } from 'react';
import styled from 'styled-components';

import SpeechBubbleWeatherInfo from 'Components/Home/SpeechBubbleWeatherInfo';
import speechBubbleTail from 'Assets/speech-bubble-tail.svg';
import weatherFewClouds from 'Assets/weather-few-clouds.svg';

interface SpeechBubbleProps {}

const SpeechBubble: FC<SpeechBubbleProps> = ({}) => {
  return (
    <SSpeechBubble>
      {/* NOTE 화면 가로 크기가 변경되면 말풍선 가로 공백이 유동적이어서, 말풍선 꼬리를 따로 아래에 붙이는 방식으로 해결 */}
      <img src={speechBubbleTail} alt=' ' />
      {/* TODO 날씨 이미지마다 말풍선을 덮는 정도가 달라 이미지 파일 수정 필요 */}
      <img src={weatherFewClouds} alt='today-weather' />
      <SpeechBubbleWeatherInfo />
      <SSpeechBubbleComment>
        날씨가 흐리고 일교차가 심하네요 <br />
        가벼운 겉옷 하나 챙기는건 어떨까요?
      </SSpeechBubbleComment>
    </SSpeechBubble>
  );
};

export default SpeechBubble;

const SSpeechBubble = styled.article`
  width: calc(100% - 32px);
  margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  text-align: center;
  padding: 0 16px;

  & > img:nth-of-type(1) {
    position: absolute;
    bottom: -70px;
    left: calc(50% - 160px);
  }

  & > img:nth-of-type(2) {
    position: absolute;
    top: -80px;
    right: 0;
  }
`;

const SSpeechBubbleComment = styled.p`
  padding: 24px 0 36px 0;
  font-size: 16px;
  color: var(--gray-800);
  font-weight: 500;
  border-top: 1px solid var(--gray-200);
  line-height: 150%;
`;
