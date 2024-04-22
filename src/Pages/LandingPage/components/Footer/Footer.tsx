import { Box, Breadcrumbs, Chip, Divider, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack  display={"flex"} direction={"row"} alignItems={"center"}>
      <Stack>
        <img
          src="src/assets/logomoPNG.png"
          alt="Logo"
          className="logo-without-animation"
          style={{ width: 100, height: 100 }}
        />
      </Stack>
      <Stack >
        <Breadcrumbs 
        separator={"|"}
        sx={{color:"white"}}
        >
          <Box sx={{color:"white", fontSize:"1rem"}}>About</Box>
          <Box sx={{color:"white", fontSize:"1rem"}}>Licence</Box>
          <Box sx={{color:"white", fontSize:"1rem"}}>Privacy</Box>
          <Box sx={{color:"white", fontSize:"1rem"}}>User Agreement</Box>

        </Breadcrumbs>
        <Chip />
      </Stack>
    </Stack>
  );
};

export default Footer;
