import { Grid, Typography } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../../config/firebaseConfig';
import { useAuth } from '../../../contexts/authProvider';
import ButtonWrapper from '../LPComponents/ButtonWrapper';
import TextfieldWrapper from '../LPComponents/TextfieldWrapper';

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
    .matches(/^[a-zA-Z]+$/, ' must include only chars'),
});

const firebaseSignInWithEmailAndPassword = (values: valueType) => {
  const emailAdress: string = values.emailAdress;
  const password: string = values.password;

  console.log('values: ', values);

  return signInWithEmailAndPassword(auth, emailAdress, password);
};

function LoginFirebaseEmailPass() {
  // connectAuthEmulator(auth, 'http://127.0.0.1:8500'); // TODO Delete only for DEV

  const { setAuthenticationForm } = useAuth();
  const handleOnSubmit = async (values: valueType) => {
    try {
      const userCredential = await firebaseSignInWithEmailAndPassword(values);
      console.log('userCredential: ', userCredential);
      if (userCredential.user) {
        const idToken = await userCredential.user.getIdToken();
        console.log('idToken: ', idToken);
        const response: Response = await fetch(
          '/api/v1/auth/login-firebase-email-password-or-anonymously',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
          },
        );
        if (response.ok) {
          window.open('/dashboard', '_self');
        } else {
          console.error('failed to Validate idToken from Backend');
        }
      }
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
    setAuthenticationForm(
      'Firebase based authentication using Email and Password or Anonymously',
    );
    if (values.actionType === 'signIn') {
      await handleOnSubmit(values);
    } else if (values.actionType === 'signUp') {
      await handleOnSignUp(values);
    }
  };
  return (
    <Grid
      container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      marginBottom={4}
    >
      <Formik
        validationSchema={FORM_VALIDATION}
        initialValues={{ ...INITIAL_FORM_STATE }}
        onSubmit={handleFormSubmit}
      >
        {({ setFieldValue }) => (
          <Form style={{ width: '80%' }}>
            <Grid container border={'1px solid'} borderRadius={4} padding={4}>
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
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default LoginFirebaseEmailPass;