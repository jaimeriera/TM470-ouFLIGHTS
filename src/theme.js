import { createTheme } from '@mui/material/styles';

const theme = createTheme ({
    palette: {
      mode: 'light',
      primary: {
        main: '#40578f',
        contrastText: '#f5f6f6',
      },
      secondary: {
        main: '#38b4cb',
        contrastText: '#1e1e1e',
      },
      background: {
        default: '#ffffff',
        paper: '#cbd7f5',
      },
      text: {
        secondary: '#1e1e1e',
        disabled: '#756f86',
        hint: '#756f86',
        primary: '#1e1e1e',
      },
      success: {
        main: '#78e08f',
        contrastText: '#1e1e1e',
      },
      info: {
        main: '#40578f',
        contrastText: '#f5f6f6',
      },
      warning: {
        main: '#fe9e46',
        contrastText: '#1e1e1e',
      },
      error: {
        main: '#ee3054',
        contrastText: '#f5f6f6',
      },
      divider: '#40578f',
    },
  });

export default theme;
