import { CheckCircle, Refresh } from '@mui/icons-material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Box, DialogContent, Typography } from '@mui/material';
import { animated } from 'react-spring';
import useUserGuideStore from '../../../store/UserGuideStore';
import { useSlideInAnimation } from '../../../utilities/animations';

export const steps = [
  {
    icon: (
      <FormatListNumberedIcon
        sx={{ fontSize: { xs: '1.5rem', md: '5rem' }, color: 'lightgreen' }}
      />
    ),
    title: 'Step 1: Enter Ingredients',
    description:
      'Start by entering all the ingredients you have available in your kitchen.',
  },
  {
    icon: (
      <CheckCircle
        sx={{ fontSize: { xs: '1.5rem', md: '5rem' }, color: 'skyblue' }}
      />
    ),
    title: 'Step 2: Get Recipe Suggestions',
    description:
      "Click 'Submit' to receive recipes that match the ingredients you entered.",
  },
  {
    icon: (
      <Refresh
        sx={{ fontSize: { xs: '1.5rem', md: '5rem' }, color: 'orange' }}
      />
    ),
    title: 'Step 3: Review and Try Again',
    description:
      'If no recipes match, we’ll let you know why. You can adjust your ingredients and try again.',
  },
];

const UserGuideContent = () => {
  const currentStep = useUserGuideStore((state) => state.currentStep);
  const showUserGuide = useUserGuideStore((state) => state.showUserGuide);
  const slideIn = useSlideInAnimation(showUserGuide);

  return (
    <DialogContent
      dividers
      sx={{
        padding: 3,
        color: 'lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTop: '1px solid yellow',
        borderBottom: '1px solid yellow',
      }}
    >
      <animated.div style={slideIn}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #6A1B9A, #4A148C)',
              borderRadius: '50%',
              padding: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              mb: 7,
            }}
          >
            {steps[currentStep].icon}
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '2.3rem', mb: 5 }}
          >
            {steps[currentStep].title}
          </Typography>
          <Typography variant="h3" sx={{ textAlign: 'center', color: 'white' }}>
            {steps[currentStep].description}
          </Typography>
        </Box>
      </animated.div>
    </DialogContent>
  );
};

export default UserGuideContent;
