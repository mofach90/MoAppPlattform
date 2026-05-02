import { Stack } from '@mui/material';
import BreadcrumbsComponent from './components/BreadcrumbsComponent.tsx';
import LanguageButton from './components/LanguageButton.tsx';

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
