import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const ButtonAge: React.FC<OwnProps> = ({ text, active, onClick }) => {
  return (
    <SBtnAgeLayout className={active ? 'active' : ''} onClick={onClick} type='button'>
      {text}
    </SBtnAgeLayout>
  );
};

const SBtnAgeLayout = styled.button`
  padding: 12px 36px;
  background-color: white;
  border-radius: 50px;
  color: var(--gray-600);
  border: 1px solid var(--gray-200);
  font-weight: 500;
  font-size: 16px;
  transition: all 0.1s;
  flex-shrink: 0;

  &.active {
    color: black;
    outline: 2px solid var(--orange);
  }

  &:hover {
    background-color: #f6f6f6;
  }

  &:active {
    background-color: #f1f1f1;
    transform: scale(0.95);
  }
`;

export default ButtonAge;
