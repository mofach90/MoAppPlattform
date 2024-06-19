import { Stack } from '@mui/material';
import BreadcrumbsComponent from './BreadcrumbsComponent';
import LanguageButton from './LanguageButton.tsx';

function StackUtilityBar() {
  return (
    <Stack
      width={'100%'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'end'}
    >
      <BreadcrumbsComponent />
      <LanguageButton />
    </Stack>
  );
}

export default StackUtilityBar;
