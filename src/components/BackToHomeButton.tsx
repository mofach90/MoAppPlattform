import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

function BackToHomeButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")} variant="outlined">
      Back to Home
    </Button>
  );
}

export default BackToHomeButton;
