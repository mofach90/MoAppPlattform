import { Grid, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/authProvider';
import ButtonWrapper from './LPComponents/ButtonWrapper';
import TextfieldWrapper from './LPComponents/TextfieldWrapper';
import { DashboardButton } from './LPComponents/goDashboardButton copy';
import { HomeButton } from './LPComponents/goHomeButton';

const INITIAL_FORM_STATE = {
  userName: '',
  password: '',
};
const FORM_VALIDATION = Yup.object().shape({
  userName: Yup.string().required('Required Field'),
  password: Yup.string()
    .required('Required FIeld')
    .min(8, 'password is too short, -should be 8 chars minimum')
    .matches(/[a-zA-Z]/, ' must include only chars'),
});

function LoginPageJwtCookieStorage() {
  const { authenticationForm, setAuthenticationForm } = useAuth();
  const handleonSubmit = async (values: object) => {
    const newValues = JSON.stringify(values);
    console.log('newvalues: ', newValues);
    await triggerFormBasedAuth(newValues);
  };
  const triggerFormBasedAuth = async (values: string) => {
    try {
      const result = await fetch('/api/v1/auth/login-jwt-in-cookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: values,
        credentials: 'include',
      });
      setAuthenticationForm(
        'form-based-authentication using Jwt stored in browser cookie',
      );

      if (result.ok) {
        window.open('/dashboard', '_self');
      } else {
        console.error('Failed to submit form', result.statusText);
      }
    } catch (error) {
      console.log({ error });
    }
    console.log('AuthenticationForm inside Loginjwt', authenticationForm);
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
        <Grid item xs={10} md={9} lg={9}>
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
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      This is a Form Based Authentication Using JWT
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography fontWeight={'bold'}>
                      Please Enter you User Name and Password
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="userName"
                      label="User Name"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="password"
                      label="Password"
                      type="password"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonWrapper>Submit</ButtonWrapper>
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

export default LoginPageJwtCookieStorage;
