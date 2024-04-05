import { Grid } from "@mui/material";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const LandingPage = () => {
  return (
    <Grid container display={"flex"} flexDirection={"column"} bgcolor={"orange"}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Body />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
