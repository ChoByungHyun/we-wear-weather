import { FC } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useDailyComments from 'Components/common/useDailyComments';
import pcScreen from 'Atom/pcScreen';

interface SpeechBubbleCommentProps {
  todayWeather: string;
  feels_like: number;
}

const SpeechBubbleComment: FC<SpeechBubbleCommentProps> = ({ todayWeather, feels_like }) => {
  const isPC = useRecoilValue(pcScreen);
  const { commentWeather, commentTemp, commentClothes, commentCaution } = useDailyComments(todayWeather, feels_like);

  return (
    <SSpeechBubbleCommentLayout $isPC={isPC}>
      {commentWeather()} {commentTemp()}
      <br />
      {commentClothes()}
      <br />
      {commentCaution()}
    </SSpeechBubbleCommentLayout>
  );
};

export default SpeechBubbleComment;

const SSpeechBubbleCommentLayout = styled.section<{ $isPC: boolean }>`
  padding-top: 24px;
  font-size: ${(props) => (props.$isPC ? '18px' : '16px')};
  color: var(--gray-800);
  font-weight: 500;
  border-top: 1px solid var(--gray-200);
  line-height: 150%;
`;
