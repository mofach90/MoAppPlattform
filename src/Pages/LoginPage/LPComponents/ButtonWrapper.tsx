import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

function ButtonWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

  const buttonConfig: ButtonProps = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
    
  };
  return <Button {...buttonConfig}>{children}</Button>;
}

export default ButtonWrapper;
