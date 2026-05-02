import ButtonWrapper from '../../../../../../../../global/components/ButtonWrapper';
import { useIngredientsForm } from '../useIngredientsForm';

function SubmitButton({
  isValid,
  submitForm,
}: Readonly<{ isValid: boolean; submitForm: () => void }>) {
  const { buttonConfig } = useIngredientsForm();
  return (
    <ButtonWrapper
      buttonConfig={{
        ...buttonConfig,
        sx: {
          bgcolor: '#34a1eb',
          '&:hover': {
            backgroundColor: '#1e8fe6',
          },
        },
        onClick: () => {
          if (isValid) {
            submitForm();
          } else {
            console.log('Your Input is not Valid');
          }
        },
      }}
    >
      Submit
    </ButtonWrapper>
  );
}

export default SubmitButton;
