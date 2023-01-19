import { ThemeProvider, createTheme } from '@material-ui/core/styles/createMuiTheme';

export const theme=createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6832E3',
    },
    secondary: {
      main: '#2E053D',
    },
    background: {
      default: '#2E053D',
    },
  },
  shape: {
    borderRadius: 10,
  },
});