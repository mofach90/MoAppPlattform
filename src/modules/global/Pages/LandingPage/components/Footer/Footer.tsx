import { Stack } from '@mui/material';
import StackLogo from './components/StackLogo';
import StackUtilityBar from './components/StackUtilityBar/StackUtilityBar';

const Footer = () => {
  return (
    <Stack display={'flex'} direction={'row'} alignItems={'center'}>
      <StackLogo />
      <StackUtilityBar />
    </Stack>
  );
};

export default Footer;
