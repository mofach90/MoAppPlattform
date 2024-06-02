import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import setTextAlign from "./../../../../utilities/settextAlignement";
import "./Header.css";
import SnackbarAlert from "./headerComponents/SnackbarAlert";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSnackbarAlert, setOpenSnackbarAlert] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbarAlert(false);
    setOpen(false);
  };
  const triggerAuthPopup = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/basicauthentication",
        {
          method: "GET",
          credentials: "include", // Include credentials in the request
        }
      );
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  const textAlign = setTextAlign();

  return (
    <Box
      sx={{
        backgroundImage: `url(src/assets/nikolaj-habib-J9T8mIL5f4M-unsplash.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
      }}
    >
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <img
          src="assets/logomoPNG.png"
          alt="Logo"
          className="logo-animation"
          style={{ width: 100, height: 100 }}
        />
        <Stack direction={"row"} gap={2} mr={2} alignItems="center">
          <Button
            variant="contained"
            sx={{ whiteSpace: "nowrap" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Login
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 24,
              sx: {
                width: 600,
                height: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 4,
              },
            }}
          >
            <DialogTitle>Choose your Authentication methode</DialogTitle>
            <DialogActions sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{ whiteSpace: "nowrap" }}
                fullWidth={true}
                onClick={triggerAuthPopup}
              >
                Login Using Basic Based Authentication
              </Button>
            </DialogActions>
            <DialogActions sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{ whiteSpace: "nowrap" }}
                onClick={() => navigate("/login")}
                fullWidth={true}
              >
                Login Using Form Based Authentication using Sesion ID
              </Button>
            </DialogActions>
            <DialogActions sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{ whiteSpace: "nowrap" }}
                onClick={() => navigate("/loginJwt")}
                fullWidth={true}
              >
                Login Using Form Based Authentication using JWT
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant="outlined"
            sx={{ whiteSpace: "nowrap" }}
            color="inherit"
            onClick={() => setOpenSnackbarAlert(true)}
          >
            Process without Login
          </Button>
          <Snackbar
            message="Coming soon : Under Developement"
            autoHideDuration={1000}
            open={openSnackbarAlert}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <SnackbarAlert variant="filled" severity="warning">
              Coming soon : Under Developement
            </SnackbarAlert>
          </Snackbar>
        </Stack>
      </Stack>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={300}
        flexWrap={"wrap"}
        textAlign={textAlign}
      >
        <Typography variant="h3">{t("welcome")}</Typography>
        <Typography mt={2} variant="body1" width={"70%"}>
          {t("description")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
