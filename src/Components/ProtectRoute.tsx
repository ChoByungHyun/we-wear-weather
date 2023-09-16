import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userCityAtom } from 'Atom/userLocationAtom';
import { useEffect } from 'react';

type ProtectRouteProps = {
  children: React.ReactNode;
};

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const userCity = useRecoilValue(userCityAtom);

  useEffect(() => {
    if (userCity.length === 0) {
      navigate('/permission');
    }
  }, [userCity, navigate]);

  return userCity ? children : null;
};

export default ProtectRoute;
