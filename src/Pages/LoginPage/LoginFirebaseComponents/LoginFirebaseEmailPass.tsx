import { Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
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

function LoginFirebaseEmailPass({
    onSubmit,
}: {
    onSubmit: (values: valueType) => Promise<void>;
}) {
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
