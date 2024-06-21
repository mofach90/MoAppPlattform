import { Button, ButtonProps } from '@mui/material';
import { useFormikContext } from 'formik';

type ButtonWrapperProps = {
  children: React.ReactNode;
  buttonProps?: ButtonProps; // Make buttonProps optional
};

function ButtonWrapper({
  children,
  buttonProps = {},
}: Readonly<ButtonWrapperProps>) {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

  const buttonConfig: ButtonProps = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };
  return (
    <Button {...buttonConfig} {...buttonProps}>
      {children}
    </Button>
  );
}

export default ButtonWrapper;
