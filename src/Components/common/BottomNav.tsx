import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const location = useLocation(); // 현재 경로 정보 가져오기

  // 현재 경로에 따라서 bottomNavIndexState를 업데이트하는 함수
  const updateBottomNavIndexState = () => {
    const path = location.pathname; // 현재 경로
    switch (path) {
      case '/':
        setBottomNavIndexState(0);
        break;
      case '/search':
        setBottomNavIndexState(1);
        break;
      case '/weekly':
        setBottomNavIndexState(2);
        break;
      case '/setting':
        setBottomNavIndexState(3);
        break;
      default:
        break;
    }
  };

  // 첫 렌더링 시 현재 경로에 따라 bottomNavIndexState 초기화
  useEffect(() => {
    updateBottomNavIndexState();
  }, []);

  const handleClick = (index: number): void => {
    setBottomNavIndexState(index);
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
