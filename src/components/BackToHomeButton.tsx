import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

function BackToHomeButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/")}
      variant="outlined"
      startIcon={<ArrowBackIosIcon />}
      sx={{ color: "rgb(55, 255, 255)" }}
    >
      Back to Home
    </Button>
  );
}

export default BackToHomeButton;
