import { TextField } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const AuthTextField = styled((TextField))(
  ({ theme }) =>
({

  minWidth: "60px",
  width: "100%",
  color: "black",

  "input":
  {
    backgroundColor: theme.palette.secondary.main,
    border: "none",
    borderBottom: "2px solid white",
  },
  "fieldset":
  {
    border: "none",
  },


  "input:valid:focus + fieldset":
  {
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "10px",
  },
  "input:valid:focus ":
  {
    border: "none",
  },

 


}));




export default AuthTextField;