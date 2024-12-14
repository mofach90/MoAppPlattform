import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { tokens } from '../../../../../../../global/theme/theme';
import { useLoadingStore } from '../../../../store/loadingStore';
import IngredientsFormFields from './components/IngredientsFormFields';
import { useIngredientsForm } from './useIngredientsForm';

function IngredientsForm() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { CREATE_FORM_VALIDATION, INITIAL_CREATE_FORM_STATE, handleSubmit } =
    useIngredientsForm();

  const isLoading = useLoadingStore((state) => state.isLoading);
  const response = useLoadingStore((state) => state.response);
  const error = useLoadingStore((state) => state.error);
  const reset = useLoadingStore((state) => state.reset);
  const responses: any[] = [
    { step: 'step one' },
    { step: 'step two' },
    { step: 'step three' },
  ];

  const handleCloseDialog = () => {
    reset(); // Reset all states when dialog is closed
  };
  useEffect(() => {
    console.log('response', response);
  }, []);

  return (
    <Grid container display="flex" justifyContent="center" height="25%" mt={20}>
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

              {/* Dialog for loading, success, or error */}
              <Dialog
                open={isLoading || !!response || !!error}
                onClose={handleCloseDialog}
              >
                <DialogContent>
                  {isLoading && <CircularProgress />}

                  {response && (
                    <>
                      <Typography
                        variant="h5"
                        component="h1"
                        sx={{ fontFamily: 'Playfair Display' , fontWeight: 'bold'}}
                        textAlign={'center'}
                      >
                        <CelebrationTwoToneIcon />
                        <CelebrationTwoToneIcon />
                        <CelebrationTwoToneIcon />
                        &nbsp; Congratulations! your recipe has been created
                        successfully &nbsp;
                        <CelebrationTwoToneIcon />
                        <CelebrationTwoToneIcon />
                        <CelebrationTwoToneIcon />
                      </Typography>
                      <DialogTitle textAlign={'center'}>
                        - - - - - - - - &nbsp; {response.recipe.name} &nbsp; - -
                        - - - - - - - -
                      </DialogTitle>
                      <Typography
                        variant="h6"
                        mt={2}
                        sx={{ fontFamily: 'Lobster', fontWeight: 'bold' }}
                      >
                        Description:
                      </Typography>
                      <ol>
                        <Typography>
                          &nbsp;{response.recipe.description}
                        </Typography>
                      </ol>
                      <Typography
                        variant="h6"
                        mt={2}
                        sx={{ fontFamily: 'Lobster', fontWeight: 'bold' }}
                      >
                        Instructions:
                      </Typography>
                      <ol>
                        {response.recipe.instructions.map(
                          (
                            instruction: { step: string; description: string },
                            index: number,
                          ) => (
                            <li key={index}>
                              {/* <Typography>{instruction.step}</Typography> */}
                              <Typography>{instruction.description}</Typography>
                            </li>
                          ),
                        )}
                      </ol>

                      <img
                        src={response.image}
                        alt={response.recipe.name}
                        style={{ width: '100%', marginTop: '16px' , borderRadius: '10px' }}
                      />
                    </>
                  )}

                  {error && (
                    <>
                      <DialogTitle>Error</DialogTitle>
                      <Typography color="error">{error}</Typography>
                    </>
                  )}
                </DialogContent>
                <Button onClick={handleCloseDialog}>Close</Button>
              </Dialog>
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
