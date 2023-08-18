import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface OwnProps {
  children: ReactNode;
  type?: 'button' | 'submit' | undefined;
  $fontSize?: string;
  onClick?: () => void;
  showLoading?: boolean;
}

const Button: React.FC<OwnProps> = ({ type, children, showLoading, ...rest }) => {
  return (
    <SButtonLayout
      className={showLoading ? 'loading' : ''}
      type={type ? type : 'button'}
      {...rest}
      disabled={showLoading ? true : false}
    >
      {showLoading ? '' : children}
      {showLoading && (
        <LoadingDot>
          <div></div>
          <div></div>
          <div></div>
        </LoadingDot>
      )}
    </SButtonLayout>
  );
};

const SButtonLayout = styled.button<{ $fontSize?: string }>`
  width: 100%;
  min-height: 60px;
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

  &:disabled {
    background-color: #ffbf7b;
  }

  .loading {
  }
`;

const LoadingDot = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  & div {
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50px;
    animation: dot 1s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: -0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes dot {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

export default Button;
