import { FC, Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import { SModalBG, SModalStyle } from 'Components/style/SModal';
import Button from 'Components/common/Button';

interface RejectionModalProps {
  handleGeo?: (() => void) | undefined;
  setShowModal?: Dispatch<SetStateAction<boolean>> | undefined;
}

const RejectionModal: FC<RejectionModalProps> = ({ handleGeo, setShowModal }) => {
  // NOTE: 권한 재요청
  // 모바일이 아닌 브라우저에서 권한 재요청 방법을 찾아봐야함. 현재 재요청을 해도 브라우저에서 요청권한 창이 나오지 않음. 현재로서는 권한을 허용하는 방법을 안내하는 쪽으로 먼저 해보기.
  function handleRetryPermission() {
    setShowModal && setShowModal(false);
    handleGeo && handleGeo();
  }

  return (
    <SModalBG>
      <SRejectionModalLayout>
        <h1 className='a11y-hidden'>필수 권한 미동의시 안내 모달창</h1>
        <h2>필수 권한 허용 안내</h2>
        <p>아래와 같은 이유로 권한 허용이 필요합니다.</p>
        <strong>필요정보: 위치정보</strong>
        <p>사용자 위치는 현재 날씨 정보, 주간 날씨 정보 제공을 위해 반드시 필요한 권한입니다.</p>
        <strong>권한 허용 방법</strong>
        <p>
          - Chrome: 주소줄 앞에 ⓘ 눌러서 "위치" On으로 하거나, 권한 재설정 주소줄 오른쪽 빨간 X 붙은 핀 아이콘 클릭
          액세스 항상 허용 또는 관리 등.
        </p>
        <Button onClick={handleRetryPermission}>닫기</Button>
      </SRejectionModalLayout>
    </SModalBG>
  );
};

export default RejectionModal;

const SRejectionModalLayout = styled.div`
  ${SModalStyle}

  & > h2 {
    margin-bottom: 20px;
    flex-shrink: 0;
    font-size: 24px;
    font-weight: bold;
  }

  strong {
    margin-top: 10px;
    font-size: 18px;
    text-align: start;
    font-weight: bold;
  }

  p {
    line-height: 1.4;
    text-align: start;
    color: var(--gray-800);
  }
`;
