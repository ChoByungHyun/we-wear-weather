import React from 'react';
import styled from 'styled-components';
import ButtonAge from './ButtonAge';

const ButtonAgeList = () => {
  const ageList: string[] = ['10대', '20대', '30대', '40대', '50대'];
  return (
    <SBtnAgeWrap>
      {ageList.map((el, idx) => {
        return <ButtonAge isActive={false} key={idx} text={el} />;
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
