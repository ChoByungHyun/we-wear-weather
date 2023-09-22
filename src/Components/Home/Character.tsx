import React, { FC, useState } from 'react';
import styled from 'styled-components';
import CharacterModal from 'Components/Home/CharacterModal';
import { useRecoilValue } from 'recoil';
import { dailyWeather } from 'Atom/mainWeatherAtom';

import touchPointer from 'Assets/touch-pointer.svg';
import useCharacters from 'Components/common/useCharacters';

const Character: FC = () => {
  const weather = useRecoilValue(dailyWeather);
  const [onModal, setOnModal] = useState<boolean>(false);
  const character = useCharacters(weather.feelsLike);

  function handleCharModal() {
    setOnModal(!onModal);
  }

  return (
    <>
      <SCharacter onClick={handleCharModal}>
        <img src={character} alt='' />
      </SCharacter>
      {onModal && <CharacterModal img={character} handleCharModal={handleCharModal} />}
    </>
  );
};

export default Character;

const SCharacter = styled.section`
  margin-bottom: -6px;
  text-align: center;
  /* TODO random으로 해주면 좋겠지만 캐릭터에 가려짐 img 태그로 할까? 고민, 아니면 보여지는 위치 값을 배열로 저장하고 보여줄까? */
  background: url(${touchPointer}) no-repeat 230px 60px;
  z-index: 10;
  position: relative;

  img {
    width: 16vh;
    cursor: pointer;
  }
`;
