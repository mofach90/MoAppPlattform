import { useTheme } from '@mui/material';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useTaskStore from '../../../hooks/useTaskStore';

const CancelButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const setDeleteTaskDialog = useTaskStore(
    (state) => state.setDeleteTaskDialog,
  );
  return (
    <ButtonWrapper
      buttonConfig={{
        sx: {
          backgroundColor: colors.greenAccent[600],
          color: 'black',
          border: '2px solid black',

          ':hover': {
            backgroundColor: colors.greenAccent[500],
          },
          width: 90,
          height: 37,

          fontSize: '14px',
        },
        onClick: () => setDeleteTaskDialog(),
      }}
    >
      Cancel
    </ButtonWrapper>
  );
};

export default CancelButton;
