import { Box } from "@mui/material";
import CarouselComponent from "./bodyComponents/Carousel";
import FaQ from "./bodyComponents/FAQ";

const Body = () => {
  return (
    <Box width={"100%"} height={"100%"} padding={4}>
      <CarouselComponent />
      <FaQ />
    </Box>
  );
};

export default Body;
