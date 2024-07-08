import { Button, ButtonProps } from '@mui/material';

type ButtonWrapperProps = {
  children?: React.ReactNode;
  buttonConfig?: ButtonProps;
};

export function ButtonWrapper({
  children,
  buttonConfig = {},
}: Readonly<ButtonWrapperProps>) {

  
  return <Button {...buttonConfig}>{children}</Button>;
}

export default ButtonWrapper;
