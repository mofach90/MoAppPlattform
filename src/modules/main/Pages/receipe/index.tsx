import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { tokens } from '../../../global/theme/theme';
import PlattformPage, { pages } from '../plattformPage';
import IntroModal from './components/IntroModal/IntroModal';
import MainLandingPage from './components/MainLandingPage/MainLandingPage';

const ReceipeApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showIntro, setShowIntro] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowIntro(true);
    }
  }, []);

  const handleCancel = () => {
    setShowIntro(false);
  };
  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCancel();
    }
  };

  return (
    <PlattformPage page={pages.receipe}>
      <IntroModal open={showIntro} onCancel={handleCancel}         onNextStep={handleNextStep}
        currentStep={currentStep} />
      <MainLandingPage />
    </PlattformPage>
  );
};

export default ReceipeApp;
