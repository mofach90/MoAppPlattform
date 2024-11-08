import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `    
      html {
        height: 100%;
      }
      
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: linear-gradient(to right, rgb(0, 0, 0), #010d45);
        color: rgb(55, 255, 255);
      }
      
      #root {
        height: 100%;
      }
      
      `,
    },
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        minHeight={'100hv'}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        sx={{ overflow: 'hidden' }}
      >
        <Grid
          container
          minWidth={700}
          display={'flex'}
          flexDirection={'column'}
          maxWidth={1200}
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <Body />
          </Grid>
          <Grid item mt={'auto'}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
