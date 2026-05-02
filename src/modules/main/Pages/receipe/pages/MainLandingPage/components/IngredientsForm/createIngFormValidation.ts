import * as Yup from 'yup';
import {
  alphanumericField,
  requiredAlphanumericField,
} from '../../../../../../../../lib/validation/rules';

const createIngFormValidation = () =>
  Yup.object().shape({
    ingredients: Yup.array()
      .of(
        Yup.object().shape({
          value: requiredAlphanumericField('Ingredient', 55),
        }),
      )
      .min(1, 'At least one ingredient is required'),
    cuisine: alphanumericField('Cuisine', 55),
    allergy: alphanumericField('Allergy', 55),
  });

export default createIngFormValidation;
