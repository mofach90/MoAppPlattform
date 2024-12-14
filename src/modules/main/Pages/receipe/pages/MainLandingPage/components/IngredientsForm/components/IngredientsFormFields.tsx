import { Grid, Typography } from '@mui/material';
import AllergyField from './AllergyField';
import ClearButton from './ClearButton';
import CuisineField from './CuisineField';
import IngredientList from './Ingredientlist';
import SubmitButton from './SubmitButton';

function IngredientsFormFields({
  isValid,
  submitForm,
}: Readonly<{ isValid: boolean; submitForm: () => void }>) {
  return (
    <Grid container spacing={3}>
      <CuisineField />
      <AllergyField />
      <Grid item xs={12}>
        <Typography fontWeight="bold">
          Enter All Ingredients Name and Quantity that you have in your kitchen
        </Typography>
      </Grid>
      <IngredientList />
      <Grid item xs={12}>
        <SubmitButton isValid={isValid} submitForm={submitForm} />
        <ClearButton />
      </Grid>
    </Grid>
  );
}

export default IngredientsFormFields;
