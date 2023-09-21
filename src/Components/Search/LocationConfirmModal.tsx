import { FC, Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import { SModalBG, SModalStyle } from 'Components/style/SModal';
import Button from 'Components/common/Button';
interface LocationConfirmModalProps {
  handleModal: (confirm: boolean) => void;
  searchValue: string;
}
const LocationConfirmModal: FC<LocationConfirmModalProps> = ({ handleModal, searchValue }) => {
  return (
    <SModalBG aria-label='지역 검색 확인 안내 모달창'>
      <SLocationConfirmModal>
        <h1 className='a11y-hidden'>지역 검색 확인 안내 모달창</h1>
        <h2>지역을 확인해주세요</h2>
        <strong>{searchValue}</strong>
        <p>해당 지역이 맞습니까?</p>
        <div>
          <Button onClick={() => handleModal(true)}>확인</Button>
          <Button onClick={() => handleModal(false)}>취소</Button>
        </div>
      </SLocationConfirmModal>
    </SModalBG>
  );
};

export default LocationConfirmModal;

const SLocationConfirmModal = styled.div`
  ${SModalStyle}
  width: 300px;
  & > h2 {
    flex-shrink: 0;
    font-size: 20px;
    font-weight: bold;
  }

  strong {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    line-height: 1.4;
    color: var(--gray-800);
  }
  div {
    display: flex;
    gap: 20px;
    button {
      font-size: 16px;
      min-height: 0;
      padding: 13px 0;
      background-color: var(--orange);
      &:nth-child(2) {
        background-color: var(--gray-400);
      }
    }
  }
`;
