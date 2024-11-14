import { useIngredientStore } from '../../../../../store/UserIngredientsStore ';
import IngredientField from './IngredientField';

function IngredientList() {
  const { ingredients } = useIngredientStore();

  return (
    <>
      {ingredients.map((ingredient, index) => (
        <IngredientField
          key={ingredient.name}
          ingredient={ingredient}
          index={index}
          isLast={ingredients.length > 1}
        />
      ))}
    </>
  );
}

export default IngredientList;
