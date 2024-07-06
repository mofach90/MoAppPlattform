import { createContext, useMemo, useState } from 'react';

export interface VersionType {
  version: 'demo' | 'main';
  toggleVersion: () => void;
}

export const versionContext = createContext<VersionType>({
  version: 'main',
  toggleVersion: () => {},
});

export const VersionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [version, setVersion] = useState<VersionType['version']>('main');
  const contextValue = useMemo(
    () => ({
      toggleVersion: () => {
        setVersion((prev) => (prev === 'demo' ? 'main' : 'demo'));
      },
      version,
    }),
    [version],
  );

  return (
    <versionContext.Provider value={contextValue}>
      {children}
    </versionContext.Provider>
  );
};

