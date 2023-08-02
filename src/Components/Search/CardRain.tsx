import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface CardRainProps {
  isNight: boolean;
}
const CardRain: FC<CardRainProps> = ({ isNight }) => {
  const nbDrop: number = 80;
  const rainRef = useRef<HTMLDivElement>(null);

  function randRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const createRain = () => {
      const rainContainer = rainRef.current;

      for (let i = 1; i < nbDrop; i++) {
        const dropLeft = randRange(0, 1600);
        const dropTop = randRange(-1000, 1400);

        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = dropLeft + 'px';
        drop.style.top = dropTop + 'px';
        rainContainer?.appendChild(drop);
      }
    };

    createRain();
  }, []);

  return <CardRainWrap ref={rainRef} style={{ opacity: isNight ? 0.6 : 1 }} className='rain'></CardRainWrap>;
};

const CardRainWrap = styled.div`
  position: absolute;

  .drop {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.5)));
    width: 1px;
    height: 89px;
    position: absolute;
    bottom: 200px;
    transform: rotate(10deg);
    -webkit-animation: fall 1.3s linear infinite;
    -moz-animation: fall 1.3s linear infinite;
  }

  @-webkit-keyframes fall {
    to {
      margin-top: 900px;
    }
  }
  @-moz-keyframes fall {
    to {
      margin-top: 900px;
    }
  }
`;

export default CardRain;
