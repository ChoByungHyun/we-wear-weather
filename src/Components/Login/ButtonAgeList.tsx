import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonAge from 'Components/Login/ButtonAge';

const ButtonAgeList = () => {
  const [ageIndex, setAgeIndex] = useState<number | null>(null);
  const ageList: string[] = ['10대', '20대', '30대', '40대', '50대'];

  function handleActive(index: number): void {
    setAgeIndex(index);
  }
  return (
    <SBtnAgeWrap>
      {ageList.map((el, index) => {
        console.log(ageIndex === index);
        return (
          <ButtonAge
            key={index}
            active={ageIndex === index}
            text={el}
            onClick={() => {
              handleActive(index);
            }}
          />
        );
      })}
    </SBtnAgeWrap>
  );
};

const SBtnAgeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
`;

export default ButtonAgeList;
