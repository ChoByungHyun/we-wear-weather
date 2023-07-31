import React, { FC } from 'react';
import { styled } from 'styled-components';
import Button from 'Components/common/Button';

interface CharacterModalProps {
  img?: string;
  handleCharModal?: () => void;
}

const CharacterModal: FC<CharacterModalProps> = ({ img, handleCharModal }) => {
  return (
    <SCharModalBG>
      <SCharModalLayout>
        <h1 className='a11y-hidden'>옷차림 상세정보</h1>
        <SCharImgWrap>
          {/* TODO 현재 캐릭터 img src를 가져와야함 */}
          <img src={img} alt='' />
        </SCharImgWrap>
        {/* TODO 현재 날씨 값과 설명을 가져와야함 */}
        <p>
          24&#186; <strong>흐린 날씨</strong>
        </p>
        {/* TODO 옷차림 별 안내 내용 데이터 */}
        <p>
          날씨가 흐리고 일교차가 심하네요. 가벼운 겉옷 하나 챙기는 건 어떨까요? 날씨가 흐리고 일교차가 심하네요 가벼운
          겉옷 하나 챙기는 건 어떨까요? 날씨가 흐리고 일교차가 심하네요 가벼운 겉옷 하나 챙기는 건 어떨까요?
        </p>
        <Button onClick={handleCharModal} $fontSize='16px'>
          확인했어요
        </Button>
      </SCharModalLayout>
    </SCharModalBG>
  );
};

export default CharacterModal;

const SCharModalBG = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SCharModalLayout = styled.div`
  width: 327px;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 24px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;

  p:nth-of-type(1) {
    color: var(--gray-800);
    font-weight: 700;

    strong {
      color: var(--orange);
    }
  }

  p:nth-of-type(2) {
    margin: 24px 0;
    line-height: 1.6;
    text-align: start;
    font-size: 15px;
    color: var(--gray-800);
  }
`;

const SCharImgWrap = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
