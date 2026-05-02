import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useTextAlignment from '../../../../../../utilities/useTextAlignment';

const AppDescription = () => {
  const { t } = useTranslation();
  const textAlign = useTextAlignment();
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
        {t('welcome')}
      </Typography>
      <Typography mt={2} variant="body1" width={'70%'}>
        {t('description')}
      </Typography>
    </Box>
  );
};

export default AppDescription;
