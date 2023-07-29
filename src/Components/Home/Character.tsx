import React, { FC, useState } from 'react';
import styled from 'styled-components';
import CharacterModal from '../Home/CharacterModal';

import charMale from '../../Assets/char-male.png';
import touchPointer from '../../Assets/touch-pointer.svg';

interface CharacterProps {}

const Character: FC<CharacterProps> = ({}) => {
  const [onModal, setOnModal] = useState<boolean>(false);

  function handleCharModal() {
    setOnModal(!onModal);
  }

  return (
    <>
      <SCharacter onClick={handleCharModal}>
        <img src={charMale} alt='' />
      </SCharacter>
      {onModal && <CharacterModal img={charMale} handleCharModal={handleCharModal} />}
    </>
  );
};

export default Character;

const SCharacter = styled.section`
  margin-bottom: -15px;
  text-align: center;
  /* TODO random으로 해주면 좋겠지만 캐릭터에 가려짐 img 태그로 할까? 고민, 아니면 보여지는 위치 값을 배열로 저장하고 보여줄까? */
  background: url(${touchPointer}) no-repeat 230px 60px;

  img {
    width: 200px;
  }
`;
