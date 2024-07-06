import { useContext } from 'react';
import { versionContext } from '../../../../../../contexts/versionprovider';
import DemoLoginService from './DemoLoginService';
import { MainLoginService } from './MainLoginService';

const LoginButton = () => {
  const { version } = useContext(versionContext);
  return (
    <>{version === 'demo' ? <DemoLoginService /> : <MainLoginService />}</>
  );
};

export default LoginButton;
