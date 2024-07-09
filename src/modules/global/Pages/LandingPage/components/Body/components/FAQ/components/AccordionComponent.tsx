import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import setTextAlign from '../../../../../../../utilities/settextAlignement.ts';

const AccordionComponent = (props: any) => {
  const { t } = useTranslation();
  const textAlign = setTextAlign();
  return (
    <Accordion sx={{ opacity: 0.9, textAlign: `${textAlign}` }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: 'darkblue',
              '&:hover': {
                color: 'white',

                backgroundColor: 'darkblue',
                borderRadius: 10,
              },
            }}
          />
        }
      >
        <Typography
          width={'100%'}
          mr={2}
          fontWeight={'bold'}
          color={'darkblue'}
        >
          {t(`FaQ.${props.index}.Q`)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          background:
            'linear-gradient(to right, rgb(240, 255, 255),rgb(170,255,255))',
          borderRadius: 1,
        }}
      >
        <Typography color={'darkblue'} variant="body2">
          {t(`FaQ.${props.index}.A`)}{' '}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
