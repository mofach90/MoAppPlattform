import { DialogTitle } from '@mui/material';

export const UserGuideHeader = () => (
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
);

