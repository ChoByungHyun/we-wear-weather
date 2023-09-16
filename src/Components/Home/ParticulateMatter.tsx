import { FC } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import useOpenWeatherAPI from 'API/useOpenWeatherAPI';
import { userCityAtom, currentUserIndexAtom } from 'Atom/userLocationAtom';

import { useParticulateImg } from 'Components/common/useWeatherImg';
import { PMSkeleton } from 'Components/Skeleton/HomeSkeleton';

// NOTE : 미세먼지 관련정보
// PM10은 좋음(0~30㎍/㎥), 보통(31~80㎍/㎥), 약간나쁨(81~120㎍/㎥), 나쁨(121~200㎍/㎥) 등으로 구분
// PM2.5는 좋음 0∼15㎍/㎥, 보통 16∼50㎍/㎥, 나쁨 51∼100㎍/㎥, 매우 나쁨 101㎍/m³ 등으로 구분
// 초미세먼지를 제외하고 일단 PM10 미세먼지로만 진행.
// https://openweathermap.org/api/air-pollution

const ParticulateMatter: FC = () => {
  const latLonData = useRecoilValue(userCityAtom);
  const locationIndex = useRecoilValue(currentUserIndexAtom);
  const { getAirPollution } = useOpenWeatherAPI();
  const airRes = useQuery('airPollution', () => getAirPollution(latLonData[locationIndex].latLonData));

  const airInfo = airRes?.data;
  const pmTen = useParticulateImg(airInfo?.list[0].components.pm10);

  if (airRes.isLoading) {
    return <PMSkeleton />;
  }

  if (airRes.error) {
    return <p>미세먼지 로딩중 문제가 발생했습니다.</p>;
  }

  return (
    <SPMLayout>
      <img src={pmTen.icon} alt={`미세먼지 ${pmTen.label} 아이콘`} />
      <div>
        <p>미세먼지</p>
        <SPMState $status={pmTen.label}>{pmTen.label}</SPMState>
      </div>
    </SPMLayout>
  );
};

export default ParticulateMatter;

const SPMLayout = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 6px;
  max-width: 70px;
  padding: 19px 8px;
  box-sizing: border-box;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  background-color: #fff;

  p:first-child {
    margin-bottom: 5px;
    font-size: 10px;
    color: var(--gray-600);
  }
`;

interface PMStateProps {
  $status?: string;
}

const SPMState = styled.p<PMStateProps>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) =>
    props.$status === '매우 나쁨'
      ? 'var(--red)'
      : props.$status === '나쁨'
      ? 'var(--orange)'
      : props.$status === '보통'
      ? 'var(--yellow)'
      : 'var(--green)'};
`;
