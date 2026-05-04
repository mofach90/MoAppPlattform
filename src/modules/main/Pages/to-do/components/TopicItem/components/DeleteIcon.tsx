import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Theme, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import useDialogStore from '../../../hooks/useDialogStore';

const DeleteIcon = ({
  fontSize,
  variant,
}: {
  fontSize?: 'small' | 'large' | 'medium';
  variant?: 'topic' | 'task';
}) => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const open = useDialogStore((s) => s.open);

  return (
    <Box
      onClick={() => open(variant === 'topic' ? 'deleteTopic' : 'deleteTask')}
    >
      <DeleteForeverIcon
        fontSize={fontSize ?? 'medium'}
        sx={{
          color: colors.redAccent[700],
          '&:hover': {
            transform: 'scale(1.35)',
          },
        }}
      />
    </Box>
  );
};

export default DeleteIcon;
