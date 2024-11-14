import ButtonWrapper from '../../../../../../../../global/components/ButtonWrapper';
import { useIngredientStore } from '../../../../../store/UserIngredientsStore ';
import { useIngredientsForm } from '../useIngredientsForm';

function ClearButton() {
  const { buttonConfig } = useIngredientsForm();
  const {  clearAllIngredientFields } = useIngredientStore();

  return (
    <ButtonWrapper
      buttonConfig={{
        ...buttonConfig,
        sx: {
          bgcolor: '#5c7fea',
          '&:hover': {
            backgroundColor: '#4b70d8',
          },
          marginTop: 2,
        },
        onClick: clearAllIngredientFields,
      }}
    >
      Clear All
    </ButtonWrapper>
  );
}

export default ClearButton;
