import { Grid, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Grid
      container
      height="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={6} textAlign={"center"}>
        <Typography variant="h3">
          Welcome{" "}
          to Your Dashboard
        </Typography>
          <Typography fontFamily={"fantasy"} variant="h2" color={"red"}>
            Habibi
          </Typography>{" "}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
