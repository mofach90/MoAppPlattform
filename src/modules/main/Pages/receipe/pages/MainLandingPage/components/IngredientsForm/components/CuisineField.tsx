import { Grid, Typography } from '@mui/material';
import TextfieldWrapper from '../../../../../../../../global/components/TextfieldWrapper';

function CuisineField() {
  return (
    <Grid item xs={12}>
      <Typography fontWeight="bold" mb={2}>Do you prefer any cuisine</Typography>
      <TextfieldWrapper
        name={'cuisine'}
        label={`(Eg. French, Italian, Arabic .......)`}
      />
    </Grid>
  );
}

export default CuisineField;
