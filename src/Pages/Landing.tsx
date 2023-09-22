import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userCityAtom } from 'Atom/userLocationAtom';
import MetaTag from 'Components/common/MetaTag';

const Landing: FC = () => {
  const navigate = useNavigate();
  const userCity = useRecoilValue(userCityAtom);

  useEffect(() => {
    setTimeout(() => {
      if (!userCity) navigate('/permission');
      else {
        navigate('/home', { replace: true });
        window.location.replace('/home');
      }
    }, 2000);
  }, [navigate, userCity]);

  return (
    <LandingBG>
      <MetaTag
        title='We Wear Weather 랜딩페이지'
        description='WWW에 입장하기'
        url='https://we-wear-weather.vercel.app/'
      />
      <div>
        <FirstTitle>
          <StrongTitle>W</StrongTitle>e
        </FirstTitle>
        <SecondTitle>
          <StrongTitle>W</StrongTitle>ear
        </SecondTitle>
        <ThirdTitle>
          <StrongTitle>W</StrongTitle>eather
        </ThirdTitle>
      </div>
    </LandingBG>
  );
};

const LandingBG = styled.div`
  margin: 0 -24px;
  width: calc(100% + 48px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--orange);
  color: white;
`;

// const LandingTitleLayout = styled.div``;

const StrongTitle = styled.strong`
  font-size: 50px;
  font-weight: bold;
`;

const CommonTitle = css`
  font-size: 32px;
`;

// 각기 애니메이션이 들어가야할 수 있어서 Title 스타일 분리
const FirstTitle = styled.p`
  ${CommonTitle}
  margin-bottom: 20px;
`;

const SecondTitle = styled.p`
  ${CommonTitle}
  margin-bottom: 20px;
`;

const ThirdTitle = styled.p`
  ${CommonTitle}
`;

export default Landing;
