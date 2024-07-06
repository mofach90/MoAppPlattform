import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const WeatherApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Weather App" subtitle="Welcome to your WeatherApp" />
      </Box>
    </Box>
  );
};

export default WeatherApp;
