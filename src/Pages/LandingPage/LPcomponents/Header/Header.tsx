import { Box, Button, Snackbar, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import setTextAlign from "./../../../../utilities/settextAlignement";
import "./Header.css";
import SnackbarAlert from "./headerComponents/SnackbarAlert";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const textAlign = setTextAlign();
  console.log(textAlign);

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
            onClick={() => setOpen(true)}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{ whiteSpace: "nowrap" }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            Process without Login
          </Button>
          <Snackbar
            message="Coming soon : Under Developement"
            autoHideDuration={1000}
            open={open}
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
