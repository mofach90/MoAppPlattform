import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

function ButtonWrapper({ children }: { children: any }) {
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
