import { Breadcrumbs, Link as LinkButton } from "@mui/material";
import { Link } from "react-router-dom";

function BreadcrumbsComponent() {
  return (
    <Breadcrumbs separator={"|"} sx={{ color: "white", mr: 2 }}>
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
      <Link to="/useragreement" style={{ color: "white", fontSize: "1rem" }}>
        User Agreement
      </Link>
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;
