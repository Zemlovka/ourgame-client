import { TextField } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const CreateTextField = styled((TextField))(
  ({ theme,error, ...props }) =>
({

  width: "100%",
  margin: "8px 0",

  // Now possible to style normally, but no animations...
  ".MuiInput-root::before,.MuiInput-root::after":
  {
    border:"none",
  },
 
   
 
  



  ...(!error &&
    {
      ".MuiInput-root":
      {
       
        borderBottom: "2px solid "+ theme.palette.primary.main,
      },
      "input":
      {
        color: theme.palette.primary.main,
      },
      ":hover input":
      {
        color: theme.palette.interactive.hovered,
      },
      ":hover .MuiInput-root":
      {
        borderBottom: "2px solid "+ theme.palette.interactive.hovered,
      },
      "label":
      {
        color:theme.palette.primary.main,
      },
      ":hover label":
      {
        color:theme.palette.interactive.hovered,
        fontWeight: "bold",
      },
      ".MuiFormHelperText-root":
      {
        color:theme.palette.primary.main,
        marginLeft: "auto",
      },
      ":hover .MuiFormHelperText-root":
      {
        color:theme.palette.interactive.hovered,
      }
    }),

  ...(error &&
    {
      ".MuiInput-root":
      {
        borderBottom: "2px solid "+ theme.palette.interactive.active,
      },
      "input":
      {
        color: theme.palette.interactive.active,
      },
      ":hover input":
      {
        color: theme.palette.interactive.active,
      },
      ":hover .MuiInput-root":
      {
        borderBottom: "2px solid "+ theme.palette.interactive.active,
      },
      "label":
      {
        color:theme.palette.interactive.active,
      },
      ":hover label":
      {
        color:theme.palette.interactive.active,
        fontWeight: "bold",
      },
      ".MuiFormHelperText-root":
      {
        color:theme.palette.interactive.active,
        marginLeft: "auto",
      },
      ":hover .MuiFormHelperText-root":
      {
        color:theme.palette.interactive.active,
        
      }
    }),










}));




export default CreateTextField;