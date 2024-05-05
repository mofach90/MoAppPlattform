import { Stack } from "@mui/material";

function StackLogo() {
  return (
    <Stack>
      <img
        src="src/assets/logomoPNG.png"
        alt="Logo"
        className="logo-without-animation"
        style={{ width: 100, height: 100 }}
      />
    </Stack>
  );
}

export default StackLogo;
