import { Grid, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/authProvider';
import ButtonWrapper from './LPComponents/ButtonWrapper';
import TextfieldWrapper from './LPComponents/TextfieldWrapper';
import { DashboardButton } from './LPComponents/goDashboardButton copy';
import { HomeButton } from './LPComponents/goHomeButton';
import { connectAuthEmulator } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

const INITIAL_FORM_STATE = {
  userName: '',
  emailAdress: '',
  password: '',
};
const FORM_VALIDATION = Yup.object().shape({
  userName: Yup.string().required('Required Field'),
  emailAdress: Yup.string()
    .required('Required Field')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Required FIeld')
    .min(8, 'password is too short, -should be 8 chars minimum')
    .matches(/[a-zA-Z]/, ' must include only chars'),
});

function FirebaseLoginPage() {
  connectAuthEmulator(auth, 'http://127.0.0.1:8500');
  const handleonSubmit = async (values: object) => {
    const newValues = JSON.stringify(values);
    await triggerFormBasedAuth(newValues);
  };
  const triggerFormBasedAuth = async (values: string) => {
    try {
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <Grid container height="100vh">
      <Grid container alignItems={'center'} justifyContent={'end'} p={2}>
        <Grid item>
          <DashboardButton />
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
            <Formik
              validationSchema={FORM_VALIDATION}
              initialValues={{ ...INITIAL_FORM_STATE }}
              onSubmit={handleonSubmit}
            >
              <Form style={{ width: '60%' }}>
                <Grid container spacing={3}>
                  <Grid
                    container
                    xs={12}
                    justifyContent={'start'}
                    alignItems={'center'}
                    marginBottom={8}
                    marginTop={5}
                  >
                    <Grid item xs={10}>
                      <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        textAlign={'center'}
                      >
                        Login Using Firebase Authentication
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <img
                        src="assets/firebase.png"
                        alt="Logo"
                        style={{ width: 50, height: 50 }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    xs={12}
                    border={'1px solid'}
                    borderRadius={4}
                    padding={4}
                  >
                    <Grid item xs={12} marginBottom={4}>
                      <Typography
                        variant="h6"
                        fontFamily={'monospace'}
                        fontStyle={'oblique'}
                      >
                        Email and Password - Firebase Method
                      </Typography>
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <Typography fontWeight={'bold'}>
                        Please Enter you User Name and Password
                      </Typography>
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <TextfieldWrapper
                        name="emailAdress"
                        label="Email Adresse"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <TextfieldWrapper
                        name="password"
                        label="Password"
                        type="password"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} marginBottom={2}>
                      <ButtonWrapper>Submit</ButtonWrapper>
                    </Grid>
                    <Grid item xs={12} marginBottom={4}>
                      <ButtonWrapper
                        buttonProps={{ sx: { bgcolor: '#34a1eb' } }}
                      >
                        Sign Up
                      </ButtonWrapper>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FirebaseLoginPage;
