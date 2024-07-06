import { Button } from '@mui/material';
import { useDashboardButton } from './hooks/useDashboardButton';
import ButtonWrapper from '../../../../../../../../Pages/LoginPage/LPComponents/ButtonWrapper';

export const DashboardButton = () => {
  const { buttonConfig } = useDashboardButton();
  return <ButtonWrapper buttonConfig={buttonConfig}>Dashboard</ButtonWrapper>;
};
// export const DashboardButton = () => {
//   const { buttonConfig } = useDashboardButton();
//   return <Button {...buttonConfig}>Dashboard</Button>;
// };
