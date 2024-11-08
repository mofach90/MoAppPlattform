import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';
import confetti from 'canvas-confetti';
import { CheckCircle, Kitchen, Refresh, ArrowForward, Check } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';

const IntroModal = ({ open, onCancel, onNextStep, currentStep }:any) => {
  const steps = [
    {
      icon: <Kitchen sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'lightgreen' }} />,
      title: 'Step 1: Enter Ingredients',
      description: 'Start by entering all the ingredients you have available in your kitchen.',
    },
    {
      icon: <CheckCircle sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'skyblue' }} />,
      title: 'Step 2: Get Recipe Suggestions',
      description: "Click 'Submit' to receive recipes that match the ingredients you entered.",
    },
    {
      icon: <Refresh sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'orange' }} />,
      title: 'Step 3: Review and Try Again',
      description: "If no recipes match, we’ll let you know why. You can adjust your ingredients and try again.",
    },
  ];

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }, // Adjust origin to start lower or higher
    });
  };
  // Slide and fade animation for each step
  const slideIn = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translateY(0)' : 'translateY(-20px)',
    config: { tension: 180, friction: 18 },
  });

  // Pulsating background effect
  const pulse = useSpring({
    loop: true,
    to: { opacity: 0.9 },
    from: { opacity: 0.7 },
    config: { duration: 1500 },
  });

  // Optional sound effect on step transition
  useEffect(() => {
    if (open && currentStep > 0) {
      const audio = new Audio('/path-to-click-sound.mp3');
      audio.volume = 0.2; // Keep it subtle
      audio.play();
    }
  }, [currentStep, open]);

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      fullWidth
      maxWidth="xl"
      PaperProps={{
        elevation: 24,
        sx: {
          width: { xs: '90%', md: '70%' },
          height: '100%',
          padding: 4,
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url("public/assets/recipe.jpg")`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Enhances contrast
        backdropFilter: 'blur(12px)', // Softens the effect
        borderRadius: 3,
          overflow: 'hidden',
        },
      }}
    >
      {/* Pulsating animated overlay */}
      <animated.div style={{ ...pulse, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />

      <DialogTitle
        id="intro-dialog-title"
        sx={{
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          mb: 2,
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
        }}
      >
        Welcome to the Recipe App!
      </DialogTitle>

      <DialogContent dividers sx={{ padding: 3, color: 'lightgray' }}>
        <animated.div style={slideIn}>
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* Icon with Gradient Circle */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #6A1B9A, #4A148C)',
                borderRadius: '50%',
                padding: 2,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                mb: 2,
              }}
            >
              {steps[currentStep].icon}
            </Box>

            {/* Step Title */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.3rem', mb: 1 }}>
              {steps[currentStep].title}
            </Typography>

            {/* Step Description */}
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'white' }}>
              {steps[currentStep].description}
            </Typography>
          </Box>
        </animated.div>
      </DialogContent>

      {/* Progress Indicator with Tooltips */}
      <Box display="flex" justifyContent="center" my={2}>
        {steps.map((step, index) => (
          <Tooltip key={index} title={step.title} arrow>
            <Box
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentStep === index ? '#4CAF50' : 'rgba(255, 255, 255, 0.3)',
                mx: 0.5,
                transition: 'background-color 0.3s ease',
              }}
            />
          </Tooltip>
        ))}
      </Box>

      <DialogActions sx={{ justifyContent: 'center', padding: 2 }}>
        <Button onClick={onCancel} sx={{ color: 'lightgray' }}>
          Cancel
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button
            onClick={onNextStep}
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              background: 'linear-gradient(135deg, #2196F3, #21CBF3)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                background: '#21CBF3',
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease',
              },
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={() => {
              onCancel();
              launchConfetti(); // Trigger confetti
              // Optional confetti effect or final celebration animation
              // e.g., trigger a confetti animation here
            }}
            variant="contained"
            endIcon={<Check />}
            sx={{
              background: 'linear-gradient(135deg, #66BB6A, #43A047)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                background: '#43A047',
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease',
              },
            }}
          >
            Get Started
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default IntroModal;
