import React, { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Button from 'Components/common/Button';
import { useRecoilState } from 'recoil';
import { dailyWeather } from 'Atom/mainWeatherAtom';
import { useMainWeatherInfo } from 'Components/common/useWeatherIcon';
import useDailyComments from 'Components/common/useDailyComments';

interface CharacterModalProps {
  img?: string;
  handleCharModal?: () => void;
}

const CharacterModal: FC<CharacterModalProps> = ({ img, handleCharModal }) => {
  const [todayWeather, setTodayWeather] = useRecoilState(dailyWeather);
  const { commentModalHighLight, commentFilteredClothes, commentTemp, commentWeather, commentModalDetail } =
    useDailyComments();
  const mainWeatherInfo = useMainWeatherInfo(todayWeather.weather);
  const clothesDescription = commentModalHighLight();
  return (
    <SCharModalBG>
      <SCharModalLayout>
        <h1 className='a11y-hidden'>옷차림 상세정보</h1>
        <SCharImgWrap>
          <img src={img} alt='' />
        </SCharImgWrap>
        <h2>
          {commentWeather()} {commentTemp()}
        </h2>
        {/* TODO 옷차림 별 안내 내용 데이터 */}
        <p>{commentModalDetail()}</p>
        {/* <div>{commentModalHighLight()}</div> */}
        {/* <p>비가 올거예요 우산을 챙기세요</p> */}
        <Button onClick={handleCharModal} $fontSize='16px'>
          확인했어요
        </Button>
      </SCharModalLayout>
    </SCharModalBG>
  );
};

export default CharacterModal;

const SContent = styled.div`
  p {
    color: red;
  }
`;

const SClothesList = styled.div`
  display: flex;
  gap: 5px;
  font-weight: bold;
  color: var(--orange);
`;
const SWeatherTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const STodayWeather = styled.img`
  width: 50px;
  height: 50px;
`;

const SCharModalBG = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 25;
`;

const SCharModalLayout = styled.div`
  width: 327px;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 24px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;

  h2 {
    margin-top: 12px;
    font-size: 17px;
    font-weight: 700;
  }

  /* p:nth-of-type(1) {
    color: var(--gray-800);
    font-weight: 700;

    strong {
      color: var(--orange);
    }
  } */
  p {
    text-align: center;
  }

  p:nth-of-type(1) {
    display: flex;
    line-height: 1.2;
    text-align: start;
    font-size: 15px;
    color: var(--gray-800);
  }
  p:nth-of-type(2) {
    margin-bottom: 24px;
    line-height: 1.6;
    text-align: start;
    font-size: 15px;
    color: var(--gray-800);
  }
`;

const SCharImgWrap = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
