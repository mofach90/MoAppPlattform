import { Typography } from '@mui/material';
import { useGoToVersionButton } from './hooks/useGoToVersionButton';
import ButtonWrapper from '../../../../../../components/ButtonWrapper';

const GoToVersionButton = () => {
  const { buttonConfig, version } = useGoToVersionButton();
  return (
    <ButtonWrapper buttonConfig={buttonConfig}>
      <Typography>
        {' '}
        To&nbsp;&nbsp;
        <span style={{ color: 'red' }}>
          {version === 'main' ? 'DEMO' : 'MAIN'}
        </span>
        &nbsp;&nbsp;VERSION
      </Typography>
    </ButtonWrapper>
  );
};

export default GoToVersionButton;
