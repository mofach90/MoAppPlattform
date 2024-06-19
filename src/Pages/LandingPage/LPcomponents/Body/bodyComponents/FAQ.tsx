import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import data from '../../../../../../public/locales/en/translation.json';
import AccordionComponent from './faqComponents/AccordionComponent';
const FaQ = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography
        fontWeight={'bold'}
        textAlign={'center'}
        padding={3}
        fontFamily={'sans-serif'}
        variant="h5"
        color={'white'}
      >
        {t('Frequent Asked Questions')}
      </Typography>
      {data.FaQ.map((_, i) => (
        <AccordionComponent key={uuidv4()} index={i} />
      ))}
    </Box>
  );
};

export default FaQ;
