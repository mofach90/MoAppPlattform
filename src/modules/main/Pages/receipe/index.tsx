import { useEffect } from 'react';
import PlattformPage, { pages } from '../plattformPage';
import MainLandingPage from './pages/MainLandingPage/MainLandingPage';
import UserGuide from './pages/UserGuide/UserGuide';
import { handleUserGuideVisibility } from './utilities/handleUserGuideVisibility';

const ReceipeApp = () => {
  useEffect(() => {
    handleUserGuideVisibility();
  }, []);

  return (
    <PlattformPage page={pages.receipe}>
      <UserGuide />
      <MainLandingPage />
    </PlattformPage>
  );
};

export default ReceipeApp;
