import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid, IconButton } from '@mui/material';
import TextfieldWrapper from '../../../../../../../../global/components/TextfieldWrapper';

interface IngredientFieldProps {
  index: number;
  isRemovable: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

function IngredientField({
  index,
  isRemovable,
  onAdd,
  onRemove,
}: IngredientFieldProps) {
  return (
    <Grid container item xs={12} spacing={1} alignItems="center">
      <Grid item xs={10}>
        <TextfieldWrapper
          name={`ingredients[${index}].value`}
          label={`Ingredient ${index + 1}`}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={onAdd} color="secondary" size="small">
          <AddCircleIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        {isRemovable && (
          <IconButton onClick={onRemove} color="error" size="small">
            <RemoveCircleIcon />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
}

export default IngredientField;
