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
          dark: "#23032E",
          darker: "#191D2F", 
        },
        background: {
          default: '#2E053D',
        },
        button:
        {
          main:"darkmagenta",
          hovered:"dodgerblue",
          pressed:"crimson",
          transparent: "transparent",
        },
        interactive:
        {
          main:"darkmagenta",
          hovered:"dodgerblue",
          pressed:"crimson",
          active:"crimson",
          focused:"crimson",
          transparent: "transparent",
        },
        text:
        {
          main: "white",
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

