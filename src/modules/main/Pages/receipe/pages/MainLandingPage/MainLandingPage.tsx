import { Box } from '@mui/material';
import IngredientsForm from './components/IngredientsForm/IngredientsForm';

const MainLandingPage = () => {
  return (
    <Box display={'flex'} width={1} height={1} >
      <IngredientsForm />
    </Box>
  );
};

export default MainLandingPage;
