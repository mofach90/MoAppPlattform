import { Button, ButtonProps } from '@mui/material';

type ButtonWrapperProps = {
  children?: React.ReactNode;
  buttonConfig?: ButtonProps;
};

export function ButtonWrapper({
  children,
  buttonConfig = {},
}: Readonly<ButtonWrapperProps>) {
  // const { submitForm } = useFormikContext();
  // const handleSubmit = () => {
  //   if (onClick) onClick();
  //   submitForm();
  // };

  // const buttonConfig: ButtonProps = {
  //   variant: 'contained',
  //   color: 'primary',
  //   fullWidth: true,
  //   onClick: handleSubmit,
  // };
  return <Button {...buttonConfig}>{children}</Button>;
}

export default ButtonWrapper;
