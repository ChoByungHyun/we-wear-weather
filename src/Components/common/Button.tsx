import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  text: string;
  type?: string;
}

const Button: React.FC<OwnProps> = ({ text }) => {
  return <SButtonLayout>{text}</SButtonLayout>;
};

const SButtonLayout = styled.button`
  width: 100%;
  background-color: var(--orange);
  padding: 20px 0;
  border-radius: 10px;

  color: white;
  font-size: 18px;
  font-weight: 800;

  transition: all 0.3s;

  &:hover {
    background-color: #e9861c;
  }

  &:active {
    background-color: #de7e18;
    transform: scale(0.98);
  }
`;

export default Button;
