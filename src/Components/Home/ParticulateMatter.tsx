import React, { FC, useState } from 'react';
import styled from 'styled-components';

import pmGood from '../../Assets/particulate-matter-good.svg';
import pmSoso from '../../Assets/particulate-matter-soso.svg';
import pmBad from '../../Assets/particulate-matter-bad.svg';

interface ParticulateMatterProps {}

// NOTE : 미세먼지 관련정보
// PM10은 좋음(0~30㎍/㎥), 보통(31~80㎍/㎥), 약간나쁨(81~120㎍/㎥), 나쁨(121~200㎍/㎥) 등으로 구분
// PM2.5는 좋음 0∼15㎍/㎥, 보통 16∼50㎍/㎥, 나쁨 51∼100㎍/㎥, 매우 나쁨 101㎍/m³ 등으로 구분
// 초미세먼지를 제외하고 일단 PM10 미세먼지로만 진행.
// https://openweathermap.org/api/air-pollution

const ParticulateMatter: FC<ParticulateMatterProps> = ({}) => {
  const [pmState, setPMState] = useState<string>('좋음');

  return (
    <SPMLayout>
      <img src={pmGood} alt={`미세먼지 ${pmState} 아이콘`} />
      <div>
        <p>미세먼지</p>
        <SPMState>{pmState}</SPMState>
      </div>
    </SPMLayout>
  );
};

export default ParticulateMatter;

const SPMLayout = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 70px;
  padding: 19px 8px;
  box-sizing: border-box;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  background-color: #fff;

  p:first-child {
    margin-bottom: 5px;
    font-size: 10px;
    color: var(--gray-600);
  }
`;

interface PMStateProps {
  $bad?: boolean;
  $soso?: boolean;
}

const SPMState = styled.p<PMStateProps>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.$bad ? 'var(--red)' : props.$soso ? 'var(--yellow)' : 'var(--green)')};
`;
