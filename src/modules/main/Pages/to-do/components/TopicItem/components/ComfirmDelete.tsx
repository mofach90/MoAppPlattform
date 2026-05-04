import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useDialogStore from '../../../hooks/useDialogStore';
import CancelButton from './CancelButton';
import DeleteButton from './DeleteButton';

const ComfirmDelete = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const activeDialog = useDialogStore((s) => s.activeDialog);

  return (
    <Box>
      <Typography variant="h5" color={colors.primary[900]}>
        Are You Sure To Delete The{' '}
        {activeDialog === 'deleteTopic' ? 'Topic' : 'Task'}
      </Typography>
      <Box marginTop={4} display={'flex'} justifyContent={'space-between'}>
        <DeleteButton />
        <CancelButton />
      </Box>
    </Box>
  );
};

export default ComfirmDelete;
