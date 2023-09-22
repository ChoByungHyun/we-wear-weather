import { SModalBG, SModalStyle } from 'Components/style/SModal';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useLocation } from 'react-router-dom';

// BeforeInstallPromptEvent 타입 정의
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt = () => {
  const [showModal, setShowModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      const promptEvent = event as BeforeInstallPromptEvent;
      // 모달이 열리지 않은 상태일 때만 열도록 조건 추가
      if (!showModal && !deferredPrompt) {
        setDeferredPrompt(promptEvent);
        setShowModal(true); // 모달을 표시합니다.
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [showModal]); // showModal 상태가 변경될 때마다 useEffect가 호출되도록 설정

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('사용자가 설치 프롬프트에 동의했습니다.');
        } else {
          console.log('사용자가 설치 프롬프트를 무시했습니다.');
        }

        setShowModal(false); // 모달을 닫습니다.
      });
    }
  };

  return (
    <>
      {showModal && (
        <SModalBG aria-label='지역 검색 확인 안내 모달창'>
          <SLocationConfirmModal>
            <h2>앱으로 다운로드해주세요!</h2>
            <SButtonLayout>
              <Button onClick={() => handleInstallClick()}>확인</Button>
              <SButtonCancel onClick={() => setShowModal(false)}>오늘은 그냥 웹으로 볼게요..</SButtonCancel>
            </SButtonLayout>
          </SLocationConfirmModal>
        </SModalBG>
      )}
    </>
  );
};
const SManual = styled.div`
  text-align: center;
`;
const SButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SButtonCancel = styled.div`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const SLocationConfirmModal = styled.div`
  ${SModalStyle}
  z-index: 99999;

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

export default PWAInstallPrompt;
