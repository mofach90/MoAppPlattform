import { Button, ButtonProps } from "@mui/material";

export const HomeButton = () => {
  const handleHome = () => {
    window.open("/", "_self");
  };

  const buttonConfig: ButtonProps = {
    variant: "contained",
    onClick:  handleHome ,
    sx: { whiteSpace: "nowrap", ml:2 },
  };
  return <Button {...buttonConfig}>Home</Button>;
};
