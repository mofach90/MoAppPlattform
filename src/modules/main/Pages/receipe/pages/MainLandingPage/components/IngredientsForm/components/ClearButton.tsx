import { useFormikContext } from 'formik';
import ButtonWrapper from '../../../../../../../../global/components/ButtonWrapper';
import { useIngredientsForm } from '../useIngredientsForm';

function ClearButton() {
  const { setFieldValue } = useFormikContext<{
    ingredients: { name: string; value: string }[];
  }>();
  const { buttonConfig } = useIngredientsForm();

  const handleClearAll = () => {
    setFieldValue('ingredients', [{ name: 'ingredient1', value: '' }]); // Reset to initial value
  };

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
        onClick: handleClearAll,
      }}
    >
      Clear All
    </ButtonWrapper>
  );
}

export default ClearButton;
