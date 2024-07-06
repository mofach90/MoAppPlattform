import { ButtonProps } from '@mui/material';
import { useContext } from 'react';
import { versionContext } from '../../../../../../../../../contexts/versionprovider';

export function useGoToVersionButton() {
  const { toggleVersion, version } = useContext(versionContext);
  const buttonConfig: ButtonProps = {
    variant: 'outlined',
    onClick: toggleVersion,
    sx: { whiteSpace: 'nowrap' },
    color: 'inherit',
  };
  return { buttonConfig, version };
}
