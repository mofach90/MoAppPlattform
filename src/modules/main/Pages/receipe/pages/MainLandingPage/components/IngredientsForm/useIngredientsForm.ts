import { ButtonProps } from '@mui/material/Button';

import { apiClient } from '../../../../../../../../lib/apiClient';
import { useAsyncAction } from '../../../../../../../../lib/useAsyncAction';
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
  const { data, loading, error, execute, reset } = useAsyncAction(
    (values: IngredientsFormValues) => {
      const ingredientsText = values.ingredients
        .map((ingredient) => ingredient.value)
        .join(', ');
      return apiClient.post<any>('/api/v1/recipe-app/generate-recipe', {
        userInputs: {
          ingredients: ingredientsText,
          cuisine: values.cuisine,
          allergy: values.allergy,
        },
      });
    },
  );

  return {
    buttonConfig,
    CREATE_FORM_VALIDATION: createIngFormValidation(),
    INITIAL_CREATE_FORM_STATE,
    handleSubmit: execute,
    response: data,
    isLoading: loading,
    error,
    reset,
  };
};
