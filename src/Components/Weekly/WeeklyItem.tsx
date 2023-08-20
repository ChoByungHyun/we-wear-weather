import React, { FC } from 'react';
import styled from 'styled-components';

interface WeeklyItemProps {
  day: string | number | undefined;
  min: string | number | undefined;
  max: string | number | undefined;
  temp?: string | number | undefined;
  icon?: string | undefined;
}

const WeeklyItem: FC<WeeklyItemProps> = ({ day, min, max, temp, icon }) => {
  return (
    <SLayout>
      <h2>{day}</h2>
      <SMinMaxWrap>
        <span>최저: {min}</span>
        <span>최고: {max}</span>
      </SMinMaxWrap>
      <STempWrap>
        <img src={icon} alt='이날의 날씨 아이콘' />
        <span>{temp ? temp : max}</span>
      </STempWrap>
    </SLayout>
  );
};

export default WeeklyItem;

const SLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 21px;
  background-color: #fff;
  border: 1px solid var(--gray-400);
  border-radius: 10px;

  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const SMinMaxWrap = styled.div`
  font-size: 12px;
  color: var(--gray-800);

  span:nth-of-type(1)::after {
    content: '';
    display: inline-block;
    width: 0.5px;
    height: 12px;
    margin: 0 7px;
    vertical-align: top;
    background-color: var(--gray-400);
  }
`;

const STempWrap = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 3px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: var(--orange);
  }
`;
