import { Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import ButtonWrapper from '../../../../../components/ButtonWrapper';
import TextfieldWrapper from '../../../../../components/TextfieldWrapper';
import { useForm } from '../../../hooks/useForm';

export type valueType = {
  emailAdress: string;
  password: string;
  actionType?: string;
};

function LoginFirebaseEmailPass({
  onSubmit,
}: {
  onSubmit: (values: valueType) => void;
}) {
  const { FORM_VALIDATION, INITIAL_FORM_STATE, buttonConfig } = useForm();

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
        onSubmit={onSubmit}
      >
        {({ setFieldValue, submitForm }) => (
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
                  buttonConfig={{
                    ...buttonConfig,
                    onClick: () => {
                      setFieldValue('actionType', 'signIn');
                      submitForm();
                    },
                  }}
                >
                  Sign In
                </ButtonWrapper>
              </Grid>
              <Grid item xs={12} marginBottom={4}>
                <ButtonWrapper
                  buttonConfig={{
                    ...buttonConfig,
                    sx: { bgcolor: '#34a1eb' },
                    onClick: () => {
                      setFieldValue('actionType', 'signUp');
                      submitForm();
                    },
                  }}
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
