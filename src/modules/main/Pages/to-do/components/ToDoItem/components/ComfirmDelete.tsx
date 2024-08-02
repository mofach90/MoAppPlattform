import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import CancelButton from './CancelButton';
import DeleteButton from './DeleteButton';

const ComfirmDelete = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  return (
    <Box>
      <Typography variant="h5" color={colors.primary[900]}>
        Are You Sure To Delete The Task
      </Typography>
      <Box marginTop={4} display={'flex'} justifyContent={'space-between'}>
        <DeleteButton />
        <CancelButton />
      </Box>
    </Box>
  );
};

export default ComfirmDelete;
