import LanguageIcon from "@mui/icons-material/Language";
import {
  Avatar,
  Box,
  Breadcrumbs,
  FormControl,
  InputLabel,
  Link as LinkButton,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItemStyles = {
  color: "black",
  "&.Mui-selected": {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
};

const inputItemStyles = {
  color: "white",
  "&.Mui-focused": {
    transform: "translate(-20px, -14px) scale(0.75) rotate(1turn)",
    color: "inherit",
  },
  "&.MuiInputLabel-shrink": {
    color: "inherit",
    "&:not(.Mui-focused)": {
      transform: "translate(-20px, -14px) scale(0.75)",
    },
  },
};

const selectStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
};

const Footer = () => {
  const [language, setLanguage] = useState<String>("");
  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };
  return (
    <Stack display={"flex"} direction={"row"} alignItems={"center"}>
      <Stack>
        <img
          src="src/assets/logomoPNG.png"
          alt="Logo"
          className="logo-without-animation"
          style={{ width: 100, height: 100 }}
        />
      </Stack>
      <Stack
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"end"}
        // bgcolor={"white"}
      >
        <Breadcrumbs separator={"|"} sx={{ color: "white" }}>
          <Link to="/about" style={{ color: "white", fontSize: "1rem" }}>
            About
          </Link>
          <Link to="/licence" style={{ color: "white", fontSize: "1rem" }}>
            Licence
          </Link>
          <LinkButton
            component="button"
            onClick={() => window.klaro.show()}
            sx={{ fontSize: "1rem" }}
            color={"inherit"}
          >
            Privacy Setting
          </LinkButton>
          <Link
            to="/useragreement"
            style={{ color: "white", fontSize: "1rem" }}
          >
            User Agreement
          </Link>
        </Breadcrumbs>
        <Box
          width={180}
          border={"1px solid"}
          height={40}
          mr={2}
          ml={2}
          borderRadius={10}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <LanguageIcon color="inherit" sx={{ ml: 1 }} />
          <FormControl fullWidth>
            <InputLabel id="Language" sx={inputItemStyles}>
              Language
            </InputLabel>
            <Select
              value={language}
              onChange={handleChange}
              sx={selectStyles}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "rgb(90,255,255)",
                  },
                },
                anchorOrigin: {
                  vertical: 0,
                  horizontal: 210,
                },
              }}
            >
              <MenuItem sx={menuItemStyles} value={"deutsch"}>
                Deutsch
                <Avatar
                  sx={{
                    ml: 2,
                    width: 20,
                    height: 18,
                  }}
                  src="src/assets/Flag_of_Germany.png"
                />
              </MenuItem>
              <MenuItem sx={menuItemStyles} value={"english"}>
                English
                <Avatar
                  sx={{
                    ml: 2.8,
                    width: 20,
                    height: 18,
                  }}
                  src="src/assets/Flag_of_the_United_Kingdom.png"
                />
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Footer;
