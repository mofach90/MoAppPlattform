import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid, IconButton } from '@mui/material';
import TextfieldWrapper from '../../../../../../../../global/components/TextfieldWrapper';
import { useIngredientStore } from '../../../../../store/UserIngredientsStore ';
import { v4 as uuidv4 } from 'uuid';

function IngredientField({
  ingredient,
  index,
  isLast,
}: {
  ingredient: { name: string; value: string };
  index: number;
  isLast: boolean;
}) {
  const { handleIngredientChange, addIngredientField, clearIngredientField } =
    useIngredientStore();

  return (
    <Grid container item xs={12} alignItems="center" spacing={1}>
      <Grid item xs={10}>
        <TextfieldWrapper
          name={ingredient.name}
          label={`Ingredient ${index + 1}`}
          type="text"
          value={ingredient.value}
          onChange={(e) => handleIngredientChange(index, e.target.value)}
          key={uuidv4}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={addIngredientField} color="secondary" size="small">
          <AddCircleIcon />
        </IconButton>
        {isLast ? (
          <IconButton
            onClick={() => clearIngredientField(index)}
            color="error"
            size="small"
          >
            <RemoveCircleIcon />
          </IconButton>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default IngredientField;
