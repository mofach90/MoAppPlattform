import { Grid, Typography } from '@mui/material';
import TextfieldWrapper from '../../../../../../../../global/components/TextfieldWrapper';

function allergyField() {
  return (
    <Grid item xs={12}>
      <Typography fontWeight="bold" mb={2}>
        Do you have any allergy or something you dont like
      </Typography>
      <TextfieldWrapper
        name={'allergy'}
        label={`(Eg. 'I dont like Pizza...', 'I am lactose intolerant...')`}
      />
    </Grid>
  );
}

export default allergyField;
