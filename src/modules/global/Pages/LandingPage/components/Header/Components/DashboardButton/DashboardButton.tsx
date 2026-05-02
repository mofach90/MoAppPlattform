import ButtonWrapper from '../../../../../../components/ButtonWrapper';
import { useDashboardButton } from './hooks/useDashboardButton';

export const DashboardButton = () => {
  const { buttonConfig } = useDashboardButton();
  return <ButtonWrapper buttonConfig={buttonConfig}>Dashboard</ButtonWrapper>;
};
