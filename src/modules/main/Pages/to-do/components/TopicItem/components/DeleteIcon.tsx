import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Theme, useTheme } from '@mui/material';
import { tokens } from '../../../../../../global/theme/theme';
import useTaskStore from '../../../hooks/useTaskStore';

const DeleteIcon = ({
  fontSize,
  variant
}: {
  fontSize?: 'small' | 'large' | 'medium';
  variant?: 'topic' | 'task'
}) => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );
  const setDeleteTopicDialog = useTaskStore(
    (state) => state.setDeleteTopicDialog,
  );


  return (
    <Box onClick={() => variant ? setDeleteTopicDialog() : setDeleteTaskDialog()}>
      <DeleteForeverIcon
        fontSize={fontSize ? fontSize : 'medium'}
        sx={{
          color: colors.redAccent[700],

          '&:hover': {
            transform: 'scale(1.35)',
            // boxShadow: theme.shadows[6],
          },
        }}
      />
    </Box>
  );
};

export default DeleteIcon;
