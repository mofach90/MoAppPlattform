import { useEffect } from 'react';
import PlattformPage, { pages } from '../plattformPage';
import MainLandingPage from './components/MainLandingPage/MainLandingPage';
import UserGuide from './components/UserGuide/UserGuide';
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
