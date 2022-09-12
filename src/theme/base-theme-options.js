import { alpha, darken } from '@mui/material';

export const baseThemeOptions = {
  typography: {
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
  },
  palette: {
    // action: {
    //   active: neutral[500],
    //   focus: 'rgba(55, 65, 81, 0.12)',
    //   hover: 'rgba(55, 65, 81, 0.04)',
    //   selected: 'rgba(55, 65, 81, 0.08)',
    //   disabledBackground: 'rgba(55, 65, 81, 0.12)',
    //   disabled: 'rgba(55, 65, 81, 0.26)'
    // },
    // background,
    // divider,
    // error,
    // info,
    // mode: 'light',
    // neutral,
    primary: {
      main: '#003F5C',
      // light: '#828DF8',
      // dark: '#3832A0',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#008DA9',
      // light: '#828DF8',
      // dark: '#3832A0',
      contrastText: '#FFFFFF'
    }
    // success,
    // text,
    // warning
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': {
          boxSizing: 'border-box'
        },
        '#nprogress': {
          pointerEvents: 'none'
        },
        '#nprogress .bar': {
          background: '#05bac5',
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000
        },
        '#nprogress .peg': {
          boxShadow: '0 0 15px #ffffff90, 0 0 8px #ffffffc0'
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(darken('#070C27', 0.5), 0.4),
          backdropFilter: 'blur(2px)',

          '&.MuiBackdrop-invisible': {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(2px)'
          }
        }
      }
    }
  }
};
