import React, { FC } from 'react';
import styled from 'styled-components';
import useDailyComments from 'Components/common/useDailyComments';

interface SpeechBubbleCommentProps {
  todayWeather: string;
  feels_like: number;
}

const SpeechBubbleComment: FC<SpeechBubbleCommentProps> = ({ todayWeather, feels_like }) => {
  const { commentWeather, commentTemp, commentClothes, commentCaution } = useDailyComments(todayWeather, feels_like);

  return (
    <SSpeechBubbleCommentLayout>
      {commentWeather()} {commentTemp()}
      <br />
      {commentClothes()}
      <br />
      {commentCaution()}
    </SSpeechBubbleCommentLayout>
  );
};

export default SpeechBubbleComment;

const SSpeechBubbleCommentLayout = styled.section`
  padding-top: 24px;
  font-size: 16px;
  color: var(--gray-800);
  font-weight: 500;
  border-top: 1px solid var(--gray-200);
  line-height: 150%;
`;
