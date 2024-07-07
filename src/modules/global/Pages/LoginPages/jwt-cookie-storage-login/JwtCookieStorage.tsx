import { Grid, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../components/ButtonWrapper';
import TextfieldWrapper from '../../../components/TextfieldWrapper';
import { HomeButton } from '../../../components/goHomeButton';
import { useForm } from '../hooks/useForm';

function LoginPageJwtCookieStorage() {
  const { FORM_VALIDATION, INITIAL_FORM_STATE, handleonSubmit } = useForm({
    endpoint: 'login-jwt-in-cookie',
    setAuthFormMessage:
      'form-based-authentication using Jwt stored in browser cookie',
  });

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
