import { Slider } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const CustomSlider= styled((Slider))(
  ({ theme , ...props 
     }) =>
({

  
    color: theme.palette.text.main,
    width: props.width? props.width : "100%",
    // Unfilled part
    ".MuiSlider-rail":
    {
        backgroundColor:  "black"
    },
    // Filled part
    ".MuiSlider-track":
    {
        backgroundColor:  theme.palette.primary.main,
        border: "none",
    },
    // Sections' marks
    ".MuiSlider-mark":
    {
        backgroundColor: "white",
        width: "4px",
        height: "8px",
    },
    // Thumbler
    ".MuiSlider-thumb":
    {
        width: "16px",
        height: "16px",
        backgroundColor: theme.palette.primary.main,
    },
    // Pressed
    ".MuiSlider-thumb.Mui-active":
    {
        backgroundColor:  theme.palette.interactive.active,
        boxShadow: "0px 0px 0px 8px rgba(255, 0, 0, 0.20)",
    },
    // Hovered
    ".MuiSlider-thumb:hover:not(.Mui-active)":
    {
        backgroundColor:  theme.palette.interactive.hovered,
        boxShadow: "0px 0px 0px 8px rgba(0, 0, 255, 0.20)",
    },
    // InfoBox
    ".MuiSlider-valueLabel":
    {
        backgroundColor:  theme.palette.interactive.hovered,
    },
    ".Mui-active .MuiSlider-valueLabel":
    {
        backgroundColor:  theme.palette.interactive.active,
    }




}));




export default CustomSlider;