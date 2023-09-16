import React from 'react';
import SSkeleton from 'Components/style/SSkeleton';
import styled from 'styled-components';

export const SpeechBubbleSkeleton: React.FC = () => {
  return <SSpeechBubbleSkeleton />;
};

const SSpeechBubbleSkeleton = styled(SSkeleton)`
  height: 260px;
`;

export const HourlySkeleton: React.FC = () => {
  return <SHourlySkeleton />;
};

const SHourlySkeleton = styled(SSkeleton)`
  height: 88px;
`;

export const PMSkeleton: React.FC = () => {
  return <SPMSkeleton />;
};

const SPMSkeleton = styled(SSkeleton)`
  max-width: 70px;
  width: 68px;
  height: 88px;
  flex-shrink: 0;
`;
