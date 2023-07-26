import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  text?: string;
  isActive: boolean;
}

const ButtonAge: React.FC<OwnProps> = ({ text, isActive }) => {
  return (
    <SBtnAgeLayout isActive={isActive} type='button'>
      {text}
    </SBtnAgeLayout>
  );
};

const SBtnAgeLayout = styled.button<OwnProps>`
  padding: 12px 36px;
  background-color: white;
  border-radius: 50px;
  color: ${(props) => (props.isActive ? 'black' : 'var(--gray-600)')};
  border: ${(props) => (props.isActive ? '2px solid var(--orange)' : '1px solid var(--gray-200)')};
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #f6f6f6;
  }

  &:active {
    background-color: #f1f1f1;
    transform: scale(0.95);
  }
`;

export default ButtonAge;
