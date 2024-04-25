import { Box, Breadcrumbs, Chip, Divider, Link, Snackbar, Stack } from "@mui/material";
import SnackbarAlert from "../Header/headerComponents/SnackbarAlert";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
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
      <Stack width={"100%"} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"end"}>
        <Breadcrumbs 
        separator={"|"}
        sx={{color:"white"}}
        >
          <Link onClick={()=>setOpen(true)}  sx={{color:"white", fontSize:"1rem"}}>About</Link>
          <Link onClick={()=>setOpen(true)} sx={{color:"white", fontSize:"1rem"}}>Licence</Link>
          <Link onClick={()=>setOpen(true)} sx={{color:"white", fontSize:"1rem"}}>Privacy</Link>
          <Link onClick={()=>setOpen(true)} sx={{color:"white", fontSize:"1rem"}}>User Agreement</Link>

        </Breadcrumbs>
        <Chip />
        <Snackbar
            message="Coming soon : Under Developement"
            autoHideDuration={1000}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical:"bottom", horizontal:"left" }}
          >
            <SnackbarAlert variant="filled" severity="warning">
              Coming soon : Under Developement
            </SnackbarAlert>
          </Snackbar>
      </Stack>
    </Stack>
  );
};

export default Footer;
