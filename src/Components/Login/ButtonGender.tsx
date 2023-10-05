import React from 'react';
import styled from 'styled-components';
import genderMale from 'Assets/gender-male.png';
import genderFemale from 'Assets/gender-female.png';

interface OwnProps {
  active: boolean;
  gender: string;
  text: string;
  onClick: () => void;
}

const ButtonGender: React.FC<OwnProps> = ({ active, gender, text, onClick }) => {
  return (
    <SBtnGenderLayout type='button' aria-label={gender === '남성' ? '남성' : '여성'}>
      <img
        className={active ? 'active' : ''}
        src={gender === '남성' ? genderMale : genderFemale}
        alt='성별 이미지'
        onClick={onClick}
      />
      {text}
    </SBtnGenderLayout>
  );
};

const SBtnGenderLayout = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--gray-600);
  font-size: 16px;

  img {
    width: 120px;
    aspect-ratio: 1 / 1;
    border-radius: 100px;
    border: 1px solid var(--gray-200);
    background-color: white;
    vertical-align: top;
    margin-bottom: 12px;
    transition: all 0.1s;
  }

  .active {
    outline: 2px solid var(--orange);
  }

  &:has(.active) {
    color: black;
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
