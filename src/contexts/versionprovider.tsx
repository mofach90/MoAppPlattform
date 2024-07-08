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
  const storedVersion = localStorage.getItem('version') as
    | VersionType['version']
    | null;
  const initVersion: VersionType['version'] =
    storedVersion !== null ? storedVersion : 'main';
  const [version, setVersion] = useState<VersionType['version']>(initVersion);
  const contextValue = useMemo(
    () => ({
      toggleVersion: () => {
        setVersion((prev) => {
          const newVersion = prev === 'demo' ? 'main' : 'demo';
          localStorage.setItem('version', newVersion);
          return newVersion;
        });
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
