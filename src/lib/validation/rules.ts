import * as Yup from 'yup';

const ALPHANUMERIC = /^[a-zA-Z0-9 ]+$/;

export const alphanumericField = (label: string, max: number) =>
  Yup.string()
    .matches(ALPHANUMERIC, `${label} must include only letters and numbers`)
    .max(max, `${label} must be ${max} characters or less`);

export const requiredAlphanumericField = (label: string, max: number) =>
  alphanumericField(label, max).required('Required Field');
