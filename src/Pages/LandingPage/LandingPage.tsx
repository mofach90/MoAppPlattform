import { Grid } from "@mui/material";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
