import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../global/theme/theme';
export interface HeaderTypes {
  title: string;
  subtitle: string;
  imgPath?: string;
}

const Header = ({ title, subtitle, imgPath }: HeaderTypes) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" display={'flex'} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
      <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
      </Box>

      <img alt='To-do app image' src={imgPath} width={300} height={90}></img>
    </Box>
  );
};

export default Header;
