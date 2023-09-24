import { SModalBG, SModalStyle } from 'Components/style/SModal';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const isIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
  const displayMode = window.matchMedia('(display-mode: standalone)').matches;
  const hasShownModal = sessionStorage.getItem('hasShownPWAInstallModal');

  useEffect(() => {
    if (!hasShownModal && !displayMode && isIOS) {
      setShowModal(true);
      sessionStorage.setItem('hasShownPWAInstallModal', 'true');
      return;
    }
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      const promptEvent = event as BeforeInstallPromptEvent;
      if (!showModal && !deferredPrompt) {
        setDeferredPrompt(promptEvent);
        setShowModal(true);
      }
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [showModal, deferredPrompt]);

  const handleInstallClick = () => {
    setShowModal(false);
    if (isIOS) {
      navigate('/manual');
    } else {
      if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('사용자가 설치 프롬프트에 동의했습니다.');
          } else {
            console.log('사용자가 설치 프롬프트를 무시했습니다.');
          }
        });
      }
    }
  };
  if (!showModal) {
    return null;
  }
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
