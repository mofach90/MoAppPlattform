import { Box } from '@mui/material';
import CarouselComponent from './components/Caroussel/Carousel';
import FaQ from './components/FAQ/FAQ';
import AppDescription from './components/AppDescription/AppDEscription';

const Body = () => {
  return (
    <Box width={'100%'} height={'100%'} padding={4}>
      <AppDescription />
      <CarouselComponent />
      <FaQ />
    </Box>
  );
};

export default Body;
