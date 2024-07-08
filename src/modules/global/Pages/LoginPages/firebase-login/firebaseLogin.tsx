import { Grid, Paper, Typography } from '@mui/material';
import { HomeButton } from '../../../components/goHomeButton';
import LoginFirebaseMethods from './components/LoginFirebaseMethods';

function FirebaseLoginPage() {
  return (
    <Grid container height="100vh">
      <Grid container alignItems={'center'} justifyContent={'end'} p={2}>
        <Grid item>
          <HomeButton />
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Grid item xs={12} md={9} lg={9}>
          <Paper
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            variant="outlined"
          >
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={10}
                display={'flex'}
                marginBottom={8}
                marginTop={5}
              >
                <Grid container alignItems={'center'} justifyContent={'end'}>
                  <Typography
                    variant="h5"
                    fontWeight={'bold'}
                    textAlign={'center'}
                  >
                    Login Using Firebase Authentication
                  </Typography>
                </Grid>
                <Grid container justifyContent={'center'}>
                  <img
                    src="assets/firebase-1.svg"
                    alt="Logo"
                    style={{ width: 50, height: 50 }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={'column'}
                xs={12}
              >
                <LoginFirebaseMethods method={'email_password'} />
                <LoginFirebaseMethods method={'google'} />
                <LoginFirebaseMethods method={'facebook'} />
                <LoginFirebaseMethods method={'anonymous'} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FirebaseLoginPage;