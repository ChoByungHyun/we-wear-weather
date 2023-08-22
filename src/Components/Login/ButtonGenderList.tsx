import React, { FC, useState } from 'react';
import styled from 'styled-components';
import ButtonGender from 'Components/Login/ButtonGender';
import { UserInfoProps } from 'Pages/Login';

const ButtonGenderList: FC<UserInfoProps> = ({ setUserInfo, gender }) => {
  const genderItem: string[] = ['남성', '여성'];
  const [genderIndex, setGenderIndex] = useState<number>(genderItem.indexOf(gender));

  function handleActive(index: number, el: string): void {
    setGenderIndex(index);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      gender: el,
    }));
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
              handleActive(index, el);
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
