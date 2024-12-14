import * as Yup from 'yup';

const createIngFormValidation = () =>
  Yup.object().shape({
    ingredients: Yup.array()
      .of(
        Yup.object().shape({
          value: Yup.string()
            .required('Required Field')
            .matches(
              /^[a-zA-Z0-9 ]+$/,
              'Ingredient must include only letters and numbers',
            )
            .max(55, 'Ingredient must be 55 characters or less'),
        }),
      )
      .min(1, 'At least one ingredient is required'),
    cuisine: Yup.string()
      .matches(
        /^[a-zA-Z0-9 ]+$/,
        'Ingredient must include only letters and numbers',
      )
      .max(55, 'Ingredient must be 55 characters or less'),
    allergy: Yup.string()
      .matches(
        /^[a-zA-Z0-9 ]+$/,
        'Ingredient must include only letters and numbers',
      )
      .max(55, 'Ingredient must be 55 characters or less'),
    // Ensure at least one ingredient
  });

export default createIngFormValidation;
