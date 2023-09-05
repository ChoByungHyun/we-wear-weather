import React, { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Button from 'Components/common/Button';
import { useRecoilState } from 'recoil';
import { dailyWeather } from 'Atom/mainWeatherAtom';
import { useMainWeatherInfo } from 'Components/common/useWeatherIcon';
import useDailyComments from 'Components/common/useDailyComments';
import { CLOTHES_CATEGORY } from 'Constants/weatherConfig';

interface CharacterModalProps {
  img?: string;
  handleCharModal?: () => void;
}

const CharacterModal: FC<CharacterModalProps> = ({ img, handleCharModal }) => {
  const [todayWeather, setTodayWeather] = useRecoilState(dailyWeather);
  const { commentFilteredClothes, commentTemp, commentWeather, commentModalDetail } = useDailyComments();
  const mainWeatherInfo = useMainWeatherInfo(todayWeather.weather);
  const clothesList = commentFilteredClothes();
  return (
    <SCharModalBG>
      <SCharModalLayout>
        <h1 className='a11y-hidden'>옷차림 상세정보</h1>
        <SCharImgWrap>
          <img src={img} alt='' />
        </SCharImgWrap>
        <SWeatherTitle>
          <STodayWeather src={mainWeatherInfo?.icon} alt='today-weather' />
          {todayWeather.temp} <strong>{mainWeatherInfo.label}</strong>
        </SWeatherTitle>
        <h2>
          {commentWeather()} {commentTemp()}
        </h2>
        <p>
          추천 옷:
          <SClothesList>
            {clothesList &&
              clothesList.map((item) => {
                return <div>{item}</div>;
              })}
          </SClothesList>
        </p>
        {/* TODO 옷차림 별 안내 내용 데이터 */}
        <p>
          {commentModalDetail(CLOTHES_CATEGORY.TOP)}
          <br />
          {commentModalDetail(CLOTHES_CATEGORY.BOTTOM)}
          <br />
          {commentModalDetail(CLOTHES_CATEGORY.FOOTWEAR)}
          <br />
          {commentModalDetail(CLOTHES_CATEGORY.ACCESSORIES)}
        </p>
        <Button onClick={handleCharModal} $fontSize='16px'>
          확인했어요
        </Button>
      </SCharModalLayout>
    </SCharModalBG>
  );
};

export default CharacterModal;

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

  p:nth-of-type(1) {
    color: var(--gray-800);
    font-weight: 700;

    strong {
      color: var(--orange);
    }
  }

  p:nth-of-type(2) {
    display: flex;
    line-height: 1.6;
    text-align: start;
    font-size: 15px;
    color: var(--gray-800);
  }
  p:nth-of-type(3) {
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
