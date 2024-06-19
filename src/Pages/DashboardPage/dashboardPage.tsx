import { Button, Grid, Typography } from "@mui/material";
import { LogoutHandler } from "../../utilities/logoutHandler";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate()
  return (
    <Grid container height="100vh">
      <Grid container alignItems={"center"} justifyContent={"end"} p={2}>
        <Grid item>
          <Button variant="contained" onClick={()=>{LogoutHandler(navigate)}}>
            LOGOUT
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        height={"90%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={6} textAlign={"center"}>
          <Typography variant="h3">Welcome to Your Dashboard</Typography>
          <Typography fontFamily={"fantasy"} variant="h2" color={"red"}>
            Habibi
          </Typography>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
