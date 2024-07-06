import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { versionContext } from '../../../../../../../../contexts/versionprovider';
import setTextAlign from '../../../../../../../../utilities/settextAlignement';

const AppDEscription = () => {
  const { version } = useContext(versionContext);
  const { t } = useTranslation();
  const textAlign = setTextAlign();
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={300}
      flexWrap={'wrap'}
      textAlign={textAlign}
    >
      <Typography variant="h3">
        {t('welcome')} this is the{' '}
        <span style={{ color: 'red' }}>
          {version === 'main' ? 'Main' : 'Demo'}
        </span>{' '}
        Version
      </Typography>
      <Typography mt={2} variant="body1" width={'70%'}>
        {t('description')}
      </Typography>
    </Box>
  );
};

export default AppDEscription;
