import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGender from 'Components/Login/ButtonGender';

const ButtonGenderList = () => {
  const [genderIndex, setGenderIndex] = useState<number | null>(null);
  const genderItem: string[] = ['남성', '여성'];

  function handleActive(index: number): void {
    setGenderIndex(index);
  }

  return (
    <SBtnGenderWrap>
      {genderItem.map((el, index) => {
        return (
          <ButtonGender
            key={index}
            active={index === genderIndex}
            gender={el}
            text={el}
            onClick={() => {
              handleActive(index);
            }}
          />
        );
      })}
    </SBtnGenderWrap>
  );
};

const SBtnGenderWrap = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  margin: 80px 0;
`;

export default ButtonGenderList;
