import { Box, Button, Grid, Typography } from '@mui/material';

function LoginFirebaseAnonymous({
  handleOnClick,
}: {
  handleOnClick: () => Promise<void>;
}) {
  return (
    <Grid
      container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      marginBottom={4}
    >
      <Box style={{ width: '80%' }}>
        <Grid container border={'1px solid'} borderRadius={4} padding={4}>
          <Grid
            item
            xs={12}
            marginBottom={4}
            display={'flex'}
            alignItems={'center'}
          >
            <img
              src="assets/incognito-svgrepo-com.svg"
              alt="Logo"
              style={{ width: 50, height: 50 }}
            />
            <Typography
              variant="h6"
              fontFamily={'monospace'}
              fontStyle={'oblique'}
              ml={8}
            >
              Anonymous - Firebase Method
            </Typography>
          </Grid>

          <Grid item xs={12} marginBottom={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={handleOnClick}
            >
              Anonymous Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default LoginFirebaseAnonymous;
