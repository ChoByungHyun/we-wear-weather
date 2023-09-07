import Button from 'Components/common/Button';
import React, { FC } from 'react';
import styled from 'styled-components';

interface LoginCheckModalProps {
  children: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginCheckModal: FC<LoginCheckModalProps> = ({ children, setShowModal }) => {
  function handleModal() {
    setShowModal(false);
  }

  return (
    <SLoginModalBG>
      <h1 className='a11y-hidden'>필수 입력 미선택시 안내 모달창</h1>
      <SLoginModalLayout>
        <p>{children}</p>
        <Button $fontSize='16px' onClick={handleModal}>
          확인했습니다
        </Button>
      </SLoginModalLayout>
    </SLoginModalBG>
  );
};

const SLoginModalBG = styled.article`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SLoginModalLayout = styled.div`
  width: 327px;
  padding: 40px 24px 32px 24px;
  background-color: #fff;
  position: absolute;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p {
    font-size: 16px;
    font-weight: 500;
    color: black;
  }
`;

export default LoginCheckModal;
