import React, { FC, useState } from 'react';
import styled from 'styled-components';
import ButtonAge from 'Components/Login/ButtonAge';
import { UserInfoProps } from 'Pages/Login';

const ButtonAgeList: FC<UserInfoProps> = ({ setUserInfo, age }) => {
  const ageList: string[] = ['10대', '20대', '30대', '40대', '50대'];
  const [ageIndex, setAgeIndex] = useState<number>(ageList.indexOf(age));

  function handleActive(index: number, el: string): void {
    setAgeIndex(index);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      age: el,
    }));
  }
  return (
    <SBtnAgeWrap>
      {ageList.map((el, index) => {
        return (
          <ButtonAge
            key={index}
            active={ageIndex === index}
            text={el}
            onClick={() => {
              handleActive(index, el);
            }}
          />
        );
      })}
    </SBtnAgeWrap>
  );
};

const SBtnAgeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export default ButtonAgeList;
