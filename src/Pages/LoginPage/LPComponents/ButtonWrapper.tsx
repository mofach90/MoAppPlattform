import { Button, ButtonProps } from '@mui/material';
import { useFormikContext } from 'formik';

type ButtonWrapperProps = {
  children: React.ReactNode;
  buttonProps?: ButtonProps;
  onClick?: () => void;
};

export function ButtonWrapper({
  children,
  buttonProps = {},
  onClick,
}: Readonly<ButtonWrapperProps>) {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    if (onClick) onClick();
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
