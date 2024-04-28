import { Box, Grid } from "@mui/material";
import Body from "./LPcomponents/Body/Body";
import Footer from "./LPcomponents/Footer/Footer";
import Header from "./LPcomponents/Header/Header";

const LandingPage = () => {
  return (
    <Box
      minHeight={"100hv"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      sx={{overflow:"hidden"}}

    >
      <Grid container minWidth={700} display={"flex"} flexDirection={"column"} maxWidth={1200}>
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
    </Box>
  );
};

export default LandingPage;
