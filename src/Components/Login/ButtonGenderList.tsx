import React from 'react';
import styled from 'styled-components';
import ButtonGender from './ButtonGender';
import genderMale from '../../Assets/gender-male.png';
import genderFemale from '../../Assets/gender-female.png';

const ButtonGenderList = () => {
  return (
    <SBtnGenderWrap>
      <ButtonGender isActive={false} gender={genderMale} text='남성' />
      <ButtonGender isActive={false} gender={genderFemale} text='여성' />
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
