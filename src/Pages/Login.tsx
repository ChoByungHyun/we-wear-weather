import { useState } from 'react';
import styled from 'styled-components';
import ButtonAgeList from 'Components/Login/ButtonAgeList';
import ButtonGenderList from 'Components/Login/ButtonGenderList';
import Button from 'Components/common/Button';
import LoginCheckModal from 'Components/Login/LoginCheckModal';
import { useRecoilState } from 'recoil';
import userInfoAtom from 'Atom/userInfo';
import { useNavigate, useLocation } from 'react-router-dom';

export interface UserInfo {
  gender: string | undefined;
  age: string | undefined;
}

export interface UserInfoProps {
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  gender: string;
  age: string;
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isUserInfo, setIsUserInfo] = useRecoilState(userInfoAtom);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: isUserInfo.gender,
    age: isUserInfo.age,
  });
  const title = location.state ? location.state.title : '날씨 뿡뿡에 오신걸 환영해요.';
  const buttonLabel = location.state ? location.state.button : '시작하기';

  const handledError = () => {
    if (userInfo.gender === '') {
      setErrorMessage('성별을 선택해주세요');
      setShowModal(true);
    } else if (userInfo.age === '') {
      setErrorMessage('나이를 선택해주세요');
      setShowModal(true);
    } else {
      setIsUserInfo(userInfo);
      navigate('/');
    }
  };

  return (
    <SLoginLayout>
      {showModal && <LoginCheckModal setShowModal={setShowModal}>{errorMessage}</LoginCheckModal>}
      <h1>{title}</h1>
      <p>
        날씨에 맞는 옷차림을 추천해드릴게요!
        <br />
        당신의 성별과 나이를 알려주세요.
      </p>

      <ButtonGenderList setUserInfo={setUserInfo} gender={isUserInfo.gender} age='' />
      <ButtonAgeList setUserInfo={setUserInfo} age={isUserInfo.age} gender='' />
      <Button onClick={handledError}>{buttonLabel}</Button>
    </SLoginLayout>
  );
};

const SLoginLayout = styled.article`
  padding-top: 110px;
  box-sizing: border-box;
  h1 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: var(--gray-800);
    line-height: 1.5;
  }

  & > button:last-child {
    position: absolute;
    bottom: 40px;
    right: 24px;
    width: calc(100% - 48px);
  }
`;

export default Login;
