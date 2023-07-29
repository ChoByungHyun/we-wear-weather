import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  isActive: boolean;
  gender?: string;
  text?: string;
}

const ButtonGender: React.FC<OwnProps> = (props) => {
  return (
    <SBtnGenderLayout isActive={props.isActive} type='button'>
      <img src={props.gender} alt='성별 이미지' />
      {props.text}
    </SBtnGenderLayout>
  );
};

const SBtnGenderLayout = styled.button<OwnProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.isActive ? 'black' : 'var(--gray-600)')};
  font-size: 16px;

  img {
    width: 120px;
    aspect-ratio: 1 / 1;
    border-radius: 100px;
    background-color: white;
    vertical-align: top;
    border: ${(props) => (props.isActive ? '2px solid var( --orange)' : '1px solid var(--gray-200)')};
    margin-bottom: 12px;
    transition: all 0.3s;
  }

  &:hover {
    img {
      background-color: #f6f6f6;
    }
  }

  &:active {
    img {
      background-color: #f1f1f1;
      transform: scale(0.96);
    }
  }
`;
export default ButtonGender;
