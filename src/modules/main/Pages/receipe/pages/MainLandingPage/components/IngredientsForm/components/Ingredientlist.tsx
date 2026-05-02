import { FieldArray, useFormikContext } from 'formik';
import IngredientField from './IngredientField';

function IngredientList() {
  const { values } = useFormikContext<{
    ingredients: { name: string; value: string }[];
  }>();

  return (
    <FieldArray name="ingredients">
      {({ push, remove }) => (
        <>
          {values.ingredients.map((ingredient, index) => (
            <IngredientField
              key={ingredient.name}
              index={index}
              isRemovable={values.ingredients.length > 1}
              onAdd={() =>
                push({
                  name: `ingredient${values.ingredients.length + 1}`,
                  value: '',
                })
              }
              onRemove={() => remove(index)}
            />
          ))}
        </>
      )}
    </FieldArray>
  );
}

export default IngredientList;
