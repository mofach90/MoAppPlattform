import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackToHomeButton from '../../../../components/BackToHomeButton';
import setTextAlign from '../../../../utilities/settextAlignement';
function AboutPage() {
  const { t } = useTranslation();
  const textAlign = setTextAlign();

  return (
    <Box
      minHeight={'100vh'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      textAlign={textAlign}
    >
      <Grid container maxWidth={1200} display={'flex'} flexDirection={'column'}>
        <Grid item mt={3} ml={2}>
          <BackToHomeButton />
        </Grid>
        <Grid item padding={4}>
          <img
            style={{
              width: '100%',
              height: '30vh',
              borderRadius: 10,
              border: '1px solid',
            }}
            src="assets/AboutPage2.jpg"
            alt="About Mo App Platform"
          />
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={'whitesmoke'} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: 'Bold' }}
              color={'black'}
              variant="h6"
            >
              {t('aboutPage.missionTitle')}
            </Typography>
            <Typography mt={1} color={'black'} variant="body1">
              {t('aboutPage.missionDescription')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={'whitesmoke'} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: 'Bold' }}
              color={'black'}
              variant="h6"
            >
              {t('aboutPage.visionTitle')}
            </Typography>
            <Typography mt={1} color={'black'} variant="body1">
              {t('aboutPage.visionDescription')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={'whitesmoke'} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: 'Bold' }}
              color={'black'}
              variant="h6"
            >
              {t('aboutPage.featuresTitle')}
            </Typography>
            <Typography mt={1} color={'black'} variant="body1">
              {t('aboutPage.featuresDescription')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item padding={4}>
          <Stack bgcolor={'whitesmoke'} padding={3} borderRadius={2}>
            <Typography
              sx={{ fontWeight: 'Bold' }}
              color={'black'}
              variant="h6"
            >
              {t('aboutPage.joinUsTitle')}
            </Typography>
            <Typography mt={1} color={'black'} variant="body1">
              {t('aboutPage.joinUsDescription')}
            </Typography>
          </Stack>
        </Grid>
        <Grid item mb={3} ml={2}>
          <BackToHomeButton />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;
