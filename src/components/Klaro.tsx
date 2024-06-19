import * as klaro from 'klaro';
import 'klaro/dist/klaro.css';
import { useEffect } from 'react';

interface KlaroProps {
  config: any;
  children?: React.ReactNode;
}

function Klaro({ config, children }: Readonly<KlaroProps>) {
  useEffect(() => {
    window.klaro = klaro;
    window.klaroConfig = config;
    klaro.setup(config);
  }, [config]);

  return <>{children}</>;
}

export default Klaro;
