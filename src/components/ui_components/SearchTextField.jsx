import { TextField } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const SearchTextField = styled((TextField))(
  ({ theme }) =>
({

  minWidth: "120px",
  width: "100%",
 
  
  /*notchedOutline*/
  

  '& input:valid + fieldset': {
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: "2px",
    borderRadius: "10px",
  
  },
  '& input:valid:focus + fieldset': {
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: "4px",
 
  },

  '& input:valid:hover + fieldset': {
    borderStyle: "solid",
    borderColor: theme.palette.hovered.main,
    borderWidth: "2px",
    
  },
  



  'label': 
  {
    color: theme.palette.primary.main,
  },
  ':hover > label': 
  {
    color: theme.palette.hovered.main,
  },
  '*> ::placeholder':
  {
  
  }



}));




export default SearchTextField;