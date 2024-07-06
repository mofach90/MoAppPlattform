import { useContext } from 'react';
import { versionContext } from '../../../../../../../../contexts/versionprovider';
import DemoLoginService from './components/DemoLoginService';
import { MainLoginService } from './components/MainLoginService';

const LoginButton = () => {
  const { version } = useContext(versionContext);
  return (
    <>{version === 'demo' ? <DemoLoginService /> : <MainLoginService />}</>
  );
};

export default LoginButton;
