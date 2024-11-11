import { Box, Tooltip } from '@mui/material';

const ProgressIndicator = ({ currentStep }) => (
  <Box display="flex" justifyContent="center" mt={5} mb={4}>
    {steps.map((step, index) => (
      <Tooltip key={index} title={step.title} arrow>
        <Box
          sx={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: currentStep === index ? '#4CAF50' : 'rgba(255, 255, 255, 0.3)',
            mx: 1.3,
            transition: 'background-color 0.3s ease',
          }}
        />
      </Tooltip>
    ))}
  </Box>
);

export default ProgressIndicator;
