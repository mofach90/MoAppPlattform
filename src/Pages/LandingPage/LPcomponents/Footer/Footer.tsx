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
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
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
          overflow={"hidden"}
        >
          <LanguageIcon sx={{ ml: 1 }} />
          <FormControl
            fullWidth
            sx={{
              "&.MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <InputLabel
              id="Language"
              sx={{ color: "#ffffff", bgcolor: "dark" }}
            >
              Language
            </InputLabel>
            <Select
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "white",
                },
              }}
            >
              <MenuItem
                sx={{
                  
                  color: "black",
                  "&.MuiMenuItem-root": {
                    backgroundColor: "green",
                    width: 120,
                  },
                  "&.Mui-selected": {
                    backgroundColor: "blue",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "black",
                  },
                }}
                value={"deutsch"}
              >
                Deutsch
                <Avatar
                  sx={{
                    ml: 2,
                    width: 20,
                    height: 18,
                  }}
                  src="src/assets/Flag_of_Germany.png"
                />{" "}
              </MenuItem>
              <MenuItem
                sx={{
                  color: "black",
                  "&.MuiMenuItem-root": {
                    backgroundColor: "green",
                    width: 180,
                  },
                  "&.Mui-selected": {
                    backgroundColor: "blue",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "black",
                  },
                }}
                value={"english"}
              >
                English
                <Avatar
                  sx={{
                    ml: 2,
                    width: 20,
                    height: 18,
                  }}
                  src="src/assets/Flag_of_the_United_Kingdom.png"
                />{" "}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Footer;

{
  /* <Box display={"flex"} flexDirection={"column"}>
<Chip
  avatar={<Avatar src="src/assets/Flag_of_Germany.png" />}
  label="Deutsch"
  sx={{ width: 100, bgcolor: "yellow" }}
/>
<Chip
  avatar={
    <Avatar src="src/assets/Flag_of_the_United_Kingdom.png" />
  }
  label="English"
  sx={{ width: 100, bgcolor: "green" }}
/>
</Box> */
}
