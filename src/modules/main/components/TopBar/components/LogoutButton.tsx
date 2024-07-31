import { Theme, useTheme } from '@mui/material';
import ButtonWrapper from '../../../../global/components/ButtonWrapper';
import { tokens } from '../../../../global/theme/theme';
import { LogoutHandler } from '../../../../global/utilities/logoutHandler';

const LogoutButton = () => {
  const theme: Theme = useTheme();
  const colors = tokens(theme.palette?.mode ?? 'dark');
  return (
    <ButtonWrapper
      buttonConfig={{
        sx: {
          backgroundColor: colors.redAccent[800],
          color: colors.primary[100],
          borderRadius: 4,
          margin: '0 15px 0 15px',
          ':hover': {
            backgroundColor: colors.redAccent[600],
          },
        },
        onClick: () => LogoutHandler(),
      }}
    >
      Logout
    </ButtonWrapper>
  );
};

export default LogoutButton;
