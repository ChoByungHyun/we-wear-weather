import React from 'react';
import styled from 'styled-components';
import Header from 'Components/common/Header';
import menu1 from 'Assets/menual/menu-1.png';
import menu2 from 'Assets/menual/menu-2.png';
import menu3 from 'Assets/menual/menu-3.png';

const InstallationManual: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <BubbleInfo>앱스토어 다운로드 없이 !</BubbleInfo>
        <Title>홈화면에 앱을 추가해보세요</Title>
        <DescLayout>
          <DescField>
            <div>
              <DescFieldNum>1</DescFieldNum>
              <p>
                브라우저 하단 <strong>공유 버튼</strong> 탭
              </p>
            </div>
            <img src={menu1} alt='공유 버튼 예시 이미지' />
          </DescField>
          <DescField>
            <div>
              <DescFieldNum>2</DescFieldNum>
              <p>
                <strong>홈화면에 추가 </strong> 선택
              </p>
            </div>
            <img src={menu2} alt='홈화면에 추가 버튼 예시 이미지' />
          </DescField>
          <DescField>
            <div>
              <DescFieldNum>3</DescFieldNum>
              <p>
                추가된 <strong>앱 실행</strong>
              </p>
            </div>
            <img src={menu3} alt='홈화면에서 앱 실행 예시 이미지' />
          </DescField>
        </DescLayout>
      </div>
    </>
  );
};

const BubbleInfo = styled.div`
  display: inline-block;
  margin: 30px 0;
  padding: 10px 20px;
  background-color: var(--orange);
  color: white;
  border-radius: 20px;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: bold;
`;

const DescLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
  }
`;

const DescField = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    p {
      strong {
        font-weight: bold;
      }
    }
  }
`;

const DescFieldNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  background-color: var(--light-red);
  color: var(--red);
  border-radius: 50%;
`;

export default InstallationManual;
