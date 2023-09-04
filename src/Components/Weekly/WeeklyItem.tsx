import { FC } from 'react';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import pcScreen from 'Atom/pcScreen';

interface WeeklyItemProps {
  day: string | number | undefined;
  min: string | number | undefined;
  max: string | number | undefined;
  temp?: string | number | undefined;
  icon?: string | undefined;
  $today?: boolean;
}

const WeeklyItem: FC<WeeklyItemProps> = ({ day, min, max, temp, icon, $today = false }) => {
  const isPC = useRecoilValue(pcScreen);
  return (
    <SLayout $isPC={isPC}>
      <h2>{day}</h2>
      <SMinMaxWrap $today={$today} $isPC={isPC}>
        <span>최저: {min}</span>
        <span>최고: {max}</span>
      </SMinMaxWrap>
      <STempWrap $isPC={isPC}>
        <img src={icon} alt='이날의 날씨 아이콘' />
        <span>{temp ? temp : max}</span>
      </STempWrap>
    </SLayout>
  );
};

export default WeeklyItem;

const SLayout = styled.div<{ $isPC: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.$isPC ? '22px 45px' : '15px 21px')};
  background-color: #fff;
  border: 1px solid var(--gray-400);
  border-radius: 10px;

  h2 {
    font-size: ${(props) => (props.$isPC ? '22px' : '20px')};
    font-weight: 500;
  }
`;

const SMinMaxWrap = styled.div<{ $today: boolean; $isPC: boolean }>`
  font-size: ${(props) => (props.$isPC ? '16px' : '12px')};
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

  span:nth-of-type(2) {
    ${(props) =>
      props.$today &&
      css`
        padding-right: 20px;
      `}
  }
`;

const STempWrap = styled.div<{ $isPC: boolean }>`
  display: flex;
  align-items: center;

  img {
    margin-right: 3px;
  }

  span {
    font-size: ${(props) => (props.$isPC ? '30px' : '24px')};
    font-weight: bold;
    color: var(--orange);
  }
`;
