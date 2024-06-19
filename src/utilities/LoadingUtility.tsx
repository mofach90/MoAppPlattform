import Box from '@mui/material/Box';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function CircularProgressWithLabel(
  props: CircularProgressProps,
) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress size={100} thickness={3} color="inherit" {...props} />
      </Box>
      <Typography mt={5} variant="h6" component="div" color="inherit">
        Loading ...
      </Typography>
    </Box>
  );
}
