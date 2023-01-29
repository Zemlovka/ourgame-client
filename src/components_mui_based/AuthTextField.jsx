import { TextField } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const AuthTextField = styled((TextField))(
  ({ theme }) =>
({

  width: "100%",
  ".MuiOutlinedInput-root":
  {
    borderRadius: "0px",
  },
  ".MuiOutlinedInput-root:hover":
  {
    borderRadius: "0px",
    backgroundColor: theme.palette.secondary.dark,
  },


  "fieldset":
  {
    border:    "2px solid transparent",
    borderBottom: "2px solid white",
  },
  "input:valid:hover + fieldset":
  {
    border:    "3px solid transparent",
    borderBottom: "3px solid "+theme.palette.interactive.hovered,
  },
  "input:valid:focus + fieldset":
  {
    border:    "3px solid transparent",
    borderBottom: "3px solid "+theme.palette.primary.main,
  },

  "input":
  {
    color: "white",
  },
  "input:valid:hover":
  {
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
  },
  "input:valid:focus":
  {
    backgroundColor: "white",
    color: "black",
  }

}));




export default AuthTextField;