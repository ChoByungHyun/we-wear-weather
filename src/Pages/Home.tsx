import styled from 'styled-components';
import Header from 'Components/common/Header';
import BottomNav from 'Components/common/BottomNav';
import Character from 'Components/Home/Character';
import ParticulateMatter from 'Components/Home/ParticulateMatter';
import HourlyForcast from 'Components/Home/HourlyForcast';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Character />
        <SPMHourlySection>
          <ParticulateMatter />
          <HourlyForcast />
        </SPMHourlySection>
      </main>
      <BottomNav />
    </>
  );
};

export default Home;

const SPMHourlySection = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`;
