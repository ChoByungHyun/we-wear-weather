import React, { FC } from 'react';
import styled from 'styled-components';

interface CardWaveProps {
  isNight: boolean;
}

const CardWave: FC<CardWaveProps> = ({ isNight }) => {
  return (
    <SCardWaveLayout style={{ opacity: isNight ? 0.4 : 1 }}>
      <div></div>
      <div></div>
      <div></div>
    </SCardWaveLayout>
  );
};

const SCardWaveLayout = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  position: absolute;
  transform: translate3d(0, 0, 0);
  top: 100px;

  &:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }

  & div {
    opacity: 0.3;
    position: absolute;
    top: 3%;
    left: 50%;
    background: #ffffff;
    width: 600px;
    height: 600px;
    margin-left: -210px;
    margin-top: -1px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: drift 10000ms infinite linear;
  }

  & div:nth-child(2) {
    opacity: 0.4;
    animation: drift 14000ms infinite linear;
    margin-top: 15px;
    margin-left: -400px;
  }

  & div:nth-child(3) {
    opacity: 0.2;
    animation: drift 7000ms infinite linear;
    margin-top: -10px;
    margin-left: -400px;
  }

  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;

export default CardWave;
