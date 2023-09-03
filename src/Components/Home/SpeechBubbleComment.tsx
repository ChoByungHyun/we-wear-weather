import React, { FC } from 'react';
import styled from 'styled-components';
import useDailyComments from 'Components/common/useDailyComments';

const SpeechBubbleComment: FC = () => {
  const { commentWeather, commentTemp, commentClothes, commentCaution } = useDailyComments();

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
