import { Box } from "@mui/material";
import CarouselComponent from "./bodyComponents/Carousel";
import FAQ from "./bodyComponents/FAQ";

const Body = () => {
  return (
    <Box width={"100%"} height={"100%"} padding={4}>
      <CarouselComponent />
      <FAQ />
    </Box>
  );
};

export default Body;
