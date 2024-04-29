import { Breadcrumbs, Link as LinkButton, Stack } from "@mui/material";
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
      </Stack>
    </Stack>
  );
};

export default Footer;
