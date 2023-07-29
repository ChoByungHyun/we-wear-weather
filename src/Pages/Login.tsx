import styled from 'styled-components';
import ButtonAgeList from 'Components/Login/ButtonAgeList';
import ButtonGenderList from 'Components/Login/ButtonGenderList';
import Button from 'Components/common/Button';

const Login = () => {
  return (
    <SLoginLayout>
      <h1>날씨 뿡뿡에 오신걸 환영해요</h1>
      <p>
        날씨에 맞는 옷차림을 추천해드릴게요!
        <br />
        당신의 성별과 나이를 알려주세요
      </p>

      <ButtonGenderList />
      <ButtonAgeList />
      <Button text='시작하기' />
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
