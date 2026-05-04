import { Theme, Typography, useTheme } from '@mui/material';
import ButtonWrapper from '../../../../../../global/components/ButtonWrapper';
import { tokens } from '../../../../../../global/theme/theme';
import useDialogStore from '../../../hooks/useDialogStore';

const UpdateButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const open = useDialogStore((s) => s.open);

  return (
    <ButtonWrapper
      buttonConfig={{
        sx: {
          border: '1px solid green',
          borderRadius: 4,
          margin: '0 20px 0 0',
          backgroundColor: colors.greenAccent[500],
          ':hover': {
            backgroundColor: colors.greenAccent[400],
          },
        },
        onClick: () => open('updateTask'),
      }}
    >
      <Typography
        color={'black'}
        textAlign={'center'}
        fontFamily={'monospace'}
        fontWeight={'bold'}
      >
        Update
      </Typography>
    </ButtonWrapper>
  );
};

export default UpdateButton;
