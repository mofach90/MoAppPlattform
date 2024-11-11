import { Button, DialogActions } from '@mui/material';
import { ArrowForward, Check } from '@mui/icons-material';
import launchConfetti from './launchConfetti'; // Create this helper in `animations.js`

const ActionButtons = ({ currentStep, handleCancel, handleNextStep }) => (
  <DialogActions sx={{ justifyContent: 'center', padding: 2 }}>
    <Button variant="outlined" onClick={handleCancel} sx={{ color: 'lightgray', mr: 15 }}>
      Cancel
    </Button>
    {currentStep < steps.length - 1 ? (
      <Button
        onClick={handleNextStep}
        variant="contained"
        endIcon={<ArrowForward />}
        sx={{
          background: 'linear-gradient(135deg, #2196F3, #21CBF3)',
          color: '#fff',
          textTransform: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          '&:hover': { background: '#21CBF3', transform: 'scale(1.05)', transition: 'transform 0.2s ease' },
          width: 130,
        }}
      >
        Next
      </Button>
    ) : (
      <Button
        onClick={() => {
          handleCancel();
          launchConfetti();
        }}
        variant="contained"
        endIcon={<Check />}
        sx={{
          background: 'linear-gradient(135deg, #66BB6A, #43A047)',
          color: '#fff',
          textTransform: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          '&:hover': { background: '#43A047', transform: 'scale(1.05)', transition: 'transform 0.2s ease' },
        }}
      >
        Get Started
      </Button>
    )}
  </DialogActions>
);

export default ActionButtons;
