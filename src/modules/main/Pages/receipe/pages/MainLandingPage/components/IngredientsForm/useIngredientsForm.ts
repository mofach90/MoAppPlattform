import { ButtonProps } from '@mui/material/Button';

import { useLoadingStore } from '../../../../store/loadingStore';
import { IngredientsFormValues } from '../../../../types/ingredientsFormValues';
import createIngFormValidation from './createIngFormValidation';

const buttonConfig: ButtonProps = {
  variant: 'outlined',
  color: 'inherit',
  fullWidth: true,
};

const INITIAL_CREATE_FORM_STATE = {
  cuisine: '',
  allergy: '',
  ingredients: [{ name: 'ingredient1', value: '' }],
};
export const useIngredientsForm = () => {
  const { setLoading, setResponse, setError } = useLoadingStore();

  const handleSubmit = async (values: IngredientsFormValues) => {
    console.log('values to create', values);

    const ingredientsText = values.ingredients
      .map((ingredient) => ingredient.value)
      .join(', ');

    try {
      setLoading(true); // Start loading

      const response = await fetch('/api/v1/recipe-app/generate-recipe', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInputs: {
            ingredients: ingredientsText,
            cuisine: values.cuisine,
            allergy: values.allergy,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Recipe generated successfully:', data);
      setResponse(data); // Set the response
    } catch (error: Error | any) {
      console.error('Error generating recipe:', error);
      setError(error.message); // Set the error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return {
    buttonConfig,
    CREATE_FORM_VALIDATION: createIngFormValidation(),
    INITIAL_CREATE_FORM_STATE,
    handleSubmit,
  };
};
