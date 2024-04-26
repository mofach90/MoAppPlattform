import { Grid } from "@mui/material";
import Body from "./LPcomponents/Body/Body";
import Footer from "./LPcomponents/Footer/Footer";
import Header from "./LPcomponents/Header/Header";

const LandingPage = () => {
  return (
    <Grid
      container
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Body />
      </Grid>
      <Grid item mt={"auto"}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
