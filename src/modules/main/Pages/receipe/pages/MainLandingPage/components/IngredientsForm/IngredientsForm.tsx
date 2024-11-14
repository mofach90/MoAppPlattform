import { Grid, Paper, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import { tokens } from '../../../../../../../global/theme/theme';
import IngredientsFormFields from './components/IngredientsFormFields';
import { useIngredientsForm } from './useIngredientsForm';

function IngredientsForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { CREATE_FORM_VALIDATION, INITIAL_CREATE_FORM_STATE, handleSubmit } =
    useIngredientsForm();

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      height="25%"
      mt={20}
    >
      <Paper sx={styles.paper(colors)} variant="outlined">
        <Formik
          validationSchema={CREATE_FORM_VALIDATION}
          initialValues={{ ...INITIAL_CREATE_FORM_STATE }}
          onSubmit={handleSubmit}
        >
          {({ submitForm, isValid }) => (
            <Form style={{ width: '60%' }}>
              <IngredientsFormFields
                isValid={isValid}
                submitForm={submitForm}
              />
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

const styles = {
  paper: (colors: any) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primary[400],
  }),
};

export default IngredientsForm;
