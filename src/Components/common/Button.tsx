import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface OwnProps {
  children: ReactNode;
  type?: 'button' | 'submit' | undefined;
  $fontSize?: string;
  onClick?: () => void;
}

const Button: React.FC<OwnProps> = ({ type, children, ...rest }) => {
  return (
    <SButtonLayout type={type ? type : 'button'} {...rest}>
      {children}
    </SButtonLayout>
  );
};

const SButtonLayout = styled.button<{ $fontSize?: string }>`
  width: 100%;
  background-color: var(--orange);
  padding: 20px 0;
  border-radius: 10px;

  color: white;
  font-size: ${(props) => props.$fontSize || '18px'};
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
