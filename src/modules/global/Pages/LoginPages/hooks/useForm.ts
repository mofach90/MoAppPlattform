import { ButtonProps } from '@mui/material/Button';
import * as Yup from 'yup';

const buttonConfig: ButtonProps = {
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
};

const INITIAL_FORM_STATE = {
  emailAdress: '',
  password: '',
};
interface useFormProps {
  endpoint?: string;
}

const FORM_VALIDATION = Yup.object().shape({
  emailAdress: Yup.string()
    .required('Required Field')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Required FIeld')
    .min(8, 'password is too short, -should be 8 chars minimum')
    .matches(/^[a-zA-Z]+$/, ' must include only chars'),
});

export const useForm = ({ endpoint = '' }: useFormProps = {}) => {
  const handleonSubmit = async (values: object) => {
    const newValues = JSON.stringify(values);
    await triggerFormBasedAuth(newValues);
  };
  const triggerFormBasedAuth = async (values: string) => {
    try {
      const result = await fetch(`/api/v1/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: values,
        credentials: 'include',
      });
      console.log({endpoint})
      console.log({result})
      console.log({values})
      if (result.ok) {
        const data = await result.json();
        if (data.token) {
          localStorage.setItem('jwtToken', data.token);
        }
        window.open('/demo-dashboard', '_self');
      } else {
        console.error('Failed to submit form', result.statusText);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return { buttonConfig, INITIAL_FORM_STATE, FORM_VALIDATION, handleonSubmit };
};
