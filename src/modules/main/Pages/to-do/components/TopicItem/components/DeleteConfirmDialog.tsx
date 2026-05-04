import { Dialog, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useDialogStore from '../../../hooks/useDialogStore';
import ComfirmDelete from './ComfirmDelete';

const DeleteConfirmDialog = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const activeDialog = useDialogStore((s) => s.activeDialog);
  const close = useDialogStore((s) => s.close);

  const isOpen = activeDialog === 'deleteTask' || activeDialog === 'deleteTopic';

  return (
    <Dialog
      open={isOpen}
      onClose={(_e, reason) => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') close();
      }}
      PaperProps={{
        elevation: 24,
        sx: {
          width: 350,
          height: 160,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          backgroundColor: colors.primary[100],
          opacity: 0.8,
        },
      }}
    >
      <ComfirmDelete />
    </Dialog>
  );
};

export default DeleteConfirmDialog;
