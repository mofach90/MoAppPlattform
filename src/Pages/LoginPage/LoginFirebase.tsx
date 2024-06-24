import { Grid, Paper, Typography } from '@mui/material';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../config/firebaseConfig';
import ButtonWrapper from './LPComponents/ButtonWrapper';
import TextfieldWrapper from './LPComponents/TextfieldWrapper';
import { DashboardButton } from './LPComponents/goDashboardButton copy';
import { HomeButton } from './LPComponents/goHomeButton';

export type valueType = {
  emailAdress: string;
  password: string;
  actionType?: string;
};

const INITIAL_FORM_STATE = {
  emailAdress: '',
  password: '',
};
const FORM_VALIDATION = Yup.object().shape({
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

  const handleOnSubmit = async (values: valueType) => {
    try {
      const emailAdress: string = values.emailAdress;
      const password: string = values.password;

      console.log('values: ', values);
      const checkUser = await signInWithEmailAndPassword(
        auth,
        emailAdress,
        password,
      );
      console.log('checkUser: ', checkUser);
    } catch (error) {
      console.log({ error });
    }
  };
  const handleOnSignUp = async (values: valueType) => {
    try {
      const emailAdress: string = values.emailAdress;
      const password: string = values.password;

      console.log('values: ', values);
      const createNewuser = await createUserWithEmailAndPassword(
        auth,
        emailAdress,
        password,
      );
      console.log('createNewuser: ', createNewuser);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleFormSubmit = async (values: valueType) => {
    if (values.actionType === 'signIn') {
      await handleOnSubmit(values);
    } else if (values.actionType === 'signUp') {
      await handleOnSignUp(values);
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
              onSubmit={handleFormSubmit}
            >
              {({ setFieldValue }) => (
                <Form style={{ width: '60%' }}>
                  <Grid container spacing={3}>
                    <Grid
                      container
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
                        <ButtonWrapper
                          onClick={() => setFieldValue('actionType', 'signIn')}
                        >
                          Sign In
                        </ButtonWrapper>
                      </Grid>
                      <Grid item xs={12} marginBottom={4}>
                        <ButtonWrapper
                          buttonProps={{
                            sx: { bgcolor: '#34a1eb' },
                          }}
                          onClick={() => setFieldValue('actionType', 'signUp')}
                        >
                          Create New User
                        </ButtonWrapper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FirebaseLoginPage;
