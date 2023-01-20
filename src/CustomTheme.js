import { ThemeProvider, createTheme } from "@mui/material/styles";

export function createCustomTheme()
{
  let theme=createTheme(
    {
      

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

        hovered: {
          main: 'deepskyblue',
        },
        
        testing:
        {
          main: '#00FFFF',
        }
      },
      shape: {
        borderRadius: 0,
      },

  });
  return theme;
}

