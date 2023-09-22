import React, { FC, useState } from 'react';
import styled from 'styled-components';

const Toggle: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    const newState = !isChecked;
    setIsChecked(newState);
  }

  return (
    <SToggle>
      <label htmlFor='toggleButton'></label>
      <input id='toggleButton' type='checkbox' onClick={handleToggle}></input>
    </SToggle>
  );
};

export default Toggle;

const SToggle = styled.div`
  input {
    width: 54px;
    height: 30px;
    margin: 10px 0;
    background-color: var(--gray-200);
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
    align-items: center;
    display: flex;
    transition: all 0.2s ease-in;

    &::after {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      background-color: white;
      border-radius: 50%;
      top: 4px;
      left: 4px;
      z-index: 10;
      transition: all 0.2s ease-in;
    }

    &:checked {
      background-color: var(--orange);
      &::after {
        left: 28px;
      }
    }
  }
`;
