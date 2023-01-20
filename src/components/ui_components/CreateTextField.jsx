import { TextField } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const CreateTextField = styled((TextField))(
  ({ theme }) =>
({

  minWidth: "60px",
  width: "100%",
  margin: "8px 0",


  "input":
  {
   
    border: "none",
    borderBottom: "2px solid white",
    
 
  },


  "input:valid:focus + fieldset":
  {
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "10px",
  },
 


  ".MuiFormHelperText-root, .MuiFormLabel-root":
  {
    color: "white",
  }
 


}));




export default CreateTextField;