import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backBtn from 'Assets/backBtn-icon.svg';
import { useParams, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [headerBtn, setHeaderBtn] = useState<string | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path === 'weekly' || path === 'setting') {
      setHeaderBtn(backBtn);
    }
  }, [location.pathname]);

  return (
    <SLayout>
      <button>{headerBtn && <img src={headerBtn} alt='' />}</button>
    </SLayout>
  );
};

export default Header;

const SLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 15px;
`;
