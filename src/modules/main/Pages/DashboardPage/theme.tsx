import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

interface colorLibrary {
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  primary: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  greenAccent: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  redAccent: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  blueAccent: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}
export type Mode = 'dark' | 'light';

enum fontFamily {
  primaryFont = 'Source Sans Pro',
  fallbackFont = 'sans-serif',
}

// color design tokens - color library
export const tokens = (mode: Mode): colorLibrary => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
        greenAccent: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        redAccent: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
        blueAccent: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0',
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
        greenAccent: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        redAccent: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
        blueAccent: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
      }),
});

// mui theme setting

interface themeSettingInterface {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
    background: {
      default: string;
    };
    mode: Mode;
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontFamily: string;
      fontSize: number;
    };
    h2: {
      fontFamily: string;
      fontSize: number;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
    };
    h4: {
      fontFamily: string;
      fontSize: number;
    };
    h5: {
      fontFamily: string;
      fontSize: number;
    };
    h6: {
      fontFamily: string;
      fontSize: number;
    };
  };
}

const themeSetting = (mode: Mode) => {
  const colors = tokens(mode);
  return {
    components: {
      MuiCssBaseline: {
        ...(mode === 'dark'
          ? {
              styleOverrides: `
          body {
            background: linear-gradient(to right, rgb(0, 0, 0), #010d45);
          }
          `,
            }
          : {
              styleOverrides: `
          body {
            background: linear-gradient(to right, rgb(133, 133, 133), #e0e0e0);
          }
          `,
            }),
      },
    },
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
    typography: {
      fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
      fontSize: 12,
      h1: {
        fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: [fontFamily.primaryFont, fontFamily.fallbackFont].join(','),
        fontSize: 14,
      },
    },
  };
};

// create the context for color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
