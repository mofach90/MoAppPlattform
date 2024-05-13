import { Stack } from "@mui/material";
import StackLogo from "./footerComponents/StackLogo";
import StackUtilityBar from "./footerComponents/StackUtilityBar";

const Footer = () => {
  return (
    <Stack display={"flex"} direction={"row"} alignItems={"center"}>
      <StackLogo />
      <StackUtilityBar />
    </Stack>
  );
};

export default Footer;
