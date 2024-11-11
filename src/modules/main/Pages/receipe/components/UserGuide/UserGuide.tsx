import { Dialog } from '@mui/material';
import { animated } from 'react-spring';
import useUserGuideStore from '../../store/UserGuideStore';
import { usePulseAnimation } from '../../utilities/animations';
import ActionButtons from './components/ActionButtons';
import ProgressIndicator from './components/ProgressIndicator';
import UserGuideContent from './components/UserGuideContent';
import UserGuideHeader from './components/UserGuideHeader';

const dialogPaperStyles = {
  width: { xs: '90%', md: '70%' },
  height: '80%',
  padding: 4,
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("public/assets/recipe.jpg")`,
  backgroundSize: 'cover',
  backgroundBlendMode: 'overlay',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(12px)',
  borderRadius: 3,
  overflow: 'hidden',
};

const UserGuide = () => {
  const handleCancel = useUserGuideStore((state) => state.handleCancel);
  const showUserGuide = useUserGuideStore((state) => state.showUserGuide);

  const pulse = usePulseAnimation();

  return (
    <Dialog
      open={showUserGuide}
      onClose={handleCancel}
      fullWidth
      maxWidth="xl"
      PaperProps={{ elevation: 24, sx: dialogPaperStyles }}
    >
      <animated.div
        style={{
          ...pulse,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <UserGuideHeader />
      <UserGuideContent />
      <ProgressIndicator />
      <ActionButtons />
    </Dialog>
  );
};

export default UserGuide;
