import { useTheme } from '@mui/material';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import { Theme } from '../../../../../types/mainTypes';
import useDialogStore from '../../../hooks/useDialogStore';

const CancelButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  const close = useDialogStore((s) => s.close);
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
          borderRadius: 5,
        },
        onClick: close,
      }}
    >
      Cancel
    </ButtonWrapper>
  );
};

export default CancelButton;
