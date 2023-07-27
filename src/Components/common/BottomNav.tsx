import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { bottomNavAtom } from 'Atom/BottomNavStore';
import HomeIcon from 'Assets/home-icon.svg';
import SearchIcon from 'Assets/search-icon.svg';
import WeeklyIcon from 'Assets/weekly-icon.svg';
import SettingIcon from 'Assets/setting-icon.svg';
import HomeIcon_Fill from 'Assets/home-fill-icon.svg';
import SearchIcon_Fill from 'Assets/search-fill-icon.svg';
import WeeklyIcon_Fill from 'Assets/weekly-fill-icon.svg';
import SettingIcon_Fill from 'Assets/setting-fill-icon.svg';

const BottomNav: React.FC = () => {
  const [bottomNavIndexState, setBottomNavIndexState] = useRecoilState<number>(bottomNavAtom);

  const navItems: string[] = ['home', 'search', 'weekly', 'setting'];
  const iconArr: { active: string; inactive: string }[] = [
    { active: HomeIcon_Fill, inactive: HomeIcon },
    { active: SearchIcon_Fill, inactive: SearchIcon },
    { active: WeeklyIcon_Fill, inactive: WeeklyIcon },
    { active: SettingIcon_Fill, inactive: SettingIcon },
  ];

  const handleClick = (index: number): void => {
    setBottomNavIndexState(index);
    console.log(bottomNavIndexState);
  };
  return (
    <SNavLayout>
      <SListStyle>
        {navItems.map((item, index) => (
          <SItemStyle key={index} active={index === bottomNavIndexState}>
            <LinkBtn
              src={iconArr[index]}
              text={item}
              active={index === bottomNavIndexState}
              onClick={() => {
                handleClick(index);
              }}
            />
          </SItemStyle>
        ))}
      </SListStyle>
    </SNavLayout>
  );
};

interface LinkBtnProps {
  src: { active: string; inactive: string };
  text: string;
  active: boolean;
  onClick: () => void;
}
const LinkBtn: React.FC<LinkBtnProps> = ({ src, text, active, onClick }) => {
  return (
    <Link onClick={onClick} to={`/${text === 'home' ? '' : text}`}>
      <img src={active ? src.active : src.inactive} alt='네비게이션아이콘' className={active ? 'active' : ''} />
    </Link>
  );
};

export default BottomNav;

const SNavLayout = styled.nav`
  max-width: 430px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: white;
`;

const SListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const SItemStyle = styled.li<{ active: boolean }>`
  a {
    display: inline-block;
    text-align: center;
    width: 84px;
    color: var(--gray);
    padding: 18px 0 18px;
    font-weight: 400;
    line-height: 14px;
    font-size: 10px;
  }
`;
