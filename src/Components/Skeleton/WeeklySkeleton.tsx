import React from 'react';
import SSkeleton from 'Components/style/SSkeleton';
import styled from 'styled-components';
import pcScreen from 'Atom/pcScreen';
import { useRecoilValue } from 'recoil';

interface WeeklySkeletonType {
  $pc?: boolean;
  width?: string;
}

const WeeklySkeleton: React.FC = () => {
  const isPC = useRecoilValue(pcScreen);

  const skeletonComponents = Array(7)
    .fill(null)
    .map((_, index) => <SWeeklySkeleton key={index} $pc={isPC} />);

  return skeletonComponents;
};

const SWeeklySkeleton = styled(SSkeleton)<WeeklySkeletonType>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => (props.$pc ? '78px' : '64px')};
  margin-bottom: 20px;
`;
export default WeeklySkeleton;
